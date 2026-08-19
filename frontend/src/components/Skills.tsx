"use client";

import { motion } from "framer-motion";
import React from "react";
import { Layout, Server, Database, Brain } from "lucide-react";

const skillsData = [
  {
    category: "Frontend Mastery",
    icon: <Layout className="w-6 h-6 text-accent-primary" />,
    gradient: "from-accent-primary/20 to-transparent",
    skills: [
      { name: "React" },
      { name: "Next.js" },
      { name: "TypeScript" },
      { name: "Tailwind CSS" },
      { name: "JavaScript" },
      { name: "HTML5" },
      { name: "CSS3" },
      { name: "Framer Motion" },
    ],
  },
  {
    category: "Backend Architecture",
    icon: <Server className="w-6 h-6 text-accent-tertiary" />,
    gradient: "from-accent-tertiary/20 to-transparent",
    skills: [
      { name: "Node.js" },
      { name: "Express.js" },
      { name: "REST APIs" },
      { name: "Authentication (JWT)" },
      { name: "Python" },
      { name: "Core Java" },
    ],
  },
  {
    category: "Databases & DevOps",
    icon: <Database className="w-6 h-6 text-accent-secondary" />,
    gradient: "from-accent-secondary/20 to-transparent",
    skills: [
      { name: "MongoDB" },
      { name: "MySQL" },
      { name: "Git & GitHub" },
      { name: "Docker" },
      { name: "Postman" },
      { name: "Vercel" },
      { name: "AWS" },
    ],
  },
  {
    category: "AI & Machine Learning",
    icon: <Brain className="w-6 h-6 text-rose-400" />,
    gradient: "from-rose-400/20 to-transparent",
    skills: [
      { name: "GenAI" },
      { name: "Agentic AI" },
      { name: "LLMs" },
      { name: "Prompt Engineering" },
      { name: "LangChain" },
    ],
  },
];

export function Skills() {
  return (
    <section id="skills" className="py-24 relative z-10 bg-transparent overflow-hidden min-h-screen flex items-center">
      
      {/* Ambient background glow to match other sections */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-accent-secondary/5 rounded-full blur-[150px] pointer-events-none -z-10" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 flex flex-col items-center text-center"
        >
          <div className="inline-block mb-4">
            <span className="glass-panel px-5 py-2 rounded-full text-xs font-bold uppercase tracking-widest text-accent-secondary border border-accent-secondary/30">
              Technical Expertise
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black mb-4 tracking-tighter">
            Core <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-secondary to-accent-tertiary text-glow">Competencies</span>
          </h2>
          <p className="text-foreground/60 max-w-2xl text-lg font-medium">
            The foundational technologies and tools I use to build robust and scalable digital experiences.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto">
          {skillsData.map((category, catIdx) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: catIdx * 0.15 }}
              className="relative w-full rounded-3xl glass-panel border border-white/5 p-8 flex flex-col overflow-hidden group hover:border-white/20 hover:shadow-2xl transition-all duration-300 bg-black/20"
            >
              {/* Subtle Gradient Background */}
              <div 
                className={`absolute inset-0 bg-gradient-to-br ${category.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-3xl pointer-events-none`}
              />
              
              <div className="relative z-10 flex items-center gap-4 mb-8">
                <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:bg-white/10 transition-all duration-300">
                  {category.icon}
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-white/70 transition-all">
                  {category.category}
                </h3>
              </div>

              <div className="relative z-10 flex flex-wrap gap-2.5">
                {category.skills.map((skill, i) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.2 + (i * 0.05) }}
                    className="px-3.5 py-1.5 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 hover:border-white/20 cursor-default transition-all text-sm font-medium text-white/80 hover:text-white"
                  >
                    {skill.name}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
