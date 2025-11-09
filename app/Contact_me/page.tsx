import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="Main">
      <div className="fixed w-full bg-black h-17 text-2xl"> {/*Navigation bar */}
        <div className="flex mt-5">
          <div className="flex flex-start ml-5 pr-220">
            <Link href={"../"} className="pl-4 pr-4 mr-4">Mee</Link>
          </div>
          <div className="flex right-0">
            <Link href={"/Skills"} className="pl-4 pr-4 mr-4">Skills</Link>
            <Link href={"/Resume"} className="pl-4 pr-4 mr-4">Resume</Link>
            <Link href={"/Portfolio"} className="pl-4 pr-4 mr-4">Portfolio</Link>
            <Link href={"/Contact_me"} className="pl-4 mr-3">Contact Me</Link>
          </div>
        </div>
      </div>  {/*Navigation bar end */}

    <div > {/*content area start*/}
    
    
    
    </div>{/*content area end */}

      <footer> {/*Footer section*/}
      <div className="absolute bg-black w-full inset-x-0 bottom-0 p-10" >
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
      </footer> {/*Footer section end*/}
    </div>
  );
}
