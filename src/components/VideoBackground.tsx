import React, { useEffect, useState, useRef } from 'react';

export default function VideoBackground() {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Force video play on mobile devices
    const playVideo = () => {
      video.play().catch(() => {
        // If autoplay fails, try playing on user interaction
        document.addEventListener('touchstart', () => {
          video.play().catch(() => {
            console.log('Video autoplay not supported');
          });
        }, { once: true });
      });
    };

    playVideo();

    // Ensure video stays playing after losing focus
    document.addEventListener('visibilitychange', () => {
      if (document.visibilityState === 'visible') {
        playVideo();
      }
    });
  }, []);

  const handleVideoLoad = () => {
    setIsVideoLoaded(true);
  };

  return (
    <div className="absolute inset-0 z-0 bg-cosmic-900">
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
          isVideoLoaded ? 'opacity-100' : 'opacity-0'
        }`}
        onLoadedData={handleVideoLoad}
        poster="/images/hero-mobile.jpg"
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
