"use client";
import { GRADIENT_BG, IMAGES } from "@/assets";
import Heading from "@/components/Reusable/Heading/Heading";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import ProjectCard from "./ProjectCard";
import Button from "@/components/Reusable/Buttons/Button";
import Container from "@/components/Reusable/Container/Container";

const OurProjects = () => {
  const projectCategories = ["All Projects", "Website", "Mobile App", "UI/UX"];
  const [activeTab, setActiveTab] = useState(0);
  const tabRefs = useRef<(HTMLLIElement | null)[]>([]);
  const containerRef = useRef<HTMLUListElement>(null);
  const [indicatorStyle, setIndicatorStyle] = useState({ width: 0, left: 0 });

  useEffect(() => {
    const currentTab = tabRefs.current[activeTab];
    const container = containerRef.current;
    if (currentTab && container) {
      const tabRect = currentTab.offsetLeft;
      const width = currentTab.offsetWidth;

      setIndicatorStyle({
        width: width,
        left: tabRect,
      });
    }
  }, [activeTab]);
  return (
    <div className="flex flex-col items-center justify-center w-full h-full pb-14 bg-secondary-60 ">
      <Container>
        <div className="py-10 md:py-14 xl:py-20">
          <Heading
            heading={"Our Projects"}
            subHeading={
              "Discover our portfolio of successful projects delivered with excellence."
            }
          />
          <div className="relative z-10 h-full w-full flex flex-col items-center justify-center mt-36 md:mt-40">
            {/* Gradient Backgrounds for dark mode */}
            <Image
              src={GRADIENT_BG.gradientDarkProjects}
              alt="PRTech Solutions Gradient Left"
              className="absolute -top-20 pointer-events-none z-10 hidden xl:block"
            />
            <Image
              src={IMAGES.projectEllipse}
              alt="PRTech Solutions Gradient Left"
              className="absolute -top-[270px] pointer-events-none z-0 hidden xl:block"
            />
            {/* Gradient Backgrounds for light mode */}
            {/* <Image
            src={GRADIENT_BG.gradientLightProjects}
            alt="PRTech Solutions Gradient Left"
            className="dark:hidden md:block absolute top-18 lg:top-0 right-0 left-0 pointer-events-none z-0"
          /> */}

            {/* Tab */}
            <div className="absolute -top-28 xl:-top-[100px] z-20">
              <ul
                ref={containerRef}
                className="relative flex items-center bg-[#2A4B5D] border border-white/30 backdrop-blur-sm rounded-full px-2 py-1 font-Inter text-white text-sm sm:text-base max-w-[329px] md:max-w-fit overflow-x-auto"
              >
                {/* Blue Highlighter */}
                <span
                  className="absolute bg-[#06A0ED] h-[85%] transition-all duration-500 rounded-full z-10"
                  style={{
                    width: `${indicatorStyle.width}px`,
                    left: `${indicatorStyle.left}px`,
                  }}
                />

                {projectCategories.map((category, idx) => (
                  <li
                    key={idx}
                    ref={(el) => (tabRefs.current[idx] = el)}
                    onClick={() => setActiveTab(idx)}
                    className={`relative z-20 px-5 sm:px-6 py-2 transition duration-300 rounded-full cursor-pointer font-medium text-center text-nowrap ${
                      activeTab === idx ? "text-white" : "text-white/60"
                    }`}
                  >
                    {category}
                  </li>
                ))}
              </ul>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full px-0 xl:px-[90px] z-50">
              <ProjectCard />
              <ProjectCard />
              <ProjectCard />
              <ProjectCard />
            </div>
            <Button
              text="View All Projects"
              className="bg-transparent border border-white mt-6 md:mt-10 lg:mt-14 2xl:mt-[70px]"
              textClassName="text-white px-5 py-1"
            />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default OurProjects;
