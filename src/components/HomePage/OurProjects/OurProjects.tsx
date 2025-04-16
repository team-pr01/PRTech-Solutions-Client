import { GRADIENT_BG } from "@/assets";
import Heading from "@/components/Reusable/Heading/Heading";
import Image from "next/image";
import React from "react";
import ProjectCard from "./ProjectCard";
import Button from "@/components/Reusable/Buttons/Button";
import Container from "@/components/Reusable/Container/Container";

const OurProjects = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full pb-14 bg-secondary-60 ">
      {/* Gradient Backgrounds */}

      <Container>
      <div className="dark:hidden md:py-10 lg:py-20 mb-10">
            <Heading heading={"Our Projects"} subHeading={"our projects"} />
          </div>
        <div className="relative z-10 h-full w-full flex flex-col items-center justify-center">
           {/* Gradient Backgrounds for dark mode */}
          <Image
            src={GRADIENT_BG.gradientDarkProjects}
            alt="PRTech Solutions Gradient Left"
            className="absolute -top-20 pointer-events-none z-0"
          />
           {/* Gradient Backgrounds for light mode */}
          {/* <Image
            src={GRADIENT_BG.gradientLightProjects}
            alt="PRTech Solutions Gradient Left"
            className="dark:hidden md:block absolute top-18 lg:top-0 right-0 left-0 pointer-events-none z-0"
          /> */}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full px-[90px] z-50">
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
          </div>
          <Button
            text="View All Projects"
            className="bg-primary-20 dark:bg-transparent lg:px-[35px] border border-white mt-6 md:mt-[70px]"
            textClassName="text-white"
          />
        </div>
      </Container>
    </div>
  );
};

export default OurProjects;
