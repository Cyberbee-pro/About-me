import Image from "next/image";

// Common style for Media items to keep code DRY
const MediaItem = ({ src, alt }: { src: string; alt: string }) => (
  <div className="relative w-auto h-[100px] md:h-[120px] overflow-hidden rounded-md border border-white/10 hover:border-pink-500/50 transition-colors">
    <Image
      src={src}
      alt={alt}
      width={400}
      height={120}
      className="h-full w-auto object-contain cursor-pointer"
      quality={60}
    />
  </div>
);

export function Datacard({
  compName,
  CompImg = "/ICONS/org.png",
  duration,
  description,
  role,
  Media = [],
  type
}: {
  compName: string;
  CompImg?: string;
  duration: string;
  description?: string;
  role: string;
  Media?: [string][];
  type?: string;
}) {
  return (
    <div className="flex flex-col p-3 gap-2 mb-8">
      <div className="flex items-center text-3xl md:text-5xl gap-3">
        <div className="relative shrink-0 w-10 h-10 md:w-12 md:h-12">
          <Image 
            src={CompImg} 
            alt={compName} 
            fill 
            className="object-contain" 
          />
        </div>
        <span className="font-bold tracking-tight">{compName}</span>
      </div>
      
      <p className="text-pink-300 text-lg md:text-xl md:ml-16">
        • {type} • {role} <span className="hidden md:inline">--------</span> {duration}
      </p>

      <p className="text-gray-300 whitespace-pre-line md:ml-16">
        {description}
      </p>

      <div className="flex flex-wrap gap-3 mt-2 md:ml-16">
        {Media.map(([mName]) => (
          <MediaItem key={mName} src={mName} alt={`Media for ${compName}`} />
        ))}
      </div>
    </div>
  );
}

export function DatacardPromote({
  duration,
  description,
  role,
  Media = [],
}: {
  duration: string;
  description?: string;
  role: string;
  Media?: [string][];
}) {
  return (
    <div className="flex flex-col p-3 gap-2 border-l-2 border-pink-300/30 ml-4 md:ml-20">
      <p className="text-pink-300 text-lg md:text-xl font-medium">
        • {role} <span className="hidden md:inline">--------</span> {duration}
      </p>

      <p className="text-gray-400 text-sm md:text-base italic">
        {description}
      </p>

      <div className="flex flex-wrap gap-3 mt-2">
        {Media.map(([mName]) => (
          <MediaItem key={mName} src={mName} alt="Promotion Media" />
        ))}
      </div>
    </div>
  );
}

export function DatacardExtra({
  compName,
  CompImg = "/ICONS/org.png",
  duration,
  description,
  descriptionOrg,
  role,
  Media = [],
  type
}: {
  compName: string;
  CompImg?: string;
  duration: string;
  descriptionOrg?: string;
  description?: string;
  role: string;
  Media?: [string][];
  type?: string;
}) {
  return (
    <div className="flex flex-col p-3 gap-4 border-b border-white/5 pb-10 mb-10">
      <div className="flex items-center text-3xl md:text-5xl gap-3">
        <div className="relative shrink-0 w-12 h-12">
          <Image src={CompImg} alt={compName} fill className="object-contain" />
        </div>
        <span className="font-bold">{compName}</span>
      </div>

      <div className="md:ml-16 space-y-3">
        <p className="text-pink-300 text-lg md:text-xl">
          • {type} • {role} <span className="hidden md:inline">--------</span> {duration}
        </p>
        
        {descriptionOrg && (
          <p className="text-xl md:text-2xl text-purple-200 font-medium leading-snug">
            {descriptionOrg}
          </p>
        )}

        <p className="text-gray-300 whitespace-pre-line leading-relaxed">
          {description}
        </p>

        <div className="flex flex-wrap gap-3 pt-2">
          {Media.map(([mName]) => (
            <MediaItem key={mName} src={mName} alt={`Media for ${compName}`} />
          ))}
        </div>
      </div>
    </div>
  );
}