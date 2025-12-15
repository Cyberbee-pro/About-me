import Image from "next/image";
import Link from "next/link";

/* =======================
  PAGE
======================= */
export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-[#2a003d] via-[#1a0029] to-black text-white">
      <Navigation />
      <Content />
      <Footer />
    </div>
  );
}

/* =======================
  NAVIGATION
======================= */
const Navigation = () => {
  return (
    <nav className="fixed top-0 w-full h-16 z-50 backdrop-blur bg-black/70 border-b border-white/10">
      <div className="max-w-7xl mx-auto h-full px-6 flex items-center justify-between">
        <Link href="/" className="text-3xl font-bold tracking-wide hover:text-gray-300 transition">
          Mee
        </Link>

        <div className="hidden md:flex items-center gap-6 text-lg">
          <Link href="/Skills" className="hover:text-gray-300 transition">Skills</Link>
          <Link href="/Resume" className="hover:text-gray-300 transition">Resume</Link>
          <Link href="/Portfolio" className="hover:text-gray-300 transition">Portfolio</Link>
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
};

/* =======================
  CONTENT
======================= */
const Content = () => {
  return (
    <main className="pt-20 flex flex-col items-center">
      
      {/* Header */}
      <section className="w-full max-w-7xl px-6 flex items-center justify-between py-10">
        <h1 className="text-6xl md:text-7xl font-semibold tracking-tight">
          Resume
        </h1>

        <Link href="/CV.pdf" download>
          <img
            src="/downloadb.svg"
            alt="Download Resume"
            className="w-10 h-10 opacity-80 hover:opacity-100 hover:scale-105 transition cursor-pointer"
          />
        </Link>
      </section>

      {/* Resume Preview */}
      <section className="w-full flex justify-center pb-16">
        <Image
          src="/CV.svg"
          alt="Resume preview"
          width={0}
          height={0}
          sizes="(max-width: 768px) 90vw, 700px"
          className="w-[90vw] max-w-[700px] rounded-lg bg-white shadow-2xl"
          priority
        />
      </section>

    </main>
  );
};

/* =======================
  FOOTER
======================= */
const Footer = () => {
  return (
    <footer className="bg-black/90 text-gray-400 text-sm py-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-6">
        
        <div>
          <p className="text-white font-semibold mb-2">Mee</p>
          <p>© 2025 MeeCyberbee</p>
        </div>

        <div className="flex flex-col gap-2">
          <Link href="/Skills" className="hover:text-white transition">Skills</Link>
          <Link href="/Resume" className="hover:text-white transition">Resume</Link>
          <Link href="/Portfolio" className="hover:text-white transition">Portfolio</Link>
          <Link href="/Contact_me" className="hover:text-white transition">Contact Me</Link>
        </div>

        <div className="col-span-2 md:col-span-2 flex items-end">
          <p className="italic opacity-70">
            The cosmos is huge — but not this website.
          </p>
        </div>

      </div>
    </footer>
  );
};
