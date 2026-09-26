"use client";

import { motion } from "framer-motion";
import { Zap, Code, BookOpen } from "lucide-react";

const principles = [
  {
    icon: <Zap className="w-8 h-8 text-yellow-400" />,
    title: "Ship Fast",
    desc: "Speed without compromising quality. I believe in rapid iteration and getting products to market quickly to gather feedback and improve.",
    bg: "bg-yellow-400/10",
    border: "border-yellow-400/20"
  },
  {
    icon: <Code className="w-8 h-8 text-blue-400" />,
    title: "Write Clean Code",
    desc: "Maintainable, scalable, and self-documenting code. I write code that my future self and teammates will understand and appreciate.",
    bg: "bg-blue-400/10",
    border: "border-blue-400/20"
  },
  {
    icon: <BookOpen className="w-8 h-8 text-emerald-400" />,
    title: "Learn Every Day",
    desc: "Technology evolves rapidly, and so do I. I dedicate time daily to learn new frameworks, patterns, and best practices.",
    bg: "bg-emerald-400/10",
    border: "border-emerald-400/20"
  }
];

export function CorePrinciples() {
  return (
    <section className="py-24 relative z-10 border-t border-white/5 bg-[#03060C]">
      <div className="container mx-auto px-6 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-block mb-3">
            <span className="text-[10px] font-bold tracking-widest uppercase text-accent-primary">
              MY PHILOSOPHY
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-[42px] font-bold text-white tracking-tight">
            Core Principles
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {principles.map((principle, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group bg-[#0A0F1C] border border-white/10 rounded-3xl p-8 hover:border-white/30 transition-colors flex flex-col items-center text-center"
            >
              <div className={`w-16 h-16 rounded-2xl ${principle.bg} ${principle.border} border flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500`}>
                {principle.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-4 group-hover:text-accent-primary transition-colors">{principle.title}</h3>
              <p className="text-sm text-white/50 leading-relaxed font-medium">
                {principle.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
