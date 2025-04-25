"use client";
import "./OurProjects.css";
import { ANIMATEDICONS, IMAGES } from "@/assets";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import Container from "@/components/Reusable/Container/Container";
import OurProjectCard from "./OurProjectCard";
import FillBgToTopOnHover from "@/components/AnimatedButtons/FillBgToTopOnHover/FillBgToTopOnHover";
// import { Scrambler } from "react-text-scrambler";
import TextLoop from "react-text-loop";

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

  // const [inView, setInView] = useState(false);
  // const sectionRef = useRef(null);

  // Intersection Observer logic to trigger when section is in view
  // useEffect(() => {
  //   const observer = new IntersectionObserver(
  //     (entries) => {
  //       entries.forEach((entry) => {
  //         setInView(entry.isIntersecting);
  //       });
  //     },
  //     {
  //       threshold: 0.5,
  //     }
  //   );

  //   if (sectionRef.current) {
  //     observer.observe(sectionRef.current);
  //   }

  //   return () => {
  //     if (sectionRef.current) {
  //       observer.unobserve(sectionRef.current);
  //     }
  //   };
  // }, []);
  return (
    <div className="flex flex-col items-center justify-center w-full pb-14 bg-secondary-60 relative ">
      
      {/* <div className="bg-primary-20 absolute top-20 bottom-0 left-20 right-0 z-0 w-[70%] mx-auto h-[318px] rounded-full opacity-10 blur-[150px]"></div> */}
      <div className="absolute w-full top-0 bottom-0 right-0 left-0 opacity-[2%] bg-about-bg-gradient2 h-fit">
        <Image src={IMAGES.techGrid} alt="" className="" />
      </div>
      <Container>
        <div className="py-10 md:py-14 xl:py-20 relative">
          {/* <section ref={sectionRef} className="">
      <h1 className="text-white font-rethink text-3xl md:text-5xl 2xl:text-[64px] font-bold leading-9 2xl:leading-[72px] max-w-[900px] mx-auto text-center">
        <Scrambler text={inView ? 'Explore ' : ''} />
        <span className="text-primary-20">Our Works</span>
        <Scrambler text={inView ? ' And See What We Create Best' : ''} />
      </h1>
    </section> */}
    <Image src={ANIMATEDICONS.projectsGif} alt="" className="size-28 justify-self-center" />
          <h1 className="text-white font-rethink text-3xl md:text-5xl 2xl:text-[64px] font-bold leading-9 2xl:leading-[72px] max-w-[900px] mx-auto text-center">
            Explore {" "}
            <TextLoop>
              <span className="text-primary-20">Our Works</span>
              <span className="text-primary-20">Our Creations</span>
              <span className="text-primary-20">Our Solutions</span>
              <span className="text-primary-20">Our Expertise</span>
            </TextLoop>{" "}
            And See What We Create Best
          </h1>

          <p
            className={`text-neutral-30 font-Inter text-sm md:text-base 2xl:text-xl leading-4 md:leading-7 max-w-[900px] mx-auto text-center mt-7`}
          >
            Discover the passion, creativity, and dedication behind our
            works—crafted to deliver real value, impact, and long-lasting
            impressions.
          </p>
          <div className="bg-primary-20 absolute bottom-0 left-0 top-48 right-0 z-0 w-[70%] mx-auto h-[270px] rounded-full opacity-30 blur-[150px]"></div>
          <div className="animated-gradient-border w-full rounded-3xl  text-white mt-9 z-10 sticky top-0">
            <div className="bg-secondary-60 w-full rounded-3xl p-5">
              <div className="flex items-center justify-end gap-64">
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

                <FillBgToTopOnHover
                  btnText="See All projects"
                  classNames="bg-secondary-20/80 border border-neutral-65/30 backdrop-blur-sm rounded-full px-5 py-2 md:py-3 lg:py-3 font-Inter text-white text-sm sm:text-base"
                />
              </div>
              <div className="flex flex-col gap-6 mt-7 min-h-[800px] overflow-y-auto custom-scrollbar">
               {
                [1,2,3,4,5].map((project, index) => 
                  <OurProjectCard key={index} cardDirection={index % 2 !== 0 ? "left" : "right"} />
                )
               }
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default OurProjects;
