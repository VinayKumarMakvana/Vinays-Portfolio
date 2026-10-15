"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ArrowRight, 
  ExternalLink, 
  ChevronLeft, 
  ChevronRight, 
  Briefcase, 
  Code2, 
  Sparkles,
  CheckCircle2,
  Filter
} from "lucide-react";

export interface ProjectItem {
  num: string;
  title: string;
  subtitle: string;
  role: string;
  roleType: "client" | "independent";
  category: "ai" | "fullstack" | "client" | "creative";
  tags: string[];
  desc: string;
  features: string[];
  tech: string[];
  live: string;
  images: string[];
}

export const projectsData: ProjectItem[] = [
  {
    num: "01",
    title: "Zipflo",
    subtitle: "Hyperlocal E-Commerce Marketplace",
    role: "Full-Stack Developer | Client Project",
    roleType: "client",
    category: "client",
    tags: ["Client Project", "Hyperlocal", "Real-Time", "Full-Stack"],
    desc: "A full-stack hyperlocal marketplace connecting local sellers with nearby buyers with real-time order tracking and location-based discovery.",
    features: [
      "Location-based product discovery and order management",
      "Real-time live order updates powered by WebSockets",
      "Complete seller inventory and buyer checkout workflows"
    ],
    tech: ["Java", "Spring Boot", "React", "Vite", "MongoDB", "WebSockets", "Docker"],
    live: "https://www.zipflo.store/",
    images: [
      "/zipflo-preview1.png",
      "/zipflo-preview2.png",
      "/zipflo-preview3.png"
    ]
  },
  {
    num: "02",
    title: "BugMind AI",
    subtitle: "AI-Powered Code Analysis Platform",
    role: "Independent Developer",
    roleType: "independent",
    category: "ai",
    tags: ["AI & LLM", "Code Analysis", "Web IDE", "ChromaDB"],
    desc: "An AI-assisted code analysis platform and web-based IDE designed to support developers with code editing, automated review, and context-aware bug triage.",
    features: [
      "Browser-based Monaco code editor environment",
      "AI-assisted code review and codebase triage",
      "ChromaDB retrieval integration for context-aware analysis"
    ],
    tech: ["React", "FastAPI", "Python", "MongoDB", "ChromaDB", "Monaco Editor"],
    live: "https://bugmind-ai.vercel.app/",
    images: [
      "/bugmind-preview1.png",
      "/bugmind-preview2.png",
      "/bugmind-preview3.png"
    ]
  },
  {
    num: "03",
    title: "Interview AI",
    subtitle: "AI Career Coach & Resume Builder",
    role: "Independent Developer",
    roleType: "independent",
    category: "ai",
    tags: ["AI & LLM", "Career Coach", "Productivity", "Gemini AI"],
    desc: "A full-stack career platform focused on AI-assisted interview preparation, job-tailored strategies, and automated resume optimization.",
    features: [
      "AI-assisted mock interview simulations and instant feedback",
      "Interview strategy generation based on resumes and target jobs",
      "Resume optimization with automated PDF export via Puppeteer"
    ],
    tech: ["React", "Node.js", "REST APIs", "JWT", "Google Gemini", "Puppeteer"],
    live: "https://interview-plan-blue.vercel.app/",
    images: [
      "/interview-preview1.png",
      "/interview-preview2.png",
      "/interview-preview3.png"
    ]
  },
  {
    num: "04",
    title: "MCU BCA",
    subtitle: "University Study Hub & Exam OS",
    role: "Independent Developer",
    roleType: "independent",
    category: "fullstack",
    tags: ["EdTech", "Study Hub", "Exam Simulator", "Redux"],
    desc: "A student-focused learning platform providing organized study materials, semester-wise notes, and a timed 16-mark descriptive exam simulator for MCU BCA students.",
    features: [
      "Semester-wise organized study resources, notes, and syllabus",
      "Timed exam simulator with 16-mark university model answers",
      "Centralized state management with Redux Toolkit and Clerk auth"
    ],
    tech: ["React", "JavaScript", "Redux Toolkit", "Vite", "Clerk", "Tailwind CSS"],
    live: "https://mcu-bca.vercel.app/",
    images: [
      "/mcu-bca-preview.png",
      "/mcu-bca-preview1.png",
      "/mcu-bca-preview2.png"
    ]
  },
  {
    num: "05",
    title: "Vynora Pvt.",
    subtitle: "Web Development Agency & Portfolio Website",
    role: "Independent Developer",
    roleType: "independent",
    category: "creative",
    tags: ["Agency", "Three.js", "Next.js", "3D Interactive"],
    desc: "A modern digital agency website showcasing web development services, project case studies, and client inquiry options with fluid 3D visuals.",
    features: [
      "Fluid responsive layouts with custom animated page sections",
      "Interactive 3D visuals using Three.js and React Three Fiber",
      "Inquiry API integration with Nodemailer & environment configuration"
    ],
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Three.js", "Nodemailer"],
    live: "https://vynorapvt-one.vercel.app/",
    images: [
      "/vynora-preview.png",
      "/vynora-preview1.png",
      "/vynora-preview2.png"
    ]
  },
  {
    num: "06",
    title: "Anant Movies",
    subtitle: "Film Production Portfolio Website",
    role: "Full-Stack Developer | Client Project",
    roleType: "client",
    category: "client",
    tags: ["Client Project", "Cinematic", "Three.js", "Creative"],
    desc: "A cinematic portfolio website designed to showcase film production projects, showreels, and creative services with immersive 3D presentation.",
    features: [
      "Cinematic visual presentation with 3D elements and animations",
      "Responsive video and project galleries for creative works",
      "Reusable UI components and animated interactions"
    ],
    tech: ["React", "TypeScript", "Vite", "Tailwind CSS", "Three.js", "Framer Motion"],
    live: "https://anant-movies.vercel.app/",
    images: [
      "/anant-movies-preview.png",
      "/anant-movies-preview1.png",
      "/anant-movies-preview2.png"
    ]
  }
];

function ProjectCard({ project, index }: { project: ProjectItem; index: number }) {
  const [currentImgIndex, setCurrentImgIndex] = useState(0);

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();
    setCurrentImgIndex((prev) => (prev === 0 ? project.images.length - 1 : prev - 1));
  };

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();
    setCurrentImgIndex((prev) => (prev === project.images.length - 1 ? 0 : prev + 1));
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.08 }}
      className="group/proj rounded-2xl bg-[#0A0F1C]/50 border border-white/5 overflow-hidden hover:border-blue-500/40 hover:bg-[#0B132B]/40 hover:shadow-[0_20px_45px_rgba(37,99,235,0.15)] transition-all duration-500 flex flex-col"
    >
      {/* ===== Interactive Multi-Image Slider Header ===== */}
      <div className="relative w-full h-[220px] sm:h-[260px] bg-[#050B14] overflow-hidden border-b border-white/10 group/slider">
        {project.images && project.images.length > 0 ? (
          <>
            <AnimatePresence mode="wait">
              <motion.img
                key={currentImgIndex}
                src={project.images[currentImgIndex]}
                alt={`${project.title} screenshot ${currentImgIndex + 1}`}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.35, ease: "easeInOut" }}
                className="w-full h-full object-cover object-top opacity-90 group-hover/proj:opacity-100 transition-opacity"
              />
            </AnimatePresence>

            {/* Subtle Gradient Overlays */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A0F1C] via-transparent to-black/30 pointer-events-none" />

            {/* Top Bar Badges */}
            <div className="absolute top-3 left-3 right-3 flex items-center justify-between z-20 pointer-events-none">
              {/* Project Number */}
              <div className="px-2.5 py-1 rounded-md bg-black/60 backdrop-blur-md border border-white/10 text-[11px] font-mono font-bold text-blue-400">
                PROJ #{project.num}
              </div>

              {/* Image Counter Badge */}
              {project.images.length > 1 && (
                <div className="px-2 py-0.5 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-[10px] font-mono font-medium text-white/70">
                  {currentImgIndex + 1} / {project.images.length} photos
                </div>
              )}
            </div>

            {/* Prev / Next Slider Arrows */}
            {project.images.length > 1 && (
              <>
                <button
                  type="button"
                  onClick={prevImage}
                  aria-label="Previous Image"
                  className="absolute left-2.5 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/70 hover:bg-blue-600 backdrop-blur-md border border-white/20 text-white flex items-center justify-center opacity-0 group-hover/slider:opacity-100 transition-all duration-300 z-30 shadow-lg hover:scale-110 active:scale-95"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  type="button"
                  onClick={nextImage}
                  aria-label="Next Image"
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/70 hover:bg-blue-600 backdrop-blur-md border border-white/20 text-white flex items-center justify-center opacity-0 group-hover/slider:opacity-100 transition-all duration-300 z-30 shadow-lg hover:scale-110 active:scale-95"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>

                {/* Dot Indicators */}
                <div className="absolute bottom-2.5 left-1/2 -translate-x-1/2 flex items-center gap-1.5 z-20 bg-black/50 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/10">
                  {project.images.map((_, dotIdx) => (
                    <button
                      key={dotIdx}
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        e.preventDefault();
                        setCurrentImgIndex(dotIdx);
                      }}
                      className={`h-1.5 rounded-full transition-all duration-300 ${
                        dotIdx === currentImgIndex
                          ? "w-4 bg-blue-400"
                          : "w-1.5 bg-white/40 hover:bg-white/70"
                      }`}
                      aria-label={`Go to slide ${dotIdx + 1}`}
                    />
                  ))}
                </div>
              </>
            )}
          </>
        ) : (
          <div className="w-full h-full flex items-center justify-center text-white/30 text-xs font-mono">
            Image Preview Coming Soon
          </div>
        )}
      </div>

      {/* ===== Card Content Body ===== */}
      <div className="p-6 flex flex-col flex-grow">
        {/* Role & Category Badge */}
        <div className="flex items-center gap-2 mb-2.5">
          <span
            className={`inline-flex items-center gap-1 text-[10px] font-semibold uppercase tracking-wider px-2.5 py-0.5 rounded-full border ${
              project.roleType === "client"
                ? "bg-emerald-500/10 text-emerald-300 border-emerald-500/20"
                : "bg-indigo-500/10 text-indigo-300 border-indigo-500/20"
            }`}
          >
            <Briefcase className="w-3 h-3" />
            {project.role}
          </span>
        </div>

        {/* Title & Subtitle */}
        <h3 className="text-xl font-bold text-white tracking-tight group-hover/proj:text-blue-400 transition-colors">
          {project.title}
        </h3>
        <p className="text-[12px] text-white/40 font-medium mb-3">
          {project.subtitle}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mb-3.5">
          {project.tags.map((tag, i) => (
            <span
              key={i}
              className="text-[10px] font-medium bg-white/[0.04] border border-white/10 px-2.5 py-1 rounded-md text-white/60"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Description */}
        <p className="text-[12.5px] text-white/60 leading-relaxed mb-4">
          {project.desc}
        </p>

        {/* Key Features Bullets */}
        <div className="space-y-1.5 mb-4 p-3 rounded-xl bg-white/[0.02] border border-white/5">
          <div className="text-[10px] font-bold uppercase tracking-wider text-white/40 mb-1">
            Key Highlights
          </div>
          {project.features.map((feat, i) => (
            <div key={i} className="flex items-start gap-2 text-[11px] text-white/70 leading-snug">
              <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 shrink-0 mt-0.5" />
              <span>{feat}</span>
            </div>
          ))}
        </div>

        {/* Tech Stack Pills */}
        <div className="mt-auto pt-2 mb-5">
          <div className="text-[10px] font-bold uppercase tracking-wider text-white/40 mb-2">
            Technologies Used
          </div>
          <div className="flex flex-wrap gap-1.5">
            {project.tech.map((t, i) => (
              <span
                key={i}
                className="text-[10px] font-mono bg-blue-500/5 border border-blue-500/20 text-blue-300/80 px-2.5 py-1 rounded-md"
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Action Button: Live Demo */}
        <div className="pt-2 border-t border-white/5 flex items-center justify-between">
          <motion.a
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            href={project.live}
            target="_blank"
            rel="noreferrer"
            className="w-full justify-center bg-blue-600 text-white hover:bg-blue-500 flex items-center gap-2 text-[12px] font-bold px-5 py-2.5 rounded-xl shadow-[0_0_20px_rgba(37,99,235,0.3)] hover:shadow-[0_0_30px_rgba(37,99,235,0.6)] transition-all duration-300 group/btn"
          >
            <span>Live Production Demo</span>
            <ExternalLink className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
          </motion.a>
        </div>
      </div>
    </motion.div>
  );
}

export function Projects() {
  const [activeFilter, setActiveFilter] = useState<string>("all");

  const filteredProjects = projectsData.filter((proj) => {
    if (activeFilter === "all") return true;
    if (activeFilter === "ai") return proj.category === "ai";
    if (activeFilter === "client") return proj.roleType === "client";
    if (activeFilter === "fullstack") return proj.category === "fullstack" || proj.category === "creative";
    return true;
  });

  return (
    <section
      id="projects"
      className="relative z-10 rounded-3xl border border-white/5 bg-[#050B14] p-5 sm:p-8 md:p-10 flex flex-col group overflow-hidden"
    >
      {/* Background Ambient Glows */}
      <div className="absolute top-0 right-0 w-[450px] h-[450px] bg-blue-600/5 rounded-full blur-[120px] pointer-events-none group-hover:bg-blue-600/10 transition-colors duration-700" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-indigo-600/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 h-full flex flex-col">
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-8 gap-5 border-b border-white/5 pb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="flex items-center gap-2 text-[10px] font-bold tracking-[0.2em] uppercase text-blue-400 mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              PORTFOLIO & LIVE BUILDS
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white leading-tight mb-3 tracking-tight">
              Projects That Create Real Impact.
            </h2>
            <p className="text-[13px] text-white/50 font-medium max-w-xl leading-relaxed">
              Production-ready web applications, AI-powered systems, and client solutions engineered with clean architectures and modern technologies.
            </p>
          </motion.div>

          <div className="flex flex-wrap items-center gap-3">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
              href="https://github.com/VinayKumarMakvana"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 px-6 py-2.5 rounded-full bg-blue-600 text-white text-[11px] font-bold group hover:bg-blue-500 shadow-[0_0_20px_rgba(37,99,235,0.3)] hover:shadow-[0_0_30px_rgba(37,99,235,0.6)] transition-all duration-300"
            >
              <Code2 className="w-4 h-4" />
              Visit GitHub Profile
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </motion.a>
          </div>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 mb-6">
          <div className="flex items-center gap-1.5 text-white/40 text-[11px] font-semibold mr-2">
            <Filter className="w-3.5 h-3.5" /> Filter:
          </div>
          {[
            { id: "all", label: `All Projects (${projectsData.length})` },
            { id: "client", label: "Client Work (2)" },
            { id: "ai", label: "AI & LLM (2)" },
            { id: "fullstack", label: "Web & Creative (2)" }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveFilter(tab.id)}
              className={`px-3.5 py-1.5 rounded-lg text-[11px] font-medium transition-all ${
                activeFilter === tab.id
                  ? "bg-blue-600 text-white shadow-[0_0_15px_rgba(37,99,235,0.4)]"
                  : "bg-white/[0.03] text-white/60 hover:text-white hover:bg-white/[0.08] border border-white/5"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-6">
          {filteredProjects.map((project, index) => (
            <ProjectCard key={project.num} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
