import React from 'react';

interface ContentSectionProps {
  title: string;
  children: React.ReactNode;
  id?: string;
  className?: string;
  variant?: 'default' | 'alternate';
}

export default function ContentSection({ 
  title, 
  children, 
  id, 
  className = '',
  variant = 'default'
}: ContentSectionProps) {
  return (
    <div id={id} className={`snap-center min-h-screen flex items-center justify-center py-12 ${className}`}>
      <div className={`w-full max-w-6xl mx-auto px-4 ${
        variant === 'alternate'
          ? 'text-gray-100'
          : 'text-gray-100'
      }`}>
        <h2 className="text-2xl font-semibold mb-8 text-center">{title}</h2>
        {children}
      </div>
    </div>
  );
}