import Link from "next/link";
import dynamic from "next/dynamic";

const ModelViewer = dynamic(() => import("@/components/custom/ModelViewer"), { ssr: false });

export type Project = {
  image: string;
  title: string;
  description: string;
  githubLink?: string;
  deployedLink?: string;
  modelPath?: string;
};

/* =====================
  PROJECT CARD
===================== */
export const ProjectCard = ({ image, title, onClick }: { image: string; title: string; onClick: () => void }) => {
  return (
    <div
      onClick={onClick}
      className={`
        cursor-pointer group relative w-full aspect-video rounded-xl 
        bg-[#12011a] border border-white/10 overflow-hidden
        transition-all duration-500 hover:border-purple-500/50 hover:shadow-[0_0_30px_rgba(168,85,247,0.15)]
      `}
    >
      {/* Background Image with fallback handling */}
      <div 
        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
        style={{ backgroundImage: `url('${image}')` }}
      />
      
      {/* Overlay Gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

      {/* Text Info */}
      <div className="absolute inset-0 flex items-end p-6">
        <h3 className="text-lg md:text-xl font-medium tracking-wide group-hover:text-purple-300 transition-colors">
          {title}
        </h3>
      </div>
    </div>
  );
};
/* =====================
  PROJECT MODAL
===================== */
export const ProjectModal = ({ project, onClose }: { project: Project; onClose: () => void }) => {
  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-sm transition-opacity" 
      onClick={onClose}
    >
      {/* Modal Container */}
      <div 
        className="relative w-full max-w-3xl bg-[#12011a] border border-white/10 rounded-2xl overflow-hidden shadow-[0_0_40px_rgba(168,85,247,0.2)] flex flex-col max-h-[90vh]"
        onClick={(e) => e.stopPropagation()} 
      >
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 bg-black/50 hover:bg-black/80 rounded-full text-white/70 hover:text-white transition-all border border-white/10"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
            <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
          </svg>
        </button>

        {/* Modal Header: Conditionally Render 3D Viewer OR Static Image */}
        {project.modelPath ? (
          <div className="relative w-full h-64 sm:h-80 border-b border-white/10">
            <div className="absolute top-4 left-4 z-10 px-3 py-1 bg-black/50 backdrop-blur-md rounded-full text-xs font-medium text-white/80 border border-white/10 pointer-events-none">
              Click & Drag to Rotate
            </div>
            <ModelViewer modelPath={project.modelPath} />
          </div>
        ) : (
          <div 
            className="w-full h-56 sm:h-72 bg-cover bg-center border-b border-white/10"
            style={{ backgroundImage: `url('${project.image}')` }}
          />
        )}

        {/* Modal Content */}
        <div className="p-6 sm:p-8 overflow-y-auto">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-wide mb-4 text-purple-300">
            {project.title}
          </h2>
          
          <p className="text-gray-300 leading-relaxed mb-8 text-sm sm:text-base opacity-90">
            {project.description}
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-4">
            {project.deployedLink && (
              <a 
                href={project.deployedLink} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-5 py-2.5 bg-purple-600/20 hover:bg-purple-600/40 border border-purple-500/30 rounded-lg transition-all text-sm font-medium tracking-wide"
              >
                <img src="/code.svg" alt="Code Icon" className="w-5 h-5" />
                View Live Project
              </a>
            )}
            
            {project.githubLink && (
              <a 
                href={project.githubLink} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-5 py-2.5 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg transition-all text-sm font-medium tracking-wide"
              >
                <img src="/github.svg" alt="GitHub Icon" className="w-5 h-5 opacity-90" />
                View on GitHub
              </a>
            )}

            {/* NEW: Download 3D Model Button */}
            {project.modelPath && (
              <a 
                href={project.modelPath} 
                download
                className="flex items-center gap-3 px-5 py-2.5 bg-blue-600/20 hover:bg-blue-600/40 border border-blue-500/30 rounded-lg transition-all text-sm font-medium tracking-wide text-blue-100"
              >
                <img src="/downloadb.svg" alt="Download Icon" className="w-5 h-5" />
                Download Model
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};