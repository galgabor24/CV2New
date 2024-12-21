import React from 'react';
import { ChevronDown } from 'lucide-react';

interface ScrollIndicatorProps {
  targetId: string;
  label: string;
}

export default function ScrollIndicator({ targetId, label }: ScrollIndicatorProps) {
  const scrollToSection = () => {
    const section = document.querySelector(`#${targetId}`);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <button
      onClick={scrollToSection}
      className="group flex flex-col items-center gap-1.5 text-cyan-400 hover:text-cyan-300 transition-all duration-300 scale-90"
      aria-label={`Scroll to ${label} section`}
    >
      <span className="text-xs font-medium tracking-wider uppercase opacity-75 group-hover:opacity-100">
        {label}
      </span>
      <div className="relative">
        <ChevronDown className="w-5 h-5 animate-bounce group-hover:animate-none" />
        <div className="absolute inset-0 bg-cyan-400/20 blur-xl rounded-full scale-0 group-hover:scale-100 transition-transform duration-300" />
      </div>
    </button>
  );
}