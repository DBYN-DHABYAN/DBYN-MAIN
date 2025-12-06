import React from 'react';
import { Cloud, Zap, TrendingUp, Lock, BarChart, ArrowRight } from 'lucide-react';

const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <a href={href} className="text-gray-300 hover:text-white transition-colors duration-200">{children}</a>
);

const CTAButton = ({ children, href, variant = 'primary', className = '' }: { 
  children: React.ReactNode; href: string; variant?: 'primary' | 'secondary'; className?: string 
}) => {
  const baseStyles = 'inline-block px-8 py-3 rounded-md font-semibold text-center transition-transform duration-200 transform hover:scale-105';
  const variants = { primary: 'bg-white text-gray-900 hover:bg-gray-200', secondary: 'border border-gray-600 text-white hover:bg-gray-800' };
  return <a href={href} className={`${baseStyles} ${variants[variant]} ${className}`}>{children}</a>;
};

const FeatureCard = ({ icon, title, children }: { icon: React.ReactNode; title: string; children: React.ReactNode }) => (
  <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700">
    <div className="flex items-center mb-4">{icon}<h3 className="text-xl font-semibold ml-3">{title}</h3></div>
    <p className="text-gray-300">{children}</p>
  </div>
);

export default function Project22Page() {
  return (
    <div className="bg-gray-900 text-white font-sans">
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
        <section className="py-24 px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight leading-tight">Project 22</h1>
            <p className="mt-6 text-2xl text-gray-300">Digital Access to Physical Infrastructure.</p>
            <p className="mt-4 text-lg text-gray-400 max-w-3xl mx-auto">Cloud mining packages backed by real, dbyn-operated hardware. The same transparency and profit-sharing model as Project 33, with accessible ticket sizes and a streamlined digital experience.</p>
          </div>
        </section>
        <section className="py-20 px-8 bg-black/30">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold mb-8">Digital Mining, Real Infrastructure</h2>
            <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
              <p>Project 22 brings the same operational discipline and aligned economics of Project 33 to a digital, cloud-based format. Instead of purchasing entire miners, you acquire <strong>digital mining packages</strong>—slots of hashrate backed by real hardware in dbyn's facilities.</p>
              <p>This is <strong>not</strong> a cloud mining scam promising fixed 2% daily returns. This is genuine infrastructure access with transparent, market-driven returns.</p>
              <p>Your returns depend on: Bitcoin price, Network difficulty, Operational uptime and efficiency, Electricity costs</p>
              <div className="bg-gray-800 p-6 rounded-lg border border-gray-700 my-6">
                <p className="font-mono text-xl"><strong>Gross Profit</strong> = Mining Revenue - Electricity Cost</p>
                <p className="mt-4 text-gray-400">After electricity costs are deducted, the remaining profit is shared between you and dbyn. You receive regular distributions to your account based on actual mining performance.</p>
              </div>
            </div>
          </div>
        </section>
        <section className="py-20 px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center">Why Project 22?</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <FeatureCard icon={<Cloud className="h-8 w-8 text-white" />} title="Accessible Entry">Start with smaller capital commitments. No need to purchase full miners or navigate hardware procurement.</FeatureCard>
              <FeatureCard icon={<Zap className="h-8 w-8 text-white" />} title="Backed by Real Hardware">Your digital hashrate is allocated from physical miners in dbyn's facilities—not virtualized or synthetic capacity.</FeatureCard>
              <FeatureCard icon={<TrendingUp className="h-8 w-8 text-white" />} title="Market-Driven Returns">Returns reflect actual mining performance. No fake guarantees. No Ponzi math. Just transparent, operational results.</FeatureCard>
            </div>
          </div>
        </section>
        <section className="py-20 px-8 bg-black/30">
          <div className="max-w-4xl mx-auto bg-gray-800 border border-yellow-600/50 p-8 rounded-lg">
            <h2 className="text-3xl font-bold mb-4 text-yellow-500">Important Considerations</h2>
            <div className="space-y-4 text-gray-300">
              <p><strong>Returns are not guaranteed.</strong> Mining profitability fluctuates with Bitcoin price, network difficulty, and electricity costs.</p>
              <p><strong>Market volatility is significant.</strong> Cryptocurrency markets are highly volatile.</p>
            </div>
          </div>
        </section>
        <section className="py-20 px-8 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold mb-6">Ready to Start Mining?</h2>
            <div className="flex justify-center gap-4">
              <CTAButton href="https://clients.dhabyan.ae"><span className="flex items-center">Go to Client Portal<ArrowRight className="ml-2 h-5 w-5" /></span></CTAButton>
              <CTAButton href="/our-model" variant="secondary">Learn About Our Model</CTAButton>
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-black/30 mt-20">
        <div className="max-w-6xl mx-auto py-12 px-8 text-center text-gray-500 border-t border-gray-800">
          <p>&copy; {new Date().getFullYear()} Dhabyan Commercial Brokers L.L.C. All rights reserved.</p>
          <p className="mt-2">Abu Dhabi, United Arab Emirates</p>
        </div>
      </footer>
    </div>
  );
}
