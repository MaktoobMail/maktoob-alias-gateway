
import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-brand-primary text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 gap-8">
          <div className="col-span-1">
            <h2 className="text-2xl font-bold mb-4">
              Maktoob<span className="text-brand-secondary">.me</span>
            </h2>
            <p className="text-brand-light/80 max-w-md">
              Secure email alias generation and forwarding service. 
              Take control of your inbox and protect your privacy.
            </p>
          </div>
        </div>
        
        <div className="border-t border-brand-light/20 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-brand-light/70">
            &copy; {currentYear} Maktoob.me. All rights reserved.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
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
