import React, { useState } from 'react';
import { Mail, MapPin, Send } from 'lucide-react';

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

export default function ContactPage() {
  const [formData, setFormData] = useState({name:'',email:'',company:'',investmentSize:'',interest:'',message:''});
  const handleSubmit = (e: React.FormEvent) => { e.preventDefault(); console.log('Form submitted:', formData); };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({...formData,[e.target.name]:e.target.value});
  };

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
            <h1 className="text-5xl md:text-6xl font-bold">Let's Talk Infrastructure</h1>
            <p className="mt-6 text-xl text-gray-300">Whether you're exploring Project 33, Project 22, or have questions about our operations, we're here to have a serious conversation about digital infrastructure investment.</p>
          </div>
        </section>
        <section className="py-12 px-8">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
              <p className="text-gray-300 text-lg mb-8">We work with family offices, high-net-worth individuals, and institutional clients.</p>
              <div className="space-y-6">
                <div className="flex items-start">
                  <MapPin className="h-6 w-6 text-white mt-1 mr-4" />
                  <div><h3 className="text-xl font-semibold mb-2">Location</h3><p className="text-gray-300">Abu Dhabi<br />United Arab Emirates</p></div>
                </div>
                <div className="flex items-start">
                  <Mail className="h-6 w-6 text-white mt-1 mr-4" />
                  <div><h3 className="text-xl font-semibold mb-2">Email</h3><a href="mailto:info@dhabyan.ae" className="text-gray-300 hover:text-white">info@dhabyan.ae</a></div>
                </div>
              </div>
            </div>
            <div className="bg-gray-800/50 p-8 rounded-lg border border-gray-700">
              <h2 className="text-3xl font-bold mb-6">Request Consultation</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div><label htmlFor="name" className="block text-sm font-semibold mb-2">Full Name *</label>
                  <input type="text" id="name" name="name" required value={formData.name} onChange={handleChange} className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-md focus:outline-none focus:border-white text-white" placeholder="Your full name" />
                </div>
                <div><label htmlFor="email" className="block text-sm font-semibold mb-2">Email Address *</label>
                  <input type="email" id="email" name="email" required value={formData.email} onChange={handleChange} className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-md focus:outline-none focus:border-white text-white" placeholder="your.email@example.com" />
                </div>
                <div><label htmlFor="investmentSize" className="block text-sm font-semibold mb-2">Estimated Investment Size *</label>
                  <select id="investmentSize" name="investmentSize" required value={formData.investmentSize} onChange={handleChange} className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-md focus:outline-none focus:border-white text-white">
                    <option value="">Select range</option>
                    <option value="under-100k">Under $100,000</option>
                    <option value="100k-500k">$100,000 - $500,000</option>
                    <option value="500k-1m">$500,000 - $1,000,000</option>
                    <option value="1m-5m">$1,000,000 - $5,000,000</option>
                    <option value="over-5m">Over $5,000,000</option>
                  </select>
                </div>
                <div><label htmlFor="message" className="block text-sm font-semibold mb-2">Message *</label>
                  <textarea id="message" name="message" required rows={5} value={formData.message} onChange={handleChange} className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-md focus:outline-none focus:border-white text-white resize-none" placeholder="Tell us about your investment objectives..." />
                </div>
                <button type="submit" className="w-full bg-white text-gray-900 px-8 py-4 rounded-md font-semibold hover:bg-gray-200 flex items-center justify-center">
                  <Send className="h-5 w-5 mr-2" />Submit Request
                </button>
              </form>
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
