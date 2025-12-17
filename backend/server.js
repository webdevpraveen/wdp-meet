const express = require("express");
const http = require("http");
const { Server } = require("socket.io");

const app = express();
const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: "*",
  },
});

// In-memory anonymous state
let waitingUser = null;              // socket.id
const pairs = new Map();             // socket.id -> partner socket.id

io.on("connection", (socket) => {
  console.log("Connected:", socket.id);

  // User clicks Start
  socket.on("start", () => {
    if (waitingUser && waitingUser !== socket.id) {
      const partner = waitingUser;
      waitingUser = null;

      pairs.set(socket.id, partner);
      pairs.set(partner, socket.id);

      io.to(socket.id).emit("matched", { initiator: true });
      io.to(partner).emit("matched", { initiator: false });

      console.log("Paired:", socket.id, partner);
    } else {
      waitingUser = socket.id;
      socket.emit("waiting");
      console.log("Waiting:", socket.id);
    }
  });

  // WebRTC signaling
  socket.on("offer", (offer) => {
    const partner = pairs.get(socket.id);
    if (partner) io.to(partner).emit("offer", offer);
  });

  socket.on("answer", (answer) => {
    const partner = pairs.get(socket.id);
    if (partner) io.to(partner).emit("answer", answer);
  });

  socket.on("ice-candidate", (candidate) => {
    const partner = pairs.get(socket.id);
    if (partner) io.to(partner).emit("ice-candidate", candidate);
  });

  // Next / Skip
  socket.on("next", () => {
    cleanup(socket.id);
    socket.emit("reset");
  });

  socket.on("disconnect", () => {
    cleanup(socket.id);
    console.log("Disconnected:", socket.id);
  });

  function cleanup(id) {
    if (waitingUser === id) waitingUser = null;

    const partner = pairs.get(id);
    if (partner) {
      pairs.delete(partner);
      io.to(partner).emit("partner-left");
    }
    pairs.delete(id);
  }
});

server.listen(3000, () => {
  console.log("Signaling server running on http://localhost:3000");
});
