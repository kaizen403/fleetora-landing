import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section className="relative pt-16 overflow-hidden">
      <video
        className="absolute inset-0 h-full w-full object-cover"
        src="https://pub-ad1790e90bf848a3a9f1b69e95207619.r2.dev/hero-bg.mp4"
        autoPlay
        muted
        loop
        playsInline
      />
      <div className="absolute inset-0 bg-black/25" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/15 to-black/40" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-black/20 via-transparent to-transparent" />

      <div className="relative z-10 flex flex-col items-center px-4 pt-14 pb-12 text-center sm:px-6 lg:px-8">
        <div className="hero-reveal-1 mb-8">
          <a
            href="#pricing"
            className="group inline-flex items-center gap-2.5 rounded-full border border-white/15 bg-white/10 px-4 py-1.5 text-sm text-white/70 backdrop-blur-sm transition-colors hover:bg-white/15"
          >
            <span className="flex items-center gap-1.5">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-amber-400 opacity-60" />
                  <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[#D4A04A]" />
                </span>
                <span className="font-medium text-[#D4A04A]">Now Accepting Design Partners</span>
            </span>
            <span className="h-3.5 w-px bg-white/20" />
            <span className="text-white/80">India&apos;s first OEM aftersales AI</span>
            <ArrowRight className="h-3.5 w-3.5 text-white/40 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:text-white/60" />
          </a>
        </div>

        <h1
          className="hero-reveal-2 max-w-4xl font-normal tracking-tight text-white drop-shadow-[0_2px_24px_rgba(0,0,0,0.5)]"
          style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)", lineHeight: 1.1, textShadow: "0 2px 40px rgba(0,0,0,0.5), 0 1px 4px rgba(0,0,0,0.3)" }}
        >
          Operational intelligence for
          <br />
          commercial vehicle fleets
        </h1>

        <p className="hero-reveal-3 mt-6 max-w-2xl text-lg leading-relaxed text-white/80" style={{ textShadow: "0 1px 20px rgba(0,0,0,0.5)" }}>
          Don&apos;t just track telemetry. Fleetora turns noisy signals into explainable
          decisions across service, quality, and warranty operations.
        </p>

        <div className="hero-reveal-4 mt-10 flex flex-wrap items-center justify-center gap-3">
          <a
            href="mailto:hello@fleetora.com?subject=Get%20Started"
            className="btn-primary inline-flex items-center rounded-md px-6 py-3 text-sm font-semibold"
          >
            Start for free
          </a>
          <a
            href="mailto:hello@fleetora.com?subject=Request%20Demo"
            className="inline-flex items-center rounded-md border border-white/20 bg-white/10 px-5 py-3 text-sm font-medium text-white backdrop-blur-sm transition-all hover:bg-white/15 hover:border-white/30 active:scale-[0.98]"
          >
            Get a Demo
          </a>
        </div>

        <p className="hero-reveal-4 mt-4 text-sm text-white/70" style={{ textShadow: "0 1px 10px rgba(0,0,0,0.5)" }}>
          7-day free trial &nbsp;·&nbsp; Cancel anytime
        </p>
      </div>

      <div className="relative z-10 px-4 pt-32 pb-24 sm:px-6 lg:px-8">
        <div className="hero-reveal-5 mx-auto max-w-6xl">
          <div
            className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-sm"
            style={{
              boxShadow:
                "0 32px 80px rgba(0,0,0,0.30), 0 8px 24px rgba(0,0,0,0.20)",
            }}
          >
            <div className="flex items-center justify-center" style={{ minHeight: "420px" }}>
              <p className="text-sm text-white/30">Dashboard preview coming soon</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
