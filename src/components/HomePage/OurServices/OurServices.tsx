import { GRADIENT_BG, IMAGES } from "@/assets";
import Heading from "@/components/Reusable/Heading/Heading";
import Container from "@/components/Shared/Container/Container";

import Image from "next/image";
import React from "react";
import ServiceAccordion from "./ServicesAccordion";

const OurServices = () => {
  return (
    <div className="relative w-full  h-full flex flex-col justify-center items-center py-20 dark:bg-secondary-50 overflow-hidden">
      {/* Gradient Backgrounds */}
      <Image
        src={GRADIENT_BG.gradientServiceLeft}
        alt="PRTech Solutions Gradient Left"
        className="hidden dark:block absolute bottom-20 left-0 h-[380px] w-[200px] pointer-events-none select-none z-0"
      />
      <Image
        src={GRADIENT_BG.gradientServiceRight}
        alt="PRTech Solutions Gradient Right"
        className="hidden dark:block absolute top-20 right-0 h-[460px] w-[250px] pointer-events-none select-none z-0"
      />

      {/* Content */}
      <div className="relative z-10">
        <Container>
          <div className="flex flex-col items-center justify-center">
            <div className="flex flex-col items-center justify-center text-center mb-10">
              <Heading heading="Our Service" subHeading="our services" />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-[40%_55%] gap-5 md:gap-9 3xl:gap-14">
              {/* Left Column */}
              <div>
                <Image
                  src={IMAGES.services}
                  alt="PRTech Solutions Services"
                  className="w-full h-full object-center rounded-3xl 3xl:rounded-3xl"
                />
              </div>

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
