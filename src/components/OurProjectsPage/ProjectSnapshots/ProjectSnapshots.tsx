"use client";
import { IMAGES } from "@/assets";
import Container from "@/components/Reusable/Container/Container";
import Image from "next/image";
import TextLoop from "react-text-loop";
import TabMockup from "./TabMockup";

const ProjectSnapshots = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full py-14 bg-secondary-60">
      <Container>
        <div>
          {/* Heading */}
          <h1 className="text-white font-rethink text-2xl md:text-3xl xl:text-5xl font-bold leading-8 md:leading-9 xl:leading-[64px] max-w-[900px] 2xl:max-w-[1000px] mx-auto text-center">
            Transforming Ideas into{" "}
            <TextLoop>
              <span className="text-primary-20">Innovations</span>
              <span className="text-primary-20">Designs</span>
              <span className="text-primary-20">Experiences</span>
            </TextLoop>
          </h1>
          {/* Subheading */}
          <p
            className={`text-neutral-30 font-Inter text-sm md:text-base leading-4 md:leading-7 max-w-[700px] mx-auto text-center mt-3`}
          >
            Discover how our work brings bold visions to life through stunning
            visuals, strategic thinking, and user-centered digital experiences.
          </p>

          <div>
            {/* Laptop Mockup screen start */}
            <div className="mt-10 md:mt-16 max-w-4xl mx-auto">
              {/* Screen Bezel Part (Keep as is) */}
              <div className="relative mx-auto border-black dark:border-gray-800 bg-black dark:bg-gray-800 border-[8px] rounded-t-xl h-[172px] max-w-[301px] md:h-[294px] md:max-w-[512px]">
                <div className="absolute left-1/2 top-0 -translate-x-1/2 rounded-b-lg w-3 h-[5px] md:w-5 md:h-[8px] bg-gray-800"></div>
                <div className="rounded-lg overflow-hidden w-full h-full bg-white dark:bg-gray-800">
                  <Image
                    src={IMAGES.project1}
                    alt=""
                    className="w-full h-full"
                    priority={true}
                  />
                </div>
              </div>
              {/* Base/Keyboard Part */}
              <div className="relative mx-auto bg-neutral-70 dark:bg-gray-700 rounded-b-xl rounded-t-sm h-[17px] max-w-[351px] md:h-[21px] md:max-w-[597px]">
                <div className="absolute left-1/2 top-0 -translate-x-1/2 rounded-b-xl w-[56px] h-[5px] md:w-[96px] md:h-[8px] bg-gray-300 dark:bg-gray-600"></div>
              </div>
            </div>
            {/* --- Laptop Mockup End --- */}

            <TabMockup/>

          </div>
        </div>
      </Container>
    </div>
  );
};

export default ProjectSnapshots;
