import Image from "next/image";
import Link from "next/link";
import Navbar from "../Navigation/NavBar";
import Footer from "../Navigation/Footer";


/* =======================
  PAGE
======================= */
export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-[#35014d] via-[#1a0029] to-[#1d022a] text-white">
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


