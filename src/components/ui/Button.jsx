import React from 'react';
import { motion } from 'framer-motion';

const Button = ({ children, variant = 'primary', className = '', ...props }) => {
  const baseStyles = "px-6 py-3 rounded-full font-medium text-sm transition-all duration-300 flex items-center gap-2";
  
  const variants = {
    primary: "bg-white text-black hover:bg-gray-200",
    outline: "border border-white/20 text-white hover:bg-white/10 backdrop-blur-sm",
    ghost: "text-white/70 hover:text-white hover:bg-white/5",
  };

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </motion.button>
  );
};

export default Button;
