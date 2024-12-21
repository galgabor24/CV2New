import React from 'react';
import SocialLinks from './SocialLinks';
import ScrollIndicator from './ScrollIndicator';
import { FileDown } from 'lucide-react';

interface HeaderProps {
  scrollProgress: number;
}

export default function Header({ scrollProgress }: HeaderProps) {
  const handleDownload = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const link = e.currentTarget;
    const fileName = link.href.split('/').pop();
    link.download = fileName || 'GaborGal_CV.pdf';
  };

  const headerOpacity = Math.min(scrollProgress * 1.5, 1);
  const heroOpacity = Math.max(1 - scrollProgress * 1.5, 0);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out ${
        scrollProgress > 0.1 
          ? 'bg-cosmic-900/95 backdrop-blur-sm shadow-lg shadow-cosmic-900/20' 
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="relative">
          <div 
            className="h-16"
            style={{ 
              opacity: headerOpacity,
              transition: 'opacity 600ms ease-in-out'
            }}
          >
            <CompactHeader handleDownload={handleDownload} />
          </div>

          <div 
            className="absolute top-0 left-0 w-full"
            style={{ 
              opacity: heroOpacity,
              pointerEvents: heroOpacity > 0 ? 'auto' : 'none',
              transform: `translateY(${scrollProgress * 50}px)`,
              transition: 'opacity 600ms ease-in-out, transform 600ms ease-in-out'
            }}
          >
            <div className="h-[90vh] min-h-[700px]">
              <HeroContent handleDownload={handleDownload} />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

interface HeaderContentProps {
  handleDownload: (e: React.MouseEvent<HTMLAnchorElement>) => void;
}

function CompactHeader({ handleDownload }: HeaderContentProps) {
  return (
    <div className="flex items-center justify-between h-full">
      <div className="flex items-center">
        <ProfileImage size="small" />
        <h1 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-nova-400 to-cosmic-300 bg-clip-text text-transparent ml-4">
          Gabor Gal
        </h1>
      </div>
      <div className="flex items-center gap-2 sm:gap-4">
        <SocialLinks variant="compact" />
        <a
          href="/cv/GaborGal_CV.pdf"
          onClick={handleDownload}
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-nova-400/10 hover:bg-nova-400/20 text-nova-400 hover:text-nova-300 transition-all duration-300 group text-sm"
        >
          <FileDown className="w-4 h-4 transition-transform group-hover:-translate-y-0.5" />
          <span className="font-medium hidden sm:inline">CV</span>
        </a>
      </div>
    </div>
  );
}

function HeroContent({ handleDownload }: HeaderContentProps) {
  return (
    <div className="h-full flex items-center justify-center">
      <div className="max-w-4xl w-full space-y-12 text-center mt-[-10vh]">
        <div className="flex flex-col items-center space-y-8">
          <ProfileImage size="large" />
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-cosmic-900/80 via-transparent to-cosmic-900/80 blur-xl" />
            <div className="relative">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
                <span className="bg-gradient-to-r from-nova-400 via-cosmic-300 to-nova-300 bg-clip-text text-transparent drop-shadow-[0_2px_2px_rgba(0,0,0,0.5)]">
                  Gabor Gal
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-cosmic-100 mt-4 font-medium drop-shadow-[0_1px_1px_rgba(0,0,0,0.5)]">
                System Administrator
              </p>
              <p className="text-base md:text-lg text-cosmic-100/80 mt-2 drop-shadow-[0_1px_1px_rgba(0,0,0,0.5)]">
                London, United Kingdom
              </p>
            </div>
          </div>
          <div className="w-full max-w-lg mx-auto space-y-2 relative">
            <div className="absolute inset-0 bg-cosmic-900/40 blur-xl -z-10" />
            <div className="typing-animation-1 text-cosmic-100 text-lg drop-shadow-[0_1px_1px_rgba(0,0,0,0.5)]">
              I'm a London based SysAdmin.
            </div>
            <div className="typing-animation-2 text-cosmic-100 text-lg drop-shadow-[0_1px_1px_rgba(0,0,0,0.5)]">
              Let's start scrolling and learn more about me.
            </div>
          </div>
          <div className="w-full max-w-xs mx-auto">
            <SocialLinks variant="expanded" />
          </div>
          <div className="space-y-6">
            <a
              href="/cv/GaborGal_CV.pdf"
              onClick={handleDownload}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-nova-400/10 hover:bg-nova-400/20 text-nova-400 hover:text-nova-300 transition-all duration-300 group relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-nova-400/20 to-cosmic-300/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
              <FileDown className="relative w-5 h-5 transition-transform group-hover:-translate-y-0.5" />
              <span className="relative text-base font-medium">Download CV</span>
            </a>
            <div className="flex justify-center">
              <ScrollIndicator targetId="about" label="View My Journey" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ProfileImage({ size }: { size: 'small' | 'large' }) {
  return (
    <div className={`relative mx-auto transition-all duration-500 ease-in-out ${
      size === 'small' ? 'w-8 h-8 sm:w-10 sm:h-10' : 'w-32 h-32'
    }`}>
      <img
        src="/profile.jpg"
        alt="Profile"
        className="rounded-full object-cover w-full h-full ring-4 ring-nova-400/30 shadow-lg shadow-nova-400/20"
      />
      <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-nova-400/20 to-transparent" />
    </div>
  );
}