import type { ReactNode } from "react";

export function SectionBorder({ 
  children, 
  className = "" 
}: { 
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`relative ${className}`}>
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-px bg-white/[0.15]" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-white/[0.15]" />
        <div className="absolute top-0 bottom-0 left-0 w-px bg-white/[0.15]" />
        <div className="absolute top-0 bottom-0 right-0 w-px bg-white/[0.15]" />
        <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-white/[0.3]" />
        <div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-white/[0.3]" />
        <div className="absolute bottom-0 left-0 w-4 h-4 border-b border-l border-white/[0.3]" />
        <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-white/[0.3]" />
      </div>

      <div className="absolute inset-0 pointer-events-none opacity-50">
        <div className="absolute top-0 bottom-0 left-[25%] w-px bg-gradient-to-b from-transparent via-white/[0.08] to-transparent" />
        <div className="absolute top-0 bottom-0 left-[50%] w-px bg-gradient-to-b from-transparent via-white/[0.08] to-transparent" />
        <div className="absolute top-0 bottom-0 left-[75%] w-px bg-gradient-to-b from-transparent via-white/[0.08] to-transparent" />
      </div>

      <div className="relative px-6 py-8 sm:px-8 sm:py-12 lg:px-12">
        {children}
      </div>
    </div>
  );
}
