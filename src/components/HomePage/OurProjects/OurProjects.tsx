"use client";

import "./OurProjects.css";
import { IMAGES, ANIMATEDICONS } from "@/assets";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import Container from "@/components/Reusable/Container/Container";
import { cubicBezier, motion, useInView } from "framer-motion";
import ProjectCard from "./ProjectCard";
import AnimatedHeading from "@/components/Reusable/AniminatedHeading/AniminatedHeading";
import Link from "next/link";
import FillBgToTopOnHover from "@/components/AnimatedButtons/FillBgToTopOnHover/FillBgToTopOnHover";

const projects = [
  {
    image: IMAGES.tradingPlatform,
    title: "Real-Time Trading Platform",
    subtitle: "High-reliability trading and portfolio management system",
    subtle:"Web-based trading platform",
    description:
      "A web-based trading platform designed to handle real-time market data, user portfolios, and performance-critical dashboards with a strong focus on accuracy, security, and system stability.",
  },
  {
    image: IMAGES.ngoApp,
    title: "AI-Powered NGO Platform",
    subtitle: "Spiritual and wellness application with AI assistance",
     subtle:"Mobile and web NGO application",
    description:
      "A mobile and web platform built for an NGO to provide spiritual guidance, religious content, multilingual text translation, and AI-assisted recommendations in a structured and responsible manner.",
  },
  {
    image: IMAGES.educationPlatform,
    title: "Tutor–Parent Matching Platform",
    subtitle: "Education hiring and verification system",
     subtle:"Education marketplace platform",
    description:
      "A platform where tutors, students, and parents can register, apply for teaching opportunities, and connect through an admin-controlled workflow that manages validation, agreements, and coordination.",
  },
  {
    image: IMAGES.itCompanyWebsite,
    title: "IT Services Company Website",
    subtitle: "Lead-focused website for a software services firm",
     subtle:"IT services company website",
    description:
      "A professional website built for an IT company to clearly present services, establish credibility, and convert visitors into qualified leads through structured content and optimized performance.",
  },
];



const slideUpVariants = {
  hidden: { y: 40, opacity: 0 },
  visible: { y: 0, opacity: 1 },
};

const transition = {
  duration: 0.6,
  ease: cubicBezier(0.17, 0.67, 0.83, 0.67),
};

const OurProjects = () => {
  const projectCategories = ["All Projects", "Website", "Mobile App", "UI/UX"];
  const [activeTab, setActiveTab] = useState(0);

  const tabRefs = useRef<(HTMLLIElement | null)[]>([]);
  const containerRef = useRef<HTMLUListElement>(null);
  const [indicatorStyle, setIndicatorStyle] = useState<{
    width: number;
    left: number;
  } | null>(null);

  const subheadingRef = useRef(null);
  const tabsRef = useRef(null);
  const buttonRef = useRef(null);

  const isSubheadingInView = useInView(subheadingRef, {
    once: true,
    amount: 0.3,
  });
  const areTabsInView = useInView(tabsRef, { once: true, amount: 0.3 });
  const isButtonInView = useInView(buttonRef, { once: true, amount: 0.3 });

  useEffect(() => {
    const currentTab = tabRefs.current[activeTab];
    const container = containerRef.current;

    if (!currentTab || !container) return;

    setIndicatorStyle({
      width: currentTab.offsetWidth,
      left: currentTab.offsetLeft,
    });
  }, [activeTab]);

  return (
    <section
      id="our-projects"
      className=" w-full pb-14 bg-secondary-60 overflow-hidden"
    >
      {/* Background grid */}

      <Container>
        <div className="relative py-10 md:py-14 xl:py-20 z-10">
          <AnimatedHeading
            staticTextBefore="Explore"
            loopTexts={[
              "Our Works",
              "Our Creations",
              "Our Solutions",
              "Our Expertise",
            ]}
            staticTextAfter="And See What We Create Best"
            className="max-w-[700px]"
          />

          <motion.p
            ref={subheadingRef}
            variants={slideUpVariants}
            initial="hidden"
            animate={isSubheadingInView ? "visible" : "hidden"}
            transition={{ ...transition, delay: 0.2 }}
            className="text-neutral-30 font-Inter text-sm md:text-base 2xl:text-xl leading-6 max-w-[900px] mx-auto text-center mt-7"
          >
            Software Development Projects Across Web, Mobile, and SaaS
          </motion.p>

          {/* Tabs */}
          <div className="relative bg-project-border px-[7px] mt-10 pt-[7px] rounded-4xl">
            <div className="absolute -top-40 left-0 right-0 h-[520px] w-full pointer-events-none">
              <Image
                src={IMAGES.projectEllipse}
                alt="Project ellipse background"
                fill
                className="object-contain"
              />
            </div>
            <div className="bg-secondary-60 rounded-4xl">
              <div className=" bg-project-bg-gradient rounded-4xl px-10 pt-24 md:px-20 relative">
                {" "}
                <motion.div
                  ref={tabsRef}
                  variants={slideUpVariants}
                  initial="hidden"
                  animate={areTabsInView ? "visible" : "hidden"}
                  transition={{ ...transition, delay: 0.4 }}
                  className="absolute -top-5 right-0 left-0 flex justify-center"
                >
                  <ul
                    ref={containerRef}
                    className="relative flex items-center bg-secondary-20/80 border border-neutral-65/30 backdrop-blur-sm rounded-full px-2 py-1 font-Inter text-white text-sm overflow-x-auto"
                  >
                    {indicatorStyle && (
                      <span
                        className="absolute bg-[#06A0ED] h-[85%] rounded-full transition-all duration-500"
                        style={indicatorStyle}
                      />
                    )}

                    {projectCategories.slice(0, 4).map((category, idx) => (
                      <li
                        key={category}
                        ref={(el) => (tabRefs.current[idx] = el)}
                        onClick={() => setActiveTab(idx)}
                        className={`relative z-10 px-5 py-2 cursor-pointer whitespace-nowrap ${
                          activeTab === idx ? "text-white" : "text-white/60"
                        }`}
                      >
                        {category}
                      </li>
                    ))}
                  </ul>
                </motion.div>{" "}
                <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 mt-10">
                  {projects.map((project, index) => (
                    <ProjectCard
                      key={project.title}
                      index={index}
                      cardDirection={index % 2 === 0 ? "right" : "left"}
                      project={project}
                    />
                  ))}
                </div>
                {/* CTA */}
              </div>
            </div>
          </div>
          <motion.div
            ref={buttonRef}
            variants={slideUpVariants}
            initial="hidden"
            animate={isButtonInView ? "visible" : "hidden"}
            transition={{ ...transition, delay: 0.6 }}
            className="flex justify-center mt-12"
          >
            <Link href="/our-projects">
              <FillBgToTopOnHover btnText="Explore Detailed Case Studies" />
            </Link>
          </motion.div>

          {/* Projects */}
        </div>
      </Container>
    </section>
  );
};

export default OurProjects;
