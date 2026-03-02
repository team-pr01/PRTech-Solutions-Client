"use client";

import Image from "next/image";
import Container from "../../Reusable/Container/Container";
import Heading from "../../Reusable/Heading/Heading";
import { GRADIENT_BG } from "@/assets";
import clsx from "clsx";
import { motion, Variants } from "framer-motion";

type Direction = "left" | "right";

const STEPS = [
  {
    title: "Ideation & Discovery",
    badge: "1–2 Weeks",
    desc: "We analyze your business goals, target users, and technical requirements to validate feasibility, define scope, and prevent costly mistakes before development begins.",
    icon: "💡",
  },
  {
    title: "UX/UI Design",
    badge: "2–3 Weeks",
    desc: "Our designers create user flows, wireframes, and high-fidelity UI designs focused on usability, conversion, and real-world user behavior.",
    icon: "🎨",
  },
  {
    title: "Development",
    badge: "4–8 Weeks",
    desc: "We build fast, secure, and scalable web or mobile applications using clean architecture, modern tech stacks, and production-ready coding standards.",
    icon: "💻",
  },
  {
    title: "Testing & Quality Assurance",
    badge: "1–2 Weeks",
    desc: "Every feature is tested across devices and browsers to ensure performance, stability, security, and a smooth user experience before launch.",
    icon: "🧪",
  },
  {
    title: "Final Review & Approval",
    badge: "Final Review",
    desc: "We walk you through the complete system, validate requirements, and make final refinements so you launch with confidence and clarity.",
    icon: "✅",
  },
  {
    title: "Launch & Ongoing Support",
    badge: "Ongoing",
    desc: "After deployment, we provide monitoring, optimization, and long-term support to keep your product fast, reliable, and ready to scale.",
    icon: "🚀",
  },
];


const cardVariants :Variants = {
  hidden: (dir: Direction) => ({
    opacity: 0,
    x: dir === "left" ? -50 : 50,
    y: 20,
  }),
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
  },
};

export default function ProjectTimeline() {
  return (
    <section className="relative w-full overflow-hidden bg-secondary-60 py-10">
      {/* Background */}
      <div className="absolute right-[-40px] top-10 h-[460px] w-[250px]">
        <Image src={GRADIENT_BG.gradientServiceRight} alt="" fill className="object-contain" />
      </div>
      <div className="absolute left-[-40px] top-[40%] h-[460px] w-[250px] scale-x-[-1]">
        <Image src={GRADIENT_BG.gradientServiceRight} alt="" fill className="object-contain" />
      </div>
      <div className="absolute right-[-40px] bottom-10 h-[460px] w-[250px]">
        <Image src={GRADIENT_BG.gradientServiceRight} alt="" fill className="object-contain" />
      </div>

      <Container>
        <Heading
          heading="Project Timeline"
          subHeading="A clear, structured flow from idea to launch."
        />

        <div className="relative mt-20">
          {/* CENTRAL LINE */}
          <div className="absolute left-1/2 top-0 h-full w-[2px] -translate-x-1/2 bg-primary-60 hidden md:block" />
          <div className="absolute left-4 top-0 h-full w-[2px] bg-primary-60 md:hidden" />

          <div className="space-y-16">
            {STEPS.map((step, index) => {
              const isRight = index % 2 === 1;
              const direction: Direction = isRight ? "right" : "left";

              return (
                <div
                  key={step.title}
                  className={clsx(
                    "relative flex max-w-[900px]  mx-auto",
                    "md:items-center",
                    isRight ? "md:justify-end " : "md:justify-start"
                  )}
                >
                  {/* DOT */}
                  <div
                    className={clsx(
                      "absolute top-6 h-4 w-4 rounded-full bg-primary-30",
                      "md:left-1/2 md:-translate-x-1/2",
                      "left-4"
                    )}
                  />

                  {/* CARD */}
                  <motion.div
                    custom={direction}
                    variants={cardVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    className={clsx(
                      "ml-12 md:ml-0",
                      "w-[300px] sm:w-[300px] md:w-[380px] lg:w-[420px]",
                      "rounded-xl bg-gradient-to-br from-primary-15 to-primary-60 p-[1px]"
                    )}
                  >
                    <div className="rounded-xl bg-[#020617] p-6">
                      <div className="mb-3 flex items-center gap-3">
                        <span className="text-xl">{step.icon}</span>
                        <h3 className="text-lg text-neutral-10 font-semibold">{step.title}</h3>
                        <span className="ml-auto rounded-full bg-primary-60 px-2 py-1 text-xs text-primary-10">
                          {step.badge}
                        </span>
                      </div>
                      <p className="text-sm text-gray-400">{step.desc}</p>
                    </div>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
