"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Terminal, Briefcase } from "lucide-react";
import { ThemeToggle } from "./ui/ThemeToggle";
import { useRecruiterMode } from "./RecruiterModeContext";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { isRecruiterMode, toggleRecruiterMode } = useRecruiterMode();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed top-4 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none">
      <header
        className={`pointer-events-auto transition-all duration-500 rounded-full border ${
          isScrolled 
            ? "glass-panel shadow-2xl shadow-black/20 border-white/10 py-3 px-6 w-full max-w-4xl bg-background/60" 
            : "bg-background/20 backdrop-blur-sm border-transparent py-4 px-8 w-full max-w-5xl"
        }`}
      >
        <div className="flex items-center justify-between">
          <a href="#" className="text-xl md:text-2xl font-bold tracking-tighter flex items-center gap-2 group">
            <Terminal className="text-accent-primary group-hover:text-accent-tertiary transition-colors w-5 h-5 md:w-6 md:h-6" />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70 group-hover:from-accent-primary group-hover:to-accent-tertiary transition-all duration-300">V.K.M</span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-8">
            <ul className="flex items-center gap-6 text-sm font-medium">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-foreground/80 hover:text-accent-primary transition-colors relative group py-2"
                  >
                    {link.name}
                    <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-accent-primary transition-all group-hover:w-full rounded-full" />
                  </a>
                </li>
              ))}
            </ul>

            <div className="flex items-center gap-4 border-l border-foreground/20 pl-4">
              <button
                onClick={toggleRecruiterMode}
                className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 ${
                  isRecruiterMode
                    ? "bg-accent-secondary text-white shadow-[0_0_20px_rgba(176,38,255,0.4)] scale-105"
                    : "glass hover:bg-foreground/10 hover:text-accent-primary border border-foreground/10"
                }`}
              >
                <Briefcase className="w-3.5 h-3.5" />
                <span className="hidden lg:inline">Quick-Pass</span>
              </button>
              <ThemeToggle />
            </div>
          </nav>

          {/* Mobile Toggle */}
          <div className="md:hidden flex items-center gap-4">
            <ThemeToggle />
            <button
              className="text-foreground focus:outline-none p-2 glass rounded-full"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 16, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="absolute top-full left-0 right-0 glass-panel shadow-2xl rounded-2xl flex flex-col py-4 px-6 gap-2 md:hidden border border-white/10 mx-auto"
            >
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-base font-medium text-foreground/80 hover:text-accent-primary p-3 rounded-xl hover:bg-foreground/5 transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <div className="h-px w-full bg-foreground/10 my-2" />
              <button
                onClick={() => {
                  toggleRecruiterMode();
                  setMobileMenuOpen(false);
                }}
                className={`flex items-center justify-center gap-2 w-full py-3 rounded-xl font-bold uppercase tracking-wider text-sm transition-all ${
                  isRecruiterMode
                    ? "bg-accent-secondary text-white shadow-[0_0_20px_rgba(176,38,255,0.4)]"
                    : "glass border border-foreground/10 hover:bg-foreground/5 text-foreground/80"
                }`}
              >
                <Briefcase className="w-4 h-4" />
                Recruiter Quick-Pass
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </div>
  );
}
