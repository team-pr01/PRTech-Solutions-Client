import { ICONS, IMAGES } from "@/assets";
import Button from "@/components/Reusable/Buttons/Button";
import Image from "next/image";
import React from "react";

const ProjectCard = () => {
  return (
    <div className="border border-primary-50 rounded-lg flex flex-col items-center  md:rounded-2xl w-full h-full dark:bg-secondary-50 bg-white ">
      <Image
        className="h-[228px] lg:h-[340px] rounded-t-lg md:rounded-t-2xl"
        src={IMAGES.heroImage}
        alt={"PRTech Solutions"}
      />
      <div className="flex flex-col w-full items-start justify-center px-4 md:p-8">
        <div className="flex flex-col-reverse md:flex-row w-full items-center justify-between gap-2 md:gap-3 lg:gap-5">
          <h1 className=" text-black dark:text-white font-inter text-[20px] md:text-[32px] font-bold leading-[1.4]">
            Project Name
          </h1>
          <Button
            text="Website"
            className="bg-transparent border border-primary-50 dark:border-white "
            textClassName="text-black dark:text-white lg:px-[35px]"
          />
        </div>

        <p className="text-neutral-65 dark:text-primary-50 w-[85%] md:w-full font-inter  pt-6 pb-8 text-xs md:text-xl font-medium leading-[1.4]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ut
          erat ac ligula facilisis commodo.
          adipiscing elit. Quisque ut
          erat ac ligula facilisis commodo.
        </p>
        <div className="flex flex-row items-center justify-end w-full ">
          <Button
              icon={ICONS.topRightWhiteArrow}
              text="Learn More"
              iconPosition="right"
              className="bg-transparent border border-transparent"
              textClassName="hidden dark:block text-white text-xs md:text-[15px] lg:text-base"
            />
            <Button
              icon={ICONS.topRightBlackArrow}
              text="Learn More"
              iconPosition="right"
              className="bg-transparent border border-transparent"
              textClassName="dark:hidden text-Black text-xs md:text-[15px] lg:text-base"
            />
            </div>
      </div>
    </div>
  );
};

export default ProjectCard;
