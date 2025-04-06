
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-4 px-8">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center text-sm text-gray-600">
        <div>
          <select className="bg-transparent border-none text-gray-600 focus:outline-none">
            <option>English (United States)</option>
          </select>
        </div>
        <div className="flex space-x-6 mt-3 md:mt-0">
          <a href="#" className="hover:text-gray-800">Help</a>
          <a href="#" className="hover:text-gray-800">Privacy</a>
          <a href="#" className="hover:text-gray-800">Terms</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
