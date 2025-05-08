"use client";
import Container from "@/components/Reusable/Container/Container";
import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { IoSearchSharp } from "react-icons/io5";
import CategorizedBlogs from "../CategorizedBlogs/CategorizedBlogs";
const OurAllBlogs = () => {
  const projectCategories = [
    "All Projects",
    "Website Development",
    "Mobile App Development",
    "UI/UX Design",
    "Custom Software",
  ];
  const [activeTab, setActiveTab] = useState(0);
  const tabsRef = useRef(null);
  const tabRefs = useRef<(HTMLLIElement | null)[]>([]);
  const containerRef = useRef<HTMLUListElement>(null);
  const areTabsInView = useInView(tabsRef, { once: true, amount: 0.3 });
  const slideUpVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  const transition = { duration: 0.6, ease: "easeOut" };
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
    <div className="bg-secondary-60 font-Inter py-20">
      <Container>
        {/* Tab and Input field */}
        <div className="flex items-center justify-between gap-10 w-full">
          {/* Tab */}
          <motion.div
            ref={tabsRef}
            variants={slideUpVariants}
            initial="hidden"
            animate={areTabsInView ? "visible" : "hidden"}
            transition={{ ...transition, delay: 0.4 }}
            className="flex items-center justify-center"
          >
            <ul
              ref={containerRef}
              className="relative flex items-center bg-secondary-20/80 border border-neutral-65/30 backdrop-blur-sm rounded-lg px-2 py-1 font-Inter text-white text-sm sm:text-base max-w-[329px] md:max-w-fit overflow-x-auto"
            >
              {/* Blue Highlighter */}
              <span
                className="absolute bg-primary-20 h-[85%] transition-all duration-500 rounded-lg z-10"
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
                  className={`relative z-20 px-5 sm:px-6 py-2 transition duration-300 rounded-lg cursor-pointer font-medium text-center text-nowrap hover:text-white ${
                    activeTab === idx ? "text-white" : "text-white/60"
                  }`}
                >
                  {category}
                </li>
              ))}
            </ul>
          </motion.div>

          <div className="relative">
            <IoSearchSharp className="text-neutral-50 text-2xl absolute top-4 bottom-0 left-2" />
            <input
              type="text"
              placeholder="Search a project..."
              className={`pl-10 pr-[18px] py-[14px] rounded-lg bg-secondary-10 border border-neutral-70/30 hover:border-neutral-70 focus:outline-none focus:border-primary-20/50 transition duration-300 text-neutral-50 active:scale-95 ease-in-out`}
            />
          </div>
        </div>

        <CategorizedBlogs/>
      </Container>
    </div>
  );
};

export default OurAllBlogs;
