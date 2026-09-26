"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Code2, GitBranch, Layers, Database, Cpu, Globe, Server, Settings } from "lucide-react";

const skills = [
  {
    icon: <Code2 className="w-5 h-5 text-blue-400" />,
    title: "C++",
    desc: "Programming & DSA",
  },
  {
    icon: <GitBranch className="w-5 h-5 text-emerald-400" />,
    title: "Algorithms",
    desc: "Problem Solving",
  },
  {
    icon: <Layers className="w-5 h-5 text-purple-400" />,
    title: "OOP",
    desc: "Design Patterns",
  },
  {
    icon: <Database className="w-5 h-5 text-pink-400" />,
    title: "DBMS",
    desc: "SQL & Modeling",
  },
  {
    icon: <Cpu className="w-5 h-5 text-orange-400" />,
    title: "Operating Systems",
    desc: "Core Concepts",
  },
  {
    icon: <Globe className="w-5 h-5 text-cyan-400" />,
    title: "Computer Networks",
    desc: "How the Internet Works",
  },
  {
    icon: <Server className="w-5 h-5 text-indigo-400" />,
    title: "System Design",
    desc: "Scalable Architecture",
  },
  {
    icon: <Settings className="w-5 h-5 text-blue-300" />,
    title: "Software Engineering",
    desc: "Best Practices",
  }
];

const codeSnippets = {
  cpp: {
    name: "lru_cache.cpp",
    code: `// Advanced DSA: LRU Cache
#include <unordered_map>
using namespace std;

class LRUCache {
    int capacity;
    unordered_map<int, int> cache;
    
public:
    LRUCache(int cap) : capacity(cap) {}
    
    int get(int key) {
        if (cache.find(key) == cache.end()) 
            return -1;
        return cache[key];
    }
};`
  },
  python: {
    name: "rate_limiter.py",
    code: `# System Design: Rate Limiter
import time
from threading import Lock

class TokenBucket:
    def __init__(self, capacity):
        self.capacity = float(capacity)
        self.tokens = float(capacity)
        self.lock = Lock()

    def consume(self, tokens):
        with self.lock:
            if tokens <= self.tokens:
                self.tokens -= tokens
                return True
            return False`
  },
  javascript: {
    name: "middleware.js",
    code: `// Software Eng: Express Middleware
const express = require('express');
const app = express();

const logger = (req, res, next) => {
    const start = Date.now();
    res.on('finish', () => {
        const ms = Date.now() - start;
        console.log(\`\${req.method} \${req.url} - \${ms}ms\`);
    });
    next();
};

app.use(logger);
app.get('/api', (req, res) => res.send('OK'));`
  }
};

export function SoftwareEngineeringSection() {
  const [activeTab, setActiveTab] = useState<"cpp" | "python" | "javascript">("cpp");

  return (
    <section className="relative z-10 w-full pt-10 pb-16">
      <div className="container mx-auto px-6 max-w-[1600px]">
        <div className="grid lg:grid-cols-2 gap-10">
          {/* Left Column: Text & Cards */}
          <div className="flex flex-col gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="text-[10px] font-bold tracking-[0.2em] uppercase text-blue-400 mb-2">
                SOFTWARE ENGINEERING
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-white leading-tight mb-3 tracking-tight">
                Building Beyond the Interface.
              </h2>
              <p className="text-[13px] text-white/50 max-w-md font-medium leading-relaxed mb-6">
                I focus on core computer science fundamentals, problem solving, and software engineering principles to become a better engineer.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-3"
            >
              {skills.map((skill, index) => (
                <div 
                  key={index} 
                  className="bg-white/[0.02] border border-white/5 rounded-2xl p-4 flex items-center gap-4 hover:border-blue-500/30 transition-all group/card cursor-default"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#0A0F1C]/80 border border-white/10 flex items-center justify-center shrink-0 group-hover/card:scale-110 group-hover/card:border-blue-500/30 transition-all">
                    {skill.icon}
                  </div>
                  <div>
                    <h3 className="text-[13px] font-bold text-white mb-0.5 group-hover/card:text-blue-400 transition-colors">{skill.title}</h3>
                    <p className="text-[10px] text-white/40 font-medium tracking-wide leading-tight">{skill.desc}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right Column: Code Window */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="rounded-2xl border border-white/10 bg-[#0A0D14] overflow-hidden flex flex-col shadow-2xl relative mt-8 lg:mt-0"
          >
            {/* Tabs */}
            <div className="flex px-4 pt-3 gap-2 border-b border-white/5 bg-white/[0.02] overflow-x-auto no-scrollbar">
              {Object.keys(codeSnippets).map((key) => (
                <button
                  key={key}
                  onClick={() => setActiveTab(key as any)}
                  className={`px-4 py-2 text-[11px] font-mono tracking-wider rounded-t-lg transition-colors border-b-2 whitespace-nowrap ${
                    activeTab === key 
                      ? "text-blue-400 border-blue-400 bg-white/5" 
                      : "text-white/40 border-transparent hover:text-white/70 hover:bg-white/[0.02]"
                  }`}
                >
                  {key === 'cpp' ? 'C++' : key === 'python' ? 'Python' : 'JavaScript'}
                </button>
              ))}
            </div>

            {/* macOS Window Header Style */}
            <div className="flex items-center px-4 py-2 border-b border-white/5 bg-[#05080f]">
              <div className="flex gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-red-500/80"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-green-500/80"></div>
              </div>
              <div className="mx-auto text-[10px] text-white/40 font-mono tracking-wider">
                {codeSnippets[activeTab].name}
              </div>
            </div>
            
            {/* Code Content */}
            <div className="p-6 font-mono text-[13px] leading-relaxed overflow-x-auto">
              {codeSnippets[activeTab].code.split('\n').map((line, i) => (
                <div key={i} className="flex">
                  <span className="w-8 shrink-0 text-white/20 select-none text-right pr-4">{i + 1}</span>
                  <span className={`whitespace-pre ${
                    line.includes('//') || line.includes('# Example') ? 'text-white/40' :
                    line.includes('class') || line.includes('def') || line.includes('const') ? 'text-blue-400' :
                    line.includes('include') || line.includes('import') ? 'text-purple-400' :
                    line.includes('cout') || line.includes('print') || line.includes('console') ? 'text-emerald-300' :
                    line.includes('"') || line.includes("'") ? 'text-amber-300' :
                    'text-white/80'
                  }`}>
                    {line}
                  </span>
                </div>
              ))}
            </div>
            
            {/* Soft Glow */}
            <div className="absolute bottom-[-50px] right-[-50px] w-40 h-40 bg-blue-500/20 rounded-full blur-3xl pointer-events-none" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
