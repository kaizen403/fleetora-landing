import { Building2, Shield, Wrench } from "lucide-react";
import type { ReactNode } from "react";
import { InView } from "./in-view";

export function BuiltForSection() {
  return (
    <section className="relative">
      <div className="relative mx-auto max-w-[1200px]">
        <InView className="mb-16 text-center">
          <div>
            <p className="text-sm font-medium uppercase tracking-widest text-[#D4A04A]">
              Built For
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Every team in the OEM aftersales chain
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-white/50">
              From the service ops floor to the warranty desk — Fleetora gives
              each team the decisions they need, backed by data they can trace.
            </p>
          </div>
        </InView>

        <div className="grid gap-6 md:grid-cols-3">
          <InView delay={100}>
            <AudienceCard
              icon={<Wrench className="h-5 w-5 text-[#3AAFA9]" />}
              title="Aftersales & Service Ops"
              description="Automated triage, depot matching, and technician assignment. From fault code to dispatch plan in minutes, not hours."
            />
          </InView>
          <InView delay={200}>
            <AudienceCard
              icon={<Shield className="h-5 w-5 text-[#D4736D]" />}
              title="Quality & Warranty"
              description="Cohort-level failure analysis, warranty claim validation, and supplier defect tracing across your entire fleet population."
            />
          </InView>
          <InView delay={300}>
            <AudienceCard
              icon={<Building2 className="h-5 w-5 text-[#D4A04A]" />}
              title="Dealer Service Networks"
              description="Pre-staged parts, skill-matched technicians, and AI-backed repair plans before the vehicle arrives at the bay."
            />
          </InView>
        </div>
      </div>
    </section>
  );
}

function AudienceCard({
  icon,
  title,
  description,
}: {
  icon: ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="group rounded-2xl border border-white/[0.08] bg-white/[0.03] p-7 transition-all duration-300 hover:border-white/[0.14] hover:bg-white/[0.05]">
      <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-lg border border-white/[0.08] bg-white/[0.04]">
        {icon}
      </div>
      <h3 className="text-lg font-semibold text-white">{title}</h3>
      <p className="mt-2.5 text-[15px] leading-relaxed text-white/45">
        {description}
      </p>
    </div>
  );
}
