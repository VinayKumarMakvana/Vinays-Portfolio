"use client";

import { motion } from "framer-motion";
import { ArrowRight, Target, GitBranch, Layout, Server, Database, Brain, ShieldCheck, Rocket } from "lucide-react";

const flowSteps = [
  { icon: <Target className="w-4 h-4 text-gray-400" />, title: "Idea", desc: "Identify real problems" },
  { icon: <GitBranch className="w-4 h-4 text-orange-400" />, title: "Architecture", desc: "Plan & design scalable solution" },
  { icon: <Layout className="w-4 h-4 text-blue-400" />, title: "Frontend", desc: "React, Next.js TypeScript" },
  { icon: <Server className="w-4 h-4 text-teal-400" />, title: "Backend", desc: "Node.js, Express FastAPI" },
  { icon: <Database className="w-4 h-4 text-blue-300" />, title: "Database", desc: "MongoDB PostgreSQL" },
  { icon: <Brain className="w-4 h-4 text-purple-400" />, title: "AI Integration", desc: "OpenAI, Gemini LLMs" },
  { icon: <ShieldCheck className="w-4 h-4 text-indigo-400" />, title: "Testing", desc: "Quality & Optimization" },
  { icon: <Rocket className="w-4 h-4 text-orange-500" />, title: "Deployment", desc: "Vercel, Docker CI/CD" },
];

export function HowIBuildSection() {
  return (
    <section className="relative z-10 w-full pt-10 pb-6 border-b border-white/5">
      <div className="container mx-auto px-6 max-w-[1600px]">
        {/* Header */}
        <div className="mb-8">
          <div className="text-[10px] font-bold tracking-[0.2em] uppercase text-blue-400 mb-2">
            HOW I BUILD
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight">
            From Idea to Deployment.
          </h2>
        </div>

        {/* Horizontal Flow */}
        <div className="flex flex-col xl:flex-row xl:items-center justify-between gap-6 xl:gap-2">
          {flowSteps.map((step, index) => (
            <div key={index} className="flex flex-col xl:flex-row items-center gap-4 xl:gap-2 flex-1">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex flex-col items-center text-center w-full"
              >
                <div className="w-12 h-12 rounded-xl border border-white/10 bg-[#0A0F1C]/80 flex items-center justify-center mb-3 shadow-[0_0_15px_rgba(255,255,255,0.02)]">
                  {step.icon}
                </div>
                <h3 className="text-[11px] font-bold text-white mb-1">{step.title}</h3>
                <p className="text-[9px] text-white/50 max-w-[100px] leading-tight">{step.desc}</p>
              </motion.div>
              
              {/* Arrow */}
              {index < flowSteps.length - 1 && (
                <>
                  {/* Desktop Right Arrow */}
                  <div className="hidden xl:block text-white/20 shrink-0">
                    <ArrowRight className="w-3 h-3" />
                  </div>
                  {/* Mobile Down Arrow */}
                  <div className="block xl:hidden text-white/20 shrink-0 my-2">
                    <svg className="w-4 h-4 animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" /></svg>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
