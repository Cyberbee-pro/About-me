import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-[#35014d] via-[#1a0029] to-[#1d022a] text-white">
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
    <div className="max-w-[95vw] mx-auto h-full px-6 flex items-center justify-between">
      <Link href="/" className="text-3xl font-bold tracking-wide hover:text-gray-300 transition">
        Mee
      </Link>

      <div className="flex items-center gap-6 md:text-lg sm:text-sm">
        <Link href="/Skills">Skills</Link>
        <Link href="/Resume">Resume</Link>
        <Link href="/Portfolio">Portfolio</Link>
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
    <main className="pt-20 flex-1 px-8 md:px-12">

      <h1 className="tracking-widest text-[4rem] md:text-[6rem] mb-2">
        Contact me
      </h1>

      <p className="tracking-wide text-[1.5rem] font-ExpS mb-10">
        Don’t be rude — send a “Hi”
      </p>

      <div className="flex flex-wrap gap-8">
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

    </main>
  );
};

/* =====================
  CONTACT BUTTON
===================== */
const ContactButton = ({
  icon,
  text,
  link,
}: {
  icon: string;
  text: string;
  link: string;
}) => (
  <Link href={link} target="_blank">
    <button className="flex items-center gap-3 bg-[#9747FF] text-white
      text-xl md:text-2xl font-semibold
      px-6 py-3 rounded-xl
      hover:bg-black transition">
      <img src={icon} alt={text} className="w-8 h-8 md:w-10 md:h-10" />
      {text}
    </button>
  </Link>
);

/* =====================
  FOOTER
===================== */
const Footer = () => (
  <footer className="bg-black/90 w-full p-10 mt-20 text-gray-400 text-sm">
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
