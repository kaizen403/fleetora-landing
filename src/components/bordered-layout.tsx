import type { ReactNode } from "react";

export function BorderedLayout({ children }: { children: ReactNode }) {
  return (
    <div className="relative min-h-screen bg-[#0a0f1a]">
      <div className="fixed inset-4 pointer-events-none z-50">
        <div className="absolute top-0 left-0 right-0 h-px bg-white/[0.15]" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-white/[0.15]" />
        <div className="absolute top-0 bottom-0 left-0 w-px bg-white/[0.15]" />
        <div className="absolute top-0 bottom-0 right-0 w-px bg-white/[0.15]" />
        <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-white/[0.3]" />
        <div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-white/[0.3]" />
        <div className="absolute bottom-0 left-0 w-4 h-4 border-b border-l border-white/[0.3]" />
        <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-white/[0.3]" />
      </div>

      <div className="fixed inset-4 pointer-events-none z-40 opacity-50">
        <div className="absolute top-0 bottom-0 left-[25%] w-px bg-gradient-to-b from-transparent via-white/[0.08] to-transparent" />
        <div className="absolute top-0 bottom-0 left-[50%] w-px bg-gradient-to-b from-transparent via-white/[0.08] to-transparent" />
        <div className="absolute top-0 bottom-0 left-[75%] w-px bg-gradient-to-b from-transparent via-white/[0.08] to-transparent" />
      </div>

      <div className="relative px-6 sm:px-8 lg:px-12">
        {children}
      </div>
    </div>
  );
}
