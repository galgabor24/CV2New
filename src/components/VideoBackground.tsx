import React from 'react';
import { useMediaQuery } from '../hooks/useMediaQuery';

export default function VideoBackground() {
  const isMobile = useMediaQuery('(max-width: 768px)');

  return (
    <div className="absolute inset-0 z-0">
      {isMobile ? (
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: 'url("/images/hero-mobile.jpg")' }}
        />
      ) : (
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          poster="/images/hero-mobile.jpg"
        >
          <source src="/videos/hero-bg.mp4" type="video/mp4" />
        </video>
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/80 to-slate-900/40" />
    </div>
  );
}