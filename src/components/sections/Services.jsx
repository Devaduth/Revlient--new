import React, { useRef, useEffect, Suspense } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Code, Layout, Server, Zap, Repeat, ArrowRight } from 'lucide-react';
import Spline from '@splinetool/react-spline';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ErrorBoundary from '../ui/ErrorBoundary';

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    icon: Code,
    title: "Web Development",
    description: "Custom websites built with modern technologies for speed and scalability."
  },
  {
    icon: Server,
    title: "SaaS & CRM",
    description: "Complex web applications and internal tools tailored to your business logic."
  },
  {
    icon: Layout,
    title: "UI/UX Design",
    description: "User-centric interfaces that convert visitors into loyal customers."
  },
  {
    icon: Zap,
    title: "Performance",
    description: "Auditing and optimizing your digital presence for 100/100 Lighthouse scores."
  },
  {
    icon: Repeat,
    title: "Scaling",
    description: "Ongoing support ensuring your platform grows with your user base."
  }
];

const GlassCard = ({ service }) => {
  // Mouse position state for tilt effect
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseX = useSpring(x, { stiffness: 500, damping: 100 });
  const mouseY = useSpring(y, { stiffness: 500, damping: 100 });

  function onMouseMove({ currentTarget, clientX, clientY }) {
    const { left, top, width, height } = currentTarget.getBoundingClientRect();
    x.set(clientX - left - width / 2);
    y.set(clientY - top - height / 2);
  }

  return (
    <motion.div 
        className={`relative w-[80vw] md:w-[600px] h-[70vh] md:h-[500px] flex-shrink-0 rounded-[2rem] overflow-hidden border border-white/10 backdrop-blur-3xl bg-black/40 hover:bg-white/5 transition-all duration-500 group`}
        onMouseMove={onMouseMove}
        onMouseLeave={() => { x.set(0); y.set(0); }}
        style={{
            rotateX: useTransform(mouseY, [-250, 250], [5, -5]),
            rotateY: useTransform(mouseX, [-300, 300], [-5, 5]),
        }}
    >
        {/* Shine Effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

        <div className="relative z-10 w-full h-full p-8 md:p-12 flex flex-col justify-between">
            <div className="flex justify-between items-start">
                 <div className="p-4 rounded-2xl bg-white/10 text-white backdrop-blur-md">
                     <service.icon size={32} />
                 </div>
                 <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <ArrowRight className="text-white" size={20} />
                 </div>
            </div>

            <div>
                <h3 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight leading-tight">
                    {service.title}
                </h3>
                <p className="text-lg text-white/70 leading-relaxed max-w-md">
                    {service.description}
                </p>
            </div>
        </div>
    </motion.div>
  );
};

const Services = () => {
  const sectionRef = useRef(null);
  const triggerRef = useRef(null);
  const sliderRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const container = sliderRef.current;
      const totalWidth = container.scrollWidth;
      const windowWidth = window.innerWidth;
      
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: triggerRef.current,
          start: "top top",
          end: `+=${totalWidth}`, // Scroll duration based on content width
          pin: true,
          scrub: 1,
          snap: 1 / (services.length - 1),
          invalidateOnRefresh: true,
        }
      });

      // Horizontal Scroll
      tl.to(container, {
        x: -(totalWidth - windowWidth + 100), // Scroll to end with some padding
        ease: "none"
      });
      
      // Parallax Background Effect via GSAP
      // Assuming the background is fixed, we can subtly move or rotate elements?
      // Since Spline is internal, we might move the container slightly for parallax feeling
      
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative z-10 bg-black">
      <div ref={triggerRef} className="h-screen w-full overflow-hidden flex items-center relative">
        
        {/* Background - Fixed Parallax Layer */}
        <div className="absolute inset-0 w-full h-full pointer-events-none">
            <ErrorBoundary fallback={<div className="w-full h-full bg-gradient-to-b from-black to-gray-900" />}>
                 <Suspense fallback={null}>
                    {/* Using a larger scene or scaling it up */}
                    <div className="w-[120%] h-[120%] -ml-[10%] -mt-[10%] opacity-60 grayscale brightness-75 contrast-125">
                         <Spline scene="https://prod.spline.design/kZDDjO5HuC9GJJwn/scene.splinecode" />
                    </div>
                 </Suspense>
            </ErrorBoundary>
        </div>

        {/* Floating Title (Fixed Position) */}
        <div className="absolute top-10 left-6 md:left-20 z-20">
             <h2 className="text-sm font-medium tracking-widest text-gray-400 uppercase mb-2">Capabilities</h2>
             <p className="text-3xl font-bold text-white">Innovation in motion.</p>
        </div>

        {/* Horizontal Card Container */}
        <div 
             ref={sliderRef} 
             className="flex gap-10 md:gap-20 px-6 md:px-20 items-center h-full pt-20"
             style={{ width: 'fit-content' }}
        >
             {services.map((service, i) => (
                 <GlassCard key={i} service={service} />
             ))}
             
             {/* End Spacer */}
             <div className="w-20 flex-shrink-0" />
        </div>

      </div>
    </section>
  );
};

export default Services;
