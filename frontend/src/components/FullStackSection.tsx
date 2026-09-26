"use client";

import { motion } from "framer-motion";
import { Layout, Server, Database, Cloud, ChevronRight, ArrowRight, Brain } from "lucide-react";
import Image from "next/image";

const techCards = [
  {
    icon: <Layout className="w-5 h-5 text-blue-400" />,
    title: "Frontend",
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    icon: <Server className="w-5 h-5 text-emerald-400" />,
    title: "Backend",
    skills: ["Node.js", "Express.js", "FastAPI", "REST APIs"],
  },
  {
    icon: <Database className="w-5 h-5 text-cyan-400" />,
    title: "Database",
    skills: ["MongoDB", "PostgreSQL", "MySQL", "Redis"],
  },
  {
    icon: <Brain className="w-5 h-5 text-purple-400" />,
    title: "AI Integration",
    skills: ["OpenAI", "Gemini", "LLMs", "Vector DB"],
  },
  {
    icon: <Cloud className="w-5 h-5 text-blue-300" />,
    title: "Deployment",
    skills: ["Vercel", "Docker", "CI/CD", "GitHub Actions"],
  }
];

export function FullStackSection() {
  return (
    <section id="stack" className="relative z-10 w-full pt-10 pb-16">
      <div className="container mx-auto px-6 max-w-[1600px]">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column (Text & Cards) */}
          <div className="lg:col-span-6 flex flex-col">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="text-[10px] font-bold tracking-[0.2em] uppercase text-blue-400 mb-2">
                FULL-STACK DEVELOPMENT WITH AI
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-white leading-tight mb-3 tracking-tight">
                From Interface to Infrastructure.
              </h2>
              <p className="text-[13px] text-white/60 font-medium leading-relaxed mb-8 max-w-lg">
                I build modern, scalable, and user-friendly applications with powerful frontends, robust backends, efficient databases, and AI integrations.
              </p>
            </motion.div>

            {/* 5 Vertical Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-5 gap-3">
              {techCards.map((card, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex flex-col items-center text-center p-4 rounded-xl border border-white/5 bg-gradient-to-b from-white/[0.03] to-transparent hover:border-blue-500/30 transition-all duration-300 group"
                >
                  <div className="w-10 h-10 rounded-xl border border-white/10 bg-[#0A0F1C]/80 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    {card.icon}
                  </div>
                  <h3 className="text-[11px] font-bold text-white mb-3">{card.title}</h3>
                  <div className="space-y-1.5 w-full flex flex-col items-center">
                    {card.skills.map((skill, i) => (
                      <span key={i} className="text-[10px] text-white/40">{skill}</span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Column (Graphic) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-6 relative h-[300px] lg:h-auto rounded-2xl border border-white/10 bg-[#0A0F1C]/50 overflow-hidden flex items-center justify-center group"
          >
            {/* Background globe/grid placeholder */}
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5" />
            <div className="absolute -right-20 -bottom-20 w-96 h-96 bg-blue-500/20 blur-[100px] rounded-full pointer-events-none group-hover:bg-blue-500/30 transition-colors duration-700" />
            
            {/* Screens Graphic */}
            <div className="relative z-10 w-full h-full p-4 lg:p-8 flex items-center justify-center">
              <div className="relative w-full aspect-video rounded-xl overflow-hidden shadow-[0_0_40px_rgba(59,130,246,0.15)] border border-white/10 group-hover:scale-105 transition-transform duration-700">
                <Image
                  src="/floating-ui.jpg"
                  alt="Floating UI Screens"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
