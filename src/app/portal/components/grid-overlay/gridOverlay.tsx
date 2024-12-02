"use client" 
import React from "react";

interface LineConfig {
  x1: string;
  y1: string;
  x2: string;
  y2: string;
}

interface GridOverlayProps {
  lines: LineConfig[];
  opacity: number;
  color: string;
}

export const GridOverlay: React.FC<GridOverlayProps> = ({ lines, opacity, color }) => {

  return (
    <svg
      className={`absolute inset-0 z-10 h-full w-full ${color} opacity-${opacity}`}
      aria-hidden="true"
    >
      {lines.map((line, index) => (
        <line
          key={index}
          x1={line.x1}
          y1={line.y1}
          x2={line.x2}
          y2={line.y2}
          strokeWidth="1"
        />
      ))}
    </svg>
  );
};
