"use client";

import Link from "next/link";
import { useState } from "react";


export default function Footer() {
    return(
        <>
        <Foot/>
        </>
    );
}

/* =====================
  FOOTER
===================== */
const Foot = () => (
  <footer className="bg-black w-full p-10 mt-20 text-gray-400 text-sm">
    <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
      <div>
        <p className="text-white font-semibold">Mee</p>
        <p>© 2025 MeeCyberbee</p>
      </div>

      <div className="flex flex-col gap-2">
        <Link href="/Skills">Skills</Link>
        <Link href="/Resume">Resume</Link>
        <Link href="/Portfolio">Portfolio</Link>
        <Link href="/Contact_me">Contact Me</Link>
      </div>

      <div className="col-span-2 italic opacity-70 flex items-end">
        The cosmos is huge — but not this website.
      </div>
    </div>
  </footer>
);
