"use client";

import { motion } from "framer-motion";
import { ExternalLink, ArrowRight } from "lucide-react";

const GithubIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" stroke="none">
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
  </svg>
);

const projects = [
  {
    num: "01",
    title: "Interview AI",
    tags: ["AI", "Web App", "Productivity"],
    desc: "AI-powered interview preparation platform with mock interviews, AI feedback, and performance analytics.",
    tech: ["Next.js", "TypeScript", "OpenAI", "Tailwind CSS"],
    live: "https://interview-plan-blue.vercel.app/",
    image: "/interview-preview.jpg", // Generated image
  },
  {
    num: "02",
    title: "Zipflo",
    tags: ["Full-Stack", "Real-time", "File Sharing"],
    desc: "File sharing and collaboration platform with real-time sync, secure storage, and modern UI.",
    tech: ["React", "Node.js", "MongoDB", "Socket.io"],
    live: "https://www.zipflo.store/",
    image: "/zipflo-preview1.png", // Existing image
  }
];

export function Projects() {
  return (
    <section id="projects" className="h-full relative z-10 rounded-3xl border border-white/5 bg-[#050B14] p-5 sm:p-8 md:p-10 flex flex-col group overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-indigo-500/5 rounded-full blur-[100px] pointer-events-none group-hover:bg-indigo-500/10 transition-colors duration-700" />
      
      <div className="relative z-10 h-full flex flex-col">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="text-[10px] font-bold tracking-[0.2em] uppercase text-blue-400 mb-2">
              FEATURED PROJECTS
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-white leading-tight mb-3 tracking-tight">
              Projects That Create Real Impact.
            </h2>
            <p className="text-[13px] text-white/50 font-medium max-w-lg leading-relaxed">
              Some of my recent work. Each project is built with real-world use cases and modern technologies.
            </p>
          </motion.div>
          
          <motion.a 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
            href="https://github.com/VinayKumarMakvana"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 px-6 py-2.5 rounded-full bg-blue-600 text-white text-[11px] font-bold group hover:bg-blue-500 shadow-[0_0_20px_rgba(37,99,235,0.3)] hover:shadow-[0_0_30px_rgba(37,99,235,0.6)] transition-shadow duration-300"
          >
            View All Projects
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </motion.a>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 mt-4">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group/proj rounded-2xl bg-[#0A0F1C]/40 border border-white/5 overflow-hidden hover:border-blue-500/50 hover:bg-blue-900/10 hover:shadow-[0_20px_40px_rgba(59,130,246,0.2)] transform hover:-translate-y-3 transition-all duration-500 flex flex-col pt-6 px-6"
            >
              {/* Content Header */}
              <div className="flex flex-col mb-5">
                
                {/* Number & Title */}
                <div className="flex items-center gap-4 mb-3">
                  <div className="w-10 h-10 rounded-[10px] bg-transparent border border-white/10 flex items-center justify-center text-[13px] font-bold text-white group-hover/proj:text-blue-400 group-hover/proj:border-blue-500/30 transition-colors">
                    {project.num}
                  </div>
                  <h3 className="text-xl font-bold text-white tracking-tight">
                    {project.title}
                  </h3>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-3">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="text-[10px] font-medium bg-white/5 border border-white/10 px-3 py-1.5 rounded-full text-white/70">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Description */}
                <p className="text-[12px] text-white/50 leading-relaxed max-w-sm mb-4">
                  {project.desc}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((t, i) => (
                    <span key={i} className="text-[10px] border border-white/10 px-3 py-1.5 rounded-full text-white/60">
                      {t}
                    </span>
                  ))}
                </div>

                {/* Buttons (Only Live Demo) */}
                <div className="flex items-center gap-3">
                  <motion.a 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    href={project.live} 
                    target="_blank" 
                    rel="noreferrer"
                    className="bg-blue-600 text-white hover:bg-blue-500 flex items-center gap-2 text-[11px] font-bold px-6 py-2.5 rounded-lg shadow-[0_0_15px_rgba(37,99,235,0.3)] hover:shadow-[0_0_25px_rgba(37,99,235,0.6)] transition-shadow duration-300 group"
                  >
                    Live Demo <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </motion.a>
                </div>
              </div>

              {/* Image Box */}
              <div className="w-full h-[180px] sm:h-[220px] mt-auto rounded-t-xl overflow-hidden relative bg-[#050B14] border-t border-l border-r border-white/10 shadow-[0_-10px_30px_rgba(0,0,0,0.5)] group-hover/proj:border-blue-500/30 transition-colors">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover object-top opacity-80 group-hover/proj:opacity-100 group-hover/proj:scale-105 transition-all duration-700"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
