import { Activity, Search } from "lucide-react";
import { InView } from "./in-view";

export function SolutionsSection() {
  return (
    <section id="solutions" className="relative">
      <div className="mx-auto max-w-[1200px]">
        <InView className="mb-16 max-w-2xl">
          <div>
            <p className="text-sm font-medium uppercase tracking-widest text-[#D4A04A]">
              Solutions
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Two engines. One decision layer.
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-white/50">
              Real-time service orchestration and deep telemetry forensics — built
              for commercial vehicle OEMs.
            </p>
          </div>
        </InView>

        <div className="grid gap-6 md:grid-cols-2">
          <InView delay={100}>
            <div className="group rounded-2xl border border-white/[0.08] bg-white/[0.03] p-8 transition-all duration-300 hover:border-white/[0.14] hover:bg-white/[0.05]">
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl border border-white/[0.08] bg-gradient-to-br from-[#3AAFA9]/20 to-[#3AAFA9]/10">
                <Activity className="h-6 w-6 text-[#3AAFA9]" />
              </div>
              <h3 className="text-xl font-semibold text-white">
                Service Orchestration
              </h3>
              <p className="mt-3 text-[15px] leading-relaxed text-white/50">
                Ingest OEM telemetry, score vehicle health across 8 subsystems,
                rank the service queue by urgency and business impact, and dispatch
                to the right depot and technician — automatically.
              </p>
              <ul className="mt-6 space-y-2.5">
                {[
                  "Real-time health scoring (0–100) across engine, brakes, turbo, cooling, exhaust, electrical, fuel, transmission",
                  "Weighted priority queue with safety-critical escalation",
                  "Depot matching by capacity, parts inventory, and specialty",
                  "Technician assignment by certification, fix rate, and workload",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2.5 text-sm text-white/40"
                  >
                    <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-[#3AAFA9]" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </InView>

          <InView delay={250}>
            <div className="group rounded-2xl border border-white/[0.08] bg-white/[0.03] p-8 transition-all duration-300 hover:border-white/[0.14] hover:bg-white/[0.05]">
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl border border-white/[0.08] bg-gradient-to-br from-[#D4736D]/20 to-[#D4736D]/10">
                <Search className="h-6 w-6 text-[#D4736D]" />
              </div>
              <h3 className="text-xl font-semibold text-white">
                Telemetry Forensics
              </h3>
              <p className="mt-3 text-[15px] leading-relaxed text-white/50">
                Trace DTC patterns across vehicle cohorts, detect anomalies by
                manufacturing batch or operating region, and surface root cause
                before it becomes a recall.
              </p>
              <ul className="mt-6 space-y-2.5">
                {[
                  "Cohort-level DTC pattern analysis and failure clustering",
                  "Anomaly detection by batch, supplier, and climate region",
                  "Warranty claim validation against fleet-wide baselines",
                  "Product feedback loop — failure data back to R&D and suppliers",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2.5 text-sm text-white/40"
                  >
                    <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-[#D4736D]" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </InView>
        </div>
      </div>
    </section>
  );
}
