"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Network, GitPullRequest, Code2, Database, LayoutTemplate, Layers, Move3d, ArrowRightLeft, AlignLeft, Search, Hash, Cpu, Settings, Globe, Server, SplitSquareHorizontal, Merge, Binary } from "lucide-react";
import Image from "next/image";

type Category = "Data Structures" | "Algorithms" | "CS Fundamentals";

const topicsData: Record<Category, { icon: React.ReactNode; label: string }[]> = {
  "Data Structures": [
    { icon: <Layers className="w-4 h-4 text-white/50 mb-2" />, label: "Arrays" },
    { icon: <Code2 className="w-4 h-4 text-white/50 mb-2" />, label: "Linked Lists" },
    { icon: <Network className="w-4 h-4 text-white/50 mb-2" />, label: "Trees" },
    { icon: <GitPullRequest className="w-4 h-4 text-white/50 mb-2" />, label: "Graphs" },
    { icon: <Move3d className="w-4 h-4 text-white/50 mb-2" />, label: "Stacks & Queues" },
    { icon: <Hash className="w-4 h-4 text-white/50 mb-2" />, label: "Hash Maps" },
    { icon: <Merge className="w-4 h-4 text-white/50 mb-2" />, label: "Heaps" },
    { icon: <Search className="w-4 h-4 text-white/50 mb-2" />, label: "Tries" },
  ],
  "Algorithms": [
    { icon: <LayoutTemplate className="w-4 h-4 text-white/50 mb-2" />, label: "Dynamic Prog" },
    { icon: <ArrowRightLeft className="w-4 h-4 text-white/50 mb-2" />, label: "Greedy" },
    { icon: <AlignLeft className="w-4 h-4 text-white/50 mb-2" />, label: "Sorting" },
    { icon: <Search className="w-4 h-4 text-white/50 mb-2" />, label: "Searching" },
    { icon: <SplitSquareHorizontal className="w-4 h-4 text-white/50 mb-2" />, label: "Two Pointers" },
    { icon: <Binary className="w-4 h-4 text-white/50 mb-2" />, label: "Bit Manipulation" },
    { icon: <Network className="w-4 h-4 text-white/50 mb-2" />, label: "Backtracking" },
    { icon: <Layers className="w-4 h-4 text-white/50 mb-2" />, label: "Sliding Window" },
  ],
  "CS Fundamentals": [
    { icon: <Layers className="w-4 h-4 text-white/50 mb-2" />, label: "OOPs" },
    { icon: <Database className="w-4 h-4 text-white/50 mb-2" />, label: "DBMS" },
    { icon: <Cpu className="w-4 h-4 text-white/50 mb-2" />, label: "Operating Systems" },
    { icon: <Globe className="w-4 h-4 text-white/50 mb-2" />, label: "Networks" },
    { icon: <Server className="w-4 h-4 text-white/50 mb-2" />, label: "System Design" },
    { icon: <Settings className="w-4 h-4 text-white/50 mb-2" />, label: "Software Eng" },
    { icon: <Code2 className="w-4 h-4 text-white/50 mb-2" />, label: "API Design" },
    { icon: <GitPullRequest className="w-4 h-4 text-white/50 mb-2" />, label: "Version Control" },
  ]
};

export function DsaSection() {
  const [activeCategory, setActiveCategory] = useState<Category>("Data Structures");
  return (
    <section id="dsa" className="h-full relative z-10 rounded-3xl border border-white/5 bg-[#050B14] p-8 md:p-10 flex flex-col group overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-[300px] h-[300px] bg-indigo-500/5 rounded-full blur-[100px] pointer-events-none group-hover:bg-indigo-500/10 transition-colors duration-700" />
      
      <div className="relative z-10 flex flex-col lg:flex-row gap-10 lg:gap-16 h-full items-center">
        
        {/* Left Side: Header & Content Grid */}
        <div className="flex-1 flex flex-col justify-center h-full w-full">
          
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <div className="text-[10px] font-bold tracking-widest uppercase text-indigo-400 mb-3">
              DSA & PROBLEM SOLVING
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-white leading-tight mb-4 tracking-tight">
              Problem Solving Is a Superpower.
            </h2>
            <p className="text-sm text-white/50 max-w-sm font-medium">
              I actively practice data structures, algorithms, and core CS subjects to strengthen my problem solving skills.
            </p>
          </motion.div>

          {/* Left - Topic Pills */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full space-y-5"
          >
            {/* Top Row: Categories */}
            <div className="flex flex-wrap gap-2">
              {(Object.keys(topicsData) as Category[]).map((cat) => (
                <motion.button
                  key={cat}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-2 rounded-xl text-[10px] font-bold uppercase tracking-widest transition-colors ${
                    activeCategory === cat 
                      ? "border border-indigo-500/30 bg-indigo-500/10 text-indigo-400 shadow-[0_0_15px_rgba(99,102,241,0.2)]" 
                      : "border border-white/10 bg-white/5 text-white/70 hover:bg-white/10"
                  }`}
                >
                  {cat}
                </motion.button>
              ))}
            </div>
            
            {/* Topic Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 gap-3 pt-2">
              {topicsData[activeCategory].map((topic, i) => (
                <motion.div 
                  key={`${activeCategory}-${i}`}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ 
                    opacity: { duration: 0.3, delay: i * 0.05 },
                    scale: { type: "spring", stiffness: 400, damping: 10 }
                  }}
                  className="bg-[#0A0F1C] border border-white/10 rounded-xl p-3 flex flex-col items-center justify-center text-center hover:border-indigo-500/50 hover:bg-indigo-500/5 hover:shadow-[0_0_20px_rgba(99,102,241,0.2)] transition-colors group/topic h-[80px] cursor-pointer"
                >
                  <div className="group-hover/topic:text-indigo-400 transition-colors group-hover/topic:scale-110 transform duration-300">
                    {topic.icon}
                  </div>
                  <span className="text-[9px] font-bold text-white/60 uppercase tracking-wider group-hover/topic:text-white transition-colors">{topic.label}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Right - Image Only */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full lg:w-[320px] shrink-0 flex items-center justify-center"
        >
          {/* Clean Floating Brain Image */}
          <div className="relative w-64 h-64 lg:w-80 lg:h-80 opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700">
            <Image 
              src="/brain.jpg" 
              alt="AI Brain" 
              fill 
              className="object-contain mix-blend-screen drop-shadow-[0_0_20px_rgba(59,130,246,0.2)]"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
