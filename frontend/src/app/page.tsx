import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { HowIBuildSection } from "@/components/HowIBuildSection";
import { FullStackSection } from "@/components/FullStackSection";
import { SoftwareEngineeringSection } from "@/components/SoftwareEngineeringSection";
import { Projects } from "@/components/Projects";
import { AiEngineeringSection } from "@/components/AiEngineeringSection";
import { DsaSection } from "@/components/DsaSection";
import { SystemDesignSection } from "@/components/SystemDesignSection";
import { Contact } from "@/components/Contact";
import { Skills } from "@/components/Skills";
import { GithubSection } from "@/components/GithubSection";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col w-full bg-[#03060C]">
      <Hero />
      
      <div className="container mx-auto px-4 md:px-6 max-w-[1600px] flex flex-col gap-4 md:gap-6 pb-4 md:pb-6">
        <div className="flex flex-col gap-6">
          {/* 01. About */}
          <About />
          
          {/* 02. How I Build */}
          <HowIBuildSection />

          {/* 03. Full-Stack Dev with AI */}
          <FullStackSection />

          {/* 03. Projects */}
          <Projects />

          {/* 04. Software Engineering */}
          <SoftwareEngineeringSection />

          {/* 05. DSA */}
          <DsaSection />

          {/* 06. System Design */}
          <SystemDesignSection />

          {/* 07. Technologies & Tools */}
          <Skills />

          {/* 08. Open Source & Github */}
          <GithubSection />

          {/* 09. Let's Connect */}
          <Contact />
        </div>
      </div>
      
      <Footer />
    </div>
  );
}
