export function PricingSection() {
  return (
    <section id="pricing" className="section-grid-bg relative py-24 overflow-hidden">
      <div className="relative mx-auto max-w-[1200px] px-4">
        <div className="text-center mb-16 flex flex-col items-center">
          <div className="inline-block px-3 py-1 rounded-md bg-white/[0.03] border border-white/[0.08] text-[13px] text-white/60 mb-6">
            Platform Pricing
          </div>
          <h2 className="font-display text-[2.5rem] md:text-[3.5rem] font-bold tracking-tight text-white leading-[1.1] max-w-3xl mb-4">
            The most cost-efficient decision layer for your aftersales operations
          </h2>
          <p className="text-[17px] text-white/50">
            Start with a free pilot, scale when you see ROI. No hardware, no hidden fees.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="rounded-[32px] bg-[#0d121c] border border-white/[0.06] p-8 flex flex-col h-full hover:bg-white/[0.04] transition-colors">
            <div className="mb-6">
              <span className="inline-block px-3 py-1 rounded-full text-xs bg-white/[0.05] border border-white/10 text-white/70">
                Pilot
              </span>
            </div>
            <div className="mb-4">
              <span className="text-[40px] font-bold text-white tracking-tight">$0</span>
              <span className="text-[15px] text-white/40 ml-1">/month</span>
            </div>
            <p className="text-white/50 text-[15px] mb-8 min-h-[48px]">
              Perfect for evaluating the platform with real fleet data.
            </p>
            <ul className="space-y-4 mb-8 flex-1">
              <FeatureItem text="Up to 50 vehicles" />
              <FeatureItem text="Basic analytics" />
              <FeatureItem text="Email support" />
            </ul>
            <button type="button" className="w-full py-3.5 rounded-[16px] font-medium text-[15px] bg-white/[0.03] border border-white/[0.08] text-white hover:bg-white/[0.08] transition-all">
              Start free pilot
            </button>
          </div>

          <div className="rounded-[32px] bg-[#0d121c] border border-white/[0.06] overflow-hidden flex flex-col h-full relative group">
            <div className="bg-gradient-to-br from-blue-500 to-blue-700 p-8 relative overflow-hidden h-[240px]">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.2),transparent_50%)]" />
              <div className="relative z-10">
                <div className="mb-6">
                  <span className="inline-block px-3 py-1 rounded-full text-xs bg-white/20 text-white font-medium">
                    Growth
                  </span>
                </div>
                <div className="mb-2">
                  <span className="text-[40px] font-bold text-white tracking-tight">$2,999</span>
                  <span className="text-[15px] text-white/70 ml-1">/month</span>
                </div>
                <p className="text-white/90 text-[15px]">
                  Full orchestration for growing fleets and dealer networks.
                </p>
              </div>
            </div>
            <div className="p-8 pt-6 flex-1 flex flex-col">
              <ul className="space-y-4 mb-8 flex-1">
                <FeatureItem text="Up to 500 vehicles" />
                <FeatureItem text="Full orchestration" />
                <FeatureItem text="Priority support" />
                <FeatureItem text="Advanced analytics" />
              </ul>
              <button type="button" className="w-full py-3.5 rounded-[16px] font-medium text-[15px] bg-gradient-to-r from-blue-500 to-blue-600 text-white hover:opacity-90 transition-opacity shadow-[0_0_20px_rgba(59,130,246,0.3)]">
                Get started with Growth →
              </button>
            </div>
          </div>

          <div className="rounded-[32px] bg-[#0d121c] border border-white/[0.06] p-8 flex flex-col h-full hover:bg-white/[0.04] transition-colors">
            <div className="mb-6">
              <span className="inline-block px-3 py-1 rounded-full text-xs bg-white/[0.05] border border-white/10 text-white/70">
                Enterprise
              </span>
            </div>
            <div className="mb-4">
              <span className="text-[40px] font-bold text-white tracking-tight">Custom</span>
            </div>
            <p className="text-white/50 text-[15px] mb-8 min-h-[48px]">
              Enterprise-grade deployment with dedicated support and custom integrations.
            </p>
            <ul className="space-y-4 mb-8 flex-1">
              <FeatureItem text="Unlimited vehicles" highlight />
              <FeatureItem text="Dedicated support" highlight />
              <FeatureItem text="Custom integrations" />
              <FeatureItem text="SLA" />
            </ul>
            <button type="button" className="w-full py-3.5 rounded-[16px] font-medium text-[15px] bg-white/[0.03] border border-white/[0.08] text-white hover:bg-white/[0.08] transition-all">
              Talk to Sales →
            </button>
          </div>
        </div>

        <div className="mt-8 rounded-[32px] bg-[#0d121c] border border-white/[0.06] p-8 flex flex-col md:flex-row md:items-center justify-between gap-8">
          <div>
            <h3 className="text-[28px] font-bold text-white tracking-tight mb-1">Per-Vehicle Pricing</h3>
          </div>
          <div className="text-right hidden md:block">
            <p className="text-[11px] text-white/40 uppercase tracking-widest font-semibold mb-1">FOR GROWTH AND ENTERPRISE PLANS</p>
            <p className="text-[11px] text-white/40 uppercase tracking-widest font-semibold">BEYOND INCLUDED VEHICLES</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-8 md:gap-16">
            <div>
              <p className="text-[13px] text-white/60 mb-2 font-medium">Per vehicle / month</p>
              <div className="flex items-baseline gap-1">
                <span className="text-[32px] font-bold text-cyan-400 leading-none tracking-tight">$8</span>
                <span className="text-[13px] text-white/40 font-medium">/vehicle</span>
              </div>
            </div>
            <div>
              <p className="text-[13px] text-white/60 mb-2 font-medium">Forensics add-on</p>
              <div className="flex items-baseline gap-1">
                <span className="text-[32px] font-bold text-cyan-400 leading-none tracking-tight">$3</span>
                <span className="text-[13px] text-white/40 font-medium">/vehicle</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function FeatureItem({ text, highlight = false }: { text: string; highlight?: boolean }) {
  return (
    <li className="flex items-center gap-3">
      <div className={`h-5 w-5 rounded-full flex items-center justify-center shrink-0 ${highlight ? 'bg-cyan-500/20 text-cyan-400' : 'text-white/40'}`}>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-3.5 h-3.5" aria-hidden="true">
          <polyline points="20 6 9 17 4 12" />
        </svg>
      </div>
      <span className="text-[15px] text-white/80 font-medium">{text}</span>
    </li>
  )
}
