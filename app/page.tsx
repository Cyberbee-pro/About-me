"use client";

import Image from "next/image";
import Link from "next/link";
import Navbar from "@/app/Navigation/NavBar";
import Footer from "@/app/Navigation/Footer";
import { ContactButton } from "@/app/Contact_me/page";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-[#35014d] via-[#1a0029] to-[#1d022a] text-white overflow-x-hidden">
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
    <main className="pt-32 flex flex-col items-center">
      
      {/* HERO SECTION */}
      <section className="w-full max-w-7xl px-8 md:px-11 flex flex-col lg:flex-row justify-between items-center gap-16">
        
        {/* LEFT TEXT */}
        <div className="flex flex-col space-y-10 max-w-2xl w-full">
          <h1 className="font-orbi font-extrabold tracking-widest text-7xl md:text-9xl opacity-90">
            Hi there
          </h1>

          {/* Name with Offset Effect */}
          <div className="relative group self-start">
            <div className="absolute bg-pink-500 text-pink-500 select-none translate-x-4 translate-y-3 md:translate-x-9 md:translate-y-6 font-t5 text-7xl md:text-9xl tracking-wider">
              Shibraj here
            </div>
            <div className="relative bg-black px-2 font-t5 text-7xl md:text-9xl tracking-wider border border-white/5">
              Shibraj here
            </div>
          </div>

          {/* Role with Offset Effect */}
          <div className="relative group self-start">
            <div className="absolute bg-pink-500 text-pink-500 select-none translate-x-3 translate-y-2 md:translate-x-6 md:translate-y-3 font-one text-xl md:text-2xl tracking-wider">
              FullStack Developer / Game Developer
            </div>
            <div className="relative bg-black px-4 py-1 font-one text-xl md:text-2xl tracking-wider border border-white/5">
              FullStack Developer / Game Developer
            </div>
          </div>
        </div>

        {/* RIGHT IMAGE - PERFORMANCE OPTIMIZED */}
        <div className="relative group">
          {/* Decorative Glow Ring */}
          <div className="absolute -inset-4 bg-gradient-to-tr from-pink-500/30 to-purple-500/30 rounded-full blur-2xl group-hover:opacity-60 transition duration-1000"></div>
          
          <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full p-1 bg-gradient-to-tr from-pink-500/50 to-purple-500/50">
            <div className="w-full h-full rounded-full bg-black overflow-hidden relative">
              <Image
                src="/pfp.jpg"
                alt="Shibraj Profile"
                fill
                priority // Preloads image for speed
                quality={90}
                sizes="(max-width: 768px) 256px, (max-width: 1024px) 320px, 384px"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* QUOTE WITH DISTINCT VERTICAL BAR */}
      <section className="w-full max-w-7xl px-8 md:px-11 mt-32 mb-16">
        <div className="flex flex-row items-stretch gap-6">
          {/* THE BAR: Explicit Div Element */}
          <div className="w-1.5 md:w-2 bg-pink-500 rounded-full shadow-[0_0_15px_rgba(236,72,153,0.8)] shrink-0"></div>
          
          {/* The Quote */}
          <p className="font-wow tracking-wider text-[32px] md:text-[45px] italic leading-tight py-2">
            “Limited probabilities. <br className="md:hidden" />
            <span className="text-pink-500">Infinite possibilities.</span>”
          </p>
        </div>
      </section>

      {/* BIO & INFO (GLASSMORPHISM STYLE) */}
      <section className="w-full max-w-7xl px-8 md:px-11 grid grid-cols-1 lg:grid-cols-2 gap-12 mb-32 font-rud">
        <div className="space-y-8 text-[22px] md:text-[28px] leading-relaxed tracking-wide text-gray-200">
          <p>
            Motivated developer with experience in game development, web technologies,
            and AI research. Skilled in JavaScript, TypeScript, C, C++, Java, Python,
            React, Next.js, Node.js, NumPy, Pandas, Blender, GitHub, and Figma.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8 border-t border-white/10">
            <div>
              <h3 className="text-pink-500 font-bold mb-3 uppercase text-sm tracking-[0.3em]">Education</h3>
              <div className="space-y-4">
                <div className="text-xl">
                  <p>SRM IST KTR</p>
                  <p className="text-xs text-gray-400">B.Tech CSE Core · Chennai</p>
                </div>
                <div className="text-xl">
                  <p>Nava Nalanda</p>
                  <p className="text-xs text-gray-400">Grade A · Kolkata</p>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-pink-500 font-bold mb-3 uppercase text-sm tracking-[0.3em]">Languages</h3>
              <div className="space-y-1 text-xl">
                <p>Bengali <span className="text-xs opacity-50 ml-2">(Native)</span></p>
                <p>English, Hindi <span className="text-xs opacity-50 ml-2">(Fluent)</span></p>
                <p className="text-sm italic text-gray-500 pt-2">Learning: Japanese, Tamil, Spanish</p>
              </div>
            </div>
          </div>
        </div>

        {/* Interests Card */}
        <div className="flex flex-col justify-center bg-white/5 p-10 rounded-3xl border border-white/10 backdrop-blur-sm relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/10 blur-3xl rounded-full"></div>
          <p className="text-pink-500 font-bold tracking-[0.4em] uppercase text-xs mb-4">My Intrests</p>
          <p className="text-4xl md:text-6xl font-bold tracking-tighter mb-8 leading-none">
            Cosmos & <br /> 
            <span className="text-transparent bg-clip-text bg-linear-to-r from-white to-purple-400">Quantum Tech</span>
          </p>
          <div className="h-1 w-20 bg-pink-500 rounded-full group-hover:w-32 transition-all duration-500"></div>
        </div>
        {/* <div className="p-5 w-30 bg-purple-500 mt-4 rounded-full shadow-[0_0_15px_rgba(168,85,247,0.5)]">Skills {'>'}</div> */}
        <ContactButton icon="/code.svg" text="Skills >" link="/Skills" />

      </section>

      {/* FACTS SECTION */}
      <section className="w-full max-w-7xl px-8 md:px-11 pb-32">
        <h2 className="font-exp text-[40px] mb-16 tracking-widest border-b border-white/5 pb-4">
          Facts about me
        </h2>

        <div className="flex flex-wrap justify-center md:justify-start gap-12">
          {[
            ["8+", "Years of coding"],
            ["4+", "Happy clients"],
            ["250+", "Problems solved"],
            ["3+", "Certifications"],
            ["200+", "Commits"],
            ["4+", "Languages"],
          ].map(([num, label]) => (
            <div key={label} className="group flex justify-center items-center w-[180px] h-[180px] md:w-[210px] md:h-[210px] bg-pink-500 rounded-full transition-all duration-500 hover:shadow-[0_0_30px_rgba(236,72,153,0.4)]">
              <div className="w-[170px] h-[170px] md:w-[200px] md:h-[200px] bg-black rounded-full flex flex-col justify-center items-center text-center group-hover:scale-[0.97] transition-transform">
                <div className="font-rud text-[55px] md:text-[65px] leading-none mb-1">{num}</div>
                <div className="font-rud text-[16px] md:text-[18px] text-pink-500 tracking-tight">{label}</div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};