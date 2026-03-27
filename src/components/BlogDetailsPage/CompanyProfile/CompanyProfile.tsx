import { IMAGES } from "@/assets";
import GlowOnHover from "@/components/AnimatedButtons/GlowOnHover/GlowOnHover";
import Image from "next/image";
import React from "react";

const CompanyProfile = () => {
  return (
    <div className="bg-neutral-800/50 rounded-2xl border border-neutral-65/30 hover:border-neutral-65/50 p-5 flex flex-col gap-4">
      <div className="flex items-center justify-center">
        <Image
          src={IMAGES.prtechSolutions}
          alt={"PRTech Solutions"}
          className="cursor-pointer size-20 rounded-full"
        />
      </div>
      <div>
        <h1
          className={`text-white font-rethink text-xl md:text-2xl font-bold text-center`}
        >
          PRTech Solutions
        </h1>
        <p className="text-primary-20 font-Inter text-sm md:text-base text-center mt-2">
          Build Something Amazing!
        </p>
      </div>
      <p className="text-neutral-65 font-Inter text-sm md:text-base text-center">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat,
        sapiente.
      </p>

      <div className="flex items-center justify-center">
        <GlowOnHover
          classNames="py-1 md:py-2 lg:py-[12px]"
          // icon={ICONS.arrowTopRight}
          // alt="tio-right-icon"
        >
          Get Started
        </GlowOnHover>
      </div>
    </div>
  );
};

export default CompanyProfile;
