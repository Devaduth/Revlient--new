import React, { Suspense } from 'react';
import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';
import Button from '../ui/Button';
import ErrorBoundary from '../ui/ErrorBoundary';

const Hero = () => {
  return (
    <section className="relative w-full h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Antigravity Spline Background */}
      <div className="absolute inset-0 z-0">
        <ErrorBoundary fallback={<div className="w-full h-full bg-neutral-900" />}>
          <Suspense fallback={<div className="w-full h-full bg-black" />}>
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 2, ease: [0.16, 1, 0.3, 1] }}
              className="w-full h-full grayscale brightness-75 contrast-125 scale-110 opacity-60 mix-blend-screen"
            >
               {/* Using a known working placeholder. Replace with your specific URL. */}
               <Spline scene="https://prod.spline.design/6PM9t8MSp3l2FpSQ/scene.splinecode" />
            </motion.div>
          </Suspense>
        </ErrorBoundary>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto mt-20">
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
        >
            <h2 className="text-sm md:text-base font-medium tracking-widest text-secondary mb-6 uppercase">
                Digital Agency
            </h2>
        </motion.div>
        
        <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter mb-8 text-white"
        >
            We build digital <br /> products that scale.
        </motion.h1>

        <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-lg md:text-xl text-secondary max-w-2xl mx-auto mb-10 leading-relaxed"
        >
            Revlient is a modern web development agency crafting high-performance websites, SaaS platforms, and custom CRM solutions.
        </motion.p>

        <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col md:flex-row items-center justify-center gap-4"
        >
            <Button variant="primary">Start a Project</Button>
            <Button variant="outline">View Our Work</Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
