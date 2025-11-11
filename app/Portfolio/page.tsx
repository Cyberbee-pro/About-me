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
    <div className="tracking-widest text-[6rem] p-3 pl-11">Portfolio</div>
  <div className="flex w-full justify-center space-x-16 p-6">


    <div className="transform transition duration-500 hover:scale-110">
    <div className="mask-radial-at-center bg-[url('/SolEspania.png')] w-[60vh] h-[30vh] rounded-[5%] z-10 bg-cover bg-no-repeat bg-center relative">
        <Link href={"https://spain-tour-guide.vercel.app/"}><div className="bg-black/30 text-white flex items-end p-4 h-full rounded-[5%]">
            SolEspania - a spain tour guide
        </div>
        </Link>
    </div>
    </div>
    
    
    <div className="transform transition duration-500 hover:scale-110">
    <div className="mask-radial-at-center bg-[url('/brain.jpg')] w-[60vh] h-[30vh] rounded-[5%] z-10 bg-cover bg-no-repeat bg-center">
    <div className="bg-black/30 text-white flex items-end p-4 h-full">
            Brain 3d model in blender
        </div>
    </div>
  </div>
  </div>

  
  <div className="flex w-full justify-center space-x-16 p-6">
    <div className="transform transition duration-500 hover:scale-50">
    <div className="mask-radial-at-center bg-[url('/Cpro.png')] w-[60vh] h-[30vh] rounded-[5%] z-10 bg-cover bg-no-repeat bg-center relative">
        <div className="bg-black/30 text-white flex items-end p-4 h-full">
            Cosmos OS - Work in pogress
        </div>
    </div>
    </div>
    
    <div className="transform transition duration-500 hover:scale-50">
    <div className="mask-radial-at-center bg-[url('/Cpro.png')] w-[60vh] h-[30vh] rounded-[5%] z-10 bg-cover bg-no-repeat bg-center">
    <div className="bg-black/30 text-white flex items-end p-4 h-full">
            Ai or Real - Image authenticator
        </div>
    </div>
    </div>
  </div>

  <div className="flex w-full justify-center space-x-16 p-6">
    <div className="transform transition duration-500 hover:scale-50">
    <div className="mask-radial-at-center bg-[url('/Cpro.png')] w-[60vh] h-[30vh] rounded-[5%] z-10 bg-cover bg-no-repeat bg-center relative">
        <div className="bg-black/30 text-white flex items-end p-4 h-full">
            Crop Yeild Predictor Ai
        </div>
    </div>
    </div>

    <div className="transform transition duration-500 hover:scale-50">
    <div className="mask-radial-at-center bg-[url('/nthe.png')] w-[60vh] h-[30vh] rounded-[5%] z-10 bg-cover bg-no-repeat bg-center">
    <div className="bg-black/30 text-white flex items-end p-4 h-full">
            Nothing here Yet
        </div>
    </div>
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
