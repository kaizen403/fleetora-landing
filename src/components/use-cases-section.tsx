import { Clock3, Rocket, Shield, Truck, Wrench } from "lucide-react";
import type { ReactNode } from "react";

export function UseCasesSection() {
  return (
    <section id="use-cases" className="section-grid-bg relative overflow-hidden py-32 md:py-40">

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <span className="mb-6 inline-block rounded-full border border-white/[0.08] bg-white/[0.04] px-3 py-1 text-xs text-white/60">
            Use cases
          </span>
          <h2 className="font-display text-[2.5rem] leading-[1.1] font-bold tracking-[-0.02em] text-white md:text-[3.5rem]">
            Built for every stakeholder
          </h2>
          <p className="mx-auto mt-6 max-w-3xl text-lg text-white/50">
            Whether you&apos;re managing a fleet, running a dealer network, or leading OEM quality, Fleetora adapts to the workflow and drives measurable outcomes.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <UseCaseCard icon={<DualIcon primary={<Truck className="h-5 w-5" />} secondary={<Shield className="h-3.5 w-3.5" />} />} title="Commercial Vehicle OEMs" description="Turn fragmented post-sales telemetry into a unified decision engine. Reduce warranty cost, improve service quality, and catch quality issues before they scale." stats="40% warranty savings" />
          <UseCaseCard icon={<Rocket className="h-6 w-6 text-blue-400" />} title="Fleet Operators" description="Minimize downtime with predictive service scheduling. Know which vehicles need attention before they break down, and pre-position parts where they are needed." stats="3x faster response" />
          <UseCaseCard icon={<DualIcon primary={<Wrench className="h-5 w-5" />} secondary={<Shield className="h-3.5 w-3.5" />} />} title="Dealer Networks" description="Equip technicians with AI-powered diagnostics. Match the right skill to the right fault, improve first-time-fix rates, and reduce service turnaround time." stats="90% first-time fix" />
          <UseCaseCard icon={<Clock3 className="h-6 w-6 text-blue-400" />} title="Warranty & Quality Teams" description="Detect anomalous cohorts automatically, trace root causes to suppliers or batches, and generate investigation reports with cited evidence." stats="5x faster RCA" />
        </div>
      </div>
    </section>
  );
}

function UseCaseCard({
  icon,
  title,
  description,
  stats,
}: {
  icon: ReactNode;
  title: string;
  description: string;
  stats: string;
}) {
  return (
    <div className="group relative rounded-3xl border border-white/[0.06] bg-white/[0.02] p-8 transition-all duration-500 hover:border-white/[0.1] hover:bg-white/[0.04]">
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-500/5 to-cyan-500/5 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      <div className="relative">
        <div className="mb-6 flex items-start justify-between">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-blue-500/20 bg-blue-500/10">{icon}</div>
          <span className="rounded-full bg-blue-500/10 px-3 py-1 text-xs font-medium text-blue-400">{stats}</span>
        </div>
        <h3 className="mb-3 text-xl font-semibold text-white">{title}</h3>
        <p className="leading-relaxed text-white/50">{description}</p>
      </div>
    </div>
  );
}

function DualIcon({ primary, secondary }: { primary: ReactNode; secondary: ReactNode }) {
  return (
    <span className="relative flex h-6 w-6 items-center justify-center text-blue-400">
      {primary}
      <span className="absolute -right-1 -bottom-1 text-cyan-300">{secondary}</span>
    </span>
  );
}
