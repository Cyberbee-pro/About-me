import Image from "next/image";
import Link from "next/link";
import Navbar from "@/app/Navigation/NavBar";
import Footer from "./Navigation/Footer";


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
  CONTENT
===================== */
const Content = () => {
  return (
    <main className="pt-20 flex flex-col">

      {/* HERO */}
      <section className="px-8 md:px-11 pt-11 flex flex-col md:flex-row justify-between gap-16">
        
        {/* LEFT TEXT */}
        <div className="flex flex-col space-y-8 max-w-2xl">
          <h1 className="font-orbi font-extrabold tracking-widest text-7xl md:text-9xl">
            Hi there
          </h1>

          {/* Name */}
          <div className="relative font-t5 text-7xl md:text-9xl">
            <div className="absolute bg-pink-500 translate-x-9 translate-y-6">
              Shibraj here
            </div>
            <div className="relative bg-black z-10">
              Shibraj here
            </div>
          </div>

          {/* Role */}
          <div className="relative font-one text-xl md:text-2xl">
            <div className="absolute bg-pink-500 px-2 translate-x-6 translate-y-3">
              FullStack Developer / Game Developer
            </div>
            <div className="relative bg-black z-10">
              FullStack Developer / Game Developer
            </div>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="flex justify-center items-center">
          <div className="relative w-[clamp(220px,40vw,400px)] h-[clamp(220px,40vw,400px)]">
            <div
              className="absolute inset-0 rounded-full bg-cover bg-center mask-radial-at-center mask-radial-from-50% z-1"
              style={{ backgroundImage: "url('/pfp.jpg')" }}
            />
            <div className="absolute inset-0 rounded-full bg-black z-0" />
          </div>
        </div>
      </section>

      {/* QUOTE */}
      <section className="font-wow tracking-wider text-[32px] md:text-[40px] p-5 pl-11 mt-20">
        “Limited probabilities. Infinite possibilities.”
      </section>

      {/* BIO */}
      <section className="font-rud text-[24px] md:text-[30px] tracking-wide p-5 pl-11 max-w-6xl">
        <p className="mb-6">
          Motivated developer with experience in game development, web technologies,
          and AI research. Skilled in JavaScript, TypeScript, C, C++, Java, Python,
          React, Next.js, Node.js, NumPy, Pandas, Blender, GitHub, and Figma.
        </p>

        <div className="mb-6">
          <p>School — Nava Nalanda (Grade A)</p>
          <p className="text-xs text-gray-400">Kolkata, West Bengal</p>
          <p className="mt-2">College — SRM IST KTR (B.Tech CSE Core)</p>
          <p className="text-xs text-gray-400">Chennai, Tamil Nadu</p>
        </div>

        <div className="mb-6">
          <p>Mother tongue: Bengali</p>
          <p>Working proficiency: English, Hindi</p>
          <p>Learning: Japanese, Tamil, Spanish</p>
        </div>

        <div>
          <p className="mt-6">My Interests:</p>
          <p>Cosmos · Quantum Tech</p>
        </div>
      </section>

      {/* FACTS */}
      <section className="hidden md:block pl-11 mt-20">
        <h2 className="font-exp text-[40px] mb-10">Facts about me</h2>

        <div className="flex flex-wrap gap-10">
          {[
            ["8+", "Years of coding"],
            ["5+", "Happy clients"],
            ["250+", "Problems solved"],
            ["1+", "Certifications"],
            ["175+", "Commits"],
            ["4+", "Languages"],
          ].map(([num, label]) => (
            <div key={label} className="flex justify-center items-center w-[200px] h-[200px] bg-pink-500 rounded-full">
              <div className="w-[180px] h-[180px] bg-black rounded-full flex flex-col justify-center items-center text-center">
                <div className="font-rud text-[60px]">{num}</div>
                <div className="font-rud text-[20px]">{label}</div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};
