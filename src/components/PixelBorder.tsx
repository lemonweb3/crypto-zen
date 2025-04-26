import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
};

export function PixelBorder({ children, className = "" }: Props) {
  return (
    <div className={`relative p-2 ${className}`}>
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          zIndex: 1,
          imageRendering: "pixelated",
        }}
      >
        <svg width="100%" height="100%">
          <rect
            x="0" y="0" width="100%" height="100%"
            fill="none"
            stroke="#222"
            strokeWidth="8"
            style={{ filter: "drop-shadow(4px 4px 0 #fff)" }}
          />
        </svg>
      </div>
      <div className="relative z-10">{children}</div>
    </div>
  );
}