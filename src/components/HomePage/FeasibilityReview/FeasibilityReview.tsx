/* eslint-disable react/no-unescaped-entities */
"use client";
import Container from "@/components/Reusable/Container/Container";
import React, { useRef } from "react";
import { easeInOut, easeOut, motion, useInView } from "framer-motion";
import Image from "next/image";
import { ICONS, IMAGES } from "@/assets";
import { CgArrowTopRight } from "react-icons/cg";

const FeasibilityReview = () => {
  const headingRef = useRef<HTMLDivElement | null>(null);
  const isHeadingInView = useInView(headingRef, { once: true, amount: 0.3 });

  const variants = {
    imageLeft: {
      hidden: { x: -60, opacity: 0 },
      visible: {
        x: 0,
        opacity: 1,
        transition: { duration: 0.7, ease: easeInOut },
      },
    },
    slideFromRight: {
      hidden: { x: 80, opacity: 0 },
      visible: {
        x: 0,
        opacity: 1,
        transition: { duration: 0.6, ease: easeOut },
      },
    },
    listContainer: {
      hidden: {},
      visible: {
        transition: { staggerChildren: 0.2 },
      },
    },
    listItem: {
      hidden: { opacity: 0, y: 20 },
      visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, ease: easeOut },
      },
    },
    fadeUp: {
      hidden: { opacity: 0, y: 30 },
      visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: easeOut },
      },
    },
  };

  const specialties = [
    {
      title: "Understand What's Technically Possible",
      icon: ICONS.coding,
      description:
        "We review your requirements, constraints, and goals to determine what is realistically achievable — and where compromises may be required.",
    },
    {
      title: "Avoid Costly Mistakes Early",
      icon: ICONS.path,
      description:
        "We identify potential risks, unnecessary complexity, and common architectural or feature decisions that often lead to overspending or rework later.",
    },
    {
      title: "Know Exactly What to Do Next",
      icon: ICONS.steps,
      description:
        "You receive a clear technical direction and practical next steps — whether you decide to work with us or move forward independently.",
    },
  ];

  return (
    <section className="relative w-full py-20 lg:py-28 overflow-hidden bg-[#020817]">
      {/* Subtle gradient background - dark mode */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a1222] via-[#020817] to-[#101742] pointer-events-none" />
      
      {/* Soft accent gradient blob - right side with primary color */}
      <div className="hidden xl:block absolute top-1/3 -right-20 w-[500px] h-[500px] bg-[#06a0ed]/5 rounded-full blur-3xl pointer-events-none" />
      
      {/* Bottom left subtle glow */}
      <div className="hidden lg:block absolute bottom-0 -left-20 w-[400px] h-[400px] bg-[#2c5970]/10 rounded-full blur-3xl pointer-events-none" />

      {/* Subtle grid pattern overlay */}
      <div/>

      <Container>
        <div className="relative z-10 flex flex-col lg:flex-row items-center gap-12 lg:gap-16 xl:gap-20">
          {/* LEFT IMAGE SECTION - Cleaner, refined dark mode */}
          <motion.div
            className="relative w-full lg:w-[48%] flex justify-center"
            variants={variants.imageLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="relative">
              {/* Main image with subtle shadow and refined border */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl ring-1 ring-[#06a0ed]/20 bg-[#0a1222]">
                <Image
                  src={IMAGES.fesibilityCheck2}
                  alt="Project feasibility discussion for web development and app development"
                  width={520}
                  height={580}
                  className="w-full max-w-[380px] lg:max-w-[460px] h-auto object-cover opacity-90"
                  priority
                />
              </div>

              {/* Floating accent card - dark mode design */}
              <div className="absolute -bottom-6 -left-6 lg:-bottom-8 lg:-left-8 bg-[#101742] rounded-2xl shadow-xl ring-1 ring-[#06a0ed]/20 backdrop-blur-sm">
                <div className="relative w-20 h-20 lg:w-28 lg:h-28 rounded-xl overflow-hidden">
                  <Image
                    src={IMAGES.fesibilityCheck}
                    alt="Project feasibility assessment"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              
              {/* Decorative dot pattern - subtle primary color */}
              <div className="absolute -top-4 -right-4 w-24 h-24 opacity-20 pointer-events-none">
                <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="10" cy="10" r="2" fill="#06a0ed"/>
                  <circle cx="30" cy="10" r="2" fill="#06a0ed"/>
                  <circle cx="50" cy="10" r="2" fill="#06a0ed"/>
                  <circle cx="10" cy="30" r="2" fill="#06a0ed"/>
                  <circle cx="30" cy="30" r="2" fill="#06a0ed"/>
                  <circle cx="50" cy="30" r="2" fill="#06a0ed"/>
                  <circle cx="70" cy="10" r="2" fill="#06a0ed"/>
                  <circle cx="90" cy="10" r="2" fill="#06a0ed"/>
                </svg>
              </div>
            </div>
          </motion.div>

          {/* RIGHT CONTENT - Clean, professional dark mode typography */}
          <div className="w-full lg:w-[52%]">
            <motion.div
              ref={headingRef}
              variants={variants.slideFromRight}
              initial="hidden"
              animate={isHeadingInView ? "visible" : "hidden"}
            >
              {/* Badge - refined dark mode */}
              <div className="inline-flex items-center gap-2 mb-4">
                <div className="h-px w-6 bg-gradient-to-r from-[#61dafb] to-transparent" />
                <span className="text-sm font-semibold tracking-wide text-[#61dafb] uppercase">
                  Project Feasibility Review
                </span>
              </div>

              {/* Heading - cleaner spacing */}
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#fcfcfc] leading-tight tracking-tight mb-4">
                Validate Your Idea<br />
                <span className="bg-gradient-to-r from-[#61dafb] to-[#06a0ed] bg-clip-text text-transparent">
                  Before You Build
                </span>
              </h2>
              
              {/* Subheading - refined */}
              <p className="text-[#d8d8d8] text-base md:text-lg leading-relaxed mb-4 max-w-2xl">
                Before spending time or money on development, we help you understand whether your idea can actually work in practice. This review focuses on technical feasibility, scalability, and execution risks — so you can make decisions with clarity, not assumptions.
              </p>
              
              {/* Description - cleaner */}
              <p className="text-[#bababa] text-sm md:text-base leading-relaxed border-l-3 border-[#61dafb] pl-4 max-w-xl">
                There's no sales pressure here. The goal is simple: give you a clear picture early, before development starts or vendors are chosen. Catching issues at this stage saves time, cost, and frustration later.
              </p>
            </motion.div>

            {/* Features List - Clean card-style items */}
            <motion.div
              className="mt-10 flex flex-col gap-5"
              variants={variants.listContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              {specialties.map((item) => (
                <motion.div
                  key={item.title}
                  className="group flex items-start gap-4 p-4 rounded-xl transition-all duration-300 hover:bg-[#0a1222]/80"
                  variants={variants.listItem}
                >
                  {/* Icon container - refined dark mode */}
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-[#06a0ed]/10 to-[#61dafb]/10 flex items-center justify-center group-hover:scale-105 transition-transform duration-300 ring-1 ring-[#06a0ed]/20">
                    <Image
                      src={item.icon}
                      alt=""
                      width={24}
                      height={24}
                      className="w-6 h-6 brightness-0 invert opacity-80 group-hover:opacity-100 transition-opacity"
                    />
                  </div>

                  <div className="flex-1">
                    <h3 className="text-[#f5f5f5] text-lg font-semibold mb-1">
                      {item.title}
                    </h3>
                    <p className="text-[#b3b3b3] text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
              
              {/* CTA Button - refined and elegant dark mode */}
              <motion.div
                variants={variants.fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="mt-6 pt-2"
              >
                <button className="group inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#06a0ed] to-[#61dafb] hover:from-[#0696e7] hover:to-[#6ecaf8] text-[#020817] font-medium rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-[#06a0ed]/25">
                  <span className="text-base font-semibold">Start Your Feasibility Review</span>
                  <CgArrowTopRight className="text-lg transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:rotate-45" />
                </button>
                <p className="text-xs text-[#979797] mt-3">
                  No obligation • Clear technical direction • 30-minute consultation
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default FeasibilityReview;