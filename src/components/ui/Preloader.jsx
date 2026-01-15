import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const words = [
  "Designing digital experiences",
  "Engineering modern products",
  "Building scalable systems"
];

const Preloader = ({ onComplete }) => {
  const [index, setIndex] = useState(0);
  const [showBrand, setShowBrand] = useState(false);
  const [zoom, setZoom] = useState(false);

  // Sequence Timer
  useEffect(() => {
    // 1. Text Carousel Phase
    const wordInterval = setInterval(() => {
      setIndex((prev) => {
        if (prev === words.length - 1) {
          clearInterval(wordInterval);
          // End of carousel, trigger brand reveal
          setTimeout(() => setShowBrand(true), 400); 
          return prev;
        }
        return prev + 1;
      });
    }, 800); // 800ms per word (2.4s total)

    return () => clearInterval(wordInterval);
  }, []);

  // Trigger Zoom after brand has been on screen for a bit
  useEffect(() => {
    if (showBrand) {
      const zoomTimer = setTimeout(() => {
        setZoom(true);
      }, 1000); // Wait 1s before zooming

      const completeTimer = setTimeout(() => {
        if(onComplete) onComplete();
      }, 2500); // Total zoom duration + buffer

      return () => {
        clearTimeout(zoomTimer);
        clearTimeout(completeTimer);
      }
    }
  }, [showBrand, onComplete]);

  return (
    <motion.div 
        className="fixed inset-0 z-[9999] flex items-center justify-center bg-black cursor-none"
        initial={{ opacity: 1 }}
        exit={{ opacity: 0, transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } }}
    >
      
      {/* PHASE 1: Text Carousel */}
      <AnimatePresence mode="wait">
        {!showBrand && (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 10, filter: "blur(5px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            exit={{ opacity: 0, y: -10, filter: "blur(5px)" }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="absolute text-white/50 text-sm md:text-base font-mono tracking-widest uppercase"
          >
            {words[index]}
          </motion.div>
        )}
      </AnimatePresence>

      {/* PHASE 2 & 3: Brand Reveal & ZOOM (SVG Mask Method) */}
      {showBrand && (
         <div className="absolute inset-0 w-full h-full">
            {/* 
                We use an SVG mask to achieve the "See through text" effect.
                - The <rect> fills the screen with black.
                - The <mask> determines transparency. 
                  - White in mask = Opaque (Black Rect Visible)
                  - Black in mask = Transparent (Hole in Rect -> Seeing Website)
            */}
            <svg className="w-full h-full" viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid slice">
                <defs>
                    <mask id="brand-mask">
                        {/* Base: Opaque White (Shows the black overlay) */}
                        <rect x="0" y="0" width="1920" height="1080" fill="white" />
                        
                        {/* The Text Hole: Black (Hides the black overlay -> Transparent) */}
                        <motion.text 
                            x="50%" 
                            y="50%" 
                            textAnchor="middle" 
                            dominantBaseline="middle"
                            fill="black" 
                            fontSize="180" 
                            fontWeight="900"
                            fontFamily="system-ui, -apple-system, sans-serif"
                            letterSpacing="-10"
                            initial={{ scale: 1 }}
                            animate={zoom ? { scale: 50 } : { scale: 1 }}
                            transition={{ duration: 1.5, ease: [0.76, 0, 0.24, 1] }}
                        >
                            REVLIENT
                        </motion.text>
                    </mask>
                </defs>
                
                {/* The Overlay Rect using the Mask */}
                <rect 
                    x="0" y="0" width="100%" height="100%" 
                    fill="black" 
                    mask="url(#brand-mask)" 
                />
            </svg>

            {/* 
                Visual Fix:
                Before the zoom, we show matching white text to ensure it looks "solid".
                This fades out instantly as zoom starts.
            */}
            {!zoom && (
                <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className="absolute inset-0 flex items-center justify-center pointer-events-none"
                >
                    {/* Matching typography properties is crucial */}
                    <h1 
                        style={{ fontFamily: "system-ui, -apple-system, sans-serif", fontSize: "min(9.3vw, 180px)", letterSpacing: "-0.05em" }}
                        className="font-black text-white"
                    >
                        REVLIENT
                    </h1>
                </motion.div>
            )}
         </div>
      )}

    </motion.div>
  );
};

export default Preloader;
