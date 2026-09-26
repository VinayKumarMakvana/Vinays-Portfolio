"use client";

import { motion } from "framer-motion";
import { ArrowRight, GraduationCap, MapPin, Sparkles, Code2 } from "lucide-react";
import { Caveat } from "next/font/google";

const caveat = Caveat({ subsets: ["latin"], weight: ["400", "700"] });

export function About() {
  return (
    <section id="about" className="relative z-10 w-full pt-8 pb-4 max-w-[1100px] mx-auto">
      <div className="bg-[#050B14] rounded-2xl border border-white/5 p-6 md:p-8 relative overflow-hidden flex flex-col md:flex-row gap-8 items-center shadow-lg">
        
        {/* Background Gradients */}
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-indigo-500/10 rounded-full blur-[100px] pointer-events-none translate-x-1/2 -translate-y-1/2" />
        
        {/* Left: Text & Pills */}
        <div className="flex-1 flex flex-col">
          <div className="text-[10px] font-bold tracking-widest text-indigo-400 uppercase mb-2">ABOUT ME</div>
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-3 leading-tight">More Than Just Code</h2>
          <p className="text-white/60 text-sm leading-relaxed mb-5">
            I'm a BCA student with a deep interest in Full-Stack Development with AI and Software Engineering. I enjoy building modern web applications, robust backends, and learning core concepts like C++, DSA, and System Design to grow as an engineer. I believe in continuous learning — every single day.
          </p>
          
          {/* Compact Feature Pills */}
          <div className="flex flex-wrap gap-3 mb-6">
            <motion.div whileHover={{ scale: 1.02, y: -2 }} className="flex items-center gap-2.5 p-2.5 pr-4 rounded-xl bg-white/[0.03] border border-white/5 hover:border-indigo-500/30 transition-all cursor-default">
              <div className="p-1.5 rounded-lg bg-white/5 text-indigo-400"><GraduationCap className="w-4 h-4" /></div>
              <div className="flex flex-col">
                <span className="text-white font-bold text-[11px]">BCA Student</span>
                <span className="text-white/40 text-[9px]">Full-Stack & AI</span>
              </div>
            </motion.div>

            <motion.div whileHover={{ scale: 1.02, y: -2 }} className="flex items-center gap-2.5 p-2.5 pr-4 rounded-xl bg-white/[0.03] border border-white/5 hover:border-indigo-500/30 transition-all cursor-default">
              <div className="p-1.5 rounded-lg bg-white/5 text-indigo-400"><Sparkles className="w-4 h-4" /></div>
              <div className="flex flex-col">
                <span className="text-white font-bold text-[11px]">Full-Stack Dev</span>
                <span className="text-white/40 text-[9px]">With AI Integrations</span>
              </div>
            </motion.div>

            <motion.div whileHover={{ scale: 1.02, y: -2 }} className="flex items-center gap-2.5 p-2.5 pr-4 rounded-xl bg-white/[0.03] border border-white/5 hover:border-indigo-500/30 transition-all cursor-default">
              <div className="p-1.5 rounded-lg bg-white/5 text-indigo-400"><Code2 className="w-4 h-4" /></div>
              <div className="flex flex-col">
                <span className="text-white font-bold text-[11px]">Software Eng.</span>
                <span className="text-white/40 text-[9px]">C++ • DSA • System Design</span>
              </div>
            </motion.div>
          </div>

          <a 
            href="#projects" 
            className="inline-flex items-center justify-center gap-2 px-5 py-2 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-white font-medium text-xs transition-all group w-fit"
          >
            Know More About Me <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        {/* Right: Compact Visual */}
        <div className="w-full md:w-[320px] shrink-0 relative rounded-2xl overflow-hidden h-[240px] border border-white/5 group">
          <div className="absolute inset-0 bg-[url('/about_hoodie.jpg')] bg-cover bg-center bg-no-repeat group-hover:scale-105 transition-transform duration-700"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#050B14] via-[#050B14]/20 to-transparent opacity-80" />
          <div className={`absolute bottom-4 right-4 z-10 rotate-[-5deg] ${caveat.className}`}>
            <div className="text-2xl text-white/90 drop-shadow-md text-right leading-none tracking-wide">
              Disciplined<br/>Consistent<br/>Better Everyday
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
