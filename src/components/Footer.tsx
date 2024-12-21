import React from 'react';
import { Instagram, Linkedin, Mail, Heart, Facebook } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    { icon: Mail, href: 'mailto:gabor.gal@galgabor.eu', label: 'Email' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/gabor-gal-b39aaa139/', label: 'LinkedIn' },
    { icon: Facebook, href: 'https://www.facebook.com/en.5sy', label: 'Facebook' },
    { icon: Instagram, href: 'https://www.instagram.com/dronevisionair/', label: 'Instagram' },
  ];

  return (
    <footer className="relative mt-20 py-8 bg-slate-900/80 backdrop-blur-sm border-t border-cyan-900/30">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8882_1px,transparent_1px),linear-gradient(to_bottom,#8882_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000,transparent)]" />
      
      <div className="relative max-w-5xl mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Copyright */}
          <div className="text-center md:text-left">
            <div className="text-gray-400 text-sm">
              © {currentYear} Gabor Gal. All rights reserved.
            </div>
            <div className="mt-2 text-gray-500 text-xs flex items-center justify-center md:justify-start gap-1">
              Made with <Heart className="w-3 h-3 text-red-500 fill-red-500" /> in London
            </div>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-6">
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative"
                aria-label={label}
              >
                <div className="absolute inset-0 bg-cyan-400/20 rounded-full blur-lg scale-0 group-hover:scale-125 transition-transform duration-300" />
                <Icon className="relative w-5 h-5 text-gray-400 hover:text-cyan-400 transition-colors duration-300" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}