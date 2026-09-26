"use client";

import React from 'react';
import { motion } from 'framer-motion';

export function Logo({ className = "" }: { className?: string }) {
  return (
    <motion.div 
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.92 }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
      className={`relative flex items-center justify-center w-10 h-10 rounded-xl bg-[#050B14] border border-blue-500/30 hover:border-blue-400/80 shadow-[0_0_15px_rgba(59,130,246,0.15)] hover:shadow-[0_0_30px_rgba(59,130,246,0.6)] cursor-pointer overflow-hidden group transition-all duration-300 ${className}`}
    >
      {/* Hover Background Glow */}
      <div className="absolute inset-0 bg-blue-500/0 group-hover:bg-blue-500/20 transition-colors duration-300 z-0" />
      
      {/* Continuous Shine Effect */}
      <motion.div 
        className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 z-0"
        animate={{ x: ["-150%", "150%"] }}
        transition={{ 
          repeat: Infinity, 
          repeatType: "loop", 
          duration: 2, 
          ease: "linear",
          repeatDelay: 3
        }}
      />
      
      <span className="relative z-10 font-outfit font-bold text-[17px] tracking-widest text-white ml-[2px] group-hover:text-white group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)] transition-all duration-300">
        VM
      </span>
    </motion.div>
  );
}
