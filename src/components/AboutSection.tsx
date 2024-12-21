import React from 'react';

export default function AboutSection() {
  return (
    <div className="max-w-2xl mx-auto text-center space-y-6">
      <h2 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
        About Me
      </h2>
      <div className="space-y-4 text-gray-300">
        <p className="text-lg leading-relaxed">
          Graduated IT Engineer Assistant with good knowledge of IT technology. Currently working as a SysAdmin at Genesis.
        </p>
        <p className="leading-relaxed">
          As an experienced IT system administrator with 5.5 years of experience in managing and maintaining complex IT infrastructures, 
          I am dedicated to providing reliable and secure technology solutions to organizations. My strong technical skills, attention 
          to detail, and problem-solving abilities make me an effective team player in achieving IT goals.
        </p>
      </div>
    </div>
  );
}