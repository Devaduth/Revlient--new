import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const stories = [
  {
    title: "Design-first thinking",
    description: "Every pixel serves a purpose. We start with the user experience and build outwards."
  },
  {
    title: "Engineering with precision",
    description: "Code that is as beautiful as the design. Clean, maintainable, and robust."
  },
  {
    title: "Scalable architecture",
    description: "Built for growth. Our solutions handle millions of requests without breaking a sweat."
  },
  {
    title: "Performance-driven builds",
    description: "Speed is a feature. We optimize every asset and line of code for maximum velocity."
  }
];

const ScrollStory = () => {
  const containerRef = useRef(null);
  const triggerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const items = gsap.utils.toArray('.story-item');
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: triggerRef.current,
          start: "top top",
          end: "+=4000", 
          pin: true,
          scrub: 1,
          anticipatePin: 1
        }
      });

      // Clear any existing styles
      gsap.set(items, { opacity: 0, scale: 0.8, filter: 'blur(10px)', y: 50 });

      items.forEach((item, i) => {
        // Fade In
        tl.to(item, { 
           opacity: 1, 
           scale: 1, 
           filter: 'blur(0px)', 
           y: 0, 
           duration: 2, 
           ease: "power3.out" 
        }, i * 4); // Start at interval

        // Fade Out (unless it's the last one, maybe keep it simpler? No, fade out effectively)
        tl.to(item, { 
           opacity: 0, 
           scale: 1.1, 
           filter: 'blur(10px)', 
           y: -50, 
           duration: 2, 
           ease: "power3.in" 
        }, i * 4 + 3); // Start fade out after hold time (3s duration logic relative to timeline)
      });

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="relative bg-transparent">
        {/* Trigger container is what gets pinned */}
        <div ref={triggerRef} className="h-screen w-full flex items-center justify-center relative overflow-hidden">
            {stories.map((story, i) => (
                <div key={i} className="story-item absolute text-center max-w-4xl px-6">
                    <h2 className="text-4xl md:text-6xl font-bold mb-6 text-white tracking-tight">
                        {story.title}
                    </h2>
                    <p className="text-xl md:text-2xl text-gray-400">
                        {story.description}
                    </p>
                </div>
            ))}
        </div>
        
        {/* 
           Crucial: We do NOT need an extra spacer div here when using pin: true on the triggerRef directly 
           if that triggerRef IS the container we want to view.
           However, usually we want the pin spacing to be handled by ScrollTrigger.
           The structure here: 
           outer (containerRef) -> inner (triggerRef - pinned)
           The scroll distance is determined by 'end' value.
        */}
    </div>
  );
};

export default ScrollStory;
