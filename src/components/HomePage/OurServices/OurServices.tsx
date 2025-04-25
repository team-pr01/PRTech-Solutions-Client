import { GRADIENT_BG, IMAGES } from "@/assets";
import Heading from "@/components/Reusable/Heading/Heading";

import Image from "next/image";
import React from "react";
import ServiceAccordion from "./ServicesAccordion";
import Container from "@/components/Reusable/Container/Container";

const OurServices = () => {
  return (
    <div className="relative w-full h-full flex flex-col justify-center items-center py-20 bg-secondary-50 overflow-hidden">
      {/* Gradient Backgrounds */}
      <Image
        src={GRADIENT_BG.gradientServiceLeft}
        alt="PRTech Solutions Gradient Left"
        className=" absolute bottom-20 left-0 h-[380px] w-[200px] pointer-events-none select-none z-0"
      />
      <Image
        src={GRADIENT_BG.gradientServiceRight}
        alt="PRTech Solutions Gradient Right"
        className=" absolute top-20 right-0 h-[460px] w-[250px] pointer-events-none select-none z-0"
      />

      {/* Content */}
      <div className="relative z-10 w-full">
        <Container>
          <div className="flex flex-col items-center justify-center">
            {/* <Image src={ANIMATEDICONS.servicesGif} alt="" className="size-28" /> */}
            <Heading
              heading="Our Service"
              subHeading="We offer a comprehensive range of digital services to help your business thrive online."
            />
            <div className="grid grid-cols-1 lg:grid-cols-[40%_55%] gap-5 md:gap-9 3xl:gap-14 mt-10 md:mt-12 xl:mt-16 2xl:mt-[70px] w-full">
              {/* Left Column */}
              <Image
                src={IMAGES.services}
                alt="PRTech Solutions Services"
                className="w-full h-full object-center rounded-3xl 3xl:rounded-3xl"
              />
              {/* Right Column */}
              <ServiceAccordion />
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default OurServices;
