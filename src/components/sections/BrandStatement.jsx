import React, { useRef } from 'react';
import { motion } from 'framer-motion';

const BrandStatement = () => {
  const ref = useRef(null);

  return (
    <section 
        ref={ref}
        className="relative w-full bg-black flex items-center justify-center overflow-hidden py-32 md:py-48"
    >
      <div className="w-full px-4 md:px-8">
        <motion.h2 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          className="text-[13vw] leading-[0.8] font-black text-white tracking-tighter text-center whitespace-nowrap select-none"
        >
          Revlient.
        </motion.h2>
      </div>
    </section>
  );
};

export default BrandStatement;
