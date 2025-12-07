import React from 'react';
import { ArrowRight, Cpu, Shield, Target } from 'lucide-react';

const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <a href={href} className="text-gray-300 hover:text-white transition-colors duration-200">
    {children}
  </a>
);

const CTAButton = ({ children, href, variant = 'primary', className = '' }: { 
  children: React.ReactNode; 
  href: string; 
  variant?: 'primary' | 'secondary'; 
  className?: string 
}) => {
  const baseStyles = 'inline-block px-8 py-3 rounded-md font-semibold text-center transition-transform duration-200 transform hover:scale-105';
  const variants = {
    primary: 'bg-white text-gray-900 hover:bg-gray-200',
    secondary: 'border border-gray-600 text-white hover:bg-gray-800',
  };
  return <a href={href} className={`${baseStyles} ${variants[variant]} ${className}`}>{children}</a>;
};

const InfoCard = ({ icon, title, children }: { icon: React.ReactNode; title: string; children: React.ReactNode }) => (
  <div className="bg-gray-800/50 p-6 rounded-lg">
    <div className="flex items-center mb-4">
      {icon}
      <h3 className="text-xl font-semibold ml-3">{title}</h3>
    </div>
    <p className="text-gray-400">{children}</p>
  </div>
);

const ProjectCard = ({ title, description, ctaText, ctaLink }: { title: string; description: string; ctaText: string; ctaLink: string }) => (
  <div className="bg-gray-900 border border-gray-700 rounded-lg p-8 flex flex-col">
    <h3 className="text-2xl font-bold mb-3">{title}</h3>
    <p className="text-gray-400 mb-6 flex-grow">{description}</p>
    <a href={ctaLink} className="text-white font-semibold flex items-center group">
      {ctaText}
      <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-200 group-hover:translate-x-1" />
    </a>
  </div>
);

export default function HomePage() {
  return (
    <div className="bg-gray-900 text-white font-sans">
      {/* Header */}
      <header className="py-6 px-8 flex justify-between items-center border-b border-gray-800 sticky top-0 bg-gray-900/70 backdrop-blur-sm z-50">
        <div className="text-2xl font-bold">dbyn</div>
        <nav className="hidden md:flex items-center space-x-8">
          <NavLink href="/">Home</NavLink>
          <NavLink href="/about">About</NavLink>
          <NavLink href="/project-33">Project 33</NavLink>
          <NavLink href="/project-22">Project 22</NavLink>
          <NavLink href="/our-model">Our Model</NavLink>
        </nav>
        <CTAButton href="/contact" variant="secondary" className="px-6 py-2">Talk to us</CTAButton>
      </header>

      <main>
        {/* Hero Section */}
        <section className="text-center py-24 px-4">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-tight">
            Sovereign Compute. <br />
            Built by Emiratis for Emiratis.
          </h1>
          <p className="max-w-3xl mx-auto mt-6 text-lg text-gray-300">
            Dhabyan designs, builds, and operates high-efficiency Bitcoin mining and compute infrastructure – with aligned, profit-sharing structures for our clients.
          </p>
          <div className="mt-10 flex justify-center gap-4">
            <CTAButton href="/project-33">Explore Project 33</CTAButton>
            <CTAButton href="/project-22" variant="secondary">Explore Project 22</CTAButton>
          </div>
        </section>

        {/* Why Dhabyan Section */}
        <section className="py-20 px-8 bg-black/30">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold">Infrastructure-First. Compute-First. Numbers-First.</h2>
            <p className="max-w-2xl mx-auto mt-4 text-gray-400">We are not a fund. We are a vertically integrated infrastructure company that builds and operates the assets our clients own.</p>
          </div>
          <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
            <InfoCard icon={<Shield className="h-8 w-8 text-white" />} title="Emirati-Led & Owned">
              Based in Abu Dhabi, we are an Emirati-owned and managed firm focused on building sovereign compute capacity for Emirati investors and partners.
            </InfoCard>
            <InfoCard icon={<Target className="h-8 w-8 text-white" />} title="Aligned Incentives">
              Our DOMM™ (Dhabyan Operations, Maintenance & Management) model is built on a gross profit share. We only succeed when your assets are profitable.
            </InfoCard>
            <InfoCard icon={<Cpu className="h-8 w-8 text-white" />} title="Technical Depth">
              From site selection and hydro-cooling engineering to 24/7 operational management, we handle the entire infrastructure lifecycle with institutional discipline.
            </InfoCard>
          </div>
        </section>

        {/* Our Projects Section */}
        <section className="py-20 px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold">Our Offerings</h2>
            <p className="max-w-2xl mx-auto mt-4 text-gray-400">Structured access to digital infrastructure for serious investors and digital natives alike.</p>
          </div>
          <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-8">
            <ProjectCard
              title="Project 33"
              description="Our flagship physical hosting and investment structure. Clients acquire and own dedicated mining hardware, operated by dbyn under our transparent, profit-sharing DOMM™ model. Ideal for family offices and HNWIs seeking direct asset ownership."
              ctaText="Explore Physical Hosting"
              ctaLink="/project-33"
            />
            <ProjectCard
              title="Project 22"
              description="Digital access to our physical infrastructure. Purchase cloud mining packages backed by real, dbyn-operated hardware. The same discipline and profit-sharing philosophy as Project 33, with accessible ticket sizes and a simple digital experience."
              ctaText="Explore Digital Mining"
              ctaLink="/project-22"
            />
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-black/30 mt-20">
        <div className="max-w-6xl mx-auto py-12 px-8 text-center text-gray-500 border-t border-gray-800">
          <p>&copy; {new Date().getFullYear()} Dhabyan Commercial Brokers L.L.C. All rights reserved.</p>
          <p className="mt-2">Abu Dhabi, United Arab Emirates</p>
        </div>
      </footer>
    </div>
  );
}
