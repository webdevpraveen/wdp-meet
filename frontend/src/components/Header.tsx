import React from 'react';
import { Video } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="w-full py-6 px-4 animate-fade-in">
      <div className="container max-w-6xl mx-auto flex flex-col items-center gap-2">
        {/* Logo and Site Name */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/30 flex items-center justify-center glow-effect">
            <Video className="w-5 h-5 text-primary" />
          </div>
          <h1 className="text-2xl md:text-3xl font-bold tracking-tight text-foreground">
            WDP Video Meet
          </h1>
        </div>
        
        {/* Tagline */}
        <p className="text-sm text-muted-foreground font-mono tracking-wider">
          Anonymous • No Login • No Storage
        </p>
      </div>
    </header>
  );
};

export default Header;
