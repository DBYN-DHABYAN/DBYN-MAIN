import React from 'react';
import { TrendingUp, DollarSign, AlertCircle, CheckCircle, XCircle } from 'lucide-react';

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

export default function OurModelPage() {
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
            <h1 className="text-5xl md:text-6xl font-bold">The DOMM™ Model</h1>
            <p className="mt-6 text-2xl text-gray-300">Dhabyan Operations, Maintenance & Management</p>
            <p className="mt-4 text-lg text-gray-400">A profit-sharing framework that aligns operator and investor incentives.</p>
          </div>
        </section>
        <section className="py-20 px-8 bg-black/30">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold mb-8">How DOMM™ Works</h2>
            <div className="bg-gray-800 p-8 rounded-lg border border-gray-700 my-8">
              <div className="space-y-4 font-mono">
                <p className="text-2xl"><strong>Step 1:</strong> Mining Revenue = Hashrate × Block Rewards × Bitcoin Price</p>
                <p className="text-2xl mt-6"><strong>Step 2:</strong> Electricity Cost = Power × kWh Rate × Hours</p>
                <p className="text-2xl mt-6 text-green-400"><strong>Step 3: Gross Profit</strong> = Mining Revenue - Electricity Cost</p>
                <p className="text-2xl mt-6"><strong>Step 4:</strong> Split the Profit (Client % + Operator %)</p>
              </div>
            </div>
          </div>
        </section>
        <section className="py-20 px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center">DOMM™ vs. Traditional Hosting</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse bg-gray-800/50 rounded-lg">
                <thead className="bg-gray-800">
                  <tr>
                    <th className="py-4 px-6">Feature</th>
                    <th className="py-4 px-6">DOMM™ (dbyn)</th>
                    <th className="py-4 px-6">Traditional</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-700">
                    <td className="py-4 px-6">Fee Structure</td>
                    <td className="py-4 px-6"><CheckCircle className="inline h-5 w-5 text-green-400 mr-2" />% of Gross Profit only</td>
                    <td className="py-4 px-6"><XCircle className="inline h-5 w-5 text-red-400 mr-2" />Fixed monthly fees</td>
                  </tr>
                  <tr className="border-b border-gray-700">
                    <td className="py-4 px-6">Electricity</td>
                    <td className="py-4 px-6"><CheckCircle className="inline h-5 w-5 text-green-400 mr-2" />At-cost, no markup</td>
                    <td className="py-4 px-6"><XCircle className="inline h-5 w-5 text-red-400 mr-2" />Marked up 10-30%</td>
                  </tr>
                  <tr className="border-b border-gray-700">
                    <td className="py-4 px-6">Alignment</td>
                    <td className="py-4 px-6"><CheckCircle className="inline h-5 w-5 text-green-400 mr-2" />Only profit when you profit</td>
                    <td className="py-4 px-6"><XCircle className="inline h-5 w-5 text-red-400 mr-2" />Fees regardless</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>
        <section className="py-20 px-8 bg-black/30 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold mb-6">See DOMM™ in Action</h2>
            <div className="flex justify-center gap-4">
              <CTAButton href="/project-33">Explore Project 33</CTAButton>
              <CTAButton href="/project-22" variant="secondary">Explore Project 22</CTAButton>
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
