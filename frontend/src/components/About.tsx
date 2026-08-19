"use client";

import { motion } from "framer-motion";
import { BookOpen, Target, Code2, Rocket, Briefcase, GraduationCap, Calendar } from "lucide-react";
import { useRecruiterMode } from "./RecruiterModeContext";

export function About() {
  const { isRecruiterMode } = useRecruiterMode();

  const timeline = [
    {
      title: "BCA (Bachelor of Computer Applications)",
      organization: "Saurashtra University",
      date: "2025 - Present",
      icon: <GraduationCap className="w-5 h-5 text-accent-primary" />,
      desc: "Focusing on core computer science concepts, programming languages, and web development."
    },
    {
      title: "Full Stack Development Journey",
      organization: "Self-Taught & Certifications",
      date: "2025 - Present",
      icon: <Briefcase className="w-5 h-5 text-accent-tertiary" />,
      desc: "Learning and building real-world projects using the MERN stack, Next.js, and integrating AI into applications."
    }
  ];

  return (
    <section id="about" className="py-24 relative z-10">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 md:text-center"
        >
          <div className="inline-block mb-3">
            <span className="glass-panel px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest text-accent-primary border border-accent-primary/20">
              Who I Am
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black mb-4 tracking-tighter">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-primary to-accent-tertiary text-glow">Me</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6 text-foreground/80 leading-relaxed text-lg font-medium"
          >
            <p>
              I’m currently learning <strong className="text-accent-primary font-bold">Full Stack Development with AI</strong> and building my skills in modern web technologies like <strong className="text-accent-primary font-bold">MERN Stack, Java, and Python</strong>. <br />I enjoy creating responsive and user-friendly web applications while exploring how AI can be integrated into modern development.
            </p>
            <p>
              I am passionate about learning new technologies, solving problems through code, and working on projects that help me grow as a developer. My goal is to become a skilled Full Stack Developer by continuously learning and building real-world applications.
            </p>
            <div className="glass-panel p-6 rounded-2xl border border-accent-primary/20 bg-accent-primary/5">
              <h3 className="text-xl font-bold text-foreground mb-2 flex items-center gap-2">
                <Target className="w-5 h-5 text-accent-primary" /> Career Goal
              </h3>
              <p className="text-base text-foreground/70">
                To join a forward-thinking engineering team where I can contribute to high-impact products while continually expanding my expertise in system design and cloud architectures.
              </p>
            </div>
            
            {/* Timeline Section */}
            <div className="mt-8 pt-8 border-t border-white/10">
              <h3 className="text-2xl font-bold mb-6 text-foreground">Journey</h3>
              <div className="space-y-6">
                {timeline.map((item, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, x: -30, scale: 0.95 }}
                    whileInView={{ opacity: 1, x: 0, scale: 1 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ delay: index * 0.2, type: "spring", bounce: 0.4, duration: 0.8 }}
                    className="flex gap-4 group"
                  >
                    <div className="flex flex-col items-center">
                      <div className="w-10 h-10 rounded-full glass-panel flex items-center justify-center border border-white/10 shrink-0 shadow-lg bg-black/40">
                        {item.icon}
                      </div>
                      {index !== timeline.length - 1 && <div className="w-[1px] h-full bg-white/10 my-2" />}
                    </div>
                    <div className="pb-4">
                      <div className="flex flex-wrap items-center gap-2 mb-1">
                        <h4 className="text-lg font-bold text-foreground">{item.title}</h4>
                        <span className="text-xs font-mono px-2 py-1 rounded bg-white/5 text-foreground/50 flex items-center gap-1">
                          <Calendar className="w-3 h-3" /> {item.date}
                        </span>
                      </div>
                      <div className="text-sm font-semibold text-accent-primary/80 mb-2">{item.organization}</div>
                      <p className="text-sm text-foreground/60">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={{
              hidden: { opacity: 0 },
              show: { opacity: 1, transition: { staggerChildren: 0.15 } }
            }}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid sm:grid-cols-2 gap-4 sticky top-32"
          >
            {[
              {
                icon: <Code2 className="w-8 h-8 text-accent-primary" />,
                title: "Frontend Engineering",
                desc: "React, Next.js, Tailwind, Framer Motion",
              },
              {
                icon: <BookOpen className="w-8 h-8 text-accent-tertiary" />,
                title: "Backend Architecture",
                desc: "Node.js, Express, REST APIs, Microservices",
              },
              {
                icon: <Rocket className="w-8 h-8 text-accent-secondary" />,
                title: "Database Management",
                desc: "MongoDB, MySQL, Aggregations, Optimization",
              },
              {
                icon: <Target className="w-8 h-8 text-amber-400" />,
                title: "Problem Solving",
                desc: "500+ LeetCode problems solved, algorithms",
              },
            ].map((feature, i) => (
              <motion.div 
                key={i} 
                variants={{
                  hidden: { opacity: 0, y: 30, scale: 0.9 },
                  show: { opacity: 1, y: 0, scale: 1, transition: { type: "spring", bounce: 0.4 } }
                }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="relative glass-panel p-6 rounded-2xl transition-colors duration-300 border border-white/5 hover:border-accent-primary/40 group bg-black/20 overflow-hidden shadow-xl"
              >
                {/* Glow effect that appears on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-accent-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                
                <div className="relative z-10">
                  <div className="mb-4 p-3 bg-white/5 rounded-xl inline-block group-hover:scale-110 group-hover:bg-accent-primary/20 transition-all duration-500">
                    {feature.icon}
                  </div>
                  <h4 className="text-lg font-bold mb-2 text-white group-hover:text-accent-primary transition-colors">{feature.title}</h4>
                  <p className="text-sm text-white/60 group-hover:text-white/80 transition-colors">{feature.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Recruiter Quick-Pass Stats */}
        {isRecruiterMode && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
          >
            {[
              { label: "Projects Built", value: "10+" },
              { label: "Contributions", value: "400+" },
              { label: "DSA Problems", value: "400+" },
              { label: "Hours Coded", value: "1200+" },
            ].map((stat, i) => (
              <div key={i} className="glass-panel p-6 text-center rounded-2xl border border-accent-secondary/30 bg-accent-secondary/5 shadow-[0_0_20px_rgba(176,38,255,0.1)]">
                <div className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-br from-accent-secondary to-accent-tertiary mb-2">{stat.value}</div>
                <div className="text-sm font-bold tracking-widest uppercase text-foreground/70">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        )}
      </div>
    </section>
  );
}
