import { ICONS, IMAGES } from "@/assets";
import Image from "next/image";
import "./OurProjects.css";
import GlowOnHover from "@/components/AnimatedButtons/GlowOnHover/GlowOnHover";
import Link from "next/link";

const OurProjectCard = ({
  cardDirection,
}: {
  cardDirection: "left" | "right";
}) => {
  return (
    <div className="bg-our-projects-bg-gradient rounded-3xl w-full h-full border border-neutral-65/30 p-3 xl:p-6 relative z-10 ">
      {/* Bg gradients */}
      <div className="bg-primary-20 absolute bottom-4 left-0 z-0 size-[300px] overflow-hidden rounded-full opacity-10 blur-2xl"></div>
      <div className="bg-primary-20 absolute bottom-0 right-0 top-6 z-[-1] size-[200px] rounded-full opacity-20 blur-2xl"></div>
      <div
        className={`hidden xl:flex gap-7 h-[500px] font-Inter z-[] ${
          cardDirection === "left" ? "flex-row-reverse" : "flex-row"
        }`}
      >
        <div className="w-[72%]">
          <Image
            src={IMAGES.project1}
            alt=""
            className="w-full h-full rounded-2xl"
            priority={true}
          />
        </div>
        <div className="w-[28%]">
          <Image
            src={IMAGES.project2}
            alt=""
            className="w-full h-full rounded-2xl"
            priority={true}
          />
        </div>
      </div>

      <Image
        src={IMAGES.project2}
        alt=""
        className="w-full h-full rounded-2xl block xl:hidden"
        priority={true}
      />
      <h1 className="text-white text-2xl md:text-3xl xl:text-4xl font-bold mb-3 mt-5">
        PRTech Solutions -{" "}
        <span className="font- text-xl md:text-2xl xl:text-3xl text-neutral-40">
          Modern Web Design & Development Agency
        </span>
      </h1>
      <p
        className={`text-primary-50 text-sm md:text-base 2xl:text-lg leading-4 md:leading-7 max-w-[900px]`}
      >
        Discover the passion, creativity, and dedication behind our
        works—crafted to deliver real value, impact, and long-lasting
        impressions.
      </p>

      <div className="flex items-center justify-between mt-5">
        <div className="flex items-center gap-3 md:gap-5">
          <div className="bg-secondary-20/80 border border-secondary-40 rounded-md px-3 md:px-4 py-1 md:py-2 font-medium text-[10px] md:text-sm text-neutral-40">
            Next.JS
          </div>
          <div className="bg-secondary-20/80 border border-secondary-40 rounded-md px-3 md:px-4 py-1 md:py-2 font-medium text-[10px] md:text-sm text-neutral-40">
            Express.JS
          </div>
        </div>

        <div className="hidden xl:block">
          <GlowOnHover
            classNames="px-2 md:px-3 lg:px-5 py-2 md:py-3 lg:py-3 font-Inter text-white text-sm sm:text-base "
            icon={ICONS.arrowTopRight}
            alt="tio-right-icon"
          >
            Learn More
          </GlowOnHover>
        </div>
        <Link
          href="/projects"
          className="size-10 rounded-full flex xl:hidden items-center justify-center bg-primary-20"
        >
          <Image src={ICONS.arrowTopRight} alt="top-right-icon" />
        </Link>
      </div>
    </div>
  );
};

export default OurProjectCard;
