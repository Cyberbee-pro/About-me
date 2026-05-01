"use client";

import Image from "next/image";
import Link from "next/link";
import Navbar from "../Navigation/NavBar"; // Ensure this path is correct
import Footer from "../Navigation/Footer"; // Ensure this path is correct
import PixelBlast from "@/components/PixelBlast"
import { SectionTitle, TwoColumn, SkillList, SimpleList } from "@/components/custom/lists";


export default function SkillsPage() {
  return (
    <div className="min-h-screen flex flex-col text-white font-sans">
      <div className="fixed inset-0 z-0 pointer-events-none">
        <PixelBlast
          variant="circle"
          pixelSize={3}
          color="#B497CF"
          patternScale={8}
          patternDensity={1.05}
          pixelSizeJitter={1.6}
          enableRipples
          rippleSpeed={0.4}
          rippleThickness={0.12}
          rippleIntensityScale={1.5}
          liquid={false}
          liquidStrength={0.12}
          liquidRadius={1.2}
          liquidWobbleSpeed={5}
          speed={1.3}
          edgeFade={0.33}
          transparent
          className=""
          style={{}}
        />
      </div>

      {/* FOREGROUND CONTENT LAYER */}
      <div className="relative z-10 flex flex-col min-h-screen">
        <Navbar />
        <Content />
        <Footer />
      </div>
    </div>
  );
}

/* =====================
  CONTENT
===================== */
const Content = () => {
  return (
    <main className="pt-32 pb-24 flex-1">
      {/* TITLE SECTION */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 mb-12">
        <h1 className="text-6xl md:text-8xl font-bold tracking-wider opacity-90">
          Skills
        </h1>
        <div className="h-1.5 w-24 bg-purple-500 mt-4 rounded-full shadow-[0_0_15px_rgba(168,85,247,0.5)]"></div>
      </section>

      <section className="max-w-7xl mx-auto px-6 md:px-12">
        {/* ROLES / TAGS */}
        <div className="flex flex-wrap gap-3 mb-20">
          {["FullStack Developer","System Designer", "UI/UX Designer", "Game Developer", "Game Designer", "Compiler dev"].map((role) => (
            <span 
              key={role} 
              className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm md:text-lg tracking-wide hover:bg-purple-500/20 hover:border-purple-500/50 transition-all cursor-default"
            >
              {role}
            </span>
          ))}
        </div>

        {/* PROGRAMMING LANGUAGES */}
        <SectionTitle icon="/code.svg" text="Programming Languages" />
        <TwoColumn>
          <SkillList
            items={[
              ["C", 95],
              ["C++", 65],
              ["Dart", 75],
              ["lua",10],
              ["Java", 85],
              ["JavaScript", 75],
            ]}
          />
          <SkillList
            items={[
              ["shell scripting(Bash)",30],
              ["TypeScript", 75],
              ["Python", 70],
              ["HTML", 95],
              ["CSS", 95],
            ]}
          />
        </TwoColumn>

        {/* FRAMEWORKS */}
        <SectionTitle icon="/frameworks.svg" text="Frameworks" />
        <TwoColumn>
          <SkillList
            items={[
              ["React", 60],
              ["Node.js", 40],
              ["Next.js", 75],
              ["Flutter", 20],
            ]}
          />
          <SkillList
            items={[
              ["Tailwind", 80],
              ["NumPy", 50],
              ["Pandas", 25],
              ["Plasmo",50]
            ]}
          />
        </TwoColumn>

        {/* TOOLS */}
        <SectionTitle icon="/tools.svg" text="Tools I Use" />
        <TwoColumn>
          <SimpleList
            items={[
              "Linux",
              "Neo-Vim",
              "Bash",
              "VS Code",
              "Apache NetBeans (Java)",

            ]}
          />
          <SimpleList
            items={[
              "Figma",
              "Blender",
              "DaVinci Resolve",
              "GitHub",
              "Unreal Engine",
            ]}
          />
        </TwoColumn>
      </section>
    </main>
  );
};
