import React from 'react';
import { motion } from 'framer-motion';

const steps = [
  {
    number: "01",
    title: "Discovery",
    description: "We dive deep into your business goals, target audience, and market landscape."
  },
  {
    number: "02",
    title: "Design",
    description: "Crafting visual systems and user flows that align with your brand identity."
  },
  {
    number: "03",
    title: "Development",
    description: "Writing clean, scalable code using the latest technologies and best practices."
  },
  {
    number: "04",
    title: "Launch",
    description: "Rigorous quality assurance and a smooth deployment strategy."
  },
  {
    number: "05",
    title: "Scale",
    description: "Ongoing optimization and feature updates to keep you ahead."
  }
];

const Process = () => {
  return (
    <section className="py-32 w-full relative z-10 bg-black">
      <div className="container mx-auto px-6">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="text-center mb-20"
        >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Our Process</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
                A proven methodology that delivers consistent results.
            </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
            {/* Vertical Line */}
            <div className="absolute left-[15px] top-0 bottom-0 w-[2px] bg-white/10 md:left-1/2 md:-ml-[1px]" />

            <div className="space-y-12 md:space-y-24">
                {steps.map((step, index) => (
                    <motion.div 
                        key={index}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        className={`relative flex flex-col md:flex-row gap-8 md:gap-0 items-start md:items-center ${
                            index % 2 === 0 ? 'md:flex-row-reverse' : ''
                        }`}
                    >
                        {/* Content */}
                        <div className="flex-1 md:w-1/2 pl-12 md:pl-0 md:px-12 text-left md:text-right">
                           <div className={`md:text-${index % 2 === 0 ? 'left' : 'right'}`}>
                                <h3 className="text-2xl font-bold text-white mb-2">{step.title}</h3>
                                <p className="text-gray-400">{step.description}</p>
                           </div>
                        </div>

                        {/* Dot */}
                        <div className="absolute left-0 md:left-1/2 w-8 h-8 -ml-0 md:-ml-4 rounded-full bg-black border-4 border-white/20 z-10 flex items-center justify-center">
                            <div className="w-2 h-2 bg-white rounded-full" />
                        </div>
                        
                        {/* Number (Empty on one side for balance) */}
                        <div className="flex-1 md:w-1/2 hidden md:block px-12 text-left md:text-right">
                           <span className={`text-6xl font-bold text-white/5 block ${index % 2 === 0 ? 'text-right' : 'text-left'}`}>
                                {step.number}
                           </span>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
