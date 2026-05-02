import Image from "next/image";
import Link from "next/link";

/* =====================
  REUSABLE COMPONENTS
===================== */

export const SectionTitle = ({ icon, text }: { icon: string; text: string }) => (
  <div className="flex items-center gap-3 md:gap-4 text-2xl md:text-4xl font-bold mt-12 md:mt-16 mb-8 md:mb-10 group">
    <div className="p-2 md:p-3 bg-white/5 rounded-xl md:rounded-2xl border border-white/10 group-hover:border-pink-500/50 transition-all duration-300">
      <Image 
        src={icon} 
        alt={text} 
        width={32} 
        height={32} 
        className="opacity-80 group-hover:opacity-100 md:w-[40px] md:h-[40px]"
        onError={(e) => (e.currentTarget.src = 'https://www.svgrepo.com/show/511005/code-square.svg')} 
      />
    </div>
    <h2 className="tracking-wide">{text}</h2>
  </div>
);

export const TwoColumn = ({ children }: { children: React.ReactNode }) => (
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-x-20 mb-16 p-4 md:p-6 bg-white/5 rounded-3xl border border-white/10 backdrop-blur-sm">
    {children}
  </div>
);

export const SkillList = ({ items }: { items: [string, number][] }) => (
  <div className="space-y-6 w-full">
    {items.map(([label, value]) => (
      <div key={label} className="group">
        <div className="flex justify-between mb-2">
          <span className="text-base md:text-lg font-medium text-gray-300 group-hover:text-white transition-colors">{label}</span>
          <span className="text-xs md:text-sm text-gray-500 font-mono">{value}%</span>
        </div>
        <ProgressBar prog={value} />
      </div>
    ))}
  </div>
);

export const MinimalSkillList = ({ items }: { items: [string, string][] }) => (
  <div className="flex flex-row flex-wrap justify-center md:justify-start gap-4 md:gap-8">
    {items.map(([label, icon]) => (
      <div key={label} className="group flex flex-col items-center w-16 md:w-20">
        <div className="p-3 group-hover:scale-110 group-hover:border-pink-500/30 transition-all duration-300">
          <Image 
            src={icon} 
            alt={label} 
            width={35} 
            height={35} 
            className="opacity-100 transition-opacity "
            onError={(e) => (e.currentTarget.src = 'https://www.svgrepo.com/show/511005/code-square.svg')} 
          />
        </div>
        <span className="text-[10px] md:text-xs font-medium text-gray-400 group-hover:text-pink-300 transition-colors mt-2 text-center truncate w-full px-1">
          {label}
        </span>
      </div>
    ))}
  </div>
);

export const NormalList = ({ items }: { items: [string, string][] }) => (
  <div className="space-y-6">
    {items.map(([label, des]) => (
      <div key={label} className="group border-l-2 border-white/5 pl-4 hover:border-pink-500/50 transition-all">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1 mb-2">
          <span className="text-lg md:text-xl font-bold text-pink-300 group-hover:text-pink-400 transition-colors">
            {label}
          </span>
          <span className="text-sm md:text-lg text-gray-400 group-hover:text-gray-200 transition-colors">
            {des}
          </span>
        </div>
      </div>
    ))}
  </div>
);

export const SimpleList = ({ items }: { items: string[] }) => (
  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
    {items.map((item) => (
      <li 
        key={item} 
        className="flex items-start gap-3 text-base md:text-lg text-gray-400 hover:text-white transition-colors group"
      >
        <span className="h-1.5 w-1.5 bg-purple-500 rounded-full mt-2.5 group-hover:bg-pink-500 group-hover:scale-125 transition-all" />
        <span className="flex-1">{item}</span>
      </li>
    ))}
  </ul>
);

/* =====================
  PROGRESS BAR
===================== */
export const ProgressBar = ({ prog }: { prog: number }) => {
  const safe = Math.max(0, Math.min(100, prog));

  return (
    <div className="bg-white/10 h-1.5 md:h-2 w-full rounded-full overflow-hidden">
      <div
        className="bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400 h-full rounded-full transition-all duration-1000 ease-out"
        style={{ width: `${safe}%` }}
      />
    </div>
  );
};