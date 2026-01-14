import React, { useState, useEffect } from 'react';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import Button from '../ui/Button';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'py-4 bg-black/50 backdrop-blur-md border-b border-white/5' : 'py-6 bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <a href="#" className="text-2xl font-bold tracking-tighter text-white">
          Revlient<span className="text-blue-500">.</span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {['Services', 'Work', 'Process', 'About'].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="text-sm font-medium text-white/70 hover:text-white transition-colors">
              {item}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <Button variant="outline" className="hidden md:flex">
            Get in touch
          </Button>
          {/* Mobile Menu Toggle could go here */}
        </div>
      </div>
    </motion.header>
  );
};

export default Header;
