import React from 'react';
import { Instagram, Linkedin, Mail, Facebook } from 'lucide-react';

interface SocialLinksProps {
  variant: 'compact' | 'expanded';
}

export default function SocialLinks({ variant }: SocialLinksProps) {
  const links = [
    { icon: Mail, href: 'mailto:gabor.gal@galgabor.eu', label: 'Email' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/gabor-gal-b39aaa139/', label: 'LinkedIn' },
    { icon: Facebook, href: 'https://www.facebook.com/en.5sy', label: 'Facebook' },
    { icon: Instagram, href: 'https://www.instagram.com/dronevisionair/', label: 'Instagram' },
  ];

  return (
    <div className={`flex items-center ${
      variant === 'compact' 
        ? 'justify-end space-x-4' 
        : 'justify-between w-full max-w-[200px] mx-auto'
    }`}>
      {links.map(({ icon: Icon, href, label }) => (
        <a
          key={label}
          href={href}
          className="inline-flex items-center justify-center"
          aria-label={label}
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="relative group">
            <Icon className="w-6 h-6 text-gray-400 transition-colors duration-300 group-hover:text-cyan-400" />
            <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 px-2 py-1 bg-slate-800 text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
              {label}
            </span>
          </div>
        </a>
      ))}
    </div>
  );
}