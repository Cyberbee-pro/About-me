"use client";

import Image from "next/image";
import Link from "next/link";
import Navbar from "../Navigation/NavBar"; // Ensure this path is correct
import Footer from "../Navigation/Footer"; // Ensure this path is correct

export default function SkillsPage() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-[#35014d] via-[#1a0029] to-[#1d022a] text-white font-sans">
      <Navbar />
      <Content />
      <Footer />
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
          {["FullStack Developer", "UI/UX Designer", "Game Developer", "Game Designer", "AI Engineer"].map((role) => (
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
              ["Java", 85],
              ["JavaScript", 75],
            ]}
          />
          <SkillList
            items={[
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
            ]}
          />
        </TwoColumn>

        {/* TOOLS */}
        <SectionTitle icon="/tools.svg" text="Tools I Use" />
        <TwoColumn>
          <SimpleList
            items={[
              "VS Code",
              "Apache NetBeans (Java)",
              "GitHub",
              "Unreal Engine",
            ]}
          />
          <SimpleList
            items={[
              "Figma",
              "Blender",
              "DaVinci Resolve",
            ]}
          />
        </TwoColumn>
      </section>
    </main>
  );
};

/* =====================
  REUSABLE COMPONENTS
===================== */

const SectionTitle = ({ icon, text }: { icon: string; text: string }) => (
  <div className="flex items-center gap-4 text-3xl md:text-4xl font-bold mt-16 mb-10">
    <div className="p-3 bg-white/5 rounded-2xl border border-white/10 group-hover:scale-110 transition-transform">
      <Image 
        src={icon} 
        alt={text} 
        width={40} 
        height={40} 
        className="opacity-80 group-hover:opacity-100"
        onError={(e) => (e.currentTarget.src = 'https://www.svgrepo.com/show/511005/code-square.svg')} // Fallback icon
      />
    </div>
    <h2 className="tracking-wide">{text}</h2>
  </div>
);

const TwoColumn = ({ children }: { children: React.ReactNode }) => (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-6 mb-16">
    {children}
  </div>
);

const SkillList = ({ items }: { items: [string, number][] }) => (
  <div className="space-y-6">
    {items.map(([label, value]) => (
      <div key={label} className="group">
        <div className="flex justify-between mb-2">
          <span className="text-lg font-medium text-gray-300 group-hover:text-white transition-colors">{label}</span>
          <span className="text-sm text-gray-500">{value}%</span>
        </div>
        <ProgressBar prog={value} />
      </div>
    ))}
  </div>
);

const SimpleList = ({ items }: { items: string[] }) => (
  <ul className="grid grid-cols-1 gap-4">
    {items.map((item) => (
      <li 
        key={item} 
        className="flex items-center gap-3 text-lg text-gray-300 hover:text-white transition-colors"
      >
        <span className="h-1.5 w-1.5 bg-purple-500 rounded-full" />
        {item}
      </li>
    ))}
  </ul>
);

/* =====================
  PROGRESS BAR
===================== */
const ProgressBar = ({ prog }: { prog: number }) => {
  const safe = Math.max(0, Math.min(100, prog));

  return (
    <div className="bg-white/5 h-2 w-full rounded-full overflow-hidden border border-white/5">
      <div
        className="bg-gradient-to-r from-purple-600 to-pink-500 h-full rounded-full transition-all duration-1000 ease-out"
        style={{ width: `${safe}%` }}
      />
    </div>
  );
};