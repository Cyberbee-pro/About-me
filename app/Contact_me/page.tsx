import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />
      <Content />
    </div>
  );
}

const Navigation =() =>{
  return<div className="fixed w-full bg-black text-white z-50 shadow-lg"> {/* Navigation Bar Container */}
    <div className="flex items-center justify-between h-16 px-4 md:px-8">
        
        <div className="flex items-center text-3xl font-bold tracking-wider">
            <Link href={"../"} className="hover:text-gray-400 transition duration-300">
                Mee
            </Link>
        </div>
        
        <div className="hidden md:flex items-center space-x-6 text-xl">
            <Link href={"/Skills"} className="hover:text-gray-400 transition duration-300">
                Skills
            </Link>
            <Link href={"/Resume"} className="hover:text-gray-400 transition duration-300">
                Resume
            </Link>
            <Link href={"/Portfolio"} className="hover:text-gray-400 transition duration-300">
                Portfolio
            </Link>
            <Link href={"/Contact_me"} className="px-3 py-1 border border-white rounded hover:bg-white hover:text-black transition duration-300">
                Contact Me
            </Link>
        </div>

    </div>
</div>
}

const Content =() =>{
  return<div className="absolute inset-x-0 top-16 h-16">
          <div className="tracking-widest text-[6rem] p-3 pl-11">Contact me</div>
          <div className="tracking-wide text-[2rem] p-2 pl-12 font-ExpS ">Don’t be rude send a "Hi"</div>

          <div className="flex content-around gap-35 flex-wrap w-full pl-20 p-3">
            
            <Link href={"https://github.com/Cyberbee-pro"}>
            <button className="flex items-center gap-2 sm:gap-3 bg-[#9747FF] text-white text-xl sm:text-2xl md:text-3xl font-semibold px-4 sm:px-6 py-2 sm:py-3 rounded-xl hover:bg-[#54006f98] transition w-full sm:w-auto justify-center">
            <img src="/github.svg" alt="GitHub logo" className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10" />
            GitHub
            </button>
            </Link>

            <Link href={"mailto:cyberbeepro@gmail.com?subject=Hello%20Cyberbee&body=I%20wanted%20to%20contact%20you..."}>
            <button className="flex items-center gap-2 sm:gap-3 bg-[#9747FF] text-white text-xl sm:text-2xl md:text-3xl font-semibold px-4 sm:px-6 py-2 sm:py-3 rounded-xl hover:bg-black transition w-full sm:w-auto justify-center">
            <img src="/gmail.svg" alt="GitHub logo" className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10" />
            E-Mail
            </button>
            </Link>

            <Link href={"/contact.vcf"}>
            <button className="flex items-center gap-2 sm:gap-3 bg-[#9747FF] text-white text-xl sm:text-2xl md:text-3xl font-semibold px-4 sm:px-6 py-2 sm:py-3 rounded-xl hover:bg-black transition w-full sm:w-auto justify-center">
            <img src="/wa.svg" alt="GitHub logo" className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10" />
            Whatsapp
            </button>
            </Link>

            <Link href={"/https://www.linkedin.com/in/shibraj-das"}>
            <button className="flex items-center gap-2 sm:gap-3 bg-[#9747FF] text-white text-xl sm:text-2xl md:text-3xl font-semibold px-4 sm:px-6 py-2 sm:py-3 rounded-xl hover:bg-black transition w-full sm:w-auto justify-center">
            <img src="/linkedin.svg" alt="GitHub logo" className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10" />
            LinkedIn
            </button>
            </Link>



          <Link href={"https://www.threads.com/@cyberbee_pro"}>
            <button className="flex items-center gap-2 sm:gap-3 bg-[#9747FF] text-white text-xl sm:text-2xl md:text-3xl font-semibold px-4 sm:px-6 py-2 sm:py-3 rounded-xl hover:bg-black transition w-full sm:w-auto justify-center">
            <img src="/threads.svg" alt="GitHub logo" className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10" />
            Threads
            </button>
            </Link>

            <Link href={"https://www.instagram.com/cyberbee_pro?igsh=Zm5wdWRqa2R2M2Rw"}>
            <button className="flex items-center gap-2 sm:gap-3 bg-[#9747FF] text-white text-xl sm:text-2xl md:text-3xl font-semibold px-4 sm:px-6 py-2 sm:py-3 rounded-xl hover:bg-black transition w-full sm:w-auto justify-center">
            <img src="/insta.svg" alt="GitHub logo" className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10" />
            Instagram
            </button>
            </Link>

            <Link href={"https://x.com/mrcyberbee?t=bxQuTlE1xxMSwtmHgzbGTg&s=09"}>
            <button className="flex items-center gap-2 sm:gap-3 bg-[#9747FF] text-white text-xl sm:text-2xl md:text-3xl font-semibold px-4 sm:px-6 py-2 sm:py-3 rounded-xl hover:bg-black transition w-full sm:w-auto justify-center">
            <img src="/twitter.svg" alt="GitHub logo" className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10" />
            Twitter
            </button>
            </Link>

            <Link href={"https://discord.gg/wTxAWNzSvh"}>
            <button className="flex items-center gap-2 sm:gap-3 bg-[#9747FF] text-white text-xl sm:text-2xl md:text-3xl font-semibold px-4 sm:px-6 py-2 sm:py-3 rounded-xl hover:bg-black transition w-full sm:w-auto justify-center">
            <img src="/discord.svg" alt="GitHub logo" className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10" />
            Discord
            </button>
            </Link>

          </div>
          <Footer></Footer>
        </div>
};

const Footer =() => {
  return<div className="bg-black w-full p-10 mt-auto" >
        <div className="grid grid-rows-4 grid-cols-2">
          <div>
            Mee
          </div>
          <div>
          <Link href={"/Skills"} className="pl-4 pr-4 mr-4">Skills</Link>
          </div>
          <div>
          ©️2025MeeCyberbee
          </div>
          <div>
          <Link href={"/Resume"} className="pl-4 pr-4 mr-4">Resume</Link>
          </div>
          <div>
          The cosmos is huge but not this
          </div>
          <div>
          <Link href={"/Portfolio"} className="pl-4 pr-4 mr-4">Portfolio</Link>
          </div>
          <div>
          website, use the links to visit
          </div>
          <div>
          <Link href={"/Contact_me"} className="pl-4 mr-3">Contact Me</Link>
          </div>
          <div>
          the other pages   
          </div>
        </div>
      </div>
};
