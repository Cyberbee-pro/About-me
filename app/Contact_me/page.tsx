"use client";

import Link from "next/link";
import Navbar from "../Navigation/NavBar";
import Footer from "../Navigation/Footer";
import PixelBlast from "@/components/PixelBlast"
import {ContactButton} from "@/components/custom/Button"


export default function ContactPage() {
  return (
    <div className="min-h-screen flex flex-col text-white font-sans overflow-x-hidden">
      <div className="fixed inset-0 z-0 pointer-events-none">
        <PixelBlast
          variant="circle"
          pixelSize={3}
          color="#B497CF"
          patternScale={8}
          patternDensity={1.05}
          pixelSizeJitter={1.6}
          enableRipples
          rippleSpeed={0.4}
          rippleThickness={0.12}
          rippleIntensityScale={1.5}
          liquid={false}
          liquidStrength={0.12}
          liquidRadius={1.2}
          liquidWobbleSpeed={5}
          speed={1.3}
          edgeFade={0.33}
          transparent
          className=""
          style={{}}
        />
      </div>

      {/* FOREGROUND CONTENT LAYER */}
      <div className="relative z-10 flex flex-col min-h-screen">
        <Navbar />
        <Content />
        <Footer />
      </div>
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
          link="mailto:cyb.shibrajdas@gmail.com?subject=Hello%20Shibraj%20Das!%20from%20your%20site"
        />
        <ContactButton
          icon="/linkedin.svg"
          text="LinkedIn"
          link="https://www.linkedin.com/in/shibraj-das"
        />
        <ContactButton icon="/threads.svg" text="Threads" link="https://www.threads.com/@mrcyberbee_pro" />
        <ContactButton icon="/insta.svg" text="Instagram" link="https://www.instagram.com/mrcyberbee_pro" />
        <ContactButton icon="/twitter.svg" text="Twitter" link="https://x.com/mrcyberbee" />
      </div>

      {/* OPTIONAL: COSMOS DECORATION */}
      <div className="mt-20 opacity-20 pointer-events-none">
        <p className="text-right text-xs tracking-[1em] uppercase">Signals traveling through the void...</p>
      </div>

    </main>
  );
};

