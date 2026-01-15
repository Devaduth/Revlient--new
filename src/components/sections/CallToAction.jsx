import React from 'react';
import { motion } from 'framer-motion';
import Button from '../ui/Button';

const CallToAction = () => {
  return (
    <section id="about" className="py-32 w-full relative z-10 bg-black flex flex-col items-center justify-center text-center px-6">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white tracking-tighter mb-8">
            Let's build something <br /> exceptional.
          </h2>
          
          <div className="flex justify-center">
             <Button variant="primary" className="text-lg px-10 py-4">
                Contact Revlient
             </Button>
          </div>
      </motion.div>
    </section>
  );
};

export default CallToAction;
