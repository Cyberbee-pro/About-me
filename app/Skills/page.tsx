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
  return<div className="fixed w-full bg-black h-17 text-2xl z-60"> {/*Navigation bar */}
        <div className="flex mt-5">
          <Link href={"../"} className="flex flex-start ml-5 pr-225">
            Mee
          </Link>
          <div className="flex right-0">
            <div className="pl-4 pr-4 mr-4">Skills</div>
            <Link href={"/Resume"} className="pl-4 pr-4 mr-4">Resume</Link>
            <Link href={"/Portfolio"} className="pl-4 pr-4 mr-4">Portfolio</Link>
            <Link href={"/Contact_me"} className="pl-4 mr-3">Contact Me</Link>
          </div>
        </div>
      </div>
}

const Content =() =>{
  return<div className="absolute inset-x-0 top-16 h-16">
          <div className="tracking-widest text-[128px] p-3 pl-11">Skills</div>
            <div className="flex tracking-wider text-[26px] p-2 pl-11">
            <ul className="flex space-x-6 list-disc pl-3">
              <li className="p-3">FullStack Dev</li>
              <li className="p-3">UI/UX Designer</li>
              <li className="p-3">Game Devoloper</li>
              <li className="p-3">Ai Engineer</li>
            </ul>
            </div>
          <div className="flex text-[45px] p-2 pl-11"><div className="bg-[url(/code.svg)] size-5"></div>Programing Languages</div>
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
