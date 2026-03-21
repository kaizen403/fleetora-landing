import { Activity, AlertTriangle, CheckCircle2 } from "lucide-react";

export function FeaturesSection() {
  return (
    <section id="solutions" className="section-grid-bg relative overflow-hidden py-24">
      <div className="relative mx-auto max-w-[1200px] px-4">
        <div className="mb-16 text-center">
          <h2 className="font-display mb-4 text-[2.5rem] font-bold tracking-tight text-white md:text-[3.5rem]">
            AI-powered aftersales intelligence
          </h2>
          <p className="mx-auto max-w-2xl text-[17px] leading-relaxed text-white/50">
            Fleetora combines signal normalization, service orchestration, and forensic analysis into one decision engine. Every screen drives an action.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          <div className="group flex h-full flex-col rounded-[32px] border border-white/[0.06] bg-white/[0.02] p-4 transition-colors hover:bg-white/[0.04]">
            <div className="relative mb-6 flex h-[280px] flex-col items-center justify-center overflow-hidden rounded-[24px] border border-white/[0.04] bg-[#0a0e17] p-6">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(56,189,248,0.05),transparent_70%)]" />
              <div className="relative z-10 w-[85%] scale-95 rounded-xl border border-[#2a2a2a] bg-[#111111] text-left shadow-2xl transition-transform duration-500 group-hover:scale-100">
                <div className="space-y-3 p-3">
                  <div className="flex items-center gap-2 text-[11px]">
                    <span className="font-mono text-red-400">RAW</span>
                    <span className="text-white/30">→</span>
                    <span className="font-mono text-green-400">NORMALIZED</span>
                  </div>
                  <div className="space-y-1.5">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] text-white/50">Engine Coolant</span>
                      <span className="font-mono text-[10px] text-green-400">92°C ✓</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] text-white/50">Turbo Boost</span>
                      <span className="font-mono text-[10px] text-yellow-400">1.2 bar ⚠</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] text-white/50">DTC P0420</span>
                      <span className="font-mono text-[10px] text-red-400">CRITICAL</span>
                    </div>
                  </div>
                  <div className="border-t border-white/[0.06] pt-2">
                    <div className="flex items-center gap-2">
                      <div className="h-2 flex-1 overflow-hidden rounded-full bg-white/5">
                        <div className="h-full w-[88%] rounded-full bg-gradient-to-r from-blue-500 to-cyan-400" />
                      </div>
                      <span className="text-[9px] text-white/40">Quality: 88%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="px-4 pb-4">
              <h3 className="mb-2 text-[20px] font-semibold text-white">Signal Trust Layer</h3>
              <p className="mb-6 text-[15px] leading-relaxed text-white/50">
                Normalize signals, map DTCs, decode VINs, and score signal quality so every downstream decision starts with clean operational truth.
              </p>
            </div>
          </div>

          <div className="group flex h-full flex-col rounded-[32px] border border-white/[0.06] bg-white/[0.02] p-4 transition-colors hover:bg-white/[0.04]">
            <div className="relative mb-6 flex h-[280px] flex-col items-center justify-center overflow-hidden rounded-[24px] border border-white/[0.04] bg-[#0a0e17]">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,rgba(59,130,246,0.1),transparent_60%)]" />
              <div className="relative z-10 flex w-[85%] scale-95 flex-col overflow-hidden rounded-lg border border-[#2a2a2a] bg-[#111111] text-left shadow-2xl transition-transform duration-500 group-hover:scale-100">
                <div className="flex items-center justify-between border-b border-[#2a2a2a] bg-[#141414] p-2">
                  <span className="text-[10px] font-semibold text-[#f5f5f5]">Orchestration Engine</span>
                  <span className="text-[9px] text-[#6a6a6a]">Real-time</span>
                </div>
                <div className="flex items-center gap-2 border-b border-[#2a2a2a] bg-blue-500/10 px-3 py-2">
                  <div className="h-1.5 w-1.5 animate-pulse rounded-full bg-blue-400" />
                  <span className="text-[11px] font-medium text-blue-400">Dispatching vehicle MH12AB</span>
                </div>
                <div className="space-y-2 bg-[#111111] p-3">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-3 w-3 text-green-400" />
                    <span className="text-[10px] text-[#a0a0a0]">Priority: #1 (Safety + Proximity)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-3 w-3 text-green-400" />
                    <span className="text-[10px] text-[#a0a0a0]">Depot 7 — 12km, 3 bays free</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-3 w-3 text-green-400" />
                    <span className="text-[10px] text-[#a0a0a0]">Parts confirmed: Catalyst kit</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Activity className="h-3 w-3 text-blue-400" />
                    <span className="text-[10px] text-[#f5f5f5]">Tech: Rajesh K. (94% FTF)</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="px-4 pb-4">
              <h3 className="mb-2 text-[20px] font-semibold text-white">Service Orchestration</h3>
              <p className="mb-6 text-[15px] leading-relaxed text-white/50">
                AI dispatcher that ranks urgency, matches vehicles to depots, checks parts and bays, and recommends the technician best suited for the job.
              </p>
            </div>
          </div>

          <div className="group flex h-full flex-col rounded-[32px] border border-white/[0.06] bg-white/[0.02] p-4 transition-colors hover:bg-white/[0.04]">
            <div className="relative mb-6 flex h-[280px] flex-col items-center justify-center overflow-hidden rounded-[24px] border border-white/[0.04] bg-[#0a0e17] p-6">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(6,182,212,0.1),transparent_60%)]" />
              <div className="relative z-10 flex h-[180px] w-[85%] scale-95 flex-col overflow-hidden rounded-lg border border-[#2a2a2a] bg-[#111111] text-left shadow-2xl transition-transform duration-500 group-hover:scale-100">
                <div className="space-y-3 overflow-hidden p-3">
                  <div className="flex gap-2">
                    <AlertTriangle className="mt-0.5 h-3 w-3 flex-shrink-0 text-yellow-400" />
                    <div className="min-w-0">
                      <p className="truncate text-[10px] text-yellow-400">Anomalous cohort detected</p>
                      <p className="truncate font-mono text-[9px] text-[#6a6a6a]">Batch 2024-Q3 — 142 vehicles</p>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Activity className="mt-0.5 h-3 w-3 flex-shrink-0 text-[#a0a0a0]" />
                    <div className="min-w-0">
                      <p className="truncate text-[10px] text-[#a0a0a0]">3.2x aftertreatment failures vs baseline</p>
                      <p className="text-[9px] text-[#6a6a6a]">p &lt; 0.001, statistically significant</p>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <CheckCircle2 className="mt-0.5 h-3 w-3 flex-shrink-0 text-blue-400" />
                    <div className="min-w-0">
                      <p className="relative inline-flex w-full items-center truncate text-[10px] text-blue-400">
                        <span className="truncate">Root cause: Supplier B batch #4471</span>
                        <span className="ml-1 h-3 w-1 flex-shrink-0 animate-pulse bg-blue-400" />
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="px-4 pb-4">
              <h3 className="mb-2 text-[20px] font-semibold text-white">Telemetry Forensics</h3>
              <p className="mb-6 text-[15px] leading-relaxed text-white/50">
                Explain why failures are happening across vehicle cohorts, routes, and suppliers with cited evidence and containment recommendations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
