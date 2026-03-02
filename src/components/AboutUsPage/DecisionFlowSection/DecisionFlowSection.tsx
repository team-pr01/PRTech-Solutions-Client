// ================= TYPES =================

import { IMAGES } from "@/assets";
import Heading from "@/components/Reusable/Heading/Heading";
import Image from "next/image";

export interface DecisionStep {
  step: string; // "01"
  title: string;
  description: string;
  focus?: string;
}

export interface DecisionFlowSectionProps {
  eyebrow: string;
  heading: string;
  introTitle: string;
  introDescription: string;
  steps: DecisionStep[];
  audienceTitle: string;
  audience: string[];
  closingNote?: string;
}

// ================= DATA =================

const whatWeDoDifferentlyData: DecisionFlowSectionProps = {
  eyebrow: "What We Do Differently",
  heading: "More Than Development — We Focus on Product Clarity",

  introTitle:
    "Many teams start with code. We start by deciding what should exist.",

  introDescription:
    "Our work goes beyond implementation. We help founders and businesses make informed decisions around feasibility, planning, and scalability — so development stays intentional and aligned with real goals.",

  steps: [
    {
      step: "01",
      title: "Product Feasibility & Technical Validation",
      description:
        "Before development begins, we evaluate requirements, constraints, and risks to understand what is technically feasible and what makes sense to build at the current stage.",
      focus: "feasibility, constraints, risk",
    },
    {
      step: "02",
      title: "Planning for Scalable Software",
      description:
        "We design system structures and architectures that support future growth — without adding unnecessary complexity too early.",
      focus: "architecture, growth readiness",
    },
    {
      step: "03",
      title: "Development with Long-Term Thinking",
      description:
        "Code quality, performance, and structural clarity are treated as fundamentals — ensuring the product remains reliable as usage and complexity grow.",
      focus: "performance, maintainability",
    },
  ],

  audienceTitle: "Who This Approach Works For",
  audience: [
    "Founders shaping a new digital product",
    "Businesses planning web or mobile applications",
    "Teams that want clarity before committing to development",
  ],

  closingNote:
    "This approach helps reduce rework, avoid over-engineering, and create software that’s built to last.",
};

// ================= COMPONENT =================

export default function DecisionFlowSection({
  eyebrow,
  heading,
  introTitle,
  introDescription,
  steps,
  audienceTitle,
  audience,
  closingNote,
}: DecisionFlowSectionProps) {
  return (
    <section className="w-full bg-gradient-to-b from-[#0b4a6b] to-[#0b4a6b]/95 py-20 ">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <span className="text-neutral-30 text-lg font-semibold mb-2">
          {eyebrow}
        </span>

        <Heading heading={heading} align="left" />

        {/* Main Grid */}
        <div className="grid py-10 grid-cols-1 gap-12 lg:grid-cols-8">
          {/* LEFT — Decision Flow */}
          <div className="relative col-span-5">
            <div className="space-y-14">
              {steps.map((step) => (
                <div key={step.step} className="relative pl-20">
                  <span className="absolute left-0 top-0 text-5xl font-semibold text-neutral-30">
                    {step.step}
                  </span>

                  <h3 className="text-neutral-20 text-2xl font-semibold">
                    {" "}
                    {step.title}
                  </h3>
                  <p className=" text-neutral-40 text-lg">
                    {step.description}
                  </p>

                </div>
              ))}
            </div>
          </div>

          {/* RIGHT — Context */}
          <div className="flex flex-col col-span-3">
            <Image
              src={IMAGES.aboutPrTech2}
              alt="About Image"
              width={450}
              height={600}
              className="w-full h-[200px] object-cover object-center rounded-xl mb-6"
            />
            <div className="mb-10 max-w-md">
              <h1 className="text-neutral-20 text-2xl font-semibold">
                {introTitle}
              </h1>
              <p className="text-neutral-60">{introDescription}</p>
            </div>

            <div>
              <h4 className="mb-4 text-sm font-semibold uppercase tracking-wide text-white">
                {audienceTitle}
              </h4>

              <ul className="space-y-2 text-neutral-40 text-lg">
                {audience.map((item, idx) => (
                  <li key={idx}>• {item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {closingNote && (
          <div className="max-w-3xl">
            <p className="text-sm text-neutral-50">{closingNote}</p>
          </div>
        )}
      </div>
    </section>
  );
}

// ================= DEFAULT EXPORT HELPER =================
// Use this if you don’t want to pass props manually

export function WhatWeDoDifferentlySection() {
  return <DecisionFlowSection {...whatWeDoDifferentlyData} />;
}
