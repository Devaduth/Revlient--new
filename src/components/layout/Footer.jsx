import React from 'react';

const Footer = () => {
  return (
    <footer className="py-12 border-t border-white/10 bg-black text-white/60">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Revlient. All rights reserved.
        </p>
        
        <div className="flex items-center gap-6">
          <a href="#" className="text-sm hover:text-white transition-colors">Privacy Policy</a>
          <a href="#" className="text-sm hover:text-white transition-colors">Terms of Service</a>
          <a href="#" className="text-sm hover:text-white transition-colors">Twitter</a>
          <a href="#" className="text-sm hover:text-white transition-colors">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
