import { ICONS, IMAGES } from "@/assets";
import Button from "@/components/Reusable/Buttons/Button";
import Image from "next/image";
import React from "react";

const ProjectCard = () => {
  return (
    <div className="border border-primary-50 rounded-lg flex flex-col items-center md:rounded-2xl w-full bg-secondary-50">
      <Image
        className="h-[228px] lg:h-[340px] rounded-t-lg md:rounded-t-2xl"
        src={IMAGES.heroImage}
        alt={"PRTech Solutions"}
      />
      <div className="flex flex-col w-full items-start justify-center px-4 md:p-8">
        <div className="flex flex-col-reverse md:flex-row w-full items-center justify-between gap-2 md:gap-3 lg:gap-5">
          <h1 className="text-white font-Inter text-[20px] md:text-[32px] font-bold leading-[1.4]">
            Project Name
          </h1>
          <div className="bg-secondary-50 border border-primary-50 px-8 py-[7px] text-lg font-Inter font-semibold text-white rounded-4xl">
            Website
          </div>
        </div>

        <p className="text-primary-50 w-[90%] font-Inter font-medium leading-[1.4] mt-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ut
          erat ac ligula facilisis commodo.
        </p>

        <div className="flex flex-row items-center justify-end w-full mt-7">
          {/* <Button
              icon={ICONS.topRightWhiteArrow}
              text="Learn More"
              iconPosition="right"
              className="bg-whites-50 border border-transparent"
              textClassName="hidden dark:block text-white text-xs md:text-[15px] lg:text-base"
            /> */}
          {/* px-10 py-4 bg-whites-50/30 rounded */}
          <button className="flex items-center gap-3  text-white font-medium font-Inter cursor-pointer">
            Learn More
            <Image src={ICONS.topRightWhiteArrow} alt="" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
