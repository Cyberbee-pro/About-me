import React, { useRef } from 'react';

interface GlareHoverProps {
  width?: string;
  height?: string;
  background?: string;
  borderRadius?: string;
  borderColor?: string;
  children?: React.ReactNode;
  glareColor?: string;
  glareOpacity?: number;
  glareAngle?: number;
  glareSize?: number;
  transitionDuration?: number;
  playOnce?: boolean;
  className?: string;
  style?: React.CSSProperties;
}

const GlareHover: React.FC<GlareHoverProps> = ({
  width = '100%',
  height = '100%',
  background = 'transparent',
  borderRadius = 'inherit',
  borderColor = 'transparent',
  children,
  glareColor = '#ffffff',
  glareOpacity = 0.5,
  glareAngle = -45,
  glareSize = 250,
  transitionDuration = 650,
  playOnce = false,
  className = '',
  style = {}
}) => {
  // --- Helper: Convert Hex to RGBA ---
  const getRGBA = (hexColor: string, opacity: number) => {
    const hex = hexColor.replace('#', '');
    let r = 255, g = 255, b = 255;

    if (hex.length === 6) {
      r = parseInt(hex.slice(0, 2), 16);
      g = parseInt(hex.slice(2, 4), 16);
      b = parseInt(hex.slice(4, 6), 16);
    } else if (hex.length === 3) {
      r = parseInt(hex[0] + hex[0], 16);
      g = parseInt(hex[1] + hex[1], 16);
      b = parseInt(hex[2] + hex[2], 16);
    }
    return `rgba(${r}, ${g}, ${b}, ${opacity})`;
  };

  const rgba = getRGBA(glareColor, glareOpacity);
  const overlayRef = useRef<HTMLDivElement | null>(null);

  const animateIn = () => {
    const el = overlayRef.current;
    if (!el) return;

    // 1. Reset position immediately without transition
    el.style.transition = 'none';
    el.style.backgroundPosition = '-100% -100%';
    
    // 2. Force reflow (tells browser to apply the 'none' transition reset now)
    void el.offsetWidth;

    // 3. Start the actual animation
    el.style.transition = `background-position ${transitionDuration}ms ease-out`;
    el.style.backgroundPosition = '160% 160%';
  };

  const animateOut = () => {
    const el = overlayRef.current;
    if (!el) return;
    if (playOnce) return;

    el.style.transition = `background-position ${transitionDuration}ms ease-in`;
    el.style.backgroundPosition = '-100% -100%';
  };

  const overlayStyle: React.CSSProperties = {
    position: 'absolute',
    inset: 0,
    zIndex: 50, // Ensures glare stays on top of images/gradients
    pointerEvents: 'none', // Critical so users can still click the card
    backgroundRepeat: 'no-repeat',
    backgroundSize: `${glareSize}% ${glareSize}%`,
    backgroundPosition: '-100% -100%',
    backgroundImage: `linear-gradient(${glareAngle}deg, 
      rgba(255,255,255,0) 40%, 
      ${rgba} 50%, 
      rgba(255,255,255,0) 60%)`,
  };

  return (
    <div
      className={`relative overflow-hidden ${className}`}
      style={{
        width,
        height,
        background,
        borderRadius,
        borderColor,
        ...style
      }}
      onMouseEnter={animateIn}
      onMouseLeave={animateOut}
    >
      {/* Content renders first (on bottom) */}
      {children}
      
      {/* Glare renders last (on top) */}
      <div ref={overlayRef} style={overlayStyle} />
    </div>
  );
};

export default GlareHover;