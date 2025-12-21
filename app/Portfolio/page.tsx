"use client";

import Link from "next/link";
import { useState } from "react";
import Navbar from "../Navigation/NavBar";
import Footer from "../Navigation/Footer";



export default function Home() {
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
    <main className="pt-32 flex-1">
      {/* TITLE SECTION */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 mb-12">
        <h1 className="text-6xl md:text-8xl font-bold tracking-tighter opacity-90">
          Portfolio
        </h1>
        <div className="h-1 w-24 bg-purple-500 mt-4 rounded-full"></div>
      </section>

      {/* PROJECT GRID */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          <ProjectCard
            image="/SolEspania.png"
            title="SolEspania — Spain Tour Guide"
            link="https://spain-tour-guide.vercel.app/"
          />
          <ProjectCard
            image="/brain.jpg"
            title="Brain 3D Model (Blender)"
          />
          <ProjectCard
            image="/Cpro.png"
            title="Cosmos OS — Work in Progress"
          />
          <ProjectCard
            image="/Cpro.png"
            title="AI or Real — Image Authenticator"
          />
          <ProjectCard
            image="/Cpro.png"
            title="Crop Yield Predictor AI"
          />
          <ProjectCard
            image="/nthe.png"
            title="Nothing Here Yet"
          />
        </div>
      </section>
    </main>
  );
};

/* =====================
  PROJECT CARD
===================== */
const ProjectCard = ({ image, title, link }: { image: string; title: string; link?: string }) => {
  const CardContent = (
    <div
      className="
        group relative w-full aspect-video rounded-xl 
        bg-[#12011a] border border-white/10 overflow-hidden
        transition-all duration-500 hover:border-purple-500/50 hover:shadow-[0_0_30px_rgba(168,85,247,0.15)]
      "
    >
      {/* Background Image with fallback handling */}
      <div 
        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
        style={{ backgroundImage: `url('${image}')` }}
      />
      
      {/* Overlay Gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

      {/* Text Info */}
      <div className="absolute inset-0 flex items-end p-6">
        <h3 className="text-lg md:text-xl font-medium tracking-wide group-hover:text-purple-300 transition-colors">
          {title}
        </h3>
      </div>
    </div>
  );

  return link ? (
    <a href={link} target="_blank" rel="noopener noreferrer" className="block">
      {CardContent}
    </a>
  ) : (
    <div className="cursor-default">{CardContent}</div>
  );
};

