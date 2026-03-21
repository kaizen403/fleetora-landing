"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"
import { InView } from "./in-view"

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const faqs = [
    {
      question: "What exactly does Fleetora do?",
      answer: "Fleetora is an AI-powered post-sales decision platform for commercial vehicle OEMs. We sit above your existing telematics cloud and turn noisy telemetry into explainable actions — prioritizing which vehicles need attention, where to service them, and predicting warranty events before they happen."
    },
    {
      question: "How is this different from our existing telematics dashboard?",
      answer: "Most telematics platforms answer 'What happened?' We answer: why it happened, which vehicles matter most right now, what to do next, and who should act. We're not another dashboard — we're a decision and orchestration layer that drives action across service, quality, and warranty operations."
    },
    {
      question: "Is our fleet data safe?",
      answer: "Absolutely. Fleetora can be deployed on your own Azure infrastructure. We never store or access your raw telemetry outside your environment. All data stays within your organization's cloud boundary, and we support Azure AD SSO for enterprise authentication."
    },
    {
      question: "What types of vehicles are supported?",
      answer: "Fleetora is built for commercial vehicles — trucks, buses, vans, and fleet vehicles. We support standard OBD-II, J1939, and proprietary OEM protocols. Our OEM-agnostic adapter pattern means we can integrate with any telematics provider."
    },
    {
      question: "How accurate are the predictions?",
      answer: "Our Warranty Shield predictions achieve 75%+ precision on validated failure modes. But we go beyond accuracy — every prediction cites specific evidence (signal trends, DTC patterns, cohort comparisons) so your team can evaluate the reasoning, not just trust a score."
    },
    {
      question: "Can we integrate with our existing systems?",
      answer: "Yes. Fleetora integrates with SAP, Salesforce, dealer management systems, and existing OEM telematics platforms via REST APIs and webhooks. New OEMs are a new adapter, not a new platform build."
    },
    {
      question: "What OEM platforms do you support?",
      answer: "Fleetora is built with an OEM-agnostic adapter pattern, so we can integrate with proprietary telematics platforms, standard fleet systems, and enterprise workflows already running inside commercial vehicle programs."
    },
    {
      question: "Is there a free pilot?",
      answer: "Yes. Our Pilot tier supports up to 50 vehicles at no cost. This lets you evaluate Signal Trust Layer and basic health scoring with your real fleet data. Most OEMs see measurable insights within the first week."
    }
  ]

  return (
    <section id="faq" className="relative py-24 sm:py-32 overflow-hidden">

      <div className="relative mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <InView className="mb-16">
          <div>
            <p className="text-sm font-medium uppercase tracking-widest text-[#D4A04A]">
              FAQ
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Questions? Answered.
            </h2>
          </div>
        </InView>

        <InView>
          <div className="space-y-3">
            {faqs.map((faq, index) => (
              <FAQItem
                key={faq.question}
                question={faq.question}
                answer={faq.answer}
                isOpen={openIndex === index}
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              />
            ))}
          </div>
        </InView>
      </div>
    </section>
  )
}

function FAQItem({
  question,
  answer,
  isOpen,
  onClick,
}: {
  question: string
  answer: string
  isOpen: boolean
  onClick: () => void
}) {
  return (
    <div className="rounded-2xl bg-white/[0.03] border border-white/[0.08] overflow-hidden">
      <button
        type="button"
        onClick={onClick}
        className="w-full flex items-center justify-between p-6 text-left hover:bg-white/[0.03] transition-colors"
      >
        <span className="text-[15px] font-medium text-white pr-8">{question}</span>
        <ChevronDown
          className={`h-5 w-5 flex-shrink-0 transition-transform duration-300 ${
            isOpen ? "rotate-180 text-[#D4A04A]" : "text-white/40"
          }`}
        />
      </button>

      <div
        className={`grid ${isOpen ? "faq-grid-open" : "faq-grid-closed"}`}
      >
        <div className="overflow-hidden">
          <div className="px-6 pb-6">
            <p className="text-white/50 leading-relaxed">{answer}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
