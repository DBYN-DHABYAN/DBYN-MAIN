import React from 'react';
import { Shield, Target, Cpu, TrendingUp, Users, Building2 } from 'lucide-react';

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

const ValueCard = ({ icon, title, children }: { icon: React.ReactNode; title: string; children: React.ReactNode }) => (
  <div className="bg-gray-800/50 p-8 rounded-lg border border-gray-700">
    <div className="flex items-center mb-4">
      {icon}
      <h3 className="text-2xl font-semibold ml-3">{title}</h3>
    </div>
    <p className="text-gray-300 leading-relaxed">{children}</p>
  </div>
);

export default function AboutPage() {
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
        <section className="py-24 px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight leading-tight">
              Built by Emiratis for Emiratis.
            </h1>
            <p className="mt-6 text-xl text-gray-300 leading-relaxed">
              Dhabyan Commercial Brokers L.L.C is an Abu Dhabi-based infrastructure operator focused on building sovereign compute capacity for the next generation of digital infrastructure in the UAE.
            </p>
          </div>
        </section>

        {/* Mission Statement */}
        <section className="py-20 px-8 bg-black/30">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-center">Why Dhabyan Exists</h2>
            <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
              <p>
                The future of digital infrastructure—from Bitcoin mining to AI compute—demands serious engineering, institutional discipline, and aligned economic structures. Too many players in this space operate with opaque fee structures, markup-heavy models, and misaligned incentives.
              </p>
              <p>
                Dhabyan was founded to change that. We are an Emirati-owned and managed firm that designs, builds, and operates high-efficiency compute infrastructure with full transparency. Our clients own the hardware. We operate it. Our success is directly tied to the performance of your assets.
              </p>
              <p>
                This is not a fund. This is not a trading desk. This is infrastructure-first investing—where the returns come from real operational efficiency, not financial engineering.
              </p>
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="py-20 px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center">Our Principles</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <ValueCard icon={<Shield className="h-8 w-8 text-white" />} title="Emirati Sovereignty">
                We are building compute infrastructure for Emirati investors and families who want exposure to digital assets without relying on foreign operators or opaque offshore structures.
              </ValueCard>
              
              <ValueCard icon={<Target className="h-8 w-8 text-white" />} title="Aligned Incentives">
                Our DOMM™ (Dhabyan Operations, Maintenance & Management) model means we only earn when your assets are profitable. No hidden markups. No management fees on underperforming assets.
              </ValueCard>
              
              <ValueCard icon={<Cpu className="h-8 w-8 text-white" />} title="Technical Depth">
                From hydro-cooling engineering to site energy procurement, we handle the full infrastructure stack. Our team has deployed megawatts of compute capacity across multiple jurisdictions.
              </ValueCard>
              
              <ValueCard icon={<TrendingUp className="h-8 w-8 text-white" />} title="Numbers-First Approach">
                We lead with data, not hype. Every proposal includes detailed financial modeling, sensitivity analysis, and transparent assumptions about market conditions and operational costs.
              </ValueCard>
            </div>
          </div>
        </section>

        {/* What We Do */}
        <section className="py-20 px-8 bg-black/30">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-center">What We Do</h2>
            <div className="space-y-8">
              <div className="bg-gray-800/50 p-8 rounded-lg border border-gray-700">
                <div className="flex items-start">
                  <Building2 className="h-8 w-8 text-white mt-1 flex-shrink-0" />
                  <div className="ml-4">
                    <h3 className="text-2xl font-semibold mb-3">Infrastructure Design & Build</h3>
                    <p className="text-gray-300 leading-relaxed">
                      We design and construct high-density mining facilities optimized for reliability and efficiency. From electrical infrastructure to cooling systems, we own the full technical stack.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-800/50 p-8 rounded-lg border border-gray-700">
                <div className="flex items-start">
                  <Cpu className="h-8 w-8 text-white mt-1 flex-shrink-0" />
                  <div className="ml-4">
                    <h3 className="text-2xl font-semibold mb-3">24/7 Operations & Management</h3>
                    <p className="text-gray-300 leading-relaxed">
                      Once infrastructure is deployed, we operate it around the clock. Real-time monitoring, proactive maintenance, and rapid incident response ensure maximum uptime and hashrate delivery.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-800/50 p-8 rounded-lg border border-gray-700">
                <div className="flex items-start">
                  <Users className="h-8 w-8 text-white mt-1 flex-shrink-0" />
                  <div className="ml-4">
                    <h3 className="text-2xl font-semibold mb-3">Investment Structuring & Partnership</h3>
                    <p className="text-gray-300 leading-relaxed">
                      We work with family offices, high-net-worth individuals, and institutional clients to structure mining investments that align with their risk tolerance, liquidity needs, and capital deployment timelines.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 px-8 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold mb-6">Ready to Build with Us?</h2>
            <p className="text-xl text-gray-300 mb-8">
              If you're an investor, family office, or institution looking for transparent access to digital infrastructure, let's talk.
            </p>
            <div className="flex justify-center gap-4">
              <CTAButton href="/contact">Schedule a Consultation</CTAButton>
              <CTAButton href="/our-model" variant="secondary">See How We Operate</CTAButton>
            </div>
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
