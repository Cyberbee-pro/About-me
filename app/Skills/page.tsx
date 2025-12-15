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

const Content =() =>{
  return<div className="absolute inset-x-0 top-16 h-16">
          <div className="tracking-widest text-[6rem] p-3 pl-11">Skills</div>
            <div className="flex tracking-wider text-[26px] p-2 pl-11">
            <ul className="flex space-x-6 list-disc pl-3">
              <li className="p-3">FullStack Dev</li>
              <li className="p-3">UI/UX Designer</li>
              <li className="p-3">Game Dev</li>
              <li className="p-3">Game Designer</li>
              <li className="p-3">Ai Engineer</li>
            </ul>
            </div>
          <div className="flex text-[45px] p-2 pl-11"><Image src="/code.svg" alt="pic of </>" width={70} height={70} />Programing Languages</div>
          <div className="flex font-medium justify-between max-w-[95vh] gap-32 p-2 ml-25">
          {/* Left list */}
          <ol className="text-2xl space-y-4">
            <li className="relative flex items-center gap-4">
              C
              <div className="relative bg-pink-500 h-4 w-40 rounded"></div>
            </li>
            <li className="relative flex items-center gap-4">
              C++
              <div className="relative bg-pink-500  h-4 w-20 rounded"></div>
              

            </li>
            <li className="relative flex items-center gap-4">
              JavaScript
              <div className="relative bg-pink-500  h-4 w-20 rounded"></div>
            </li>
            <li className="relative flex items-center gap-4">
              TypeScript
              <div className="relative bg-pink-500  h-4 w-20 rounded"></div>
            </li>
          </ol>

          {/* Right list */}
          <ol className="text-2xl space-y-4">
            <li className="relative flex items-center gap-4">
              Python
              <div className="relative bg-pink-500  h-4 w-25 rounded"></div>
            </li>
            <li className="relative flex items-center gap-4">
              HTML
              <div className="relative bg-pink-500   w-40 rounded">100%</div>
            </li>
            <li className="relative flex items-center gap-4">
              CSS
              <div className="relative bg-pink-500  h-4 w-40 rounded"></div>
            </li>
          </ol>
        </div>




                  <div className="flex text-[45px] p-2 pl-11"><Image src="/frameworks.svg" alt="pic of framework" width={70} height={70} />FrameWorks</div>
          <div className="flex">
          <div className="flex flex-col font-medium w-[40vw] ml-11 p-2">
            <ol className="list-decimal ml-[4vw] text-2xl">
              <li className="p-3">React</li>
              <li className="p-3">TailWind</li>
              <li className="p-3">Node</li>
              <li className="p-3">Numpy</li>

            </ol>
          </div>
          
          <div className="flex flex-col font-medium text-2xl w-[40vw] ml-11 p-2">
            <ol className="list-decimal ml-[4vw] ">
              Learning :
              <li className="p-3">Pandas</li>
              <li className="p-3">Django</li>
              <li className="p-3">OpenCv</li>

            </ol>
          </div>
          </div>


                    <div className="flex text-[45px] p-2 pl-11"><Image src="/tools.svg" alt="pic of cli" width={70} height={70} />Tools i use</div>
          <div className="flex">
          <div className="flex flex-col font-medium w-[40vw] ml-11 p-2">
            <ol className="list-decimal ml-[4vw] text-2xl">
              <li className="p-3">VS Code</li>
              <li className="p-3">Apache NetBeans(Java)</li>
              <li className="p-3">GitHub</li>
              <li className="p-3">Figma</li>
              <li className="p-3">Blender</li>

            </ol>
          </div>
          
          <div className="flex flex-col font-medium text-2xl w-[40vw] ml-11 p-2">
            <ol className="list-decimal ml-[4vw] ">
              Learning :
              <li className="p-3">Mongo DB</li>
              <li className="p-3">Unity</li>
              <li className="p-3">DaVinchi Resolve</li>
              <li className="p-3">Photoshop</li>
              <li className="p-3">Unreal Engine</li>

            </ol>
          </div>
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
