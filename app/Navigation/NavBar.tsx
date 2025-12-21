"use client";

import Link from "next/link";
import { useState } from "react";


export default function Navbar() {
    return(
        <>
        <Navigation/>
        </>
    );
}


/* =====================
  NAVIGATION
===================== */
const Navigation = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 backdrop-blur-md bg-black/70 border-b border-white/10">
      <div className="max-w-7xl mx-auto h-16 px-6 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold tracking-tighter">
          Mee
        </Link>

        <div className="hidden md:flex items-center gap-8 text-sm font-medium">
          <NavLinks />
        </div>

        <button
          className="md:hidden text-2xl"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? "✕" : "☰"}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-black/95 border-b border-white/10 px-6 py-6 flex flex-col gap-5 animate-in fade-in slide-in-from-top-4">
          <NavLinks onClick={() => setOpen(false)} />
        </div>
      )}
    </nav>
  );
};

const NavLinks = ({ onClick }: { onClick?: () => void }) => (
  <>
    <Link href="/Skills" onClick={onClick} className="hover:text-purple-400 transition">Skills</Link>
    <Link href="/Resume" onClick={onClick} className="hover:text-purple-400 transition">Resume</Link>
    <Link href="/Portfolio" onClick={onClick} className="hover:text-purple-400 transition">Portfolio</Link>
    <Link
      href="/Contact_me"
      onClick={onClick}
      className="px-5 py-2 border border-white/40 rounded-full hover:bg-white hover:text-black transition-all text-center"
    >
      Contact Me
    </Link>
  </>
);