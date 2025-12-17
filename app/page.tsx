import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-[#2a003d] via-[#1a0029] to-black text-white">
      <Navigation />
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
    <div className="max-w-7xl mx-auto h-full px-6 flex items-center justify-between">
      <Link href="/" className="text-3xl font-bold tracking-wide hover:text-gray-300 transition">
        Mee
      </Link>

      <div className="flex items-center gap-6 md:text-lg sm:text-sm">
        <Link href="/Skills" className="hover:text-gray-300">Skills</Link>
        <Link href="/Resume" className="hover:text-gray-300">Resume</Link>
        <Link href="/Portfolio" className="hover:text-gray-300">Portfolio</Link>
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

/* =====================
  FOOTER
===================== */
const Footer = () => (
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
