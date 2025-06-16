"use client";
import "./OurProjects.css";
import { IMAGES } from "@/assets";
import Image from "next/image";
import React, {useRef } from "react";
import Container from "@/components/Reusable/Container/Container";
// import { Scrambler } from "react-text-scrambler";
import TextLoop from "react-text-loop";
import { cubicBezier, motion, useInView } from "framer-motion";
import ProjectCard from "./ProjectCard";

const projects = [
  {
    image: IMAGES.mockup,
    title: "Ten Stage Matrix",
    subtitle: "Seamless design to delivery.",
    description: "",
  },
  {
    image: IMAGES.vedicDashboard,
    title: "Arya Kalyan Foundation",
    subtitle: "Flawless Vedic dashboard design.",
    description: "",
  },
  {
    image: IMAGES.shopfinity,
    title: "Shopfinity",
    subtitle: "Perfect ecommerce website solution.",
    description: "",
  },
  {
    image: IMAGES.doctorPortfolio,
    title: "Therapy Center Portfolio",
    subtitle: "C.R.Physiotherapy Centre Portfolio.",
    description: "",
  },
  {
    image: IMAGES.amplogix,
    title: "Amplogix",
    subtitle: "Smart, fast, and clean.",
    description: "",
  },
  {
    image: IMAGES.orbitRides,
    title: "Orbit Rides",
    subtitle: "Boosted ride-share app growth.",
    description: "",
  },
];

const OurProjects = () => {
  // const projectCategories = ["All Projects", "Website", "Mobile App", "UI/UX"];
  // const [activeTab, setActiveTab] = useState(0);
  // const tabRefs = useRef<(HTMLLIElement | null)[]>([]);
  // const containerRef = useRef<HTMLUListElement>(null);
  // const [indicatorStyle, setIndicatorStyle] = useState({ width: 0, left: 0 });

  // Refs for animations
  const headingRef = useRef(null);
  const subheadingRef = useRef(null);
  // const tabsRef = useRef(null);
  // const buttonRef = useRef(null); 

  // useInView hooks
  const isHeadingInView = useInView(headingRef, { once: true, amount: 0.3 });
  const isSubheadingInView = useInView(subheadingRef, {
    once: true,
    amount: 0.3,
  });
  // const areTabsInView = useInView(tabsRef, { once: true, amount: 0.3 });
  // const isButtonInView = useInView(buttonRef, { once: true, amount: 0.3 });

  // Animation variants
  const slideUpVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  // Base transition
  const transition = {
  duration: 0.6,
  ease: cubicBezier(0.17, 0.67, 0.83, 0.67),
};

  // useEffect(() => {
  //   const currentTab = tabRefs.current[activeTab];
  //   const container = containerRef.current;
  //   if (currentTab && container) {
  //     const tabRect = currentTab.offsetLeft;
  //     const width = currentTab.offsetWidth;

  //     setIndicatorStyle({
  //       width: width,
  //       left: tabRect,
  //     });
  //   }
  // }, [activeTab]);

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
    // Added overflow-hidden to the main container
    <div
      id="our-projects"
      className="flex flex-col items-center justify-center w-full pb-14 bg-secondary-60 relative overflow-hidden"
    >
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
          {/* <Image
            src={ANIMATEDICONS.projectsGif}
            alt=""
            className="size-28 justify-self-center"
          /> */}
          {/* Animated Heading */}
          <motion.h1
            ref={headingRef}
            variants={slideUpVariants}
            initial="hidden"
            animate={isHeadingInView ? "visible" : "hidden"}
            transition={transition}
            className="text-white font-rethink text-3xl md:text-5xl 2xl:text-[64px] font-bold leading-9 md:leading-14 2xl:leading-[72px] max-w-[900px] mx-auto text-center"
          >
            Explore{" "}
            <TextLoop>
              <span className="text-primary-20">Our Works</span>
              <span className="text-primary-20">Our Creations</span>
              <span className="text-primary-20">Our Solutions</span>
              <span className="text-primary-20">Our Expertise</span>
            </TextLoop>{" "}
            And See What We Create Best
          </motion.h1>

          {/* Animated Subheading */}
          <motion.p
            ref={subheadingRef}
            variants={slideUpVariants}
            initial="hidden"
            animate={isSubheadingInView ? "visible" : "hidden"}
            transition={{ ...transition, delay: 0.2 }} // Delay after heading
            className={`text-neutral-30 font-Inter text-sm md:text-base 2xl:text-xl leading-4 md:leading-7 max-w-[900px] mx-auto text-center mt-7`}
          >
            Discover the passion, creativity, and dedication behind our
            works—crafted to deliver real value, impact, and long-lasting
            impressions.
          </motion.p>
          <div className="bg-primary-20 absolute bottom-0 left-0 top-48 right-0 z-0 w-[70%] mx-auto h-[270px] rounded-full opacity-30 blur-[150px]"></div>
          {/* <div className="animated-gradient-border w-full rounded-3xl text-white mt-9 z-10 sticky top-0"> */}
          <div className="bg-secondary-60 w-full rounded-3xl mt-10">
            {/* Animated Tab */}
            {/* <motion.div
              ref={tabsRef}
              variants={slideUpVariants}
              initial="hidden"
              animate={areTabsInView ? "visible" : "hidden"}
              transition={{ ...transition, delay: 0.4 }} 
              className="flex items-center justify-center "
            >
              <ul
                ref={containerRef}
                className="relative flex items-center bg-secondary-20/80 border border-neutral-65/30 backdrop-blur-sm rounded-full px-2 py-1 font-Inter text-white text-[10px] sm:text-base max-w-[420px] md:max-w-fit overflow-x-auto"
              >
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
                    className={`relative z-20 px-4 sm:px-6 py-2 transition duration-300 rounded-full cursor-pointer font-medium text-center text-nowrap hover:text-white ${
                      activeTab === idx ? "text-white" : "text-white/60"
                    }`}
                  >
                    {category}
                  </li>
                ))}
              </ul>
            </motion.div> */}

            {/* Projects cards - Animation should happen inside OurProjectCard */}
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 mt-7 min-h-[800px] overflow-y-auto custom-scrollbar w-full">
              {projects?.map((project, index) => (
                // Pass index for individual card animation delay
                <ProjectCard
                  key={index}
                  index={index} // Pass index here
                  cardDirection={index % 2 !== 0 ? "left" : "right"}
                  project={project}
                />
              ))}
            </div>

            {/* Animated See all projects button */}
            {/* Wrap the Link with motion.div for animation */}
            {/* <motion.div
              ref={buttonRef}
              variants={slideUpVariants}
              initial="hidden"
              animate={isButtonInView ? "visible" : "hidden"}
              transition={{ ...transition, delay: 0.6 }} 
              className="flex items-center justify-center mt-10"
            >
              <Link href={"/our-projects"}>
               
                <FillBgToTopOnHover btnText="See All projects" />
              </Link>
            </motion.div> */}
          </div>
          {/* </div> */}
        </div>
      </Container>
    </div>
  );
};

export default OurProjects;
