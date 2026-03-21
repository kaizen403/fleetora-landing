export function IntegrationsSection() {
  return (
    <section id="docs" className="section-grid-bg relative overflow-hidden py-24">
      <div className="relative mx-auto max-w-[1200px] px-4">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <div className="relative flex h-[400px] items-center justify-center">
            <svg className="pointer-events-none absolute inset-0 h-full w-full text-white opacity-20" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
              <line x1="50%" y1="50%" x2="20%" y2="20%" />
              <line x1="50%" y1="50%" x2="30%" y2="15%" />
              <line x1="50%" y1="50%" x2="50%" y2="10%" />
              <line x1="50%" y1="50%" x2="80%" y2="30%" />
              <line x1="50%" y1="50%" x2="85%" y2="65%" />
              <line x1="50%" y1="50%" x2="60%" y2="85%" />
              <line x1="50%" y1="50%" x2="30%" y2="85%" />
              <line x1="50%" y1="50%" x2="15%" y2="60%" />
            </svg>

            <div className="z-20 flex h-32 w-32 items-center justify-center text-cyan-400 drop-shadow-[0_0_30px_rgba(34,211,238,0.4)]">
              <svg viewBox="0 0 24 24" className="h-full w-full" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <circle cx="12" cy="12" r="3.5" />
                <path d="M12 2.75v3M12 18.25v3M21.25 12h-3M5.75 12h-3M18.54 5.46l-2.12 2.12M7.58 16.42l-2.12 2.12M18.54 18.54l-2.12-2.12M7.58 7.58 5.46 5.46" />
              </svg>
            </div>

            {[
              ["Telematics", "20%", "20%"],
              ["SAP", "15%", "35%"],
              ["Salesforce", "10%", "55%"],
              ["MQTT", "30%", "80%"],
              ["Azure", "65%", "85%"],
              ["AWS", "85%", "60%"],
              ["REST", "85%", "30%"],
              ["OBD-II", "60%", "15%"],
            ].map(([label, top, left]) => (
              <IntegrationNode key={label} text={label} top={top} left={left} />
            ))}
          </div>

          <div className="lg:pl-12">
            <div className="mb-6 inline-block rounded-md border border-white/[0.08] bg-white/[0.03] px-3 py-1 text-[13px] text-white/60">
              Connectors and integrations
            </div>

            <h2 className="font-display mb-6 text-[2.5rem] leading-[1.1] font-bold tracking-tight text-white md:text-[3.5rem]">
              Sits above your existing telematics
            </h2>

            <p className="mb-8 text-[17px] leading-relaxed text-white/50">
              Fleetora plugs into OEM telematics clouds, ERP systems, dealer platforms, and message buses without replacing the stack you already trust.
              <br />
              <br />
              OEM-agnostic adapters mean new integrations are configuration-first, not multi-month custom projects.
            </p>

            <a
              href="mailto:hello@fleetora.com?subject=Integration%20Docs"
              className="inline-flex items-center rounded-full border border-white/20 bg-transparent px-6 py-3 text-sm font-medium text-white transition-all hover:border-white/30 hover:bg-white/[0.03]"
            >
              View integration docs →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function IntegrationNode({ text, top, left }: { text: string; top: string; left: string }) {
  return (
    <div
      className="absolute z-10 flex min-w-[64px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-2xl border border-white/[0.08] bg-[#131823] px-4 py-4 shadow-xl"
      style={{ top, left }}
    >
      <span className="text-[11px] font-semibold text-white/80">{text}</span>
    </div>
  );
}
