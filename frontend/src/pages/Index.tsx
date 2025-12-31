import React from 'react';
import Header from '@/components/Header';
import VideoContainer from '@/components/VideoContainer';
import StatusDisplay from '@/components/StatusDisplay';
import ControlButtons from '@/components/ControlButtons';
import { useVideoChat } from '@/hooks/useVideoChat';

const Index: React.FC = () => {
  const {
    status,
    errorMessage,
    isStarted,
    isConnected,
    hasLocalStream,
    hasRemoteStream,
    localVideoRef,
    remoteVideoRef,
    startCall,
    endCall,
    nextStranger,
  } = useVideoChat();

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <Header />

      {/* Main Content */}
      <main className="flex-1 container max-w-6xl mx-auto px-4 pb-8 flex flex-col items-center justify-center gap-6">
        {/* Video Grid */}
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6">
          {/* Local Video */}
          <VideoContainer
            id="localVideo"
            label="You"
            isLocal
            videoRef={localVideoRef}
            hasStream={hasLocalStream}
          />

          {/* Remote Video */}
          <VideoContainer
            id="remoteVideo"
            label="Stranger"
            videoRef={remoteVideoRef}
            hasStream={hasRemoteStream}
          />
        </div>

        {/* Status Display */}
        <StatusDisplay status={status} errorMessage={errorMessage} />

        {/* Control Buttons */}
        <ControlButtons
          onStart={startCall}
          onNext={nextStranger}
          onStop={endCall}
          isStarted={isStarted}
          isConnected={isConnected}
          isLoading={status === 'requesting-camera'}
        />

        {/* Info Footer */}
        <footer className="mt-auto pt-8 text-center">
          <p className="text-xs text-muted-foreground/60 max-w-md mx-auto leading-relaxed">
            An Omegle like Software where you can video chat with random strangers anonymously. No
            registration required. Built with React, TypeScript, and WebRTC.
          </p>
        </footer>
      </main>
    </div>
  );
};

export default Index;
