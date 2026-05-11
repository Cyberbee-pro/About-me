"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/app/Navigation/NavBar";
import Footer from "@/app/Navigation/Footer";
import { ContactButton } from "@/components/custom/Button";
import PixelBlast from "@/components/PixelBlast"
import { MinimalSkillList, SimpleList, NormalList } from "@/components/custom/lists";
import { ProjectCard, ProjectModal } from "@/components/custom/projectViewers"
import { Datacard, DatacardExtra, DatacardPromote } from "@/components/custom/showExp";
import PixelTransition from "@/components/PixelTransition";

/* =====================
  PROJECT TYPE & DATA
===================== */
type Project = {
  image: string;
  title: string;
  description: string;
  githubLink?: string;
  deployedLink?: string;
  modelPath?: string;
};

const projectsData: Project[] = [
  {
    image: "/Hackclock.svg",
    title: "HackClock",
    description: "hackTime is a hackathon control room for organizers, stage screens, and participants. It lets you create a timed event flow, launch a live countdown, broadcast announcements, and share a room code so teams can join the clock view instantly.",
    deployedLink: "https://hacktime.githubsrmist.in/",
    githubLink: "https://github.com/SRM-IST-KTR/hacktime",
  },
  {
    image: "/projMedia/morse.jpg",
    title: "M2C - prgraming language",
    description: "M2C is a Morse-code-flavored compiler project whose long-term goal is to translate .cym2c source files into valid English output, currently it has print functionality and main functionalities. ",
    githubLink: "https://github.com/Cyberbee-pro/M2C-compiler",
  },
  {
    image: "/solespania.png",
    title: "SolEspania — Spain Tour Guide",
    description: "A comprehensive web application designed to guide tourists through Spain. Features interactive guides, location details, and a beautiful UI.",
    deployedLink: "https://spain-tour-guide.vercel.app/",
    githubLink: "https://github.com/Cyberbee-pro/Spain-tour-guide",
  },
  {
    image: "/brain.jpg",
    title: "Brain 3D Model (Blender)",
    description: "A detailed 3D model of a human brain created using Blender. You can interact with this model right here in the browser!",
    modelPath: "/brain.glb",
  },
  {
    image: "/Synthflow.svg",
    title: "Synthflow — Work in Progress",
    description: "SynthFlow is a lightweight, open-source music streaming platform designed to give the music back to the listener. Inspired by the leek aesthetic, it offers a seamless, high-fidelity audio experience completely free from ad interruptions. ",
    githubLink: "https://github.com/Cyberbee-pro/SynthFlow",
  },
  {
    image: "/Angelplayer.png",
    title: "Angel Player — Work in Progress",
    description: "An anti-doom scrolling browser extension designed to help users manage their screen time and build healthier digital habits.",
    githubLink: "https://github.com/Cyberbee-pro/anti-doom-scroll-extension-",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col text-white overflow-x-hidden">
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
          style={{}}
          className=""
        />
      </div>

      <div className="relative z-10 flex flex-col min-h-screen">
        <Navbar />
        <Content />
        <Footer />
      </div>
    </div>
  );
}

const Content = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <main className="pt-24 md:pt-32 flex flex-col items-center">
      
      {/* HERO SECTION */}
      <section className="w-full max-w-7xl px-6 md:px-12 flex flex-col lg:flex-row justify-between items-center gap-12 lg:gap-16">
        
        {/* LEFT TEXT */}
        <div className="flex flex-col space-y-6 md:space-y-10 max-w-2xl w-full text-center lg:text-left items-center lg:items-start">
          <h1 className="font-orbi font-extrabold tracking-widest text-5xl sm:text-7xl md:text-9xl opacity-90">
            Hi there
          </h1>

          <div className="relative group self-center lg:self-start">
            <div className="absolute bg-pink-500 text-pink-500 select-none translate-x-2 translate-y-2 md:translate-x-6 md:translate-y-4 font-t5 text-5xl sm:text-7xl md:text-9xl tracking-wider">
              Shibraj here
            </div>
            <div className="relative bg-black px-2 font-t5 text-5xl sm:text-7xl md:text-9xl tracking-wider border border-white/5">
              Shibraj here
            </div>
          </div>

          <div className="relative group self-center lg:self-start">
            <div className="absolute bg-pink-500 text-pink-500 select-none translate-x-2 translate-y-1 md:translate-x-4 md:translate-y-2 font-one text-lg sm:text-xl md:text-2xl tracking-wider">
              FullStack Developer / Game Developer
            </div>
            <div className="relative bg-black px-4 py-1 font-one text-lg sm:text-xl md:text-2xl tracking-wider border border-white/5">
              FullStack Developer / Game Developer
            </div>
          </div>
        </div>

        {/* RIGHT IMAGE */}

        <PixelTransition
  firstContent={
    <Image
      src="/pfp.jpg"
      alt="Shibraj Profile"
      fill
      priority
      quality={90}
      sizes="(max-width: 640px) 192px, (max-width: 768px) 256px, (max-width: 1024px) 320px, 384px"
      className="object-cover"
    />
  }
  secondContent={
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "grid",
        placeItems: "center",
        backgroundColor: "#111"
      }}
    >
      <p style={{ fontWeight: 900, fontSize: "3rem", color: "#E91E63" }}>Hello!</p>
    </div>
  }
  gridSize={8}
  pixelColor="#9B59B6"
  once={false}
  animationStepDuration={0.15}
  className="custom-pixel-card w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full"
  
/>


        {/* <div className="relative group mt-8 lg:mt-0">
          <div className="absolute -inset-4 bg-gradient-to-tr from-pink-500/30 to-purple-500/30 rounded-full blur-2xl group-hover:opacity-60 transition duration-1000"></div>
          <div className="relative w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full p-1 bg-gradient-to-tr from-pink-500/50 to-purple-500/50">
            <div className="w-full h-full rounded-full bg-black overflow-hidden relative">
              <Image
                src="/pfp.jpg"
                alt="Shibraj Profile"
                fill
                priority
                quality={90}
                sizes="(max-width: 640px) 192px, (max-width: 768px) 256px, (max-width: 1024px) 320px, 384px"
                className="object-cover"
              />
            </div>
          </div>
        </div> */}

      </section>

      {/* QUOTE SECTION */}
      <section className="w-full max-w-7xl px-6 md:px-12 mt-20 md:mt-32 mb-16">
        <div className="flex flex-row items-stretch gap-4 md:gap-6">
          <div className="w-1.5 md:w-2 bg-pink-500 rounded-full shadow-[0_0_15px_rgba(236,72,153,0.8)] shrink-0"></div>
          <p className="font-wow tracking-wider text-2xl sm:text-3xl md:text-[45px] italic leading-tight py-2">
            “Limited probabilities. <br className="sm:hidden" />
            <span className="text-pink-500">Infinite possibilities.</span>”
          </p>
        </div>
      </section>

      {/* BIO & INFO */}
      <section className="w-full max-w-7xl px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-10 mb-20 md:mb-32 font-rud">
        <div className="space-y-6 md:space-y-8 text-lg sm:text-xl md:text-[28px] leading-relaxed tracking-wide text-gray-200">
          <p>
            Motivated developer with experience in game development, web technologies,
            and AI research. Skilled in JavaScript, TypeScript, C, C++, Java, Python,
            React, Next.js, Node.js, NumPy, Pandas, Blender, GitHub, and Figma.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-8 border-t border-white/10">
            <div>
              <h3 className="text-pink-500 font-bold mb-3 uppercase text-xs sm:text-sm tracking-[0.3em]">Education</h3>
              <div className="space-y-4">
                <div className="text-lg md:text-xl">
                  <p>SRM IST KTR</p>
                  <p className="text-xs text-gray-400">B.Tech CSE Core · Chennai</p>
                </div>
                <div className="text-lg md:text-xl">
                  <p>Nava Nalanda</p>
                  <p className="text-xs text-gray-400">Grade A · Kolkata</p>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-pink-500 font-bold mb-3 uppercase text-xs sm:text-sm tracking-[0.3em]">Languages</h3>
              <div className="space-y-1 text-lg md:text-xl">
                <p>Bengali <span className="text-xs opacity-50 ml-2">(Native)</span></p>
                <p>English, Hindi <span className="text-xs opacity-50 ml-2">(Fluent)</span></p>
                <p className="text-xs sm:text-sm italic text-gray-500 pt-2 leading-tight">Learning: Japanese, Tamil, Spanish</p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-center bg-white/5 p-8 md:p-10 rounded-3xl border border-white/10 backdrop-blur-sm relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/10 blur-3xl rounded-full"></div>
          <p className="text-pink-500 font-bold tracking-[0.4em] uppercase text-xs mb-4">My Interests</p>
          <p className="text-3xl sm:text-4xl md:text-6xl font-bold tracking-tighter mb-8 leading-none">
            Cosmos & <br /> 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-purple-400">Quantum Tech</span>
          </p>
          <div className="h-1 w-20 bg-pink-500 rounded-full group-hover:w-32 transition-all duration-500"></div>
        </div>
      </section>

      {/* WRAPPER FOR MAIN SECTIONS */}
      <div className="flex flex-col w-full max-w-7xl px-6 md:px-12 mx-auto">
        
        {/* SKILLS SECTION */}
        <section className="flex flex-col w-full py-4">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-10 md:mb-16">
            <h2 className="font-exp text-3xl md:text-[40px] tracking-widest border-b border-white/5 pb-2 sm:pb-4 w-full sm:w-auto">
              Some of my Skills
            </h2>
            <ContactButton icon="/code.svg" text="View more Skills >" link="/Skills" />
          </div>
          <div className="bg-white/6 rounded-2xl">
          <MinimalSkillList
            items={[
              ["GitHub", "/ICONS/github.png"], ["C", "/ICONS/C.svg"], ["C++", "/ICONS/CPP.svg"],
              ["Dart", "/ICONS/Dart.svg"], ["Flutter","/ICONS/flutter.png"], ["Java", "/ICONS/java.svg"],
              ["JavaScript", "/ICONS/javascript.svg"], ["Node.Js", "/ICONS/node.svg"], ["Next.Js", "/ICONS/next.png"],
              ["Express.Js", "/ICONS/express.png"], ["TailWind", "/ICONS/tailwind.png"], ["Mongo DB", "/ICONS/mongoDB.png"],
              ["shell scripting(Bash)","/ICONS/bash.png"], ["TypeScript", "/ICONS/typescript.svg"], ["Python", "/ICONS/python.svg"],
              ["Linux", "/ICONS/linux.png"], ["Arch Linux", "/ICONS/arch.png"], ["Figma", "/ICONS/figma.svg"],
              ["Da Vinchi Resolve", "/ICONS/dvr.svg"], ["Blender", "/ICONS/blender.png"], ["Unity", "/ICONS/unity.png"],
            ]}
          />
          </div>
        </section>

        {/* EXPERIENCE SECTION */}
        <section className="w-full py-8 space-y-12">
          <h2 className="font-exp text-3xl md:text-[40px] tracking-widest border-b border-white/5 pb-4">
            Experience
          </h2>
          <div className="space-y-8">
            <Datacard 
              compName="Cognifyz Technologies" 
              CompImg="/CompIcons/ctg.jpg" 
              role="Web Developer Intern"
              duration="Nov 2025 ~ Jan 2026"
              description="• Developed and optimized modern web applications using Next.js and Sass...\n• Engineered dynamic data-fetching layers...\n• Implemented robust client-side validation..."
              type="Internship"
              Media={[["/CompMedia/internship_completion_cert.jpg"], ["/CompMedia/Intern_offer_letter.jpg"]]}
            />
            <Datacard 
              compName="Vistalane LTD" 
              CompImg="/CompIcons/vista.jpg" 
              role="Backend Developer Intern"
              duration="Dec 2025 ~ Jan 2026"
              description="• Contributed to building backend APIs...\n• Work closely with the Flutter team..."
              type="Internship"
            />
          </div>

          <h2 className="font-exp text-3xl md:text-[40px] tracking-widest border-b border-white/5 pb-4 pt-12">
            Extra Curriculars
          </h2>
          <div className="space-y-12">
            <DatacardExtra 
              compName="GirlScript Summer Of Code" 
              CompImg="/CompIcons/gssoc.jpg" 
              role="Campus Ambassador"
              duration="Apr 2026 ~ Present"
              descriptionOrg="India's largest builder program for developers..."
              description="Brand Liaison: Primary bridge between org and students...\nStrategic Marketing: Drove acquisition...\nLeadership: Coordinated with faculty..."
              type="Organization"
              Media={[["/CompMedia/BadgeA.jpg"]]}
            />
            <DatacardPromote  
              role="Participant"
              duration="Apr 2026 ~ Present"
              description="Partnered with a global team to maintain code integrity..."
              Media={[["/CompMedia/badgeP.jpg"]]}
            />
            
            <DatacardExtra
            compName="open source global connect"
            CompImg="/CompIcons/osgc.jpg"
            role="Contributor"
            duration="Feb 2026 ~ Apr 2026"
            descriptionOrg="Open Source Connect Global 2026 is an international event connecting innovators, developers, mentors, universities, startups, and organizations worldwide."
            description="Partnered with a global team to maintain code integrity and enhance project functionality."
            type="Participant"
            Media={[["/CompMedia/Cert_participation.jpg"],["/CompMedia/cert_part.jpg"],["/CompMedia/id_osgc.jpg"]]}/>

            <DatacardExtra
            compName="GitHub Community SRM"
            CompImg="/CompIcons/gcsrm.jpg"
            role="Technical Team Member"
            duration="Sep 2025 ~ Present"
            descriptionOrg="A student-led developer community established and affiliated by GitHub in collaboration with SRM University, contributing to both web and AI development initiatives."
            description="
              • Develop and maintain web solutions for community projects and events
              • Actively contribute to AI-based applications and research activities
              • Collaborate with peers in technical workshops, hackathons, and open-source projects
              • Enhance project accessibility and user experience through continuous improvement"
            type="Club"
            Media={[["/CompMedia/cert_orgH.jpg"],["/CompMedia/Cert_orgE.jpg"]]}/>

            <DatacardExtra
            compName="F.A.S.T. X Nvdia SRM"
            CompImg="/CompIcons/fast.jpg"
            role="DLI System designer and developer"
            duration="Mar 2026 ~ Present"
            descriptionOrg="A student-led research-focused community established by NVIDIA in collaboration with SRM University, working on advanced technologies including AI and related Domains"
            description="
            • Architected and developed the F.A.S.T. Deep Learning Institute (DLI) platform, a high-performance web application
            • Engineered a robust Role-Based Access Control (RBAC) system, creating distinct governance environments for Admins, Moderators, and Members.
            • Built a dual-layer approval routing pipeline for the platform's gamified Task Board and NVIDIA course access requests, complete with global state management.
            • a real-time analytics dashboard utilizing complex backend aggregations"
            type="Club"/>


            <DatacardPromote
            role="Technical Team Member"
            duration="Apr 2026 ~ Present"
            description="
            • Develop and maintain web solutions for organization website community projects and events
            • Actively contribute to AI-based applications and research activities
            • Collaborate with peers in technical workshops, hackathons, and open-source projects"/>

          </div>
        </section>

        {/* PROJECTS SECTION */}
        <section className="w-full py-12">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-10 md:mb-16">
            <h2 className="font-exp text-3xl md:text-[40px] tracking-widest border-b border-white/5 pb-2 sm:pb-4 w-full sm:w-auto">
              Some of my Projects
            </h2>
            <ContactButton icon="/code.svg" text="View more projects >" link="/Portfolio" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-10">
            {projectsData.map((project, index) => (
              <ProjectCard
                key={index}
                image={project.image}
                title={project.title}
                onClick={() => setSelectedProject(project)}
              />
            ))}
          </div>
        </section>

        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}

        {/* ACHIEVEMENTS SECTION */}
        <section className="w-full py-8">
          <h2 className="font-exp text-3xl md:text-[40px] mb-8 md:mb-16 tracking-widest border-b border-white/5 pb-4">
            Achievements
          </h2>
          <div className="overflow-x-hidden">
            <NormalList items={[
              ["ICPC High Honor","ICPC Asia Regional — Chennai 2025"],
              ["Top 10 / 300+","Ultron 9.0 Hackathon 2026"],
              ["Patent filed","Rem : Mark 1 - Advanced Encryption Algorithm"],
              ["Undergraduate Researcher","SRMIST — Quantum Optimization - Ongoing"],
              ["2nd runner up","Union Bank National Quiz Leg 2023"],
            ]}/>
          </div>
        </section>

        {/* CONTACT SECTION */}
        <section className="w-full py-8">
          <h2 className="font-exp text-3xl md:text-[40px] tracking-widest border-b border-white/5 pb-4 mb-8">
            Lets Get in Touch
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
            <ContactButton icon="/linkedin.svg" text="LinkedIn" link="https://www.linkedin.com/in/shibraj-das" />
            <ContactButton icon="/github.svg" text="GitHub" link="https://github.com/Cyberbee-pro" />
            <ContactButton icon="/gmail.svg" text="E-Mail" link="mailto:cyb.shibrajdas@gmail.com" />
          </div>
        </section>

        {/* FACTS SECTION */}
        <section className="w-full py-16 md:py-32">
          <h2 className="font-exp text-3xl md:text-[40px] mb-12 md:mb-16 tracking-widest border-b border-white/5 pb-4">
            Facts about me
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 md:gap-10">
            {[
              ["8+", "Years of coding"],
              ["4+", "Happy clients"],
              ["250+", "Problems solved"],
              ["3+", "Certifications"],
              ["799+", "Commits"],
              ["4+", "Languages"],
            ].map(([num, label]) => (
              <div key={label} className="group aspect-square flex justify-center items-center bg-pink-500 rounded-full transition-all duration-500 hover:shadow-[0_0_20px_rgba(236,72,153,0.4)]">
                <div className="w-[94%] h-[94%] bg-black rounded-full flex flex-col justify-center items-center text-center p-2 group-hover:scale-[0.97] transition-transform">
                  <div className="font-rud text-3xl sm:text-4xl md:text-5xl leading-none mb-1">{num}</div>
                  <div className="font-rud text-[10px] sm:text-xs md:text-sm text-pink-500 tracking-tight uppercase">{label}</div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
};