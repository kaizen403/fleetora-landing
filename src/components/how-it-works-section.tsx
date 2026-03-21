import { Check, CheckCircle2, Radio } from "lucide-react";
import type { ReactNode } from "react";

export function HowItWorksSection() {
  return (
    <section id="platform" className="section-grid-bg relative overflow-hidden py-32 md:py-40">
      <div className="pointer-events-none absolute top-1/2 left-0 h-[600px] w-[600px] -translate-y-1/2 rounded-full bg-blue-500/5 blur-[150px]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-20 text-center">
          <span className="mb-6 inline-block rounded-full border border-white/[0.08] bg-white/[0.04] px-3 py-1 text-xs text-white/60">
            How it works
          </span>
          <h2 className="font-display text-[2.5rem] leading-[1.1] font-bold tracking-[-0.02em] text-white md:text-[3.5rem]">
            From fleet signal to finished service
            <br />
            <span className="text-white/40">in three simple steps</span>
          </h2>
        </div>

        <div className="relative grid gap-8 md:grid-cols-3">
          <div className="absolute top-20 left-[20%] right-[20%] z-0 hidden h-px bg-gradient-to-r from-transparent via-white/10 to-transparent md:block" />

          <StepCard
            visual={<FeedVisual />}
            title="Connect your fleet"
            description="Plug into your existing OEM telematics cloud. Fleetora normalizes signals, maps DTCs, and decodes VINs into a clean trust layer automatically."
            features={["Zero hardware needed", "OEM-agnostic adapters", "Instant signal normalization"]}
          />

          <StepCard
            visual={<PriorityVisual />}
            title="AI analyzes & prioritizes"
            description="The engine scores vehicle health, ranks urgency, matches depots, checks parts availability, and recommends what should happen next."
            features={["Weighted priority scoring", "Depot-vehicle matching", "Parts pre-positioning"]}
          />

          <StepCard
            visual={<ServiceVisual />}
            title="Act with confidence"
            description="Your team executes with full context, closes the loop with real service outcomes, and improves every future decision with outcome feedback."
            features={["Complete audit trail", "Outcome feedback loop", "Continuous learning"]}
          />
        </div>
      </div>
    </section>
  );
}

function StepCard({
  visual,
  title,
  description,
  features,
}: {
  visual: ReactNode;
  title: string;
  description: string;
  features: string[];
}) {
  return (
    <div className="group relative">
      <div className="flex flex-col items-center text-center">
        {visual}
        <h3 className="mb-4 text-2xl font-semibold text-white">{title}</h3>
        <p className="mb-6 leading-relaxed text-white/50">{description}</p>
        <ul className="space-y-2">
          {features.map((feature) => (
            <li key={feature} className="flex items-center justify-center gap-2 text-sm text-white/60">
              <Check className="h-4 w-4 text-blue-400" />
              {feature}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function FeedVisual() {
  return (
    <div className="z-10 mx-auto mb-8 flex h-[180px] w-[280px] items-center justify-center rounded-[16px] border border-[#1E2330] bg-[#0A0D14]">
      <div className="h-[84%] w-[86%] overflow-hidden rounded-xl border border-white/[0.08] bg-white/[0.03] shadow-[0_4px_24px_-8px_rgba(0,0,0,0.4),0_1px_3px_rgba(0,0,0,0.2),inset_0_1px_0_rgba(255,255,255,0.05)] backdrop-blur-md">
        <div className="p-3 pb-0">
          <div className="flex items-start gap-2">
            <Radio className="mt-0.5 h-4 w-4 flex-shrink-0 text-blue-400" />
            <h4 className="flex-1 text-sm leading-tight font-light text-white/90">Telematics Feed Connected</h4>
          </div>
        </div>
        <div className="space-y-2 p-3 pt-2">
          <div className="flex items-center gap-2">
            <div className="h-1.5 w-1.5 animate-pulse rounded-full bg-green-400" />
            <span className="text-[10px] text-white/50">Streaming 500 vehicles...</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="h-3 w-3 text-green-400" />
            <span className="text-[10px] text-white/50">DTC mapping active</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="h-3 w-3 text-green-400" />
            <span className="text-[10px] text-white/50">VIN decoded</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function PriorityVisual() {
  return (
    <div className="z-10 mx-auto mb-8 flex h-[180px] w-[280px] items-center justify-center rounded-[16px] border border-[#1E2330] bg-[#0A0D14]">
      <div className="h-[84%] w-[86%] overflow-hidden rounded-[12px] border border-white/[0.08] bg-white/[0.02] shadow-[0_8px_28px_-14px_rgba(0,0,0,0.7)]">
        <div className="flex items-center justify-between border-b border-white/[0.06] bg-white/[0.02] px-3 py-2">
          <span className="text-[10px] font-medium uppercase tracking-wider text-zinc-300">Priority Queue</span>
          <span className="font-mono text-[10px] text-zinc-500">Live</span>
        </div>
        <div className="space-y-2 p-2.5">
          {[
            ["#1", "MH12AB — P0420", "H:34", "text-red-400", "bg-red-500/10 border-red-500/20"],
            ["#2", "TN09EF — P0300", "H:41", "text-yellow-400", "bg-yellow-500/10 border-yellow-500/20"],
            ["#3", "DL01GH — P0217", "H:55", "text-white/40", "bg-white/[0.03] border-white/[0.06]"],
          ].map(([rank, vin, health, color, bg]) => (
            <div key={vin} className={`flex items-center gap-2 rounded border p-1.5 ${bg}`}>
              <span className={`font-mono text-[10px] ${color}`}>{rank}</span>
              <span className="flex-1 truncate text-[10px] text-white/70">{vin}</span>
              <span className={`text-[10px] ${color}`}>{health}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function ServiceVisual() {
  return (
    <div className="z-10 mx-auto mb-8 flex h-[180px] w-[280px] items-center justify-center rounded-[16px] border border-[#1E2330] bg-[#0A0D14]">
      <div className="h-[84%] w-[86%] overflow-hidden rounded-[12px] border border-white/[0.08] bg-gradient-to-b from-white/[0.02] to-transparent shadow-[0_8px_28px_-14px_rgba(0,0,0,0.7)]">
        <div className="flex items-center justify-between border-b border-white/[0.06] bg-white/[0.02] px-3 py-2">
          <span className="text-[10px] font-medium uppercase tracking-wider text-zinc-400">Resolved</span>
          <span className="h-4 min-w-4 rounded border border-emerald-500/25 bg-emerald-500/12 px-1 text-center text-[10px] leading-4 text-emerald-300">1</span>
        </div>
        <div className="p-2.5">
          <div className="rounded-xl border border-white/[0.08] bg-white/[0.03] p-2.5 shadow-[0_4px_24px_-8px_rgba(0,0,0,0.4)] backdrop-blur-md">
            <div className="mb-2 flex items-start justify-between gap-2">
              <p className="text-[11px] leading-tight font-light text-white/85">P0420 — Catalyst replaced</p>
              <CheckCircle2 className="h-3.5 w-3.5 flex-shrink-0 text-emerald-400" />
            </div>
            <div className="flex items-center gap-2 text-[10px] text-green-400">
              <span>Health: 96</span>
              <span className="text-white/20">|</span>
              <span>First-time fix</span>
            </div>
            <div className="mt-2.5 flex items-center justify-between border-t border-white/[0.06] pt-2 text-[10px] text-zinc-500">
              <span className="font-mono opacity-70">MH12AB1234</span>
              <span>Completed</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
