import { IMAGES } from "@/assets";
import Image from "next/image";
import "./OurProjects.css";

const OurProjectCard = () => {
  return (
    <div className="bg-our-projects-bg-gradient rounded-3xl w-full h-full border border-neutral-65/30 p-6">
      <div className="flex gap-7 h-[500px] font-Inter">
        <div className="w-[70%]">
          <Image
            src={IMAGES.heroImage}
            alt=""
            className="w-full h-full rounded-2xl"
            priority={true}
          />
        </div>
        <div className="w-[30%]">
          <Image
            src={IMAGES.aboutPrTech2}
            alt=""
            className="w-full h-full"
            priority={true}
          />
        </div>
      </div>
      <h1 className="text-white text-3xl md:text-4xl font-bold mb-3 mt-5">
        Shopfinity- E-commerce Website
      </h1>
      <p
        className={`text-primary-50 text-sm md:text-base 2xl:text-lg leading-4 md:leading-7 max-w-[900px]`}>
        Discover the passion, creativity, and dedication behind our
        works—crafted to deliver real value, impact, and long-lasting
        impressions.
      </p>

      <div className="flex items-center gap-5 mt-5">
        <div className="bg-secondary-20/80 border border-secondary-40 rounded-md px-4 py-2 font-medium text-sm">Next.JS</div>
        <div className="bg-secondary-20/80 border border-secondary-40 rounded-md px-4 py-2 font-medium text-sm">Express.JS</div>
      </div>
    </div>
  );
};

export default OurProjectCard;
