"use client";

import { motion } from "framer-motion";

const timelineItems = [
  { title: "10th", subtitle: "Completed", desc: "Foundation" },
  { title: "12th", subtitle: "Science (Maths)", desc: "Core Subjects" },
  { title: "BCA", subtitle: "Computer Applications", desc: "Pursuing" },
  { title: "Master's", subtitle: "Specialization", desc: "Future Plan" },
  { title: "Startup", subtitle: "Tech Company", desc: "Future Goal" },
];

export function Journey() {
  return (
    <section id="experience" className="relative z-10 rounded-3xl border border-white/5 bg-[#050B14] p-8 md:p-10 overflow-hidden group">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="mb-12"
      >
        <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight">
          Education / Background
        </h2>
      </motion.div>

      <div className="relative mt-8 overflow-x-auto pb-4 scrollbar-hide">
        {/* Timeline Line */}
        <div className="absolute top-[14px] left-8 right-8 h-[2px] bg-white/10 min-w-[750px]" />

        <div className="flex justify-between items-start min-w-[800px] relative">
          {timelineItems.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex flex-col items-center w-40 relative group/item"
            >
              {/* Dot */}
              <div className="w-7 h-7 rounded-full bg-[#050B14] border-[3px] border-white/30 group-hover/item:border-accent-primary mb-6 relative z-10 group-hover/item:shadow-[0_0_15px_rgba(79,138,255,0.4)] transition-all duration-300" />
              
              {/* Content */}
              <h3 className="text-white font-bold text-sm text-center mb-1 group-hover/item:text-accent-primary transition-colors">{item.title}</h3>
              <p className="text-white/50 text-[11px] leading-tight text-center">{item.subtitle}</p>
              {item.desc && <p className="text-white/50 text-[11px] leading-tight text-center">{item.desc}</p>}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
