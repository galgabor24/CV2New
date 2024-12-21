<content>import React from 'react';

interface ExperienceItemProps {
  title: string;
  company: string;
  period: string;
  description: string;
}

export function ExperienceItem({ title, company, period, description }: ExperienceItemProps) {
  return (
    <div className="p-4 rounded-lg bg-white/5">
      <h3 className="text-lg font-semibold text-cyan-400">{title}</h3>
      <div className="text-sm text-gray-400 mb-2">
        {company} • {period}
      </div>
      <p className="text-gray-300">{description}</p>
    </div>
  );
}</content>