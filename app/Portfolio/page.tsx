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
    <main className="pt-20 flex-1">

      {/* TITLE */}
      <section className="px-8 md:px-11 py-10">
        <h1 className="tracking-widest text-[4rem] md:text-[6rem]">
          Portfolio
        </h1>
      </section>

      {/* PROJECT GRID */}
      <section className="px-8 md:px-11 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 place-items-center">

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
const ProjectCard = ({
  image,
  title,
  link,
}: {
  image: string;
  title: string;
  link?: string;
}) => {
  const Card = (
    <div
      className="relative w-[60vh] max-w-[520px] h-[30vh] rounded-lg
        bg-cover bg-center bg-no-repeat
        transform transition duration-500 hover:scale-105"
      style={{ backgroundImage: `url('${image}')` }}
    >
      <div className="absolute inset-0 bg-black/30 rounded-lg flex items-end p-4">
        <span className="text-lg tracking-wide">{title}</span>
      </div>
    </div>
  );

  return link ? (
    <Link href={link} target="_blank" className="cursor-pointer">
      {Card}
    </Link>
  ) : (
    Card
  );
};

/* =====================
  FOOTER
===================== */
const Footer = () => (
  <footer className="bg-black/90 w-full p-10 mt-auto text-gray-400 text-sm">
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
