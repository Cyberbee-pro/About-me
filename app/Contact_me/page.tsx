"use client";

import Link from "next/link";
import Navbar from "../Navigation/NavBar";
import Footer from "../Navigation/Footer";

export default function ContactPage() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-[#35014d] via-[#1a0029] to-[#1d022a] text-white font-sans overflow-x-hidden">
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
    <main className="pt-32 flex-1 px-8 md:px-12 max-w-7xl mx-auto w-full pb-24">
      
      {/* HEADER SECTION */}
      <section className="mb-16">
        <h1 className="tracking-widest text-6xl md:text-8xl font-bold opacity-90 mb-4">
          Contact me
        </h1>
        <div className="h-1.5 w-24 bg-purple-500 mb-8 rounded-full shadow-[0_0_15px_rgba(168,85,247,0.5)]"></div>
        
        <p className="tracking-wide text-2xl md:text-3xl font-light text-gray-300 italic">
          Don’t be rude — <span className="text-purple-400">send a “Hi”</span>
        </p>
      </section>

      {/* BUTTON GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        <ContactButton icon="/github.svg" text="GitHub" link="https://github.com/Cyberbee-pro" />
        <ContactButton
          icon="/gmail.svg"
          text="E-Mail"
          link="mailto:cyberbeepro@gmail.com?subject=Hello%20Cyberbee"
        />
        <ContactButton icon="/wa.svg" text="WhatsApp" link="/contact.vcf" />
        <ContactButton
          icon="/linkedin.svg"
          text="LinkedIn"
          link="https://www.linkedin.com/in/shibraj-das"
        />
        <ContactButton icon="/threads.svg" text="Threads" link="https://www.threads.com/@cyberbee_pro" />
        <ContactButton icon="/insta.svg" text="Instagram" link="https://www.instagram.com/cyberbee_pro" />
        <ContactButton icon="/twitter.svg" text="Twitter" link="https://x.com/mrcyberbee" />
        <ContactButton icon="/discord.svg" text="Discord" link="https://discord.gg/wTxAWNzSvh" />
      </div>

      {/* OPTIONAL: COSMOS DECORATION */}
      <div className="mt-20 opacity-20 pointer-events-none">
        <p className="text-right text-xs tracking-[1em] uppercase">Signals traveling through the void...</p>
      </div>

    </main>
  );
};

/* =====================
  CONTACT BUTTON
===================== */
export const ContactButton = ({
  icon,
  text,
  link,
}: {
  icon: string;
  text: string;
  link: string;
}) => (
  <Link href={link} target="_blank" className="group">
    <div className="
      relative flex items-center gap-4 
      bg-[#9747FF]/10 border border-[#9747FF]/30 backdrop-blur-sm
      px-6 py-4 rounded-2xl overflow-hidden
      transition-all duration-300 
      hover:border-[#9747FF] hover:bg-[#9747FF]
      hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(151,71,255,0.3)]
    ">
      {/* Hover Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
      
      {/* Icon with white background circle for visibility */}
      <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center group-hover:bg-white/20 transition-colors">
        <img 
          src={icon} 
          alt={text} 
          className="w-7 h-7 md:w-8 md:h-8 object-contain transition-transform group-hover:scale-110" 
        />
      </div>

      <span className="text-xl md:text-2xl font-bold tracking-tight group-hover:text-white transition-colors">
        {text}
      </span>
    </div>
  </Link>
);