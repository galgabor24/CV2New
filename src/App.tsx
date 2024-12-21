import React, { useEffect, useState, useRef } from 'react';
import Header from './components/Header';
import ContentSection from './components/ContentSection';
import HeroBackground from './components/HeroBackground';
import SkillCategory from './components/SkillCategory';
import CareerTimeline from './components/CareerTimeline';
import RetroTerminal from './components/RetroTerminal';
import Footer from './components/Footer';

function App() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (heroRef.current) {
        const heroRect = heroRef.current.getBoundingClientRect();
        const heroHeight = heroRect.height;
        const scrollPosition = -heroRect.top;
        const progress = Math.min(Math.max(scrollPosition / (heroHeight / 1.5), 0), 1);
        setScrollProgress(progress);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-cosmic-900 via-cosmic-800 to-cosmic-900">
      <HeroBackground />
      <Header scrollProgress={scrollProgress} />

      <main className="relative snap-y snap-mandatory">
        <div ref={heroRef} className="h-[90vh] min-h-[700px]" />
        
        <ContentSection id="about" title="About Me" className="mt-24">
          <RetroTerminal />
        </ContentSection>

        <ContentSection id="career" title="Career Journey" className="-mt-16" variant="alternate">
          <CareerTimeline />
        </ContentSection>

        <ContentSection id="skills" title="Technical Expertise" className="-mt-16">
          <div className="max-w-5xl mx-auto">
            <SkillCategory 
              title="Technical Proficiency" 
              skills={[
                'Windows Server & Desktop Administration',
                'Active Directory & Azure AD',
                'Virtualization (VMware, Hyper-V)',
                'Microsoft Intune',
                'Cloud Computing (Azure, AWS)',
                'Network Administration (Cisco Meraki)',
                'Security Best Practices',
                'Backup & Disaster Recovery'
              ]} 
            />
            <SkillCategory 
              title="Platform & Device Management" 
              skills={[
                'Azure VM Provisioning & Management',
                'SSO (Okta, Azure AD SAML)',
                'Meraki MDM',
                'VOIP (Teams, Zoom)',
                'Microsoft Office 365',
                'Conferencing Solutions',
                'Onboarding & Offboarding',
                'Device Lifecycle Management'
              ]} 
            />
            <SkillCategory 
              title="Support & Customer Service" 
              skills={[
                'POS & Desktop Support',
                'Hardware Installation',
                'Incident Response',
                'Ticketing Systems',
                'Knowledge Base Creation',
                'End-User Training',
                'Technical Documentation',
                'Service Desk Management'
              ]} 
            />
            <SkillCategory 
              title="Networking & Infrastructure" 
              skills={[
                'Cisco CCNA Fundamentals',
                'Network Troubleshooting',
                'VPN Configuration',
                'AV Setup & Management',
                'Cross-Platform Device Provisioning',
                'Infrastructure Planning',
                'Network Security',
                'System Integration'
              ]} 
            />
          </div>
        </ContentSection>
      </main>
      <Footer />
    </div>
  );
}

export default App;