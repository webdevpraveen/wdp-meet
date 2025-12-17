# 🎥 WDP Meet - Anonymous Stranger Video Chat

WDP Meet is an **Omegle-like anonymous video chat platform** that allows users to instantly connect with random strangers via real-time video and audio - **without login, without accounts, and without storing any data**.

Built with modern web technologies focusing on **privacy, performance, and scalability**.

---
## 📸 Preview 
<img width="601" height="750" alt="image" src="https://github.com/user-attachments/assets/f874efc1-cee0-42e2-bd38-46b824bc3900" />

https://wdpmeet.vercel.app/

---
## ✨ Features

- 🔒 **100% Anonymous**
  - No login
  - No signup
  - No database
  - No history stored

- 🎥 **Real-time Video & Audio**
  - Powered by WebRTC
  - Peer-to-peer connection

- 🔔 **Audio Alerts**
  - Sound on stranger join
  - Sound on stranger leave

- 📳 **Mobile Vibration Support**
  - Vibration alert on join / leave (Android supported)

- 🔄 **Next Stranger**
  - Instantly skip to the next random user

- 📱 **Fully Responsive**
  - Works on mobile, tablet, and desktop
  - Optimized for mobile browsers

- ⚡ **Scalable Architecture**
  - Designed to support 100+ concurrent users
  - Stateless signaling server

---

## 🧠 Tech Stack

### Frontend
- ⚛️ React + TypeScript
- ⚡ Vite
- 🎨 Tailwind CSS
- 🌐 WebRTC (RTCPeerConnection)
- 🔊 HTML5 Audio API
- 📳 Vibration API

### Backend
- 🟢 Node.js
- 🔌 Socket.IO
- 📡 WebRTC signaling server
- 🚀 Deployed on Render

### Deployment
- 🌍 Frontend → **Vercel**
- 🖥️ Backend → **Render**

---

## 📂 Project Structure
```bash
WDP-MEET/
├── frontend/
│ ├── src/
│ │ ├── components/
│ │ ├── hooks/
│ │ │ └── useVideoChat.ts
│ │ ├── pages/
│ │ └── main.tsx
│ ├── assets/
│ │ ├── join.mp3
│ │ └── leave.mp3
│ └── index.html
│
├── backend/
│ ├── server.js
│ ├── package.json
│ └── node_modules/
│
└── README.md
```

---

## 🔐 Privacy & Security

❌ No database

❌ No user accounts

❌ No storage

✔️ WebRTC peer-to-peer media flow

✔️ Backend used only for signaling

✔️ Your conversations exist only during the call.

---

## 🧪 Known Browser Notes

👉 Mobile browsers require user interaction to unlock audio

👉 iOS does not support vibration API (expected behavior)

🌐Works best on: Chrome , Brave, Edge, Mobile Chrome

---

## 🛠️ Future Improvements

🔇 Mute / unmute sound toggle

🧭 Reconnect animation

🛡️ Abuse reporting & moderation

🌍 Geo-based matching

🎛️ Audio & vibration settings

---


## 🧑‍💻 Contributing
Contributions are welcome.  
Create an issue or submit a pull request to improve the project.

---

## 📄 [License](https://github.com/webdevpraveen/wdp-meet?tab=License-1-ov-file)
  This project is licensed under **CC BY-NC-ND 4.0**.  
Copying or modifying this code outside GitHub is not permitted.

---

## ⭐ Support
If you find this helpful, consider giving the repo a ⭐.
