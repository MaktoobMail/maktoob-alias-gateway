
import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-brand-primary text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h2 className="text-2xl font-bold mb-4">
              Maktoob<span className="text-brand-secondary">.me</span>
            </h2>
            <p className="text-brand-light/80 max-w-md">
              Secure email alias generation and forwarding service. 
              Take control of your inbox and protect your privacy.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Links</h3>
            <ul className="space-y-2">
              <li><a href="#features" className="text-brand-light/80 hover:text-white transition-colors">Features</a></li>
              <li><a href="#how-it-works" className="text-brand-light/80 hover:text-white transition-colors">How It Works</a></li>
              <li><a href="#faq" className="text-brand-light/80 hover:text-white transition-colors">FAQ</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-brand-light/80 hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-brand-light/80 hover:text-white transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-brand-light/20 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-brand-light/70">
            &copy; {currentYear} Maktoob.me. All rights reserved.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="text-brand-light/80 hover:text-white transition-colors">
              Twitter
            </a>
            <a href="#" className="text-brand-light/80 hover:text-white transition-colors">
              GitHub
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
