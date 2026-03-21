"use client";

import { ChevronDown, Menu, X } from "lucide-react";
import { useState, type ReactNode } from "react";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-4 left-1/2 -translate-x-1/2 z-50">
      <nav className="flex items-center gap-1 rounded-full bg-[#0a0f1a]/90 backdrop-blur-xl border border-white/10 shadow-2xl shadow-black/50 px-2 py-1.5 pr-2">
        <a href="/" className="flex items-center gap-2 pl-3 pr-4 hover:opacity-80 transition-opacity">
          <div className="flex h-5 w-5 items-center justify-center text-[#D4A04A]">
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              className="h-full w-full"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.75"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="3.5" />
              <path d="M12 2.75v3M12 18.25v3M21.25 12h-3M5.75 12h-3M18.54 5.46l-2.12 2.12M7.58 16.42l-2.12 2.12M18.54 18.54l-2.12-2.12M7.58 7.58 5.46 5.46" />
            </svg>
          </div>
          <span className="text-[15px] font-semibold tracking-tight text-white">
fleetora
          </span>
        </a>

        <div className="hidden md:flex items-center">
          <NavLink href="#platform">Platform</NavLink>
          <DropdownNavLink label="Solutions" />
          <NavLink href="#pricing">Pricing</NavLink>
          <NavLink href="#docs">Docs</NavLink>
          <NavLink href="#about">About</NavLink>
        </div>

        <div className="hidden md:flex items-center gap-1 ml-2 pl-2 border-l border-white/10">
          <a
            href="mailto:hello@fleetora.com"
            className="px-4 py-2 text-sm font-medium text-white/60 hover:text-white transition-colors rounded-full hover:bg-white/5"
          >
            Login
          </a>
          <a
            href="mailto:hello@fleetora.com?subject=Get%20Started"
            className="px-4 py-2 text-sm font-medium text-white bg-white/10 hover:bg-white/15 transition-colors rounded-full border border-white/10"
          >
            Start Now
          </a>
        </div>

        <button
          type="button"
          className="md:hidden text-white/60 transition-colors hover:text-white p-2"
          onClick={() => setMobileMenuOpen((open) => !open)}
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
        >
          {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {mobileMenuOpen ? (
        <div className="absolute top-full left-0 right-0 mt-2 rounded-2xl border border-white/10 bg-[#0a0f1a]/95 backdrop-blur-xl p-2 shadow-2xl shadow-black/50 md:hidden">
          <div className="flex flex-col gap-0.5">
            <MobileNavLink href="#platform">Platform</MobileNavLink>
            <MobileNavLink href="#solutions">Solutions</MobileNavLink>
            <MobileNavLink href="#pricing">Pricing</MobileNavLink>
            <MobileNavLink href="#docs">Docs</MobileNavLink>
            <MobileNavLink href="#about">About</MobileNavLink>
            <div className="my-2 h-px bg-white/10" />
            <a
              href="mailto:hello@fleetora.com"
              className="px-3 py-2 text-sm text-white/60 transition-colors hover:text-white rounded-lg hover:bg-white/5"
            >
              Login
            </a>
            <a
              href="mailto:hello@fleetora.com?subject=Get%20Started"
              className="flex items-center justify-center rounded-lg bg-white/10 border border-white/10 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-white/15"
            >
              Start Now
            </a>
          </div>
        </div>
      ) : null}
    </header>
  );
}

function NavLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a
      href={href}
      className="px-3 py-2 text-sm font-medium text-white/60 transition-colors hover:text-white rounded-full hover:bg-white/5"
    >
      {children}
    </a>
  );
}

function DropdownNavLink({ label }: { label: string }) {
  return (
    <button
      type="button"
      className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-white/60 transition-colors hover:text-white rounded-full hover:bg-white/5"
    >
      {label} <ChevronDown className="h-3.5 w-3.5 opacity-60" />
    </button>
  );
}

function MobileNavLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a
      href={href}
      className="rounded-lg px-3 py-2.5 text-sm text-white/70 transition-colors hover:bg-white/5 hover:text-white"
    >
      {children}
    </a>
  );
}
