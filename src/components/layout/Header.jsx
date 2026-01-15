import React, { useState } from 'react';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import Button from '../ui/Button';

const Header = () => {
  const [hidden, setHidden] = useState(false);
  const { scrollY } = useScroll();
  const [hoveredTab, setHoveredTab] = useState(null);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  const navItems = [
    { name: 'Services', link: '#services' },
    { name: 'Work', link: '#work' },
    { name: 'Process', link: '#process' },
    { name: 'About', link: '#about' },
  ];

  return (
    <>
      {/* 1. Logo - Fixed Top Left */}
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="fixed top-6 left-6 md:top-8 md:left-12 z-50 pointer-events-auto mix-blend-difference"
      >
        <a href="/" className="text-2xl font-bold tracking-tighter text-white select-none">
          Revlient<span className="text-white/40">.</span>
        </a>
      </motion.div>

      {/* 2. Navigation Capsule - Fixed Top Center (Floating) */}
      <motion.nav
        variants={{
          visible: { y: 0, opacity: 1 },
          hidden: { y: -100, opacity: 0 }
        }}
        animate={hidden ? "hidden" : "visible"}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="fixed top-6 left-1/2 -translate-x-1/2 z-50 hidden md:flex"
      >
        <div className="flex items-center gap-2 px-2 py-2 bg-white/5 backdrop-blur-xl border border-white/10 rounded-full shadow-lg shadow-black/20">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.link}
              onMouseEnter={() => setHoveredTab(item.name)}
              onMouseLeave={() => setHoveredTab(null)}
              className="relative px-6 py-2 text-sm font-medium text-white/80 hover:text-white transition-colors"
            >
              {hoveredTab === item.name && (
                <motion.div
                  layoutId="nav-spotlight"
                  className="absolute inset-0 bg-white/10 rounded-full"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
              <span className="relative z-10">{item.name}</span>
            </a>
          ))}
        </div>
      </motion.nav>

      {/* 3. CTA & Menu - Fixed Top Right */}
      <motion.div 
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="fixed top-6 right-6 md:top-8 md:right-12 z-50 flex items-center gap-4"
      >
        <Button variant="outline" className="hidden md:flex backdrop-blur-md bg-black/20 border-white/10 hover:bg-white hover:text-black hover:border-white transition-all duration-300">
          Get in touch
        </Button>
        {/* Mobile Menu Toggle (can add later) */}
        <button className="md:hidden p-2 text-white/80 hover:text-white">
           <span className="sr-only">Menu</span>
           <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" /></svg>
        </button>
      </motion.div>
    </>
  );
};

export default Header;
