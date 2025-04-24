"use client";
import "./OurProjects.css";
import { IMAGES } from "@/assets";
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
    <div className="flex flex-col items-center justify-center w-full h-full pb-14 bg-secondary-60 relative">
      {/* <div className="bg-primary-20 absolute top-20 bottom-0 left-20 right-0 z-0 w-[70%] mx-auto h-[318px] rounded-full opacity-10 blur-[150px]"></div> */}
      <div className="absolute w-full top-0 bottom-0 right-0 left-0 opacity-[2%] bg-about-bg-gradient2 h-fit">
        <Image src={IMAGES.techGrid} alt="" className="" />
      </div>
      <Container>
        <div className="py-10 md:py-14 xl:py-20 relative">
          <h1 className="text-white font-rethink text-3xl md:text-5xl 2xl:text-[64px] font-bold leading-9 2xl:leading-[72px] max-w-[900px] mx-auto text-center">
            Explore <span className="text-primary-20">Our Works</span> And See
            What We Create Best
          </h1>
          <p
            className={`text-neutral-30 font-Inter text-sm md:text-base 2xl:text-xl leading-4 md:leading-7 max-w-[900px] mx-auto text-center mt-7`}
          >
            Discover the passion, creativity, and dedication behind our
            works—crafted to deliver real value, impact, and long-lasting
            impressions.
          </p>
          {/* <Image
              src={IMAGES.projectEllipse}
              alt="PRTech Solutions Gradient Left"
              className="absolute z-[0] top-40"
            /> */}
            <div className="bg-primary-20 absolute bottom-0 left-0 top-48 right-0 z-0 w-[70%] mx-auto h-[270px] rounded-full opacity-30 blur-[150px]"></div>
          <div className="animated-gradient-border w-full rounded-3xl h-full text-white mt-9 z-10">
         
            <div className="bg-secondary-60 w-full h-full rounded-3xl p-5">
              <div className="bg-our-projects-bg-gradient rounded-3xl w-full h-full border border-neutral-65/30 p-5">
                {/* Tab */}
                <div className="flex items-center justify-center">
                  <ul
                    ref={containerRef}
                    className="relative flex items-center bg-secondary-20/80 border border-neutral-65/30 backdrop-blur-sm rounded-full px-2 py-1 font-Inter text-white text-sm sm:text-base max-w-[329px] md:max-w-fit overflow-x-auto"
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
                        ref={(el) => {
                          tabRefs.current[idx] = el;
                        }}
                        onClick={() => setActiveTab(idx)}
                        className={`relative z-20 px-5 sm:px-6 py-2 transition duration-300 rounded-full cursor-pointer font-medium text-center text-nowrap hover:text-white ${
                          activeTab === idx ? "text-white" : "text-white/60"
                        }`}
                      >
                        {category}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full px-0 xl:px-[90px] z-50 mt-10">
              <ProjectCard />
              <ProjectCard />
              <ProjectCard />
              <ProjectCard />
            </div>
            <div className="flex items-center justify-center">
            <Button
              text="View All Projects"
              className="bg-transparent border border-white mt-6 md:mt-10 lg:mt-14 2xl:mt-[60px]"
              textClassName="text-white px-5 py-1"
            />
            </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default OurProjects;
