import React from 'react';
import { CheckCircle, TrendingUp, Shield, Zap, DollarSign, Clock } from 'lucide-react';

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

const BenefitCard = ({ icon, title, children }: { icon: React.ReactNode; title: string; children: React.ReactNode }) => (
  <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700">
    <div className="flex items-center mb-4">{icon}<h3 className="text-xl font-semibold ml-3">{title}</h3></div>
    <p className="text-gray-300">{children}</p>
  </div>
);

export default function Project33Page() {
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
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight leading-tight">Project 33</h1>
            <p className="mt-6 text-2xl text-gray-300">Physical Mining Infrastructure. Direct Ownership. Transparent Operations.</p>
            <p className="mt-4 text-lg text-gray-400 max-w-3xl mx-auto">Our flagship hosting model for investors seeking direct hardware ownership with institutional-grade operations and aligned profit-sharing economics.</p>
          </div>
        </section>
        <section className="py-20 px-8 bg-black/30">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold mb-8">How Project 33 Works</h2>
            <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
              <p>Project 33 is structured for family offices, high-net-worth individuals, and institutional investors who want <strong>direct ownership</strong> of mining hardware, operated by a professional infrastructure team.</p>
              <p>Here's how it works: You acquire the mining hardware (ASIC miners). Dhabyan hosts, operates, and maintains that hardware in our facilities under the <strong>DOMM™</strong> (Dhabyan Operations, Maintenance & Management) model.</p>
              <p>We charge <strong>no markup on electricity</strong>. Instead, our fee is a percentage of the <strong>gross profit</strong> your miners generate:</p>
              <div className="bg-gray-800 p-6 rounded-lg border border-gray-700 my-6">
                <p className="font-mono text-xl"><strong>Gross Profit</strong> = Mining Revenue - Electricity Cost</p>
                <p className="mt-4 text-gray-400">This gross profit is then split between you (the hardware owner) and dbyn (the operator). The exact split is negotiated based on investment size, hardware configuration, and contract duration.</p>
              </div>
              <p>This structure ensures that our interests are completely aligned with yours. We only profit when your miners are profitable. If efficiency drops or costs rise, we absorb that pain alongside you—and we have every incentive to optimize operations.</p>
            </div>
          </div>
        </section>
        <section className="py-20 px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center">Why Project 33?</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <BenefitCard icon={<Shield className="h-8 w-8 text-white" />} title="Direct Ownership">You own the hardware. Not a share in a pool. Not a synthetic derivative. Real, physical miners that you can liquidate or relocate at any time.</BenefitCard>
              <BenefitCard icon={<DollarSign className="h-8 w-8 text-white" />} title="No Electricity Markup">We pass through electricity costs at cost. Our revenue comes only from the profit share—meaning we're incentivized to maximize efficiency, not inflate your power bill.</BenefitCard>
              <BenefitCard icon={<TrendingUp className="h-8 w-8 text-white" />} title="Aligned Economics">The DOMM™ model means we succeed only when you succeed. Poor performance hits our bottom line just as it hits yours.</BenefitCard>
              <BenefitCard icon={<Zap className="h-8 w-8 text-white" />} title="Institutional Operations">24/7 monitoring, proactive maintenance, and rapid response. We operate your hardware as if it were our own—because our profitability depends on it.</BenefitCard>
              <BenefitCard icon={<Clock className="h-8 w-8 text-white" />} title="Transparent Reporting">Real-time dashboards, monthly performance reports, and full visibility into hashrate delivery, uptime, and earnings.</BenefitCard>
              <BenefitCard icon={<CheckCircle className="h-8 w-8 text-white" />} title="Emirati-Managed">A UAE-domiciled, Emirati-owned operator managing your infrastructure locally. No offshore opacity.</BenefitCard>
            </div>
          </div>
        </section>
        <section className="py-20 px-8 bg-black/30">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center">The Investment Journey</h2>
            <div className="space-y-6">
              {[{step:'01',title:'Initial Consultation',description:'We discuss your investment objectives, risk tolerance, and capital deployment timeline. This is a qualification conversation—not every investor is a fit for Project 33.'},{step:'02',title:'Hardware Proposal',description:'We provide a detailed proposal including hardware specifications, cost breakdown, projected performance, electricity pricing, and the proposed profit-share split.'},{step:'03',title:'Agreement & Procurement',description:'Once terms are agreed, you acquire the hardware (we can assist with procurement), and we execute the DOMM™ hosting agreement.'},{step:'04',title:'Deployment & Operations',description:'Hardware is deployed in our facilities, brought online, and begins generating hashrate. You receive real-time reporting and monthly payouts.'},{step:'05',title:'Ongoing Management',description:'We handle all operations, maintenance, firmware updates, and incident response. You receive performance reports and profit distributions on a regular schedule.'}].map((item,idx)=>(
                <div key={idx} className="bg-gray-800/50 p-8 rounded-lg border border-gray-700 flex">
                  <div className="text-5xl font-bold text-gray-700 mr-6">{item.step}</div>
                  <div><h3 className="text-2xl font-semibold mb-3">{item.title}</h3><p className="text-gray-300">{item.description}</p></div>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="py-20 px-8">
          <div className="max-w-4xl mx-auto bg-gray-800 border border-yellow-600/50 p-8 rounded-lg">
            <h2 className="text-3xl font-bold mb-4 text-yellow-500">Important Considerations</h2>
            <div className="space-y-4 text-gray-300">
              <p><strong>Bitcoin mining is a volatile business.</strong> Returns are dependent on Bitcoin price, network difficulty, and operational efficiency. Past performance does not guarantee future results.</p>
              <p><strong>Hardware has a limited useful life.</strong> Mining equipment depreciates as newer, more efficient models are released. Your investment in hardware may lose value over time.</p>
              <p><strong>Electricity costs fluctuate.</strong> While we pass through electricity at cost with no markup, energy prices can rise, compressing margins.</p>
              <p><strong>This is not a guaranteed-return product.</strong> You should only invest capital you can afford to lose, and you should understand the technical and market risks inherent in crypto mining.</p>
            </div>
          </div>
        </section>
        <section className="py-20 px-8 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold mb-6">Ready to Explore Project 33?</h2>
            <p className="text-xl text-gray-300 mb-8">Schedule a consultation to discuss your investment objectives and receive a custom hardware proposal.</p>
            <div className="flex justify-center gap-4">
              <CTAButton href="/contact">Request Consultation</CTAButton>
              <CTAButton href="/our-model" variant="secondary">Compare Our Model</CTAButton>
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
