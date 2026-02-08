"use client";

import Container from "@/components/Reusable/Container/Container";
import Heading from "@/components/Reusable/Heading/Heading";
import Image from "next/image";
import { ICONS } from "@/assets";
import { motion, Variants } from "framer-motion";

const steps = [
  {
    id: 1,
    title: "Discovery & Feasibility",
    duration: "1–2 Weeks",
    description:
      "We analyze business goals, users, and technical constraints to validate product feasibility and define a clear development scope before any code is written.",
  },
  {
    id: 2,
    title: "Design & Technical Planning",
    duration: "2–4 Weeks",
    description:
      "We create wireframes, system architecture, and technical plans aligned with user experience, scalability, and performance requirements.",
  },
  {
    id: 3,
    title: "Development",
    duration: "4–8 Weeks",
    description:
      "We build clean, scalable, and secure web or mobile applications with performance and maintainability as core priorities.",
  },
  {
    id: 4,
    title: "Testing & Validation",
    duration: "1–2 Weeks",
    description:
      "We test across devices and real-world scenarios to ensure stability, usability, and performance before launch.",
  },
  {
    id: 5,
    title: "Launch Readiness",
    duration: "Final Review",
    description:
      "Final checks, deployment setup, and production validation to ensure a smooth and reliable software launch.",
  },
  {
    id: 6,
    title: "Delivery & Ongoing Support",
    duration: "Ongoing",
    description:
      "Post-launch monitoring, optimization, and ongoing support to keep your product stable, fast, and ready to scale.",
  },
];

const containerVariants:Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.18,
    },
  },
};

const itemVariants:Variants = {
  hidden: { opacity: 0, x: -24 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const dotVariants:Variants = {
  hidden: { scale: 0, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: { duration: 0.3, ease: "easeOut" },
  },
};

const arrowVariants:Variants = {
  hidden: { opacity: 0, x: -6 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.3, ease: "easeOut" },
  },
};

const ProjectTimeline = () => {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
      className="relative w-full bg-secondary-60 py-16 overflow-hidden"
    >
      {/* Background accents */}
      <div className="bg-primary-20 absolute top-36 left-0 size-[240px] rounded-full opacity-30 blur-[150px]" />
      <div className="bg-primary-20 absolute bottom-0 right-0 size-[200px] rounded-full opacity-40 blur-[150px]" />

      <Container>
        <Heading
          heading="Project Timeline"
          subHeading="A clear, structured flow from idea to launch."
        />

        <div className="mt-12 mx-auto w-fit space-y-4 xl:space-y-12">
          {steps.map((step, index) => {
            const isLast = index === steps.length - 1;

            return (
              <motion.div
                key={step.id}
                variants={itemVariants}
                className="grid grid-cols-[48px_1fr] gap-6"
              >
                {/* Left spacer */}
                <div />

                {/* Content */}
                <div
                  className={`relative ${
                    isLast ? "" : " pb-4 xl:pb-10 border-b border-secondary-65"
                  }`}
                >
                  {/* Arrow */}
                  {!isLast && (
                    <motion.div
                      variants={arrowVariants}
                      className="absolute left-[-46px] top-[30px]"
                    >
                      <Image src={ICONS.timelineArrow} alt="" aria-hidden />
                    </motion.div>
                  )}

                  {/* Dot */}
                  <motion.div
                    variants={dotVariants}
                    className="absolute size-3 bg-primary-30 top-[10px] left-[-20px] rounded-full"
                  />

                  {/* Title + Duration */}
                  <div className="flex flex-wrap items-center gap-3">
                    <h3 className="text-lg md:text-3xl font-bold text-white">
                      {step.title}
                    </h3>
                    <span className="text-sm font-bold bg-primary-40 rounded-lg text-primary-20 px-4 py-2">
                      {step.duration}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="mt-4 text-sm md:text-xl max-w-3xl text-primary-50">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </motion.section>
  );
};

export default ProjectTimeline;
