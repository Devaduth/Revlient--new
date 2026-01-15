import React, { useRef, Suspense } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Code, Layout, Server, Zap, Repeat, ArrowUpRight } from 'lucide-react';
import Spline from '@splinetool/react-spline';
import ErrorBoundary from '../ui/ErrorBoundary';

const services = [
  {
    id: '01',
    icon: Code,
    title: "Web Development",
    tags: ["React", "Next.js", "WebGL"],
    description: "We build digital platforms that define industries. Clean code, perfect semantics, and lightning-fast performance standard."
  },
  {
    id: '02',
    icon: Server,
    title: "SaaS & CRM",
    tags: ["Scalability", "Architecture", "Security"],
    description: "Complex business logic translated into intuitive software. We build the engines that power high-growth startups."
  },
  {
    id: '03',
    icon: Layout,
    title: "UI/UX Design",
    tags: ["Design Systems", "Prototyping", "Motion"],
    description: "Interfaces that feel inevitable. We strip away the noise to reveal the essential interaction patterns your users need."
  },
  {
    id: '04',
    icon: Zap,
    title: "Performance",
    tags: ["Optimization", "Lighthouse", "SEO"],
    description: "Speed is a feature. We audit, optimize, and refactor existing codebases to achieve 100/100 performance scores."
  },
  {
    id: '05',
    icon: Repeat,
    title: "Scaling",
    tags: ["Cloud", "DevOps", "Maintenance"],
    description: "Infrastructure that grows with you. From MVP to IPO, we ensure your tech stack never becomes a bottleneck."
  }
];

const ServiceBlock = ({ service }) => {
  const ref = useRef(null);
  const slug = service.title.toLowerCase().replace(/ & /g, '-').replace(/ /g, '-').replace(/\//g, '-');
  
  return (
    <motion.div 
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ margin: "-20%", once: true }}
      transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }} // Antigravity ease
      className="min-h-[70vh] flex flex-col justify-center py-24 md:py-32 border-b border-white/5 last:border-none"
    >
      <div className="mb-12 flex items-center gap-6 text-white/30 font-mono text-xs tracking-[0.2em] uppercase">
        <span>{service.id}</span>
        <div className="h-px w-20 bg-white/10" />
        <service.icon size={16} />
      </div>

      <Link to={`/service/${slug}`} className="block group cursor-pointer mb-10">
        <h3 className="text-6xl md:text-9xl font-black text-white tracking-tighter leading-[0.85] group-hover:opacity-70 transition-opacity duration-700">
          {service.title}
        </h3>
      </Link>

      <div className="flex flex-wrap gap-4 mb-10">
        {service.tags.map(tag => (
          <span key={tag} className="px-4 py-1.5 rounded-full border border-white/10 text-white/50 text-[10px] uppercase tracking-[0.15em] hover:bg-white hover:text-black transition-colors duration-500">
            {tag}
          </span>
        ))}
      </div>

      <p className="text-xl md:text-3xl text-white/60 max-w-2xl leading-relaxed font-light tracking-tight">
        {service.description}
      </p>
      
      <div className="mt-16">
        <Link to={`/service/${slug}`} className="group inline-flex items-center gap-3 text-white border-b border-white/0 hover:border-white transition-all pb-1">
          <span className="uppercase tracking-[0.2em] text-xs font-medium">Explore</span>
          <ArrowUpRight size={14} className="opacity-50 group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform duration-500" />
        </Link>
      </div>
    </motion.div>
  );
};

const Services = () => {
  return (
    <section id="services" className="relative bg-black text-white w-full">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row">
          
          <div className="w-full lg:w-1/2 relative z-10 pt-32 pb-60">
             <div className="mb-40 pl-2">
                <h2 className="text-xs font-bold tracking-[0.3em] text-white/30 uppercase mb-8 ml-1">Capabilities</h2>
                <p className="text-5xl md:text-6xl text-white font-normal tracking-tighter leading-tight">
                  Engineering the <br/>
                  <span className="text-white/30">unimagined.</span>
                </p>
             </div>

             <div className="flex flex-col gap-10">
                {services.map((service, i) => (
                  <ServiceBlock key={i} service={service} />
                ))}
             </div>
          </div>

          <div className="hidden ml-20 lg:block w-screen h-screen sticky top-0 right-0 z-0">
             <div className="absolute inset-0 w-full h-full"> 
                <ErrorBoundary fallback={<div className="w-full h-full bg-neutral-900" />}>
                     <Suspense fallback={<div className="w-full h-full bg-black/50" />}>
                        <div className="w-full ml-20 h-full grayscale opacity-80 mix-blend-screen brightness-90 contrast-125 scale-110">
                            <Spline scene="https://prod.spline.design/6PM9t8MSp3l2FpSQ/scene.splinecode" />
                        </div>
                     </Suspense>
                </ErrorBoundary>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Services;
