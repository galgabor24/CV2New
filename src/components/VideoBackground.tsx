import React, { useEffect, useState } from 'react';
import { useMediaQuery } from '../hooks/useMediaQuery';

export default function VideoBackground() {
  const isMobile = useMediaQuery('(max-width: 768px)');
  const [isVideoSupported, setIsVideoSupported] = useState(true);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  useEffect(() => {
    // Check if video playback is supported
    const video = document.createElement('video');
    setIsVideoSupported(
      video.canPlayType && 
      video.canPlayType('video/mp4').replace(/no/, '')
    );
  }, []);

  const handleVideoLoad = () => {
    setIsVideoLoaded(true);
  };

  // Show static image for mobile or unsupported browsers
  if (isMobile || !isVideoSupported) {
    return (
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-500"
          style={{ 
            backgroundImage: 'url("https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80")',
            opacity: 1
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/80 to-slate-900/40" />
      </div>
    );
  }

  return (
    <div className="absolute inset-0 z-0">
      {/* Fallback image shown until video loads */}
      <div 
        className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-500 ${
          isVideoLoaded ? 'opacity-0' : 'opacity-100'
        }`}
        style={{ 
          backgroundImage: 'url("https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80")'
        }}
      />
      
      <video
        autoPlay
        loop
        muted
        playsInline
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
          isVideoLoaded ? 'opacity-100' : 'opacity-0'
        }`}
        onLoadedData={handleVideoLoad}
        poster="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80"
      >
        <source 
          src="/videos/hero-bg.mp4" 
          type="video/mp4"
        />
      </video>

      <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/80 to-slate-900/40" />
    </div>
  );
}
