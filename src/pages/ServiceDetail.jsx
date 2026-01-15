import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';

const ServiceDetail = () => {
  const { id } = useParams();
  const serviceTitle = id.replace(/-/g, ' ').toUpperCase();

  // Premium Antigravity Easing
  const ease = [0.16, 1, 0.3, 1];

  return (
    <div className="min-h-screen bg-black text-white selection:bg-white selection:text-black">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 w-full z-50 p-8 md:p-12 mix-blend-difference">
        <Link to="/" className="flex items-center gap-3 text-white hover:opacity-50 transition-opacity duration-500 group">
          <ArrowLeft size={24} className="group-hover:-translate-x-2 transition-transform duration-500" />
          <span className="uppercase tracking-[0.2em] text-xs font-semibold">Back</span>
        </Link>
      </nav>

      {/* Hero Section */}
      <section className="min-h-[80vh] flex flex-col justify-center px-8 md:px-24 pt-32 md:pt-40 border-b border-white/5">
        <motion.div 
           initial={{ opacity: 0, y: 100 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 1.5, ease }}
           className="max-w-7xl"
        >
          <span className="block text-xs font-mono text-white/30 mb-8 tracking-[0.2em]">
            SERVICE / {id}
          </span>
          
          <h1 className="text-7xl md:text-[10rem] font-black tracking-tighter leading-[0.85] mb-16 text-transparent bg-clip-text bg-gradient-to-br from-white to-white/60">
            {serviceTitle}
          </h1>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1.5, ease }}
            className="text-2xl md:text-3xl text-white/60 max-w-3xl leading-relaxed font-light"
          >
            Comprehensive solutions designed to scale. We dive deep into the technical architecture to ensure robustness, security, and performance.
          </motion.p>
        </motion.div>
      </section>

      {/* Content Section */}
      <section className="py-32 md:py-48 px-8 md:px-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-32">
          <div>
            <h2 className="text-xl font-bold tracking-tight mb-16 border-l-2 border-white pl-6">What We Deliver</h2>
            <ul className="space-y-12">
              {[
                "Custom Architecture Design",
                "Scalable Infrastructure",
                "Performance Optimization",
                "Full-Stack Implementation"
              ].map((item, i) => (
                <motion.li 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 1, ease }}
                  className="flex items-baseline gap-8 py-6 border-b border-white/5 hover:pl-4 transition-all duration-500 cursor-default"
                >
                  <span className="text-xs font-mono text-white/20">0{i + 1}</span>
                  <span className="text-3xl md:text-4xl font-semibold tracking-tight">{item}</span>
                </motion.li>
              ))}
            </ul>
          </div>
          
          <div className="space-y-12 pt-10">
             <div className="p-12 bg-white/5 rounded-3xl border border-white/5 backdrop-blur-sm">
                <h3 className="text-2xl font-bold mb-6">Why Revlient?</h3>
                <p className="text-xl text-white/50 leading-relaxed font-light">
                  We don't simply ship features; we engineer systems. Our approach is grounded in computer science fundamentals and modern best practices.
                </p>
             </div>
             
             <button className="w-full py-8 bg-white text-black text-lg font-bold uppercase tracking-[0.2em] hover:bg-neutral-200 transition-colors duration-500 rounded-lg">
                Start Project
             </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServiceDetail;
