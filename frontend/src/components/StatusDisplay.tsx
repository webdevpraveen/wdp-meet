import React from 'react';
import { Loader2, CheckCircle, AlertCircle, Radio, Search } from 'lucide-react';

export type ConnectionStatus = 
  | 'idle'
  | 'requesting-camera'
  | 'searching'
  | 'connected'
  | 'error';

interface StatusDisplayProps {
  status: ConnectionStatus;
  errorMessage?: string;
}

const statusConfig: Record<ConnectionStatus, {
  icon: React.ReactNode;
  text: string;
  className: string;
}> = {
  idle: {
    icon: <Radio className="w-4 h-4" />,
    text: 'Idle',
    className: 'text-muted-foreground',
  },
  'requesting-camera': {
    icon: <Loader2 className="w-4 h-4 animate-spin" />,
    text: 'Requesting camera...',
    className: 'text-warning',
  },
  searching: {
    icon: <Search className="w-4 h-4 animate-pulse-subtle" />,
    text: 'Searching for a stranger...',
    className: 'text-primary',
  },
  connected: {
    icon: <CheckCircle className="w-4 h-4" />,
    text: 'Connected',
    className: 'text-success',
  },
  error: {
    icon: <AlertCircle className="w-4 h-4" />,
    text: 'Error',
    className: 'text-destructive',
  },
};

const StatusDisplay: React.FC<StatusDisplayProps> = ({ status, errorMessage }) => {
  const config = statusConfig[status];
  const displayText = status === 'error' && errorMessage ? errorMessage : config.text;

  return (
    <div 
      id="statusText"
      className={`status-text flex items-center justify-center gap-2 py-3 ${config.className} animate-fade-in`}
    >
      {config.icon}
      <span>{displayText}</span>
    </div>
  );
};

export default StatusDisplay;
