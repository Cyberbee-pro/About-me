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
          <div className="grid grid-cols-2 gap-2 
                grid-rows-[auto_min-content_auto_auto_1fr_min-content] 
                lg:grid-cols-2 sm:grid-cols-1">
            <div className=" font-pix text-9xl p-5 pl-11 ">I am</div>
              
              <div className="flex row-span-3 justify-center items-center ">
              <div className="absolute mask-radial-at-center mask-radial-from-50% bg-[url('/pfp.jpg')] w-[300px] h-[300px] rounded-[50%] z-10"></div>
              <div className="absolute w-[300px] h-[300px] bg-black rounded-[50%] right-50"></div>
              </div>
              
            <div className="relative font-pix text-9xl p-5 pl-11 h-[170px]">
              <div className="absolute bg-pink-500 left-17 bottom-1">Cyberbee</div>
              <div className="absolute bg-black z-10">Cyberbee</div>
            </div>

            <div className="relative font-one text-2xl p-5 pl-11 h-[100px]">
              <div className="absolute bg-black z-10">FullStack Developer / Game Developer</div>
              <div className="absolute bg-pink-500 translate-x-2 top-7 ">Software Developer / Game Developer</div>
            </div>
            <div className="col-span-2 tracking-wider font-wow text-[40px] p-5 pl-11">“Limited probabilities Infinite Possibilities”</div>
            <div className="col-span-2 font-rud text-[30px] tracking-wide p-5 pl-11">
        <div className="col-span-2 font-rud text-[30px] tracking-wide p-5 pl-11">
          <p className="mb-4">I was born and raised in Kolkata, West Bengal</p>
          
          <p className="mb-4">
            SCHOOL - Nava Nalanda (Grade - A student)<br/>
            College - S.R.M. Ist Ktr (Y1)<br/>
            Degree - B.Tech (C.S.E. Core)
          </p>
          
          <p className="mb-4">
            My hobbies include coding, gaming and photography.<br/>
            I also love watching anime.
          </p>

          <p className="mb-4">
            Mother tongue : Bengali<br />
            Working proficiency in English and Hindi<br/>
            I am currently learning Japanese, Tamil and Spanish
          </p>

          <p className="mb-1 **mt-6**">My Interests:</p>
          <p>Cosmos</p>
          <p>Q.Tech</p>
        </div>
            </div>
            <div className="font-exp col-span-2 text-[40px] p-5 pl-11">Facts about me </div>
          </div>
          <div>
            <div className="flex content-around gap-30 p-9 pl-20 flex-wrap">
                <div className="flex justify-center items-center w-[200px] h-[200px] bg-pink-500 rounded-[50%] text-center">
                  <div className="w-[180px] h-[180px] bg-black rounded-[50%]">
                  <div className="font-rud text-[80px] pb-0">8+</div>
                  <div className="font-rud text-[30px] -translate-y-[40%]">years of coding</div>
                  </div>
                </div>
                <div className="flex justify-center items-center w-[200px] h-[200px] bg-pink-500 rounded-[50%] text-center">
                  <div className="w-[180px] h-[180px] bg-black rounded-[50%]">
                  <div className="font-rud text-[80px] pb-0">5+</div>
                  <div className="font-rud text-[30px] -translate-y-[40%]">Happy clients</div>
                  </div>
                </div>
                <div className="flex justify-center items-center w-[200px] h-[200px] bg-pink-500 rounded-[50%] text-center">
                  <div className="w-[180px] h-[180px] bg-black rounded-[50%]">
                  <div className="font-rud text-[60px] translate-y-[5%]">250+</div>
                  <div className="font-rud text-[30px] -translate-y-[20%]">Problems solved</div>
                  </div>
                </div>
                <div className="flex justify-center items-center w-[200px] h-[200px] bg-pink-500 rounded-[50%] text-center">
                  <div className="w-[180px] h-[180px] bg-black rounded-[50%]">
                  <div className="font-rud text-[80px] pb-0">1+</div>
                  <div className="font-rud text-[25px] -translate-y-[40%]">Certifications</div>
                  </div>
                </div>
                <div className="flex justify-center items-center w-[200px] h-[200px] bg-pink-500 rounded-[50%] text-center">
                  <div className="w-[180px] h-[180px] bg-black rounded-[50%]">
                  <div className="font-rud text-[75px] translate-y-[5%]">175+</div>
                  <div className="font-rud text-[35px] -translate-y-[40%]">Commits</div>
                  </div>
                </div>
                <div className="flex justify-center items-center w-[200px] h-[200px] bg-pink-500 rounded-[50%] text-center">
                  <div className="w-[180px] h-[180px] bg-black rounded-[50%]">
                  <div className="font-rud text-[80px] pb-0">4+</div>
                  <div className="font-rud text-[27px] -translate-y-[40%]">Spoken languages</div>
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
