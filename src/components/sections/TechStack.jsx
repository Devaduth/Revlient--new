import React from 'react';
import { motion } from 'framer-motion';
import { Database, Server, Globe, Cpu, Cloud, Code } from 'lucide-react';

const technologies = [
  { name: 'React', icon: Globe },
  { name: 'Node.js', icon: Server },
  { name: 'MongoDB', icon: Database },
  { name: 'Tailwind', icon: Code },
  { name: 'AWS', icon: Cloud },
  { name: 'Next.js', icon: Cpu }
];

const TechStack = () => {
  return (
    <section className="py-24 w-full relative z-10 bg-black/50 overflow-hidden">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-sm md:text-base font-medium tracking-widest text-secondary mb-12 uppercase">
            Powered By Modern Tech
        </h2>
        
        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20">
            {technologies.map((tech, index) => (
                <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex flex-col items-center gap-4 text-gray-500 hover:text-white transition-colors duration-300"
                >
                    <tech.icon size={48} strokeWidth={1} />
                    <span className="text-sm font-medium tracking-wide">{tech.name}</span>
                </motion.div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
