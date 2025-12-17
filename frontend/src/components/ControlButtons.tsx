import React from 'react';
import { Play, SkipForward, PhoneOff } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ControlButtonsProps {
  onStart: () => void;
  onNext: () => void;
  onStop: () => void;
  isStarted: boolean;
  isConnected: boolean;
  isLoading: boolean;
}

const ControlButtons: React.FC<ControlButtonsProps> = ({
  onStart,
  onNext,
  onStop,
  isStarted,
  isConnected,
  isLoading,
}) => {
  return (
    <div className="flex flex-wrap items-center justify-center gap-4 animate-fade-in">
      {!isStarted ? (
        <Button
          id="startBtn"
          variant="primary"
          size="xl"
          onClick={onStart}
          disabled={isLoading}
          className="min-w-[160px]"
        >
          <Play className="w-5 h-5" />
          Start
        </Button>
      ) : (
        <>
          <Button
            id="nextBtn"
            variant="control"
            size="lg"
            onClick={onNext}
            disabled={isLoading}
            className="min-w-[140px]"
          >
            <SkipForward className="w-5 h-5" />
            Next
          </Button>
          
          <Button
            variant="danger"
            size="lg"
            onClick={onStop}
            disabled={isLoading}
            className="min-w-[140px]"
          >
            <PhoneOff className="w-5 h-5" />
            Stop
          </Button>
        </>
      )}
    </div>
  );
};

export default ControlButtons;
