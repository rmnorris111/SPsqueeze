import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-dark text-white py-8">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <div>
            <h3 className="font-heading font-bold text-lg mb-4">Simply Probate</h3>
            <p className="text-gray-400 mb-4">
              Professional probate services throughout New Zealand. Fixed fees, expert guidance, and compassionate support.
            </p>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Simply Probate. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
