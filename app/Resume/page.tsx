"use client";

import Image from "next/image";
import Link from "next/link";
import Navbar from "../Navigation/NavBar";
import Footer from "../Navigation/Footer";

/* =======================
  PAGE
======================= */
export default function ResumePage() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-[#35014d] via-[#1a0029] to-[#1d022a] text-white font-sans">
      <Navbar />
      <Content />
      <Footer />
    </div>
  );
}

/* =======================
  CONTENT
======================= */
const Content = () => {
  return (
    <main className="pt-32 flex flex-col items-center flex-1">
      
      {/* HEADER SECTION */}
      <section className="w-full max-w-5xl px-6 flex items-end justify-between mb-12">
        <div>
          <h1 className="text-6xl md:text-8xl font-bold tracking-widest opacity-90">
            Resume
          </h1>
          <div className="h-1.5 w-20 bg-purple-500 mt-4 rounded-full shadow-[0_0_15px_rgba(168,85,247,0.5)]"></div>
        </div>

        {/* Download Button with Tooltip-style Label */}
        <div className="flex flex-col items-center gap-2 group">
          <Link href="/CV.pdf" download className="relative">
            <div className="absolute -inset-2 bg-purple-500/20 rounded-full blur opacity-0 group-hover:opacity-100 transition duration-500"></div>
            <img
              src="/downloadb.svg"
              alt="Download Resume"
              className="relative w-12 h-12 opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all cursor-pointer"
            />
          </Link>
          <span className="text-[10px] uppercase tracking-wider text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity">
            Download PDF
          </span>
        </div>
      </section>

      {/* RESUME PREVIEW CONTAINER */}
      <section className="w-full px-4 flex justify-center pb-24">
        <div className="relative group p-2 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm shadow-2xl">
          {/* Decorative Glow behind the resume */}
          <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl blur opacity-10 group-hover:opacity-25 transition duration-1000"></div>
          
          <div className="relative overflow-hidden rounded-lg bg-white">
             <Image
              src="/CV.svg"
              alt="Resume preview"
              width={800} // Set a base width
              height={1131} // Standard A4 ratio (1:1.414)
              className="w-[90vw] max-w-[800px] h-auto"
              priority
              quality={90}
            />
          </div>
        </div>
      </section>

    </main>
  );
};