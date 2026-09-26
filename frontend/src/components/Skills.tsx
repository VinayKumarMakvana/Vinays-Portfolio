"use client";

import { motion } from "framer-motion";
import React from "react";
import { Terminal, Monitor, Server, Database, BrainCircuit, Wrench } from "lucide-react";

const skillsData = [
  {
    category: "Languages",
    icon: <Terminal className="w-5 h-5 text-blue-400" />,
    color: "blue",
    skills: [
      { name: "Python" },
      { name: "JavaScript" },
      { name: "TypeScript" },
      { name: "C++" },
      { name: "SQL" },
    ],
  },
  {
    category: "Frontend",
    icon: <Monitor className="w-5 h-5 text-pink-400" />,
    color: "pink",
    skills: [
      { name: "React" },
      { name: "Next.js" },
      { name: "HTML" },
      { name: "CSS" },
    ],
  },
  {
    category: "Backend",
    icon: <Server className="w-5 h-5 text-emerald-400" />,
    color: "emerald",
    skills: [
      { name: "Node.js" },
      { name: "Express.js" },
      { name: "FastAPI" },
    ],
  },
  {
    category: "Database",
    icon: <Database className="w-5 h-5 text-purple-400" />,
    color: "purple",
    skills: [
      { name: "MongoDB" },
      { name: "PostgreSQL" },
      { name: "MySQL" },
      { name: "Redis" },
    ],
  },
  {
    category: "AI Integration",
    icon: <BrainCircuit className="w-5 h-5 text-orange-400" />,
    color: "orange",
    skills: [
      { name: "OpenAI" },
      { name: "Gemini" },
      { name: "LLMs" },
    ],
  },
  {
    category: "Tools",
    icon: <Wrench className="w-5 h-5 text-cyan-400" />,
    color: "cyan",
    skills: [
      { name: "Git" },
      { name: "GitHub" },
      { name: "Docker" },
      { name: "Postman" },
      { name: "Vercel" },
    ],
  },
];

export function Skills() {
  return (
    <section id="skills" className="h-full relative z-10 rounded-3xl border border-white/5 bg-[#050B14] p-8 md:p-10 flex flex-col group overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-indigo-500/5 rounded-full blur-[100px] pointer-events-none group-hover:bg-indigo-500/10 transition-colors duration-700" />

      <div className="relative z-10 flex flex-col h-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <div className="text-[10px] font-bold tracking-widest uppercase text-indigo-400 mb-3">
            TECHNOLOGIES & TOOLS
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 tracking-tight">
            The Tech Stack
          </h2>
          <p className="text-sm text-white/50 max-w-sm font-medium">
            The foundational technologies and tools I use to build robust and scalable applications.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-auto">
          {skillsData.map((category, catIdx) => {
            
            // Map colors to specific Tailwind classes for dynamic rendering
            const colorMap: Record<string, { border: string, bg: string, hoverBorder: string, hoverBg: string, glow: string }> = {
              blue: { border: "border-blue-500/20", bg: "bg-blue-500/5", hoverBorder: "group-hover/card:border-blue-500/50", hoverBg: "group-hover/card:bg-blue-500/10", glow: "bg-blue-500/20" },
              pink: { border: "border-pink-500/20", bg: "bg-pink-500/5", hoverBorder: "group-hover/card:border-pink-500/50", hoverBg: "group-hover/card:bg-pink-500/10", glow: "bg-pink-500/20" },
              emerald: { border: "border-emerald-500/20", bg: "bg-emerald-500/5", hoverBorder: "group-hover/card:border-emerald-500/50", hoverBg: "group-hover/card:bg-emerald-500/10", glow: "bg-emerald-500/20" },
              purple: { border: "border-purple-500/20", bg: "bg-purple-500/5", hoverBorder: "group-hover/card:border-purple-500/50", hoverBg: "group-hover/card:bg-purple-500/10", glow: "bg-purple-500/20" },
              orange: { border: "border-orange-500/20", bg: "bg-orange-500/5", hoverBorder: "group-hover/card:border-orange-500/50", hoverBg: "group-hover/card:bg-orange-500/10", glow: "bg-orange-500/20" },
              cyan: { border: "border-cyan-500/20", bg: "bg-cyan-500/5", hoverBorder: "group-hover/card:border-cyan-500/50", hoverBg: "group-hover/card:bg-cyan-500/10", glow: "bg-cyan-500/20" },
            };
            const c = colorMap[category.color];

            return (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, delay: catIdx * 0.15 }}
                className={`relative w-full rounded-3xl bg-[#0A0F1C] border border-white/5 p-6 flex flex-col overflow-hidden group/card transform hover:-translate-y-3 transition-all duration-500 hover:shadow-[0_20px_40px_rgba(59,130,246,0.15)] ${c.hoverBorder}`}
              >
                {/* Background ambient glow on hover */}
                <div className={`absolute -inset-20 ${c.glow} rounded-full blur-[80px] opacity-0 group-hover/card:opacity-100 transition-opacity duration-700 pointer-events-none`} />

                <div className="relative z-10 flex items-center gap-4 mb-6">
                  <div className={`w-12 h-12 rounded-2xl border flex items-center justify-center shadow-sm group-hover/card:scale-110 transition-all duration-500 ${c.bg} ${c.border} ${c.hoverBg} ${c.hoverBorder}`}>
                    {category.icon}
                  </div>
                  <h3 className="text-[14px] font-bold text-white tracking-wide">
                    {category.category}
                  </h3>
                </div>

                <div className="relative z-10 flex flex-wrap gap-2">
                  {category.skills.map((skill, i) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      transition={{ 
                        opacity: { duration: 0.4, delay: 0.2 + (i * 0.05) },
                        scale: { type: "spring", stiffness: 400, damping: 10 }
                      }}
                      className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 hover:border-blue-500/30 cursor-pointer transition-colors text-[11px] font-bold tracking-wide text-white/60 hover:text-white"
                    >
                      {skill.name}
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
