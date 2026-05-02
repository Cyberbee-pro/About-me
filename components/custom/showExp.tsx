
import Image from "next/image";



export function Datacard({
    compName, 
    CompImg="/ICONS/org.png",
    duration , 
    description , 
    role  , 
    Media , 
    type }:{
    compName : string, 
    CompImg?:string ,
    duration : string, 
    description? : string, 
    role : string , 
    Media?: [string][] , 
    type? : string,}){
return(
    <div className="flex flex-col p-3 gap-2">
        <div className="flex text-5xl gap-2" >
            <Image
                src={CompImg}
                alt={"image for " + compName} 
                width={50} 
                height={40} 
            />
            {compName}
        </div>
        <p className="text-pink-300 text-xl ml-16"> • {type} • {role} -------- {duration}  </p>

        <p>
            {description}
        </p>
        <div className="flex gap-2">
        {Media?.map(([mName])=>(
            <Image
            key={mName}
            src={mName}
            alt={"image for " + compName} 
            width={200} 
            height={10}
            quality={60} 
            />))}
        </div>
    </div>
);
}




export function DatacardExtra({
    compName, 
    CompImg="/ICONS/org.png",
    duration , 
    description , 
    descriptionOrg , 
    role  , 
    Media , 
    type }:{
    compName : string, 
    CompImg?:string ,
    duration : string, 
    descriptionOrg? : string, 
    description? : string, 
    role : string , 
    Media?: [string][] , 
    type? : string,}){
return(
    <div className="flex flex-col p-3 gap-2">
        <div className="flex text-5xl gap-2" >
            <Image
                src={CompImg}
                alt={"image for " + compName} 
                width={50} 
                height={40} 
            />
            {compName}
        </div>
        <p className="text-pink-300 text-xl ml-16"> • {type} • {role} -------- {duration}  </p>
        <p className="text-2xl">
            {descriptionOrg}
        </p>
        <p>
            {description}
        </p>
        <div className="flex gap-2">
        {Media?.map(([mName])=>(
            <div 
            key={mName} 
            className="relative w-auto h-[120px] overflow-hidden rounded-md border border-white/10"
        >
            <Image
                src={mName}
                alt={"Media for " + compName}
                // Set the height to 120 and width to something large. 
                // 'style={{ width: "auto" }}' lets it scale proportionally.
                width={400} 
                height={120}
                className="max-h-[200px] w-auto object-contain cursor-pointer"
                quality={60}
            />
        </div>))}
        </div>
    </div>
);
}