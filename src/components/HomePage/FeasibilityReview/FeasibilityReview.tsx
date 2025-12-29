"use client";
import Container from "@/components/Reusable/Container/Container";
import React, { useRef } from "react";
import { easeInOut, easeOut, motion, useInView } from "framer-motion";
import Heading from "@/components/Reusable/Heading/Heading";
import Image from "next/image";
import { GRADIENT_BG, ICONS, IMAGES } from "@/assets";
import { CgArrowTopRight } from "react-icons/cg";

const FeasibilityReview = () => {
  const headingRef = useRef<HTMLDivElement | null>(null);
  const isHeadingInView = useInView(headingRef, { once: true, amount: 0.3 });

  const variants = {
    imageLeft: {
      hidden: { x: -120, opacity: 0 },
      visible: {
        x: 0,
        opacity: 1,
        transition: { duration: 0.8, ease: easeInOut },
      },
    },
    slideFromRight: {
      hidden: { x: 100, opacity: 0 },
      visible: {
        x: 0,
        opacity: 1,
        transition: { duration: 0.6, ease: easeOut },
      },
    },
    listContainer: {
      hidden: {},
      visible: {
        transition: { staggerChildren: 0.25 },
      },
    },
    listItem: {
      hidden: { opacity: 0, y: 30 },
      visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.4, ease: easeOut },
      },
    },
  };

  const specialties = [
    {
      title: "Understand What’s Technically Possible",
      icons: ICONS.coding,
      description:
        "We review your requirements, constraints, and goals to determine what is realistically achievable — and where compromises may be required.",
    },
    {
      title: "Avoid Costly Mistakes Early",
      icons: ICONS.path,
      description:
        "We identify potential risks, unnecessary complexity, and common architectural or feature decisions that often lead to overspending or rework later",
    },
    {
      title: "Know Exactly What to Do Next",
      icons: ICONS.steps,
      description:
        "You receive a clear technical direction and practical next steps — whether you decide to work with us or move forward independently.",
    },
  ];

  return (
    <section className="relative w-full py-14 overflow-x-hidden">
      {/* Gradient background */}
      <div className="hidden xl:block absolute top-20 -right-10 h-[460px] w-[250px] pointer-events-none select-none z-0">
        <Image
          src={GRADIENT_BG.gradientServiceRight}
          alt="Gradient"
          fill
          className="object-contain"
        />
      </div>

      <Container>
        <div className="relative z-10 flex flex-col lg:flex-row items-center gap-10">
          {/* LEFT IMAGE */}
          <motion.div
            className="relative min-h-[300px] w-full lg:w-[45%] flex justify-center"
            variants={variants.imageLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <Image
              src={IMAGES.fesibilityCheck2}
              alt="project feasibility discussion for web development and app development"
              width={520}
              height={680}
              className="w-full max-h-[300px] max-w-[80%] lg:max-h-max lg:max-w-[460px] h-auto rounded-full opacity-70 object-cover mx-auto shadow-2xl border border-cyan-500/50"
              priority
            />

            {/* Bubble Image */}
            <div
              className="
    absolute bottom-0
    left-0 -translate-x-0
    lg:left-1/2 lg:-translate-x-1/2
    xl:left-0 xl:-translate-x-20
  "
            >
              <div className="relative size-[160px]  xl:size-[320px] overflow-hidden rounded-full border-4 border-cyan-500/50">
                <Image
                  src={IMAGES.fesibilityCheck}
                  alt="project feasibility discussion for custom web and app development"
                  fill
                  className="object-cover opacity-85"
                />
              </div>
            </div>
          </motion.div>

          {/* RIGHT CONTENT */}
          <div className="w-full lg:w-[55%]">
            <motion.div
              ref={headingRef}
              variants={variants.slideFromRight}
              initial="hidden"
              animate={isHeadingInView ? "visible" : "hidden"}
            >
              <span className="text-neutral-30 text-xl font-semibold mb-2">
                Project Feasibility Review
              </span>

              <Heading
                heading="Validate Your Idea Before You Build"
                subHeading="Before spending time or money on development, we help you understand whether your idea can actually work in practice. This review focuses on technical feasibility, scalability, and execution risks — so you can make decisions with clarity, not assumptions."
                align="left"
              />
              <p className="text-neutral-30 text-left font-Inter text-sm md:text-base 2xl:text-xl leading-4 md:leading-7 max-w-full lg:max-w-[800px] text-center">
                There’s no sales pressure here. The goal is simple: give you a
                clear picture early, before development starts or vendors are
                chosen. Catching issues at this stage saves time, cost, and
                frustration later.
              </p>
            </motion.div>

            <motion.div
              className="mt-10 flex flex-col gap-6"
              variants={variants.listContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              {specialties.map((item) => (
                <motion.div
                  key={item.title}
                  className="flex items-start gap-3 md:gap-5"
                  variants={variants.listItem}
                >
                  <div className="bg-white/8 size-8 md:size-10 rounded-full p-2 flex-shrink-0">
                    <Image
                      src={item.icons}
                      alt=""
                      width={32}
                      height={32}
                      className="size-6 md:size-8"
                    />
                  </div>

                  <div>
                    <h3 className="text-neutral-20 text-xl font-semibold">
                      {item.title}
                    </h3>
                    <p className="text-neutral-40 mt-1 ">{item.description}</p>
                  </div>
                </motion.div>
              ))}
              <button className="text-primary-10 font-medium text-right cursor-pointer group flex justify-end">
                {" "}
                <p className=" hover:underline underline-offset-3">
                  Start Your Feasibility Review{" "}
                </p>
                <CgArrowTopRight className="text-base md:text-lg xl:text-2xl group-hover:rotate-45 transition-all mt-[2px] duration-500 group-hover:translate-x-2" />
              </button>
            </motion.div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default FeasibilityReview;
