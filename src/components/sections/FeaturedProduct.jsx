import React from 'react';
import { motion } from 'framer-motion';
import Button from '../ui/Button';

const FeaturedProduct = () => {
  return (
    <section className="py-32 w-full relative z-10 overflow-hidden">
      <div className="container mx-auto px-6 flex flex-col lg:flex-row items-center gap-16">
        
        {/* Text Column */}
        <motion.div 
          className="flex-1"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-sm md:text-base font-medium tracking-widest text-blue-500 mb-4 uppercase">
            Product Spotlight
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Revlient CRM
          </h3>
          <p className="text-xl text-gray-400 mb-8 leading-relaxed">
            Our in-house CRM powers modern businesses with automation, analytics, and control. 
            Experience a dashboard that adapts to your workflow, not the other way around.
          </p>
          
          <ul className="mb-8 space-y-4">
            {['Real-time Analytics', 'Automated Workflows', 'Seamless Integrations'].map((item, i) => (
                <li key={i} className="flex items-center text-gray-300">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-3" />
                    {item}
                </li>
            ))}
          </ul>

          <Button variant="primary">Explore Features</Button>
        </motion.div>

        {/* UI Mockup Column */}
        <motion.div 
          className="flex-1 w-full"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {/* Abstract Dashboard UI Mockup */}
          <div className="relative w-full aspect-video bg-surface rounded-xl border border-white/10 shadow-2xl overflow-hidden group">
             {/* Header */}
             <div className="h-12 bg-white/5 border-b border-white/5 flex items-center px-4 gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/50" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                <div className="w-3 h-3 rounded-full bg-green-500/50" />
             </div>
             
             {/* Body */}
             <div className="p-6 grid grid-cols-3 gap-4 h-full">
                <div className="col-span-1 bg-white/5 rounded-lg h-3/4 animate-pulse" />
                <div className="col-span-2 space-y-4">
                    <div className="h-32 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-lg border border-white/5" />
                    <div className="grid grid-cols-2 gap-4">
                        <div className="h-24 bg-white/5 rounded-lg" />
                        <div className="h-24 bg-white/5 rounded-lg" />
                    </div>
                </div>
             </div>
             
             {/* Hover Effect Glow */}
             <div className="absolute inset-0 bg-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default FeaturedProduct;
