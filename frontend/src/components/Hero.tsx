"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Download, Code2, Mail, Briefcase, TerminalSquare } from "lucide-react";
import { useRecruiterMode } from "./RecruiterModeContext";
import { Marquee } from "./ui/Marquee";

const titles = [
  "Full Stack Engineer",
  "AI Integrator",
  "React Specialist",
  "Backend Architect",
  "Creative Coder",
];

const techStack = [
  "React", "Next.js", "TypeScript", "Node.js", "Tailwind CSS", "MongoDB", "PostgreSQL", "Python", "Java", "Framer Motion", "Docker", "AWS"
];

export function Hero() {
  const [titleIndex, setTitleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const { isRecruiterMode } = useRecruiterMode();

  // Typing Effect
  useEffect(() => {
    const currentTitle = titles[titleIndex];
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (displayText.length < currentTitle.length) {
          setDisplayText(currentTitle.slice(0, displayText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (displayText.length === 0) {
          setIsDeleting(false);
          setTitleIndex((prev) => (prev + 1) % titles.length);
        } else {
          setDisplayText(currentTitle.slice(0, displayText.length - 1));
        }
      }
    }, isDeleting ? 40 : 80);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, titleIndex]);

  return (
    <section className="min-h-screen flex flex-col justify-center relative overflow-hidden pt-28 pb-12" id="home">
      {/* Dynamic Background Glows */}
      <div className="absolute top-1/4 -left-64 w-[500px] h-[500px] bg-accent-tertiary/20 rounded-full blur-[120px] pointer-events-none mix-blend-screen" />
      <div className="absolute bottom-1/4 -right-64 w-[600px] h-[600px] bg-accent-secondary/15 rounded-full blur-[150px] pointer-events-none mix-blend-screen" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent-primary/10 rounded-full blur-[150px] pointer-events-none mix-blend-screen" />

      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center relative z-10 flex-grow">
        
        {/* Left Column - Content */}
        <motion.div
          variants={{
            hidden: { opacity: 0 },
            show: {
              opacity: 1,
              transition: { staggerChildren: 0.15, delayChildren: 0.2 }
            }
          }}
          initial="hidden"
          animate="show"
          className="flex flex-col gap-6"
        >
          <motion.div 
            variants={{
              hidden: { opacity: 0, scale: 0.8 },
              show: { opacity: 1, scale: 1, transition: { type: "spring", bounce: 0.5 } }
            }}
            className="inline-block"
          >
            <span className="glass-panel px-4 py-2 rounded-full text-xs font-bold tracking-widest uppercase text-accent-primary border border-accent-primary/30 flex items-center w-max gap-2 shadow-[0_0_20px_rgba(0,255,178,0.2)]">
              <span className="w-2 h-2 rounded-full bg-accent-primary animate-pulse" />
              Available for work
            </span>
          </motion.div>
          
          <motion.h1 
            variants={{
              hidden: { opacity: 0, y: 30 },
              show: { opacity: 1, y: 0, transition: { type: "spring", bounce: 0.4 } }
            }}
            className="text-5xl sm:text-6xl md:text-8xl font-black tracking-tighter leading-[1.1]"
          >
            Hi, I'm <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-accent-primary to-accent-tertiary text-glow dark:from-white dark:via-accent-primary dark:to-accent-tertiary inline-block hover:scale-105 transition-transform duration-300">
              Vinay
            </span>
          </motion.h1>
          
          <motion.div 
            variants={{
              hidden: { opacity: 0, x: -20 },
              show: { opacity: 1, x: 0, transition: { type: "spring", bounce: 0.4 } }
            }}
            className="h-14 flex items-center"
          >
            <span className="text-2xl sm:text-3xl md:text-4xl text-foreground/80 font-bold border-r-4 border-accent-primary pr-2 animate-[pulse_1s_infinite]">
              {displayText}
            </span>
          </motion.div>
          
          <motion.p 
            variants={{
              hidden: { opacity: 0, y: 20 },
              show: { opacity: 1, y: 0 }
            }}
            className="text-lg text-foreground/60 max-w-xl leading-relaxed font-medium"
          >
            I engineer <span className="text-foreground">high-performance web applications</span> with scalable architecture and premium aesthetics. Turning complex logic into elegant user experiences.
          </motion.p>
          
          <motion.div 
            variants={{
              hidden: { opacity: 0, y: 20 },
              show: { opacity: 1, y: 0 }
            }}
            className="flex flex-col sm:flex-row items-center gap-4 mt-6"
          >
            <motion.a 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#projects" 
              className="group relative w-full sm:w-auto px-8 py-4 rounded-2xl overflow-hidden bg-foreground text-background font-bold text-center transition-all shadow-[0_0_40px_rgba(0,255,178,0.3)] hover:shadow-[0_0_60px_rgba(0,255,178,0.5)]"
            >
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-accent-primary to-accent-tertiary opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
              <span className="relative flex items-center justify-center gap-2">
                View Work <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </motion.a>
            
            <motion.a 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="https://docs.google.com/document/d/1cW0W3FaR0ImNqtcg4APJV6QT8t3alWRQ/edit?usp=sharing&ouid=106298634269193911215&rtpof=true&sd=true" 
              target="_blank" 
              className="group w-full sm:w-auto px-8 py-4 rounded-2xl glass-panel font-bold hover:bg-white/5 transition-colors flex items-center justify-center gap-2 border border-white/10 text-foreground"
            >
              <Download className="w-5 h-5 group-hover:-translate-y-1 transition-transform" />
              Resume
            </motion.a>
          </motion.div>

          {/* Social Links */}
          <motion.div 
            variants={{
              hidden: { opacity: 0 },
              show: { opacity: 1, transition: { staggerChildren: 0.1 } }
            }}
            className="flex items-center gap-4 mt-4 pt-6 border-t border-foreground/10"
          >
            <span className="text-sm font-medium text-foreground/40 uppercase tracking-widest mr-2">Connect</span>
            {[
              { icon: <Code2 className="w-5 h-5" />, href: "https://github.com/VinayKumarMakvana", color: "hover:text-accent-primary" },
              { icon: <Briefcase className="w-5 h-5" />, href: "https://www.linkedin.com/in/vinay-kumar-makvana-2371ba391/", color: "hover:text-accent-tertiary" },
              { icon: <Mail className="w-5 h-5" />, href: "mailto:vkmakvana.dev@gmail.com", color: "hover:text-accent-secondary" }
            ].map((social, i) => (
              <motion.a 
                key={i}
                variants={{
                  hidden: { opacity: 0, scale: 0 },
                  show: { opacity: 1, scale: 1, transition: { type: "spring", bounce: 0.5 } }
                }}
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                href={social.href} 
                target="_blank" 
                rel="noreferrer" 
                className={`p-3 rounded-full glass hover:bg-white/10 transition-colors ${social.color}`}
              >
                {social.icon}
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        {/* Right Column - Premium Abstract Visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
          className="relative h-[500px] md:h-[600px] hidden lg:flex items-center justify-center perspective-1000"
        >
          {/* Central Glass Card */}
          <motion.div 
            animate={{ 
              y: [0, -15, 0],
              rotateX: [5, 10, 5],
              rotateY: [-5, 5, -5]
            }}
            transition={{ 
              duration: 6, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }}
            className="relative w-80 h-[400px] glass-panel rounded-3xl p-6 border border-white/20 shadow-2xl z-20 overflow-hidden group"
          >
            {/* Animated Gradient Inside Card */}
            <div className="absolute inset-0 bg-gradient-to-br from-accent-primary/20 via-transparent to-accent-secondary/20 opacity-50 group-hover:opacity-100 transition-opacity duration-700" />
            
            <div className="relative w-full h-48 rounded-2xl overflow-hidden mb-6 border border-white/10 bg-black/20">
              <div className="absolute inset-0 bg-mesh opacity-50" />
              <img
                src="./img/vinay.png"
                alt="Vinay Kumar Makvana"
                className="w-full h-full object-cover mix-blend-luminosity hover:mix-blend-normal transition-all duration-700 scale-105 hover:scale-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
              <div className="absolute bottom-3 left-3 flex items-center gap-2">
                <TerminalSquare className="w-4 h-4 text-accent-primary" />
                <span className="text-xs font-mono text-white/80">developer.ts</span>
              </div>
            </div>

            <div className="space-y-4">
              <div className="h-2 w-1/3 bg-white/10 rounded-full" />
              <div className="h-2 w-3/4 bg-white/10 rounded-full" />
              <div className="h-2 w-1/2 bg-white/10 rounded-full" />
            </div>

            {/* Recruiter Quick Stats inside card */}
            <AnimatePresence>
              {isRecruiterMode && (
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  className="absolute bottom-6 left-6 right-6 glass p-4 rounded-xl border border-accent-tertiary/30 shadow-[0_0_30px_rgba(0,212,255,0.2)] bg-black/40 backdrop-blur-xl"
                >
                  <div className="text-xs font-black uppercase tracking-widest text-accent-tertiary mb-2">Top Skills Match</div>
                  <div className="flex flex-wrap gap-2">
                    {["React", "Next.js", "Node", "Java"].map(skill => (
                      <span key={skill} className="text-[10px] px-2 py-1 rounded bg-white/10 text-white font-medium">{skill}</span>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          {/* Floating Abstract Shapes */}
          <motion.div 
            animate={{ rotate: 360 }} 
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 z-10 pointer-events-none"
          >
            <div className="absolute top-10 left-10 w-24 h-24 rounded-full border border-accent-primary/30 border-dashed" />
            <div className="absolute bottom-20 right-10 w-32 h-32 rounded-full border border-accent-secondary/30" />
            <div className="absolute top-1/2 -right-10 w-16 h-16 rounded-lg border border-accent-tertiary/40 rotate-45" />
          </motion.div>
        </motion.div>
      </div>

      {/* Marquee Section to fill bottom empty space */}
      <div className="relative z-10 mt-20 pt-10 border-t border-white/5 bg-background/40 backdrop-blur-sm">
        <p className="text-center text-sm font-bold tracking-widest uppercase text-foreground/40 mb-6">Technologies I work with</p>
        <Marquee speed={50} className="py-4">
          {techStack.map((tech, index) => (
            <div key={index} className="mx-6 md:mx-12 flex items-center gap-2 opacity-60 hover:opacity-100 transition-opacity cursor-default">
              <span className="text-xl md:text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-foreground/50 to-foreground/80 hover:from-accent-primary hover:to-accent-tertiary">
                {tech}
              </span>
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
}
