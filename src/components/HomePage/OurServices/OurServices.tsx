import { GRADIENT_BG } from "@/assets";
import Heading from "@/components/Reusable/Heading/Heading";
import Container from "@/components/Shared/Container/Container";
import Image from "next/image";
import React from "react";

const OurServices = () => {
  return (
    <div className="relative w-full h-screen flex flex-col justify-center items-center py-20 dark:bg-secondary-50 overflow-hidden">
      {/* Gradient Backgrounds */}
      <Image
        src={GRADIENT_BG.gradientServiceLeft}
        alt="PRTech Solutions Gradient Left"
        className="absolute bottom-20 left-0 h-[380px] w-[200px] pointer-events-none select-none"
      />
      <Image
        src={GRADIENT_BG.gradientServiceRight}
        alt="PRTech Solutions Gradient Right"
        className="absolute top-20 right-0 h-[460px] w-[250px] pointer-events-none select-none"
      />

      {/* Content goes here */}
      <Container>
        <div className="flex flex-col items-center justify-center text-center">
          <Heading heading="Our Service" subHeading="our services"/>
        </div>

      </Container>
    </div>
  );
};

export default OurServices;
