"use client";

import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { useGLTF, Stage, PresentationControls, Html, useProgress } from "@react-three/drei";

// 1. Create a Loading component to show while the .glb file is fetching
function Loader() {
  const { progress } = useProgress();
  return (
    <Html center>
      <div className="text-purple-400 font-medium tracking-widest text-sm whitespace-nowrap bg-black/60 px-4 py-2 rounded-full backdrop-blur-md border border-white/10 shadow-[0_0_15px_rgba(168,85,247,0.3)]">
        LOADING... {progress.toFixed(0)}%
      </div>
    </Html>
  );
}

// 2. The Model loader
function Model({ url }: { url: string }) {
  const { scene } = useGLTF(url);
  return <primitive object={scene} />;
}

// 3. The main Viewer component
export default function ModelViewer({ modelPath }: { modelPath: string }) {
  return (
    <div className="w-full h-full cursor-grab active:cursor-grabbing bg-[#0a000f]">
      <Canvas shadows dpr={[1, 2]} camera={{ fov: 45 }}>
        {/* Wrap everything that loads async in Suspense */}
        <Suspense fallback={<Loader />}>
          <PresentationControls 
            speed={1.5} 
            global 
            zoom={0.5} 
            polar={[-0.1, Math.PI / 4]} 
          >
            <Stage environment="city" intensity={0.6}>
              <Model url={modelPath} />
            </Stage>
          </PresentationControls>
        </Suspense>
      </Canvas>
    </div>
  );
}