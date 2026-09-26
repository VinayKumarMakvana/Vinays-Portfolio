"use client";

import { motion } from "framer-motion";
import { Send, MapPin, Mail, Globe } from "lucide-react";

const GithubIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" stroke="none">
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
  </svg>
);

const LinkedinIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" stroke="none">
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
  </svg>
);


export function Contact() {
  return (
    <section id="contact" className="relative z-10 rounded-3xl border border-white/10 bg-gradient-to-br from-[#050B14] to-[#010308] p-6 md:p-8 overflow-hidden group shadow-2xl">
      
      {/* Background Glows */}
      <div className="absolute top-0 left-0 w-[300px] h-[300px] bg-blue-500/10 rounded-full blur-[100px] pointer-events-none group-hover:bg-blue-500/20 transition-colors duration-700" />
      <div className="absolute -bottom-32 -right-32 w-[400px] h-[400px] bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.15)_0%,transparent_60%)] rounded-full mix-blend-screen pointer-events-none" />

      <div className="relative z-10 flex flex-col xl:flex-row gap-8 items-center justify-between">
        
        {/* Column 1: Header and Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex-1 max-w-sm w-full"
        >
          <div className="text-[10px] font-bold tracking-widest uppercase text-blue-400 mb-3">
            LET'S CONNECT
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight leading-tight">
            Have a project in mind?<br/>Let's build something amazing.
          </h2>
          <p className="text-sm text-white/50 mb-6 font-medium leading-relaxed max-w-[90%]">
            I'm open to opportunities, collaborations, and projects. Feel free to reach out, I'd love to hear from you.
          </p>

          <div className="flex flex-col gap-3 text-sm text-white/80 font-medium">
            <motion.a 
              whileHover={{ scale: 1.02, x: 5 }}
              whileTap={{ scale: 0.98 }}
              href="mailto:vkmakvana.dev@gmail.com"
              className="flex items-center gap-3 group/item cursor-pointer w-fit"
            >
              <div className="w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center border border-white/10 group-hover/item:border-blue-500/50 group-hover/item:bg-blue-500/20 group-hover/item:shadow-[0_0_15px_rgba(59,130,246,0.3)] transition-all">
                <Mail className="w-4 h-4 text-white/70 group-hover/item:text-blue-400 transition-colors" />
              </div>
              <span className="group-hover/item:text-white transition-colors">vkmakvana.dev@gmail.com</span>
            </motion.a>
            <motion.a 
              whileHover={{ scale: 1.02, x: 5 }}
              whileTap={{ scale: 0.98 }}
              href="https://www.linkedin.com/in/vinay-kumar-makvana-2371ba391/" target="_blank" rel="noreferrer"
              className="flex items-center gap-3 group/item cursor-pointer w-fit"
            >
              <div className="w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center border border-white/10 group-hover/item:border-blue-500/50 group-hover/item:bg-blue-500/20 group-hover/item:shadow-[0_0_15px_rgba(59,130,246,0.3)] transition-all">
                <LinkedinIcon className="w-4 h-4 text-white/70 group-hover/item:text-blue-400 transition-colors" />
              </div>
              <span className="group-hover/item:text-white transition-colors">LinkedIn</span>
            </motion.a>
            <motion.a 
              whileHover={{ scale: 1.02, x: 5 }}
              whileTap={{ scale: 0.98 }}
              href="https://github.com/VinayKumarMakvana" target="_blank" rel="noreferrer"
              className="flex items-center gap-3 group/item cursor-pointer w-fit"
            >
              <div className="w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center border border-white/10 group-hover/item:border-blue-500/50 group-hover/item:bg-blue-500/20 group-hover/item:shadow-[0_0_15px_rgba(59,130,246,0.3)] transition-all">
                <GithubIcon className="w-4 h-4 text-white/70 group-hover/item:text-blue-400 transition-colors" />
              </div>
              <span className="group-hover/item:text-white transition-colors">GitHub</span>
            </motion.a>
            <motion.div 
              className="flex items-center gap-3 group/item w-fit"
            >
              <div className="w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center border border-white/10">
                <MapPin className="w-4 h-4 text-white/70" />
              </div>
              <span className="text-white/70">India</span>
            </motion.div>
          </div>
        </motion.div>

        {/* Column 2: Contact Form */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex-1 w-full max-w-lg"
        >
          <form 
            onSubmit={(e) => e.preventDefault()}
            className="bg-gradient-to-br from-white/[0.05] to-transparent border border-white/10 p-5 rounded-2xl shadow-[0_0_30px_rgba(0,0,0,0.5)] backdrop-blur-md relative"
          >
            {/* Form Inner Glow */}
            <div className="absolute inset-0 bg-blue-500/5 rounded-2xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="grid grid-cols-2 gap-4 mb-3 relative z-10">
              <div>
                <label className="block text-[9px] font-bold uppercase tracking-widest text-blue-300/70 mb-1.5">Name</label>
                <input 
                  type="text" 
                  placeholder="Your name" 
                  className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-2.5 text-sm text-white placeholder-white/20 focus:outline-none focus:border-blue-500 focus:bg-blue-500/10 focus:shadow-[0_0_15px_rgba(59,130,246,0.15)] transition-all"
                />
              </div>
              <div>
                <label className="block text-[9px] font-bold uppercase tracking-widest text-blue-300/70 mb-1.5">Email</label>
                <input 
                  type="email" 
                  placeholder="you@example.com" 
                  className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-2.5 text-sm text-white placeholder-white/20 focus:outline-none focus:border-blue-500 focus:bg-blue-500/10 focus:shadow-[0_0_15px_rgba(59,130,246,0.15)] transition-all"
                />
              </div>
            </div>
            <div className="mb-4 relative z-10">
              <label className="block text-[9px] font-bold uppercase tracking-widest text-blue-300/70 mb-1.5">Message</label>
              <textarea 
                placeholder="Your message..." 
                rows={4}
                className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-2.5 text-sm text-white placeholder-white/20 focus:outline-none focus:border-blue-500 focus:bg-blue-500/10 focus:shadow-[0_0_15px_rgba(59,130,246,0.15)] transition-all resize-none"
              />
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
              type="submit"
              className="relative z-10 w-full md:w-auto flex items-center justify-center gap-2 px-6 py-2.5 rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold text-sm hover:from-blue-500 hover:to-indigo-500 transition-all group/btn shadow-[0_0_20px_rgba(37,99,235,0.3)] hover:shadow-[0_0_30px_rgba(37,99,235,0.6)]"
            >
              Send Message <Send className="w-4 h-4 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
            </motion.button>
          </form>
        </motion.div>

        {/* Column 3: Globe */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.4 }}
          className="flex-1 hidden xl:flex relative h-[300px] items-center justify-center shrink-0"
        >
          {/* Globe Graphic */}
          <div className="absolute inset-0 flex items-center justify-center opacity-20 group-hover:opacity-40 transition-opacity duration-1000 rotate-12 group-hover:rotate-0">
            <Globe className="w-72 h-72 text-blue-400" strokeWidth={1} />
          </div>
          
          {/* Text Overlay */}
          <div className="relative z-10 flex flex-col items-center gap-1">
            <span className="text-xl font-bold text-white tracking-[0.2em] uppercase bg-clip-text text-transparent bg-gradient-to-r from-white to-white/70">Build</span>
            <span className="text-xl font-bold text-white tracking-[0.2em] uppercase bg-clip-text text-transparent bg-gradient-to-r from-white to-white/70">Solve</span>
            <span className="text-xl font-bold text-white tracking-[0.2em] uppercase bg-clip-text text-transparent bg-gradient-to-r from-white to-white/70">Learn</span>
            <span className="text-xl font-bold text-white tracking-[0.2em] uppercase text-blue-400 drop-shadow-[0_0_10px_rgba(96,165,250,0.8)]">Repeat</span>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
