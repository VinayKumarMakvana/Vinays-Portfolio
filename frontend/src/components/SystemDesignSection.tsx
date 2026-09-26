"use client";

import { motion } from "framer-motion";
import { Server, Database, Cloud, ShieldCheck, ArrowRight, HardDrive, Cpu, Activity, Shield, Globe } from "lucide-react";
import Image from "next/image";

export function SystemDesignSection() {
  return (
    <section className="h-full relative z-10 rounded-3xl border border-white/5 bg-[#050B14] p-8 md:p-10 flex flex-col xl:flex-row items-center gap-10 overflow-hidden group">
      
      {/* Background Glow */}
      <div className="absolute -bottom-20 -right-20 w-[400px] h-[400px] bg-indigo-500/5 rounded-full blur-[100px] pointer-events-none group-hover:bg-indigo-500/10 transition-colors duration-700" />
      
      {/* Left Column: Text & Chips */}
      <div className="relative z-10 w-full xl:w-auto shrink-0 flex flex-col gap-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-[10px] font-bold tracking-widest uppercase text-indigo-400 mb-3">
            SYSTEM DESIGN & BACKEND
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-white leading-tight mb-4 tracking-tight">
            Designing for Scale.
          </h2>
          <p className="text-sm text-white/50 max-w-sm font-medium">
            Learning and exploring system design concepts to build scalable and reliable systems.
          </p>
        </motion.div>

        {/* Keyword Chips */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex gap-3 shrink-0"
        >
          <div className="flex flex-col gap-3 p-4 bg-[#0A0F1C] border border-white/10 rounded-2xl">
            <div className="flex items-center gap-3">
              <div className="w-6 h-6 rounded-full bg-blue-500/10 flex items-center justify-center border border-blue-500/20">
                <Activity className="w-3 h-3 text-blue-400" />
              </div>
              <span className="text-[11px] font-bold text-white/70">Scalability</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-6 h-6 rounded-full bg-cyan-500/10 flex items-center justify-center border border-cyan-500/20">
                <Cpu className="w-3 h-3 text-cyan-400" />
              </div>
              <span className="text-[11px] font-bold text-white/70">Performance</span>
            </div>
          </div>
          
          <div className="flex flex-col gap-3 p-4 bg-[#0A0F1C] border border-white/10 rounded-2xl">
            <div className="flex items-center gap-3">
              <div className="w-6 h-6 rounded-full bg-emerald-500/10 flex items-center justify-center border border-emerald-500/20">
                <Shield className="w-3 h-3 text-emerald-400" />
              </div>
              <span className="text-[11px] font-bold text-white/70">Reliability</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-6 h-6 rounded-full bg-indigo-500/10 flex items-center justify-center border border-indigo-500/20">
                <Globe className="w-3 h-3 text-indigo-400" />
              </div>
              <span className="text-[11px] font-bold text-white/70">Real-world Systems</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Right Column: Architecture Diagram & Image */}
      <div className="relative z-10 flex-1 flex flex-col md:flex-row items-center justify-end gap-6 w-full mt-6 xl:mt-0">
        
        {/* System Design Architecture Diagram */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex-1 flex flex-col sm:flex-row items-center justify-center gap-2 lg:gap-4 w-full xl:w-auto"
        >
          {/* Client */}
          <div className="flex flex-col items-center bg-[#0A0F1C] border border-white/10 p-3 rounded-xl min-w-[80px]">
            <Cloud className="w-5 h-5 text-white/50 mb-2" />
            <span className="text-[9px] font-bold text-white/50 uppercase tracking-widest">Client</span>
          </div>

          <ArrowRight className="w-4 h-4 text-white/20 hidden sm:block" />
          <div className="w-[1px] h-4 bg-white/20 block sm:hidden" />

          {/* Load Balancer */}
          <div className="flex flex-col items-center bg-indigo-500/10 border border-indigo-500/20 p-3 rounded-xl min-w-[80px]">
            <ShieldCheck className="w-5 h-5 text-indigo-400 mb-2" />
            <span className="text-[9px] font-bold text-white/50 uppercase tracking-widest text-center leading-tight">Load<br/>Balancer</span>
          </div>

          <ArrowRight className="w-4 h-4 text-white/20 hidden sm:block" />
          <div className="w-[1px] h-4 bg-white/20 block sm:hidden" />

          {/* API Server */}
          <div className="flex flex-col items-center bg-blue-500/10 border border-blue-500/30 p-3 rounded-xl min-w-[80px] shadow-[0_0_15px_rgba(59,130,246,0.15)]">
            <Server className="w-5 h-5 text-blue-400 mb-2" />
            <span className="text-[9px] font-bold text-white/50 uppercase tracking-widest text-center leading-tight">API<br/>Server</span>
          </div>

          <ArrowRight className="w-4 h-4 text-white/20 hidden sm:block" />
          <div className="w-[1px] h-4 bg-white/20 block sm:hidden" />

          {/* Data Layer */}
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-3 bg-[#0A0F1C] border border-white/10 px-3 py-2 rounded-lg">
              <Database className="w-3 h-3 text-emerald-400" />
              <span className="text-[9px] font-bold text-white/70 tracking-widest">Cache (Redis)</span>
            </div>
            <div className="flex items-center gap-3 bg-[#0A0F1C] border border-white/10 px-3 py-2 rounded-lg">
              <Database className="w-3 h-3 text-blue-400" />
              <span className="text-[9px] font-bold text-white/70 tracking-widest">Database</span>
            </div>
            <div className="flex items-center gap-3 bg-[#0A0F1C] border border-white/10 px-3 py-2 rounded-lg">
              <HardDrive className="w-3 h-3 text-purple-400" />
              <span className="text-[9px] font-bold text-white/70 tracking-widest">File Storage</span>
            </div>
          </div>
        </motion.div>

        {/* Right: Server Racks Image */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="w-full sm:w-[240px] xl:w-[280px] shrink-0 overflow-hidden rounded-2xl relative aspect-[4/3] border border-white/10"
        >
          <div className="absolute inset-0 bg-gradient-to-l from-transparent to-[#050B14]/80 z-10" />
          <Image 
            src="/servers.jpg" 
            alt="Server Room" 
            fill 
            className="object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
}
