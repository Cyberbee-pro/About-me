import Link from "next/link";
import Navbar from "../Navigation/NavBar";
import Footer from "../Navigation/Footer";


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

