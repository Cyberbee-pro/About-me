import Image from "next/image";
import Link from "next/link";
/* =====================
  REUSABLE COMPONENTS
===================== */

export const SectionTitle = ({ icon, text }: { icon: string; text: string }) => (
  <div className="flex items-center gap-4 text-3xl md:text-4xl font-bold mt-16 mb-10">
    <div className="p-3 bg-white/5 rounded-2xl border border-white/10 group-hover:scale-110 transition-transform">
      <Image 
        src={icon} 
        alt={text} 
        width={40} 
        height={40} 
        className="opacity-80 group-hover:opacity-100"
        onError={(e) => (e.currentTarget.src = 'https://www.svgrepo.com/show/511005/code-square.svg')} // Fallback icon
      />
    </div>
    <h2 className="tracking-wide">{text}</h2>
  </div>
);

export const TwoColumn = ({ children }: { children: React.ReactNode }) => (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-6 mb-16 p-3 bg-white/10 rounded-2xl border border-white/10 ">
    {children}
  </div>
);

export const SkillList = ({ items }: { items: [string, number][] }) => (
  <div className="space-y-6">
    {items.map(([label, value]) => (
      <div key={label} className="group">
        <div className="flex justify-between mb-2">
          <span className="text-lg font-medium text-gray-300 group-hover:text-white transition-colors">{label}</span>
          <span className="text-sm text-gray-500">{value}%</span>
        </div>
        <ProgressBar prog={value} />
      </div>
    ))}
  </div>
);

export const SimpleList = ({ items }: { items: string[] }) => (
  <ul className="grid grid-cols-1 gap-4">
    {items.map((item) => (
      <li 
        key={item} 
        className="flex items-center gap-3 text-lg text-gray-300 hover:text-white transition-colors"
      >
        <span className="h-1.5 w-1.5 bg-purple-500 rounded-full" />
        {item}
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
    <div className="bg-white/5 h-2 w-full rounded-full overflow-hidden border border-white/5">
      <div
        className="bg-gradient-to-r from-purple-600 to-pink-500 h-full rounded-full transition-all duration-1000 ease-out"
        style={{ width: `${safe}%` }}
      />
    </div>
  );
};