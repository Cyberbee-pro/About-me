import Image from "next/image";
import Link from "next/link";
import Navbar from "../Navigation/NavBar";
import Footer from "../Navigation/Footer";


export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-[#35014d] via-[#1a0029] to-[#1d022a] text-white">
      <Navbar />
      <Content />
      <Footer />
    </div>
  );
}

/* =====================
  NAVIGATION
===================== */
const Navigation = () => (
  <nav className="fixed top-0 w-full h-16 z-50 backdrop-blur bg-black/70 border-b border-white/10">
    <div className="max-w-[95vw] mx-auto h-full px-4 sm:px-6 flex items-center justify-between">
      <Link href="/" className="text-2xl sm:text-3xl font-bold tracking-wide">
        Mee
      </Link>

      <div className="flex items-center gap-6 md:text-lg sm:text-sm">
        <Link href="/Skills">Skills</Link>
        <Link href="/Resume">Resume</Link>
        <Link href="/Portfolio">Portfolio</Link>
        <Link
          href="/Contact_me"
          className="px-4 py-1 border border-white/80 rounded hover:bg-white hover:text-black transition"
        >
          Contact Me
        </Link>
      </div>
    </div>
  </nav>
);

/* =====================
  CONTENT
===================== */
const Content = () => {
  return (
    <main className="pt-20 px-4 sm:px-8 md:px-11">

      {/* TITLE */}
      <h1 className="tracking-widest text-4xl sm:text-5xl md:text-[5rem] mb-6">
        Skills
      </h1>

      {/* ROLES */}
      <ul className="flex flex-wrap gap-4 sm:gap-6 list-disc pl-6 text-lg sm:text-xl md:text-[26px] tracking-wider mb-14">
        <li>FullStack Developer</li>
        <li>UI/UX Designer</li>
        <li>Game Developer</li>
        <li>Game Designer</li>
        <li>AI Engineer</li>
      </ul>

      {/* PROGRAMMING LANGUAGES */}
      <SectionTitle icon="/code.svg" text="Programming Languages" />

      <TwoColumn>
        <SkillList
          items={[
            ["C", 95],
            ["C++", 65],
            ["Java",85],
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
            ["Flutter",20],
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

    </main>
  );
};

/* =====================
  REUSABLE COMPONENTS
===================== */

const SectionTitle = ({ icon, text }: { icon: string; text: string }) => (
  <div className="flex items-center gap-4 text-2xl sm:text-3xl md:text-[45px] my-10">
    <Image src={icon} alt={text} width={70} height={70} />
    {text}
  </div>
);

const TwoColumn = ({ children }: { children: React.ReactNode }) => (
  <div className="flex flex-col md:flex-row gap-8 md:gap-32 mb-16">
    {children}
  </div>
);

const SkillList = ({ items }: { items: [string, number][] }) => (
  <ol className="text-lg sm:text-xl md:text-2xl space-y-5">
    {items.map(([label, value]) => (
      <li
        key={label}
        className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4"
      >
        <span className="min-w-[90px]">{label}</span>
        <ProgressBar prog={value} />
      </li>
    ))}
  </ol>
);

const SimpleList = ({ items }: { items: string[] }) => (
  <ol className="text-lg sm:text-xl md:text-2xl space-y-5">
    {items.map((item) => (
      <li key={item}>{item}</li>
    ))}
  </ol>
);

/* =====================
  PROGRESS BAR
===================== */
const ProgressBar = ({ prog }: { prog: number }) => {
  const safe = Math.max(0, Math.min(100, prog));

  return (
    <div className="bg-gray-600 h-4 w-full sm:w-40 rounded">
      <div
        className="bg-pink-500 h-4 rounded transition-all"
        style={{ width: `${safe}%` }}
      />
    </div>
  );
};
