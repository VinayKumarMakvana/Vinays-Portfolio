"use client";

import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

const GitHubCalendar = dynamic(
  () => import("react-github-calendar").then((mod) => mod.GitHubCalendar),
  { ssr: false }
);
import { ArrowRight, Star, GitFork, Shield, GitCommit, Users, BookOpen } from "lucide-react";

const GithubIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" stroke="none">
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
  </svg>
);

export function GithubSection() {
  const [userData, setUserData] = useState<any>(null);
  const [topRepos, setTopRepos] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchGithubData = async () => {
      try {
        const userRes = await fetch('https://api.github.com/users/VinayKumarMakvana');
        const user = await userRes.json();
        setUserData(user);

        const reposRes = await fetch('https://api.github.com/users/VinayKumarMakvana/repos?sort=updated&per_page=6');
        const repos = await reposRes.json();
        // Filter out forks and get top 4
        const filtered = repos.filter((r: any) => !r.fork).slice(0, 4);
        setTopRepos(filtered);
      } catch (error) {
        console.error("Error fetching github data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchGithubData();
  }, []);

  return (
    <section className="relative z-10 rounded-3xl border border-white/5 bg-[#050B14] p-8 md:p-10 flex flex-col overflow-hidden group">
      
      {/* Background Glow */}
      <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[100px] pointer-events-none group-hover:bg-blue-500/10 transition-colors duration-700" />
      
      <div className="relative z-10 flex flex-col xl:flex-row gap-10 h-full w-full">
        
        {/* Left Column: Text & CTA */}
        <div className="w-full xl:w-[280px] shrink-0 flex flex-col justify-center gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-[10px] font-bold tracking-widest uppercase text-blue-400 mb-3 flex items-center gap-2">
              <GithubIcon className="w-4 h-4" />
              OPEN SOURCE & GITHUB
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-white leading-tight mb-4 tracking-tight">
              Code Lives Here.
            </h2>
            <p className="text-sm text-white/50 max-w-sm font-medium">
              Explore my repositories, contributions, and open source work over the years.
            </p>
          </motion.div>

          <motion.a 
            href="https://github.com/VinayKumarMakvana"
            target="_blank"
            rel="noreferrer"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="group flex items-center justify-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl transition-all shadow-[0_0_20px_rgba(37,99,235,0.3)] hover:shadow-[0_0_30px_rgba(37,99,235,0.5)] w-fit"
          >
            View GitHub Profile
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </motion.a>
        </div>

        {/* Right Column: Calendar, Stats & Repositories */}
        <div className="flex-1 flex flex-col gap-6 w-full overflow-hidden">
          
          {/* Calendar & Stats Block */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full flex flex-col bg-[#0A0F1C] border border-white/10 p-6 rounded-2xl justify-between"
          >
            {/* Calendar */}
            <div className="w-full overflow-hidden overflow-x-auto pb-4">
              <GitHubCalendar 
                username="VinayKumarMakvana" 
                colorScheme="dark"
                theme={{
                  light: ['#161b22', '#0e4429', '#006d32', '#26a641', '#39d353'],
                  dark: ['#161b22', '#0e4429', '#006d32', '#26a641', '#39d353'],
                }}
                labels={{
                  totalCount: '{{count}} contributions in the last year',
                }}
                style={{
                  width: '100%',
                }}
                blockMargin={4}
                blockRadius={4}
                blockSize={12}
                fontSize={12}
              />
            </div>

            {/* Stats below calendar */}
            <div className="flex flex-col sm:flex-row flex-wrap items-start sm:items-center justify-between gap-6 sm:gap-4 mt-6 pt-6 border-t border-white/5">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-emerald-500/10 flex items-center justify-center border border-emerald-500/20">
                  <Shield className="w-4 h-4 text-emerald-400" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] text-white/50 font-bold uppercase tracking-widest">Contributions</span>
                  <span className="text-lg font-bold text-white">Live</span>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center border border-blue-500/20">
                  <BookOpen className="w-4 h-4 text-blue-400" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] text-white/50 font-bold uppercase tracking-widest">Repositories</span>
                  <span className="text-lg font-bold text-white">
                    {isLoading ? "..." : userData?.public_repos || "0"}
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-cyan-500/10 flex items-center justify-center border border-cyan-500/20">
                  <Users className="w-4 h-4 text-cyan-400" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] text-white/50 font-bold uppercase tracking-widest">Followers</span>
                  <span className="text-lg font-bold text-white">
                    {isLoading ? "..." : userData?.followers || "0"}
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Top Repositories Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="w-full flex flex-col gap-3"
          >
            <h3 className="text-sm font-bold text-white mb-1">Top Repositories</h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {isLoading ? (
                Array(4).fill(0).map((_, i) => (
                  <div key={i} className="flex items-center justify-between p-3 bg-[#0A0F1C] border border-white/5 rounded-xl h-[60px] animate-pulse">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-white/5" />
                      <div className="flex flex-col gap-1">
                        <div className="w-24 h-3 bg-white/5 rounded" />
                        <div className="w-16 h-2 bg-white/5 rounded" />
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                topRepos.map((repo, i) => (
                  <a 
                    key={i}
                    href={repo.html_url}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-between p-3 bg-[#0A0F1C] border border-white/10 rounded-xl hover:border-blue-500/30 hover:bg-blue-500/5 transition-colors group/repo"
                  >
                    <div className="flex items-center gap-3 overflow-hidden">
                      <div className="w-8 h-8 rounded-lg bg-blue-500/10 flex items-center justify-center border border-blue-500/20 shrink-0 group-hover/repo:bg-blue-500/20 transition-colors">
                        <BookOpen className="w-3 h-3 text-blue-400" />
                      </div>
                      <div className="flex flex-col overflow-hidden">
                        <span className="text-xs font-bold text-white/90 truncate">{repo.name}</span>
                        <span className="text-[10px] text-white/50 truncate max-w-[150px]">
                          {repo.description || "No description"}
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center gap-1 bg-white/5 px-2 py-1 rounded-md shrink-0">
                      <Star className="w-3 h-3 text-yellow-500" />
                      <span className="text-[10px] font-bold text-white/70">{repo.stargazers_count}</span>
                    </div>
                  </a>
                ))
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
