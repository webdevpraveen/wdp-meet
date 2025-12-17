import React from 'react';
import { User, Video } from 'lucide-react';

interface VideoContainerProps {
  id: string;
  label: string;
  isLocal?: boolean;
  videoRef: React.RefObject<HTMLVideoElement>;
  hasStream: boolean;
}

const VideoContainer: React.FC<VideoContainerProps> = ({
  id,
  label,
  isLocal = false,
  videoRef,
  hasStream,
}) => {
  return (
    <div className="video-container aspect-video w-full max-w-2xl animate-scale-in">
      {/* Video element */}
      <video
        ref={videoRef}
        id={id}
        autoPlay
        playsInline
        className="w-full h-full object-cover rounded-xl"
      />
      
      {/* Placeholder when no stream */}
      {!hasStream && (
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
          <div className="w-20 h-20 rounded-full bg-muted/50 flex items-center justify-center">
            {isLocal ? (
              <Video className="w-8 h-8 text-muted-foreground" />
            ) : (
              <User className="w-8 h-8 text-muted-foreground" />
            )}
          </div>
          <span className="text-muted-foreground text-sm font-medium">
            {isLocal ? 'Camera preview' : 'Waiting for stranger...'}
          </span>
        </div>
      )}
      
      {/* Label badge */}
      <div className="absolute bottom-3 left-3 glass-panel px-3 py-1.5 rounded-md">
        <span className="text-xs font-medium text-foreground/80">{label}</span>
      </div>
      
      {/* Live indicator for local video */}
      {isLocal && hasStream && (
        <div className="absolute top-3 right-3 flex items-center gap-2 glass-panel px-3 py-1.5 rounded-md">
          <span className="w-2 h-2 bg-success rounded-full animate-pulse-subtle" />
          <span className="text-xs font-medium text-foreground/80">Live</span>
        </div>
      )}
    </div>
  );
};

export default VideoContainer;
