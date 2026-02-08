"use client";
import { ICONS, IMAGES } from "@/assets";
import Container from "@/components/Reusable/Container/Container";
import Heading from "@/components/Reusable/Heading/Heading";
import { easeInOut, easeOut, motion, useInView } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

const WhyWorkWithUs = () => {
  const headingRef = useRef(null);
  const isHeadingInView = useInView(headingRef, { once: true, amount: 0.3 });

  // Consolidated variants and transitions
  const variants = {
    imageLeft: {
      hidden: { x: "-100%", opacity: 0 },
      visible: { x: 0, opacity: 1, transition: { duration: 0.8, ease: easeInOut } },
    },
    slideFromRight: {
      hidden: { x: 100, opacity: 0 },
      visible: { x: 0, opacity: 1, transition: { duration: 0.6, ease: easeOut } },
    },
    listContainer: {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: {
          staggerChildren: 0.3,
        },
      },
    },
    listItem: {
      hidden: { opacity: 0, y: 50 },
      visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, ease: easeOut },
      },
    },
  };

  const specialties = [
    { title: "Clear, Honest Communication", description: "We explain technical decisions in plain language so you understand what’s being built, why it matters, and what trade-offs exist — before problems appear later." },
    { title: "Advice Before Code ", description: "Before writing code, we evaluate feasibility, scope, and risk. If an idea isn’t practical or scalable right now, we’ll tell you early — clearly and honestly" },
    { title: "No Unnecessary Features", description: "We actively avoid over-engineering. Every feature must solve a real business or user problem — not inflate scope, cost, or complexity." },
    { title: "Long-Term Thinking by Default", description: "We design clean architectures that support future growth — so your product can evolve without painful rewrites, hacks, or rebuilds." },
  ];

  return (
    <div className="w-full bg-gradient-to-r from-cyan-500/50 to-blue-500/80 overflow-hidden relative py-14">
      {/* Background effects */}
      <Image src={IMAGES.linnerBg1} className="absolute right-0 top-0 h-full opacity-20 z-0" alt="" />
      <Image src={IMAGES.linnerBg2} className="absolute left-0 top-0 h-full opacity-30 z-0" alt="" />
      <div className="bg-primary-20 absolute top-36 bottom-0 left-0 z-0 size-[239px] rounded-full opacity-40 blur-[150px]"></div>
      <div className="bg-primary-20 absolute bottom-0 right-0 z-0 size-[200px] rounded-full opacity-70 blur-[150px]"></div>

      <Container>
        <div  className="flex flex-col xl:flex-row gap-10 xl:gap-0 items-center justify-between w-full">
          {/* Left Column Image */}
          <motion.div
            className="relative"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={variants.imageLeft}
          >
            <Image
              src={IMAGES.aboutPrTech2}
              alt="About Image"
              width={450}
              height={600}
              className="w-full md:w-[550px] h-auto md:h-[700px] object-cover rounded-full"
            />
            <div className="absolute bottom-0 left-0 md:-left-24">
              <div className="bubble-blob size-[150px] md:size-[300px] border-4 border-cyan-500/50 overflow-hidden rounded-full">
                <Image
                  src={IMAGES.aboutPrTech2}
                  alt="About Image Bubble"
                  layout="fill"
                  objectFit="cover"
                  className="size-full object-cover"
                />
              </div>
            </div>
          </motion.div>

          {/* Right Column Content */}
          <div className="w-full xl:w-[55%]">
            <motion.div
              ref={headingRef}
              variants={variants.slideFromRight}
              initial="hidden"
              animate={isHeadingInView ? "visible" : "hidden"}
            >
              <p className="text-neutral-30 text-lg font-semibold font-Inter mb-2">Why Work With Us</p>
              <Heading
                heading="Confidence Comes From How We Think — Not What We Claims"
               
                align="left"
              />
            </motion.div>

            <motion.div
              className="flex flex-col gap-6 mt-10 w-full"
              variants={variants.listContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              {specialties.map((specialty) => (
                <motion.div key={specialty.title} className="flex gap-6 font-Inter" variants={variants.listItem}>
                  <Image src={ICONS.tickMark} alt="" width={32} height={32} className="size-8 flex-shrink-0" />
                  <div>
                    <h3 className="text-neutral-20 text-2xl font-semibold">{specialty.title}</h3>
                    <p className="text-neutral-40 text-lg mt-[6px] ">{specialty.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default WhyWorkWithUs;
