"use client";
import Container from "@/components/Reusable/Container/Container";
import TextLoop from "react-text-loop";
import TabMockup from "./TabMockup";
import MobileMockup from "./MobileMockup";
import DesktopMockup from "./DesktopMockup";
import LaptopMockup from "./LaptopMockup";

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
            <LaptopMockup/>
            <TabMockup/>
            <MobileMockup/>
            <DesktopMockup/>

          </div>
        </div>
      </Container>
    </div>
  );
};

export default ProjectSnapshots;
