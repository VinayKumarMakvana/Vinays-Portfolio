"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Circle, Rocket } from "lucide-react";
import { FaReact, FaNodeJs, FaPython, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { SiNextdotjs, SiTypescript, SiJavascript, SiMongodb, SiCplusplus } from "react-icons/si";
import { Caveat } from "next/font/google";

const caveat = Caveat({ subsets: ["latin"], weight: ["400", "700"] });

const GithubIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
  </svg>
);

const LinkedinIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
  </svg>
);

const MailIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
    <polyline points="22,6 12,13 2,6" />
  </svg>
);

const Terminal = () => {
  const [displayText, setDisplayText] = useState("");
  const fullText = `> A student\n> A problem solver\n> A full-stack developer with AI\n> An open source enthusiast\n> Always learning...\n> Building something awesome...`;

  useEffect(() => {
    let currentText = "";
    let currentIndex = 0;

    const interval = setInterval(() => {
      if (currentIndex < fullText.length) {
        currentText += fullText[currentIndex];
        setDisplayText(currentText);
        currentIndex++;
      } else {
        clearInterval(interval);
      }
    }, 40);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full bg-[#0A0F1C]/90 backdrop-blur-md rounded-xl border border-white/10 p-4 font-mono text-xs text-white/70 shadow-2xl">
      <div className="flex gap-2 mb-3">
        <div className="w-2.5 h-2.5 rounded-full bg-red-500/80"></div>
        <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80"></div>
        <div className="w-2.5 h-2.5 rounded-full bg-green-500/80"></div>
      </div>
      <div className="text-green-400 font-semibold mb-2 tracking-wide">vinay@developer:~$ <span className="text-white">whoami</span></div>
      <div className="whitespace-pre-line leading-[1.8] text-white/80 text-[11px]">{displayText}</div>
      <div className="animate-pulse w-2 h-4 bg-white mt-1 inline-block"></div>
    </div>
  );
};

export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden bg-[#030610]" id="home">
      
      {/* Restored Original Hero Background Image - Made Responsive */}
      <div 
        className="absolute top-0 left-0 right-0 h-[100vh] lg:h-auto lg:inset-0 z-0 bg-cover bg-[center_top] md:bg-[center_15%] lg:bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/hero-portrait-new.jpg')`,
        }}
      />

      {/* Mobile-only soft gradient to ensure text remains readable when stacked over the image */}
      <div className="absolute top-0 left-0 right-0 h-[100vh] bg-gradient-to-b from-[#030610]/60 via-transparent to-[#030610] z-0 pointer-events-none lg:hidden block" />

      {/* Subtle bottom gradient to blend into next section */}
      <div className="absolute top-0 left-0 right-0 h-[100vh] lg:h-auto lg:inset-0 bg-gradient-to-b from-transparent via-[#030610]/50 to-[#030610] z-0 pointer-events-none" />

      {/* Main Grid Layout */}
      <div className="relative z-10 flex-grow flex flex-col">

        {/* Navbar spacer */}
        <div className="h-[72px]" />

        <div className="flex-grow grid grid-cols-12 items-center max-w-[1600px] mx-auto w-full px-6 xl:px-12 gap-0">

          {/* ===== LEFT COLUMN: Text (4 cols) ===== */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="col-span-12 lg:col-span-5 xl:col-span-4 flex flex-col gap-5 py-10 lg:py-0 z-20"
          >
            {/* Eyebrow */}
            <div className="flex items-center gap-2 text-[10px] font-bold tracking-widest uppercase text-white/50 bg-white/5 w-fit px-3 py-1.5 rounded-full border border-white/10">
              <Rocket className="w-3 h-3 text-white/70" />
              FULL-STACK DEVELOPER WITH AI
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight text-white drop-shadow-md">
              Building Ideas <br />
              Into{" "}
              <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 text-transparent bg-clip-text">
                Real Products.
              </span>
            </h1>

            {/* Subtext - Removed bg-black/20 and blur */}
            <p className="text-sm text-white/80 max-w-sm leading-relaxed drop-shadow-sm">
              I'm <strong className="text-white font-semibold">Vinay Kumar Makvana</strong>, a BCA student and a Full-Stack Developer with AI who loves building modern web applications, solving real-world problems, and exploring the power of AI to create meaningful products.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-3 mt-1">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                href="#projects"
                className="px-6 py-2.5 rounded-full bg-blue-600 text-white font-bold text-sm flex items-center gap-2 hover:bg-blue-500 shadow-[0_0_20px_rgba(37,99,235,0.4)] hover:shadow-[0_0_30px_rgba(37,99,235,0.6)] transition-all duration-300 group"
              >
                View My Work <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                href="https://docs.google.com/document/d/1cW0W3FaR0ImNqtcg4APJV6QT8t3alWRQ/edit?usp=sharing"
                target="_blank"
                rel="noreferrer"
                className="px-6 py-2.5 rounded-full border border-white/20 text-white font-medium text-sm flex items-center gap-2 hover:bg-white/5 transition-all"
              >
                <Circle className="w-3 h-3 border-2 rounded-full border-white/50" /> Download Resume
              </motion.a>
            </div>

            {/* Social Icons - Removed bg-black/20 and blur */}
            <div className="flex items-center gap-5 mt-2">
              <motion.a 
                whileHover={{ scale: 1.15 }}
                whileTap={{ scale: 0.9 }}
                href="https://github.com/VinayKumarMakvana" target="_blank" rel="noreferrer" className="text-white/70 hover:text-white transition-colors"
              >
                <GithubIcon className="w-5 h-5" />
              </motion.a>
              <motion.a 
                whileHover={{ scale: 1.15 }}
                whileTap={{ scale: 0.9 }}
                href="https://www.linkedin.com/in/vinay-kumar-makvana-2371ba391/" target="_blank" rel="noreferrer" className="text-white/70 hover:text-white transition-colors"
              >
                <LinkedinIcon className="w-5 h-5" />
              </motion.a>
              <motion.a 
                whileHover={{ scale: 1.15 }}
                whileTap={{ scale: 0.9 }}
                href="https://twitter.com" target="_blank" rel="noreferrer" className="text-white/70 hover:text-white transition-colors"
              >
                <FaXTwitter className="w-5 h-5" />
              </motion.a>
              <motion.a 
                whileHover={{ scale: 1.15 }}
                whileTap={{ scale: 0.9 }}
                href="https://instagram.com" target="_blank" rel="noreferrer" className="text-white/70 hover:text-white transition-colors"
              >
                <FaInstagram className="w-5 h-5" />
              </motion.a>
              <motion.a 
                whileHover={{ scale: 1.15 }}
                whileTap={{ scale: 0.9 }}
                href="mailto:vkmakvana.dev@gmail.com" className="text-white/70 hover:text-white transition-colors"
              >
                <MailIcon className="w-5 h-5" />
              </motion.a>
            </div>

            {/* Tech Stack Row */}
            <div className="flex flex-col xl:flex-row xl:items-center gap-4 mt-4 pt-5 border-t border-white/10 lg:border-white/20">
              <span className="text-[10px] font-bold tracking-widest text-white/60 uppercase whitespace-nowrap">TECH STACK</span>
              <div className="flex flex-wrap items-center gap-3 lg:gap-4">
                {[
                  { icon: <FaReact className="text-[#61DAFB] w-4 h-4" />, name: "React" },
                  { icon: <SiNextdotjs className="text-white w-4 h-4" />, name: "Next.js" },
                  { icon: <SiJavascript className="text-[#F7DF1E] w-4 h-4" />, name: "JavaScript" },
                  { icon: <SiTypescript className="text-[#3178C6] w-4 h-4" />, name: "TypeScript" },
                  { icon: <FaNodeJs className="text-[#339933] w-4 h-4" />, name: "Node.js" },
                  { icon: <FaPython className="text-[#3776AB] w-4 h-4" />, name: "Python" },
                  { icon: <SiMongodb className="text-[#47A248] w-4 h-4" />, name: "MongoDB" },
                  { icon: <SiCplusplus className="text-[#00599C] w-4 h-4" />, name: "C++" },
                ].map((tech, i) => (
                  <motion.div 
                    key={i}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-1.5 cursor-pointer"
                  >
                    {tech.icon}
                    <span className="text-[11px] font-semibold text-white/80 hidden sm:block">{tech.name}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* ===== CENTER COLUMN: Empty Spacer (4 cols) ===== */}
          <div className="col-span-12 lg:col-span-4 relative hidden lg:flex min-h-[90vh] justify-center items-center pointer-events-none">
            {/* Handwritten overlay text */}
            <div className={`absolute top-[10%] lg:top-[28%] left-[0%] lg:left-[5%] z-30 -rotate-12 ${caveat.className} hidden md:block`}>
              <div className="text-2xl text-white/60 leading-none drop-shadow-md">Better<br />Ideas<br />Brighter<br />Future</div>
            </div>
          </div>

          {/* ===== RIGHT COLUMN: Terminal + Quote + Tech (3 cols) ===== */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="col-span-12 lg:col-span-3 flex flex-col gap-4 pt-4 pb-12 lg:py-0 z-20"
          >
            {/* Terminal */}
            <Terminal />

            {/* Currently Focused Box */}
            <div className="rounded-xl border border-white/10 bg-[#0A0F1C]/70 backdrop-blur-md p-5 flex flex-col gap-3 shadow-xl mt-4">
              <div className="flex items-center gap-2">
                <div className="flex items-center justify-center w-4 h-4 rounded-full border border-white/20">
                  <div className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
                </div>
                <span className="text-sm font-semibold text-white/90">Currently Focused</span>
              </div>
              <ul className="space-y-3">
                {[
                  "Building Full-Stack Web Apps",
                  "Integrating AI into Real Products",
                  "Improving Software Engineering Skills",
                  "Practicing DSA & System Design"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-[11.5px] text-white/60">
                    <div className="flex items-center justify-center w-3.5 h-3.5 rounded-full border border-white/20 mt-0.5 shrink-0">
                      <div className="w-1 h-1 rounded-full bg-white/40" />
                    </div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
          
        {/* Missing 4 Boxes at the bottom of Hero */}
        <div className="w-full max-w-[1600px] mx-auto px-6 xl:px-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pb-10 z-20">
            <motion.div whileHover={{ scale: 1.02 }} className="p-5 rounded-2xl bg-[#0A0F1C]/70 backdrop-blur-md border border-white/10 hover:border-indigo-500/30 transition-colors flex items-start gap-4 shadow-xl">
              <div className="shrink-0 p-3 rounded-xl bg-blue-500/10 text-blue-400">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5" /></svg>
              </div>
              <div>
                <h4 className="text-white font-bold text-sm mb-1">Full-Stack<br/>Development</h4>
                <p className="text-white/50 text-xs">Modern web applications from frontend to deployment.</p>
              </div>
            </motion.div>

            <motion.div whileHover={{ scale: 1.02 }} className="p-5 rounded-2xl bg-[#0A0F1C]/70 backdrop-blur-md border border-white/10 hover:border-purple-500/30 transition-colors flex items-start gap-4 shadow-xl">
              <div className="shrink-0 p-3 rounded-xl bg-purple-500/10 text-purple-400">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /></svg>
              </div>
              <div>
                <h4 className="text-white font-bold text-sm mb-1">AI-Powered<br/>Products</h4>
                <p className="text-white/50 text-xs">Integrating LLMs & AI into real-world solutions.</p>
              </div>
            </motion.div>

            <motion.div whileHover={{ scale: 1.02 }} className="p-5 rounded-2xl bg-[#0A0F1C]/70 backdrop-blur-md border border-white/10 hover:border-blue-500/30 transition-colors flex items-start gap-4 shadow-xl">
              <div className="shrink-0 p-3 rounded-xl bg-blue-500/10 text-blue-400">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
              </div>
              <div>
                <h4 className="text-white font-bold text-sm mb-1">Software<br/>Engineering</h4>
                <p className="text-white/50 text-xs">Strong CS fundamentals and system design.</p>
              </div>
            </motion.div>

            <motion.div whileHover={{ scale: 1.02 }} className="p-5 rounded-2xl bg-[#0A0F1C]/70 backdrop-blur-md border border-white/10 hover:border-orange-500/30 transition-colors flex items-start gap-4 shadow-xl">
              <div className="shrink-0 p-3 rounded-xl bg-orange-500/10 text-orange-400">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>
              </div>
              <div>
                <h4 className="text-white font-bold text-sm mb-1">Problem Solving<br/><span className="text-xs text-white/50 font-normal">C++ • DSA</span></h4>
                <p className="text-white/50 text-xs">Analytical thinking and optimized solutions.</p>
              </div>
            </motion.div>
          </div>
      </div>
    </section>
  );
}
