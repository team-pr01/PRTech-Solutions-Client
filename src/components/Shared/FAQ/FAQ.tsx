"use client";
import { ICONS } from "@/assets";
import Container from "@/components/Reusable/Container/Container";
import Heading from "@/components/Reusable/Heading/Heading";
import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";

interface IAccordingItem {
  title: string;
  description: string;
}

// Define animation variants
const headingVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const listVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const FAQ = () => {
  const accordingData: IAccordingItem[] = [
    {
      title: "What is the purpose of wireframing in design?",
      description:
        "Wireframing outlines the basic structure and layout of a design, serving as a visual guide before detailed development.",
    },
    {
      title: "Why is user-centered design important?",
      description:
        "User-centered design ensures products meet the needs and preferences of the end-users, enhancing usability and satisfaction.",
    },
    {
      title: "What role does contrast play in graphic design?",
      description:
        "Contrast in graphic design emphasizes differences, making elements stand out and improving visual hierarchy.",
    },

    {
      title: `Define the term "responsive design" in web development.`,
      description:
        "Responsive design ensures web pages adapt to various screen sizes, providing an optimal user experience on different devices.",
    },

    {
      title: "What is the significance of color theory in design?",
      description:
        "Color theory guides the selection and combination of colors to evoke specific emotions, enhance readability, and create visually appealing designs.",
    },

    {
      title: `Define the term "responsive design" in web development.`,
      description:
        "Responsive design ensures web pages adapt to various screen sizes, providing an optimal user experience on different devices.",
    },

    {
      title: "What is the significance of color theory in design?",
      description:
        "Color theory guides the selection and combination of colors to evoke specific emotions, enhance readability, and create visually appealing designs.",
    },
  ];

  const [isAccordingOpen, setIsAccordingOpen] = useState<number | null>(0);
  const handleClick = (index: number): void =>
    setIsAccordingOpen((prevIndex) => (prevIndex === index ? null : index));

  return (
    <div className="bg-secondary-50 font-Inter py-20 w-full overflow-hidden">
      <div className="w-full relative">
        <Container>
          <motion.div
            variants={headingVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <Heading
              heading="Frequently Asked Questions"
              subHeading="Find answers to common questions about our services, process, and company"
            />
          </motion.div>

          <div className="w-full rounded-2xl p-2 flex items-center justify-center mt-12">
            <motion.div
              className="bg-faq-gradient w-full max-h-[800px] overflow-y-auto rounded-2xl p-4 lg:p-10"
              variants={listVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
            >
                {/* Mapping faq data */}
              <div className="flex flex-col w-full">
                {accordingData?.map((according, index) => (
                  <motion.article
                    key={index}
                    variants={itemVariants}
                    className={`px-5 lg:px-12 py-5 lg:py-8 transition-all duration-300 ${
                      isAccordingOpen === index
                        ? "bg-faq-gradient rounded-2xl border-none mt-3"
                        : "bg-transparent rounded-none mt-0 border-b border-neutral-90/50"
                    }`}
                  >
                    <div
                      className="flex gap-2 cursor-pointer items-center justify-between w-full"
                      onClick={() => handleClick(index)}
                    >
                      <h2 className="text-white font-medium text-base md:text-xl leading-6">
                        {according.title}
                      </h2>
                      <Image
                        src={ICONS.downArrow}
                        alt=""
                        className={`transition-all duration-500 ${
                          isAccordingOpen === index && "rotate-[180deg]"
                        } size-6`}
                      />
                    </div>
                    <div
                      className={`grid transition-all duration-300 overflow-hidden ease-in-out ${
                        isAccordingOpen === index
                          ? "grid-rows-[1fr] opacity-100 mt-4"
                          : "grid-rows-[0fr] opacity-0"
                      }`}
                    >
                      <p className="text-xs md:text-[15px] leading-6 text-neutral-40 overflow-hidden">
                        {according.description}
                      </p>
                    </div>
                  </motion.article>
                ))}
              </div>
            </motion.div>
          </div>

          <div className="flex flex-col xl:flex-row justify-between mt-6 md:mt-[70px] gap-0 xl:gap-10 2xl:gap-0"></div>
        </Container>
        {/* Bg gradient */}
        <div className="bg-primary-20 absolute top-36 bottom-0 right-0 z-0 w-[239px] h-[318px] rounded-full opacity-30 blur-[150px]"></div>
        <div className="bg-primary-20 absolute bottom-0 left-0 z-0 w-[239px] h-[318px] rounded-full opacity-30 blur-[150px]"></div>
      </div>
    </div>
  );
};

export default FAQ;
