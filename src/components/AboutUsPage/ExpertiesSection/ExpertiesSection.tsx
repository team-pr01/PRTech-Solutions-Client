"use client";

import { ICONS } from "@/assets";
import Container from "@/components/Reusable/Container/Container";
// import { 
//   Globe, 
//   Layers, 
//   Smartphone, 
//   Database, 
//   Plug, 
//   Gauge 
// } from "lucide-react";

const expertise = [
  {
    title: "Custom Web Development",
    description:
      "High-performance websites built for real users — fast loading, SEO-ready, and designed to scale as your business grows.",
    icon: ICONS.InActionBtn,
  },
  {
    title: "Web Applications & Internal Tools",
    description:
      "Secure, scalable web applications and admin dashboards built to handle real-world workflows and operational complexity.",
    icon: ICONS.InActionBtn,
  },
  {
    title: "Mobile App Development (Android & iOS)",
    description:
      "Production-ready mobile apps focused on usability, performance, and long-term maintainability — not quick MVP shortcuts.",
    icon: ICONS.InActionBtn,
  },
  {
    title: "SaaS & Platform Development",
    description:
      "Architecture-first development for SaaS products and multi-user platforms designed to support growth without painful rewrites.",
    icon: ICONS.InActionBtn,
  },
  {
    title: "API & System Integration",
    description:
      "Reliable integrations between services, third-party APIs, and internal systems — built for stability, security, and scale.",
    icon: ICONS.InActionBtn,
  },
  {
    title: "Performance Optimization & Scalability Planning",
    description:
      "Improving real-world speed, Core Web Vitals, and system scalability so products perform well under real usage.",
    icon: ICONS.InActionBtn,
  },
];

const OurExpertise = () => {
  return (
    <section className="relative w-full bg-secondary-60 py-20 overflow-hidden">
      {/* Subtle background accents */}
      <div className="absolute -top-24 left-12 size-[260px] bg-primary-20/30 blur-[160px] rounded-full" />
      <div className="absolute bottom-0 right-12 size-[220px] bg-primary-20/20 blur-[160px] rounded-full" />

      <Container>
        {/* Heading */}
        <div className="max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Our Expertise Across Web & Application Development
          </h2>
          <p className="mt-4 text-base md:text-lg text-primary-50">
            We work across the full product lifecycle — from early-stage planning
            to scalable, production-ready systems.
          </p>
        </div>

        {/* Expertise Grid */}
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {expertise.map((item, index) => {
            // const Icon = item.icon;
            return (
              <div
                key={index}
                className="
                  group relative rounded-xl border border-secondary-65
                  bg-secondary-70 p-6
                  transition-all duration-300
                  hover:-translate-y-1 hover:border-primary-30
                "
              >
                <div className="mb-4 flex items-center gap-3">
                  {/* <div className="flex size-10 items-center justify-center rounded-lg bg-primary-30/20 text-primary-30">
                    <Icon size={20} />
                  </div> */}
                  <h3 className="text-lg font-semibold text-white">
                    {item.title}
                  </h3>
                </div>

                <p className="text-sm md:text-base text-primary-50 leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
};

export default OurExpertise;
