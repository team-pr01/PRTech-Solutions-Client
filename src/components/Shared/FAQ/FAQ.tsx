"use client";
import { ICONS } from "@/assets";
import Container from "@/components/Reusable/Container/Container";
import Heading from "@/components/Reusable/Heading/Heading";
import Image from "next/image";
import { useState } from "react";

const FAQ = () => {
  const accordingData = [
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

  const [isAccordingOpen, setIsAccordingOpen] = useState(0);

  const handleClick = (index) =>
    setIsAccordingOpen((prevIndex) => (prevIndex === index ? null : index));
  return (
    <div className="bg-secondary-50 font-Inter py-20 w-full overflow-hidden">
      <div className="w-full relative">
        <Container>
          <Heading
            heading="Frequently Asked Questions"
            subHeading="Find answers to common questions about our services, process, and company"
          />
          <div className=" w-full rounded-2xl p-2 flex items-center justify-center mt-12">
            <div className="bg-faq-gradient w-full max-h-[800px] overflow-y-auto rounded-2xl p-10">
              <div className="flex flex-col w-full">
                {accordingData?.map((according, index) => (
                  <article
                    key={index}
                    className={`px-12 py-8 transition-all duration-300 ${
                      isAccordingOpen === index
                        ? "bg-faq-gradient rounded-2xl border-none mt-3"
                        : "bg-none rounded-none mt-0 border-b border-neutral-90/50"
                    }`}
                  >
                    <div
                      className="flex gap-2 cursor-pointer items-center justify-between w-full"
                      onClick={() => handleClick(index)}
                    >
                      <h2 className="text-white font-medium text-xl leading-6">
                        {according.title}
                      </h2>
                      <Image
                        src={ICONS.downArrow}
                        alt=""
                        className={`transition-all duration-500 ${
                          isAccordingOpen === index &&
                          "rotate-[180deg] !text-[#3B9DF8]"
                        }`}
                      />
                    </div>
                    <div
                      className={`grid transition-all duration-300 overflow-hidden ease-in-out ${
                        isAccordingOpen === index
                          ? "grid-rows-[1fr] opacity-100 mt-4"
                          : "grid-rows-[0fr] opacity-0"
                      }`}
                    >
                      <p className="text-[15px] leading-6 text-neutral-40 overflow-hidden">
                        {according.description}
                      </p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
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
