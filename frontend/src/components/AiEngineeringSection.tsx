"use client";

import { motion } from "framer-motion";
import { BrainCircuit, Cpu, Database, Sparkles, MessageSquare, Bot } from "lucide-react";

export function AiEngineeringSection() {
  return (
    <section id="ai" className="h-full relative z-10 rounded-3xl border border-white/5 bg-[#050B14] p-8 md:p-10 flex flex-col overflow-hidden group">
      
      {/* Background Glow */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[300px] h-[300px] bg-indigo-500/10 rounded-full blur-[80px] pointer-events-none group-hover:bg-indigo-500/20 transition-colors duration-700" />
      
      <div className="relative z-10 flex flex-col h-full">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <div className="text-[10px] font-bold tracking-widest uppercase text-indigo-400 mb-3">
            AI ENGINEERING
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-white leading-tight mb-4 tracking-tight">
            Exploring the Future with AI
          </h2>
          <p className="text-sm text-white/50 max-w-sm font-medium">
            I build and integrate AI into real applications to solve meaningful problems.
          </p>
        </motion.div>

        {/* Content Split */}
        <div className="flex flex-col xl:flex-row gap-8 flex-grow z-10 relative">
          
          {/* Left: List */}
          <div className="space-y-6 xl:w-[60%] relative z-20">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex gap-4 items-center group/item"
            >
              <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover/item:bg-indigo-500/10 group-hover/item:border-indigo-500/30 transition-colors">
                <Bot className="w-4 h-4 text-white/70 group-hover/item:text-indigo-400 transition-colors" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-white mb-0.5">Generative AI</h4>
                <p className="text-[11px] text-white/50">Create with LLMs</p>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex gap-4 items-center group/item"
            >
              <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover/item:bg-indigo-500/10 group-hover/item:border-indigo-500/30 transition-colors">
                <Cpu className="w-4 h-4 text-white/70 group-hover/item:text-indigo-400 transition-colors" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-white mb-0.5">LLM APIs</h4>
                <p className="text-[11px] text-white/50">OpenAI, Gemini, etc.</p>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex gap-4 items-center group/item"
            >
              <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover/item:bg-indigo-500/10 group-hover/item:border-indigo-500/30 transition-colors">
                <MessageSquare className="w-4 h-4 text-white/70 group-hover/item:text-indigo-400 transition-colors" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-white mb-0.5">Prompt Engineering</h4>
                <p className="text-[11px] text-white/50">Better AI Interactions</p>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex gap-4 items-center group/item"
            >
              <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover/item:bg-indigo-500/10 group-hover/item:border-indigo-500/30 transition-colors">
                <Sparkles className="w-4 h-4 text-white/70 group-hover/item:text-indigo-400 transition-colors" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-white mb-0.5">AI Applications</h4>
                <p className="text-[11px] text-white/50">Real-world use cases</p>
              </div>
            </motion.div>
          </div>

          {/* Right: AI Brain Image and Quote */}
          <div className="xl:w-[40%] flex flex-col justify-end xl:items-end mt-8 xl:mt-0 relative">
            <div className="relative w-full max-w-[200px] xl:max-w-[250px] mx-auto xl:mx-0 mb-6">
              <img 
                src="/ai_brain.jpg" 
                alt="AI Brain" 
                className="w-full h-auto object-contain mix-blend-screen opacity-80 group-hover:scale-105 transition-transform duration-700" 
              />
            </div>
            
            <div className="border-t border-white/10 pt-4 w-full xl:w-[90%] text-left xl:text-left">
              <p className="text-[11px] text-white/50 leading-relaxed font-medium">
                <span className="text-indigo-400 font-bold text-sm">"</span>AI is not just a tool, it's a multiplier for human creativity.<span className="text-indigo-400 font-bold text-sm">"</span>
              </p>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
