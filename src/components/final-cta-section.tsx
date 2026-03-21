import { ArrowRight } from "lucide-react"
import { InView } from "./in-view"

export function FinalCTASection() {
  return (
    <section className="relative py-24 sm:py-32 overflow-hidden">
      <div className="relative mx-auto max-w-[1200px] px-4 sm:px-6">
        <InView>
          <div className="rounded-2xl border border-white/[0.08] bg-white/[0.03] px-8 py-16 text-center sm:px-16 sm:py-20">
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] rounded-full bg-[#D4A04A]/8 blur-[120px]" />
            </div>

            <div className="relative">
              <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                Ready to transform aftersales?
              </h2>

              <p className="mx-auto mt-4 max-w-xl text-lg text-white/50">
                Join leading OEMs already using Fleetora to turn telemetry into
                action. Start with a free pilot, no hardware required.
              </p>

              <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
                <a
                  href="mailto:hello@fleetora.com"
                  className="btn-primary group inline-flex items-center gap-2 rounded-md px-7 py-3.5 text-sm font-semibold"
                >
                  Request Demo
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </a>
                <a
                  href="mailto:founder@fleetora.com"
                  className="inline-flex items-center rounded-md border border-white/[0.15] bg-white/[0.06] px-7 py-3.5 text-sm font-medium text-white transition-all hover:bg-white/[0.1] hover:border-white/[0.25]"
                >
                  Talk to Founder
                </a>
              </div>

              <p className="mt-6 text-sm text-white/30">
                Limited to 10 design partners for the initial cohort.
              </p>
            </div>
          </div>
        </InView>
      </div>
    </section>
  )
}
