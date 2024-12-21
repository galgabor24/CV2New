import React from 'react';
import { Terminal } from 'lucide-react';

interface SkillCategoryProps {
  title: string;
  skills: string[];
}

export default function SkillCategory({ title, skills }: SkillCategoryProps) {
  return (
    <div className="relative pl-8 pb-12 group">
      {/* Timeline line */}
      <div className="absolute left-0 top-0 h-full w-px bg-cyan-800 group-last:bg-gradient-to-b group-last:from-cyan-800 group-last:to-transparent" />
      
      {/* Timeline dot */}
      <div className="absolute left-[-8px] top-0 w-4 h-4 rounded-full bg-cyan-500 border-4 border-slate-900 transition-transform duration-300 group-hover:scale-125" />
      
      {/* Content */}
      <div className="bg-slate-900/80 backdrop-blur-sm rounded-lg overflow-hidden transform transition-all duration-300 hover:scale-[1.02] hover:bg-slate-900/90 border border-cyan-900/50 hover:border-cyan-500/50">
        {/* Terminal Header */}
        <div className="bg-slate-800/50 px-4 py-2 flex items-center justify-between border-b border-cyan-900/30">
          <div className="flex items-center gap-3">
            <Terminal className="w-6 h-6 text-cyan-400" />
            <h3 className="text-xl font-semibold text-cyan-400">{title}</h3>
          </div>
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-red-500/80" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
            <div className="w-3 h-3 rounded-full bg-green-500/80" />
          </div>
        </div>
        
        {/* Terminal Content */}
        <div className="p-6 font-mono text-sm">
          {/* Directory Path */}
          <div className="text-gray-500 border-b border-gray-800 pb-2">
            <span className="text-cyan-400">root</span>@<span className="text-green-400">skills</span>:~/{title.toLowerCase().replace(/\s+/g, '-')}$
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4">
            {skills.map((skill, index) => (
              <div 
                key={skill}
                className="group/skill flex items-center gap-2 p-2.5 rounded-lg bg-cyan-500/5 hover:bg-cyan-500/10 transition-colors"
              >
                <span className="text-cyan-500 select-none">$</span>
                <span className="text-gray-400 group-hover/skill:text-cyan-300 transition-colors">
                  {skill}
                </span>
              </div>
            ))}
          </div>

          {/* Terminal Prompt */}
          <div className="text-gray-500 pt-4 flex items-center gap-2">
            <span>$</span>
            <span className="w-4 h-4 bg-cyan-500/50 animate-pulse" />
          </div>
        </div>
      </div>
    </div>
  );
}