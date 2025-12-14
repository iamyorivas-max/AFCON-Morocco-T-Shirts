import React from 'react';
import { TShirtConfig } from '../types';

interface TShirtCanvasProps {
  config: TShirtConfig;
}

export const TShirtCanvas: React.FC<TShirtCanvasProps> = ({ config }) => {
  return (
    <div className="relative w-full max-w-[400px] aspect-[4/5] mx-auto flex items-center justify-center select-none">
      {/* 
        This is a simplified SVG path for a t-shirt. 
        In a real app, you would use a high-quality SVG asset.
      */}
      <svg
        viewBox="0 0 512 512"
        className="w-full h-full drop-shadow-2xl filter"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M378.5,64.5 L346.5,48.5 C346.5,48.5 316.5,90.5 256,90.5 C195.5,90.5 165.5,48.5 165.5,48.5 L133.5,64.5 L64.5,134.5 L96.5,190.5 L133.5,164.5 L133.5,464.5 L378.5,464.5 L378.5,164.5 L415.5,190.5 L447.5,134.5 L378.5,64.5 Z"
          fill={config.color}
          stroke="rgba(0,0,0,0.1)"
          strokeWidth="2"
        />
        {/* Collar Detail */}
        <path
          d="M346.5,48.5 C346.5,48.5 316.5,90.5 256,90.5 C195.5,90.5 165.5,48.5 165.5,48.5"
          fill="none"
          stroke="rgba(0,0,0,0.2)"
          strokeWidth="4"
        />
        
        {/* Arm Stitching */}
        <path d="M133.5,164.5 L96.5,190.5" stroke="rgba(0,0,0,0.1)" strokeWidth="2" />
        <path d="M378.5,164.5 L415.5,190.5" stroke="rgba(0,0,0,0.1)" strokeWidth="2" />

        {/* Texture Overlay (Simulated Fabric) */}
        <filter id="noise">
          <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="3" stitchTiles="stitch" />
          <feColorMatrix type="saturate" values="0" />
          <feComponentTransfer>
             <feFuncA type="linear" slope="0.1" />
          </feComponentTransfer>
        </filter>
        <rect width="100%" height="100%" filter="url(#noise)" opacity="0.4" style={{ mixBlendMode: 'multiply' }} />
      </svg>

      {/* Overlay Text */}
      <div className="absolute inset-0 flex flex-col items-center justify-center pt-8 pointer-events-none">
        {/* Brand Logo Placement */}
        <div className="absolute top-[28%] right-[32%] w-6 h-6 opacity-80">
           {/* Example generic logo shape */}
           <div className="w-full h-full bg-white rounded-full flex items-center justify-center">
             <div className="w-4 h-4 bg-morocco-green rounded-full"></div>
           </div>
        </div>
        
        {/* Flag Placement */}
        <div className="absolute top-[28%] left-[32%] w-6 h-4 opacity-90 shadow-sm border border-white/20">
           <div className="w-full h-full bg-morocco-red relative overflow-hidden">
             <div className="absolute inset-0 flex items-center justify-center text-morocco-green text-[10px]">★</div>
           </div>
        </div>

        {/* Custom Number */}
        <div 
          className="font-display font-bold text-[120px] leading-none drop-shadow-md mt-10"
          style={{ color: config.textColor }}
        >
          {config.number || "10"}
        </div>
        
        {/* Custom Name */}
        <div 
          className="font-sans font-bold text-2xl tracking-widest uppercase mt-2 drop-shadow-sm"
          style={{ color: config.textColor }}
        >
          {config.name || "PLAYER"}
        </div>
      </div>
    </div>
  );
};