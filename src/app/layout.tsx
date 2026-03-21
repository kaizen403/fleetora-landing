import type { Metadata } from "next";
import localFont from "next/font/local";

import { ThemeProvider } from "@/components/theme-provider";

import "./globals.css";

const anthropicSans = localFont({
  src: [
    {
      path: "../../public/fonts/AnthropicSans-Roman.woff2",
      style: "normal",
    },
    {
      path: "../../public/fonts/AnthropicSans-Italic.woff2",
      style: "italic",
    },
  ],
  variable: "--font-anthropic-sans",
  display: "swap",
});

const anthropicMono = localFont({
  src: [
    {
      path: "../../public/fonts/AnthropicMono-Roman.woff2",
      style: "normal",
    },
  ],
  variable: "--font-anthropic-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Fleetora — Post-Sales Intelligence for Commercial Vehicles",
  description:
    "India-first AI decision layer for commercial vehicle OEMs, turning fragmented post-sales telemetry into explainable actions across service, quality, and warranty operations.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`dark ${anthropicSans.variable} ${anthropicMono.variable}`}
      suppressHydrationWarning
    >
      <body className="font-sans antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          forcedTheme="dark"
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
