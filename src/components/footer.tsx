const footerLinks = {
  Platform: [
    { label: "Signal Trust", href: "#platform" },
    { label: "Orchestration", href: "#solutions" },
    { label: "Forensics", href: "#solutions" },
    { label: "Warranty Shield", href: "#pricing" },
    { label: "API", href: "#docs" },
  ],
  Company: [
    { label: "About", href: "#about" },
    { label: "Careers", href: "mailto:hello@fleetora.com?subject=Careers" },
    { label: "Contact", href: "mailto:hello@fleetora.com" },
    { label: "Partners", href: "mailto:hello@fleetora.com?subject=Partners" },
  ],
  Legal: [
    { label: "Terms", href: "mailto:hello@fleetora.com?subject=Terms" },
    { label: "Privacy", href: "mailto:hello@fleetora.com?subject=Privacy" },
    { label: "Trust", href: "mailto:hello@fleetora.com?subject=Trust" },
    { label: "Security", href: "mailto:hello@fleetora.com?subject=Security" },
  ],
}

const socialLinks = [
  { name: "LinkedIn", icon: "in", href: "https://www.linkedin.com" },
  { name: "X", icon: "\u{1D54F}", href: "https://x.com" },
  { name: "GitHub", icon: "gh", href: "https://github.com" },
]

export function Footer() {
  return (
    <footer className="relative overflow-hidden">
      <div className="absolute inset-0 bg-[#161820]" />

      <div className="relative mx-auto max-w-none px-[100px] pt-16 pb-8">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-0">
          <div className="flex flex-col gap-5 lg:w-[280px] shrink-0">
            <div className="flex items-center">
              <span className="font-display text-[0.8125rem] font-semibold tracking-[0.08em] text-[#EDE8D0] uppercase">
                FLEETORA
              </span>
            </div>
            <p className="text-[0.875rem] text-[#EDE8D0]/40 leading-[1.6]">
              Turn noisy telemetry into
              <br />
              explainable decisions.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-10 lg:gap-16 flex-1">
            {Object.entries(footerLinks).map(([category, links]) => (
              <div key={category} className="flex flex-col gap-5">
                <p className="text-[0.8125rem] font-semibold text-[#EDE8D0]/90 tracking-[-0.01em]">{category}</p>
                <ul className="flex flex-col gap-3">
                  {links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="text-[0.8125rem] text-[#EDE8D0]/35 hover:text-[#EDE8D0]/70 transition-colors duration-300"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            <div className="flex flex-col gap-5">
              <p className="text-[0.8125rem] font-semibold text-[#EDE8D0]/90 tracking-[-0.01em]">Connect</p>
              <ul className="flex flex-col gap-3">
                {socialLinks.map((social) => (
                  <li key={social.name}>
                    <a
                      href={social.href}
                      className="flex items-center gap-2.5 text-[0.8125rem] text-[#EDE8D0]/35 hover:text-[#EDE8D0]/70 transition-colors duration-300"
                    >
                      <span className="text-[0.6875rem] font-mono w-5 text-center opacity-60">{social.icon}</span>
                      {social.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="relative w-full flex justify-center mt-4 pb-10 overflow-hidden">
        <p className="font-display text-[5rem] md:text-[8rem] lg:text-[12rem] font-bold tracking-[-0.05em] text-[#EDE8D0]/[0.03] leading-none select-none whitespace-nowrap">
          FLEETORA
        </p>
      </div>
    </footer>
  )
}
