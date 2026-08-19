"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useMotionValue, useSpring, useTransform, useMotionTemplate, AnimatePresence } from "framer-motion";
import { ExternalLink, Code2, Layers, Server, Cpu, Database, ChevronLeft, ChevronRight, ShoppingCart } from "lucide-react";

const projects = [
  {
    title: "Zipflo",
    desc: "A modern, hyperlocal e-commerce platform bridging the gap between local sellers and buyers with real-time order tracking.",
    tech: ["Java 17", "React", "Spring Boot", "MongoDB"],
    features: ["Hyperlocal", "Real-Time Tracking"],
    highlights: [
      "Microservices architecture with Spring Boot",
      "Real-time WebSocket order tracking",
      "Optimized MongoDB aggregations for fast product search"
    ],
    icon: <ShoppingCart className="w-5 h-5" />,
    live: "https://www.zipflo.store/",
    color: "rgba(0, 255, 178, 0.5)", // accent-primary
    images: ["/zipflo-preview1.png", "/zipflo-preview2.png", "/zipflo-preview3.png"],
    span: "md:col-span-2 lg:col-span-2 lg:row-span-2"
  },
  {
    title: "BugMind AI",
    desc: "An intelligent, full-stack codebase analysis platform and web-based IDE.",
    tech: ["Next.js", "Python", "FastAPI", "MongoDB"],
    features: ["Interactive IDE", "AI Auto-Fix"],
    icon: <Code2 className="w-5 h-5" />,
    live: "https://bugmind-ai.vercel.app/",
    color: "rgba(176, 38, 255, 0.5)", // accent-secondary
    images: ["/bugmind-preview1.png", "/bugmind-preview2.png", "/bugmind-preview3.png", "bugmind-preview4.png"],
    span: "md:col-span-1 lg:col-span-1"
  },
  {
    title: "Interview AI",
    desc: "AI-powered career coach and resume builder platform for interview prep.",
    tech: ["React", "Node.js", "Gemini AI"],
    features: ["Career Coach", "Resume Builder"],
    icon: <Cpu className="w-5 h-5" />,
    live: "https://interview-plan-blue.vercel.app/",
    color: "rgba(0, 212, 255, 0.5)", // accent-tertiary
    images: ["/interview-preview1.png", "/interview-preview3.png", "/interview-preview2.png"],
    span: "md:col-span-1 lg:col-span-1"
  },
  {
    title: "Vinay's Web Studio",
    desc: "A professional web development studio that builds high-quality websites.",
    tech: ["React", "Node.js", "Tailwind CSS"],
    features: ["Client-Centric", "Full-Stack"],
    highlights: [
      "End-to-end custom website development",
      "SEO optimized and performant Next.js code",
      "High-converting landing pages"
    ],
    icon: <Code2 className="w-5 h-5" />,
    live: "https://vinays-web-servises.vercel.app/",
    color: "rgba(0, 255, 178, 0.5)",
    images: ["/studio1.png", "/studio2.png", "/studio3.png"],
    span: "md:col-span-2 lg:col-span-2"
  },
  {
    title: "JEE-OS",
    desc: "100% free educational platform providing high-quality engineering resources.",
    tech: ["JavaScript", "CSS", "JSON"],
    features: ["Study Tools", "OS Interface"],
    icon: <Cpu className="w-5 h-5" />,
    live: "https://jee-os-6565.vercel.app/",
    color: "rgba(176, 38, 255, 0.5)",
    images: ["/jee1.png", "/jee2.png", "/jee3.png"],
    span: "md:col-span-1 lg:col-span-1"
  },
  {
    title: "Portfolio",
    desc: "A full-stack developer portfolio built with modern web technologies.",
    tech: ["React", "Tailwind CSS", "Framer"],
    features: ["Animations", "Responsive"],
    highlights: [
      "Complex Framer Motion 3D animations",
      "Premium Glassmorphism UI design system",
      "Fully responsive and performant layout"
    ],
    icon: <Layers className="w-5 h-5" />,
    live: "https://vinay-s-portfolio-phi.vercel.app/",
    color: "rgba(0, 212, 255, 0.5)",
    images: ["/VINAY'S-Portfolio.png", "/VINAY'S-Portfolio1.png", "/VINAY'S-Portfolio2.png"],
    span: "md:col-span-2 lg:col-span-3"
  }
];

function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);

  // Mouse position values for the spotlight
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Values for 3D rotation
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 150, damping: 20 });
  const mouseYSpring = useSpring(y, { stiffness: 150, damping: 20 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["5deg", "-5deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-5deg", "5deg"]);

  const background = useMotionTemplate`radial-gradient(400px circle at ${mouseX}px ${mouseY}px, ${project.color}, transparent 40%)`;

  const [isHovered, setIsHovered] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    if (project.images && project.images.length > 0 && isHovered) {
      const timer = setInterval(() => {
        setCurrentImageIndex((prev) => (prev + 1) % project.images.length);
      }, 2500);
      return () => clearInterval(timer);
    }
  }, [project.images, isHovered]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();

    // Spotlight calculations
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);

    // 3D rotation calculations
    const width = rect.width;
    const height = rect.height;
    const mouseXPos = e.clientX - rect.left;
    const mouseYPos = e.clientY - rect.top;
    const xPct = mouseXPos / width - 0.5;
    const yPct = mouseYPos / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      variants={{
        hidden: { opacity: 0, y: 50, scale: 0.95 },
        show: { opacity: 1, y: 0, scale: 1, transition: { type: "spring", bounce: 0.4 } }
      }}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className={`relative flex flex-col h-full rounded-3xl glass-panel overflow-hidden cursor-crosshair group perspective-1000 ${project.span}`}
    >
      {/* Interactive Spotlight Effect */}
      <motion.div
        className="absolute -inset-px rounded-3xl opacity-0 transition-opacity duration-500 pointer-events-none group-hover:opacity-100 z-10"
        style={{ background }}
      />

      <div className="relative z-20 p-6 flex flex-col h-full bg-background/40 backdrop-blur-sm m-[1px] rounded-[23px] border border-white/5 group-hover:border-transparent transition-colors duration-500">

        {/* Project Image Slider */}
        <div
          className="w-full flex-1 min-h-[200px] rounded-2xl overflow-hidden mb-6 relative group/slider border border-white/10 bg-black/50"
          style={{ transform: "translateZ(30px)" }}
        >
          {project.images && project.images.length > 0 ? (
            <AnimatePresence mode="wait">
              <motion.img
                key={currentImageIndex}
                src={project.images[currentImageIndex]}
                alt={`${project.title} - preview`}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.6 }}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover/slider:scale-105"
              />
            </AnimatePresence>
          ) : (
            <div className="w-full h-full flex items-center justify-center">
              <span className="text-white/20 text-sm">No Image</span>
            </div>
          )}

          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10" />

          <div className="absolute top-4 left-4 w-12 h-12 rounded-2xl glass-panel border border-white/20 flex items-center justify-center text-white z-20 shadow-xl backdrop-blur-md">
            {project.icon}
          </div>

          <div className="absolute bottom-4 left-4 right-4 z-20 flex justify-between items-end">
            <h3 className="text-2xl font-bold text-white group-hover:text-accent-primary transition-colors duration-300">
              {project.title}
            </h3>
            <a href={project.live} target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center hover:bg-accent-primary hover:text-black transition-all hover:scale-110 text-white">
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Content */}
        <div className="shrink-0" style={{ transform: "translateZ(20px)" }}>
          <p className="text-foreground/70 text-sm leading-relaxed mb-6">
            {project.desc}
          </p>
          
          {/* @ts-ignore - highlights is optional and only exists on some projects */}
          {project.highlights && (
            <div className="space-y-2 mb-6">
              <h4 className="text-[10px] font-bold uppercase tracking-widest text-white/40 mb-3">Key Highlights</h4>
              <ul className="space-y-2.5">
                {/* @ts-ignore */}
                {project.highlights.map((highlight, i) => (
                  <li key={i} className="text-sm text-foreground/80 flex items-start gap-3 leading-tight">
                    <span className="text-accent-primary mt-0.5 opacity-80">▹</span>
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Tech Stack */}
        <div className="mt-auto" style={{ transform: "translateZ(10px)" }}>
          <div className="flex flex-wrap gap-2 mb-3">
            {project.features.map(f => (
              <span key={f} className="text-[10px] font-bold uppercase tracking-widest text-accent-primary/80 border border-accent-primary/20 px-2.5 py-1 rounded-full bg-accent-primary/5">
                {f}
              </span>
            ))}
          </div>
          <div className="flex flex-wrap gap-2">
            {project.tech.map(t => (
              <span key={t} className="text-xs font-medium text-foreground/80 bg-white/5 hover:bg-white/10 transition-colors px-3 py-1.5 rounded-lg border border-white/5">
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export function Projects() {
  return (
    <section id="projects" className="py-32 relative z-10 bg-background overflow-hidden">

      {/* Background abstract elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[400px] bg-accent-secondary/10 rounded-full blur-[150px] pointer-events-none mix-blend-screen -z-10" />

      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20 flex flex-col items-center text-center"
        >
          <div className="inline-block mb-4">
            <span className="glass-panel px-5 py-2 rounded-full text-xs font-bold uppercase tracking-widest text-accent-secondary border border-accent-secondary/30">
              Work & Portfolio
            </span>
          </div>
          <h2 className="text-5xl md:text-6xl font-black mb-6 tracking-tighter text-foreground">
            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-tertiary via-accent-primary to-accent-secondary text-glow">Engineering</span>
          </h2>
          <p className="text-foreground/60 max-w-2xl text-lg font-medium">
            Applications architected for scale, performance, and user experience.
          </p>
        </motion.div>

        {/* Bento Grid */}
        <motion.div
          variants={{
            hidden: { opacity: 0 },
            show: { opacity: 1, transition: { staggerChildren: 0.15 } }
          }}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto"
          style={{ perspective: "1200px" }}
        >
          {projects.map((project, idx) => (
            <ProjectCard key={project.title} project={project} index={idx} />
          ))}
        </motion.div>

        {/* GitHub CTA to fill empty space below projects */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="mt-16 flex justify-center"
        >
          <motion.a 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="https://github.com/VinayKumarMakvana" 
            target="_blank" 
            rel="noreferrer" 
            className="group relative px-8 py-4 rounded-2xl overflow-hidden glass-panel border border-accent-tertiary/30 hover:border-accent-tertiary shadow-[0_0_20px_rgba(0,212,255,0.15)] hover:shadow-[0_0_40px_rgba(0,212,255,0.4)] transition-all flex items-center gap-3"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-accent-primary/10 to-accent-tertiary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            {/* Glow sweep animation */}
            <motion.div 
              animate={{ x: ["-100%", "200%"] }} 
              transition={{ repeat: Infinity, duration: 3, ease: "linear" }} 
              className="absolute inset-0 w-1/2 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12" 
            />
            <Code2 className="w-5 h-5 text-foreground group-hover:text-accent-tertiary transition-colors relative z-10" />
            <span className="font-bold text-foreground relative z-10">View more on GitHub</span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
