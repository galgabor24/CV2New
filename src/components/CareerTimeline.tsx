import React from 'react';
import { Terminal, Building2, Coffee } from 'lucide-react';

interface TimelineItemProps {
  title: string;
  company: string;
  period: string;
  responsibilities: string[];
  icon?: React.ReactNode;
}

function TimelineItem({ title, company, period, responsibilities, icon }: TimelineItemProps) {
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
            {icon}
            <div>
              <h3 className="text-xl font-semibold text-cyan-400">{title}</h3>
              <p className="text-gray-400 text-sm">
                {company} • {period}
              </p>
            </div>
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
            <span className="text-cyan-400">root</span>@<span className="text-green-400">career</span>:~/{company.toLowerCase().replace(/\s+/g, '-')}$
          </div>

          {responsibilities.map((item, index) => (
            <div key={index} className="group/line flex items-start gap-2 mt-3">
              <span className="text-cyan-500 select-none">$</span>
              <div className="flex-1">
                <span className="text-gray-400 group-hover/line:text-cyan-300 transition-colors">
                  {item}
                </span>
                <span className="ml-1 opacity-0 group-hover/line:opacity-100 transition-opacity text-cyan-500 animate-pulse">▋</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function CareerTimeline() {
  const positions = [
    {
      title: "SysAdmin",
      company: "Genesis",
      period: "March 2022 - present",
      icon: <Terminal className="w-6 h-6 text-cyan-400" />,
      responsibilities: [
        "Managing and maintaining the company's IT infrastructure in UK, Brazil, and the US, including servers, network devices, and software applications",
        "Deliver remote support to international teams, providing timely solutions for system-related issues",
        "Implement security protocols and technologies, safeguarding against potential cyber threats and data breaches",
        "Design and manage backup and disaster recovery strategies to ensure business continuity",
        "Coordinate and execute system updates, patches, and upgrades, maintaining optimal performance",
        "Collaborate with global IT teams to plan and implement IT projects",
        "Successfully implemented Azure AD and SSO for multiple applications, enhancing security and user access",
        "Provision and manage Azure VMs for workloads such as SQL Server, web applications and end users",
        "Administer Microsoft Intune for Windows and macOS, improving device management and application deployment",
        "Manage VOIP phone systems, optimizing performance and reliability"
      ]
    },
    {
      title: "Support and Service Analyst / Head Office Support / SysAdmin",
      company: "Caffe Nero",
      period: "April 2019 - March 2022",
      icon: <Building2 className="w-6 h-6 text-cyan-400" />,
      responsibilities: [
        "Served as the primary contact for technical issues in 900+ Caffe Nero stores, including international sites",
        "Handled a range of support tasks, from EPOS and PDQ troubleshooting to managing internal ticketing and logging systems",
        "Provisioned and repaired hardware, including laptops, desktops, and mobile devices",
        "Assisted with IT department projects, contributing to system improvements and enhancements",
        "Administration of store facing systems like intranet and ordering system",
        "Acted as the first point of technical contact for Head Office, supporting over 300 users",
        "Maintained IT infrastructure across office environments, ensuring seamless functionality",
        "Directed the IMAC process, including new PC/mobile provisioning, setup and support",
        "Provided setup, training and support for new employees, fostering a knowledgeable user base",
        "Authored Knowledge Base entries and coordinated escalations to third-line support as needed"
      ]
    },
    {
      title: "Assistant Manager",
      company: "Caffe Nero",
      period: "April 2018 - March 2019",
      icon: <Coffee className="w-6 h-6 text-cyan-400" />,
      responsibilities: [
        "Managed daily store operations and staff supervision",
        "Ensured high standards of customer service and product quality",
        "Handled cash management and inventory control",
        "Trained and developed new team members"
      ]
    }
  ];

  return (
    <div className="max-w-5xl mx-auto space-y-6">
      {positions.map((position, index) => (
        <TimelineItem key={index} {...position} />
      ))}
    </div>
  );
}