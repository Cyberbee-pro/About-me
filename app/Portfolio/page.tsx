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
          <div className="flex flex-start ml-5 pr-225">
            <Link href={"../"} className="pl-4 pr-4 mr-4">Mee</Link>
          </div>
          <div className="flex right-0">
            <Link href={"/Skills"} className="pl-4 pr-4 mr-4">Skills</Link>
            <Link href={"/Resume"} className="pl-4 pr-4 mr-4">Resume</Link>
            <Link href={"/Portfolio"} className="pl-4 pr-4 mr-4">Portfolio</Link>
            <Link href={"/Contact_me"} className="pl-4 mr-3">Contact Me</Link>
          </div>
        </div>
      </div>
}

const Content =() =>{
  return<div className="absolute inset-x-0 top-16 h-16">
    <div className="tracking-widest text-[6rem] p-3 pl-11">Resume</div>

    <div className="">

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
