import { GRADIENT_BG } from "@/assets";
import Heading from "@/components/Reusable/Heading/Heading";
import Image from "next/image";
import React from "react";
import ProjectCard from "./ProjectCard";
import Container from "@/components/Shared/Container/Container";
import Button from "@/components/Reusable/Buttons/Button";

const OurProjects = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full py-0 dark:bg-secondary-60 bg-neutral-15 ">
      {/* Gradient Backgrounds */}

      <Container>
      <div className="dark:hidden md:py-10 lg:py-20">
            <Heading heading={"Our Projects"} subHeading={"our projects"} />
          </div>
        <div className="relative z-10 h-full w-full flex flex-col items-center justify-center">
          <Image
            src={GRADIENT_BG.gradientDarkProjects}
            alt="PRTech Solutions Gradient Left"
            className="hidden  md:dark:block absolute top-18 lg:top-0 right-0 left-0 pointer-events-none z-0"
          />
          <Image
            src={GRADIENT_BG.gradientLightProjects}
            alt="PRTech Solutions Gradient Left"
            className="hidden  md:block absolute top-18 lg:top-0 right-0 left-0 pointer-events-none z-0"
          />
          <div className="hidden dark:block md:py-10 lg:py-20">
            <Heading heading={"Our Projects"} subHeading={"our projects"} />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6  w-full mt-[100px] px-[90px] z-50 ">
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
          </div>
          <Button
            text="View All Projects"
            className="bg-transparent border border-white mt-6 md:mt-[70px]"
            textClassName="text-white"
          />
        </div>
      </Container>
    </div>
  );
};

export default OurProjects;
