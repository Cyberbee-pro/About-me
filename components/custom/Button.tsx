import Link from "next/link";

/* =====================
  CONTACT BUTTON
===================== */
export const ContactButton = ({
  icon,
  text,
  link,
}: {
  icon: string;
  text: string;
  link: string;
}) => (
  <Link href={link} target="_blank" className="group">
    <div className="
      relative flex items-center gap-4 
      bg-[#9747FF]/10 border border-[#9747FF]/30 backdrop-blur-sm
      px-6 py-4 rounded-2xl overflow-hidden
      transition-all duration-300 
      hover:border-[#9747FF] hover:bg-[#9747FF]
      hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(151,71,255,0.3)]
    ">
      {/* Hover Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
      
      {/* Icon with white background circle for visibility */}
      <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center group-hover:bg-white/20 transition-colors">
        <img 
          src={icon} 
          alt={text} 
          className="w-7 h-7 md:w-8 md:h-8 object-contain transition-transform group-hover:scale-110" 
        />
      </div>

      <span className="text-xl md:text-2xl font-bold tracking-tight group-hover:text-white transition-colors">
        {text}
      </span>
    </div>
  </Link>
);