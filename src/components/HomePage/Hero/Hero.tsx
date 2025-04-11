import { ICONS, IMAGES } from "@/assets";
import Button from "@/components/Reusable/Buttons/Button";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="relative flex items-center justify-center w-full h-full max-h-[988px] bg-secondary-60 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={IMAGES.heroImage}
          alt="prtech solutions hero bg"
          className="w-full h-full object-cover"
          priority
        />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 text-center px-4 ">
        <div className="flex flex-col my-[25px]">
          {" "}
          <h1 className="text-center font-Rethink text-[40px] md:text-6xl lg:text-8xl  bg-gradient-to-r from-[#06A0ED] to-[#6ECAF8] bg-clip-text text-transparent not-italic font-bold leading-[1.15]">
            We craft digital
          </h1>
          <h1 className="text-center font-Rethink text-[40px] md:text-6xl lg:text-8xl text-white not-italic font-bold leading-[1]">
            experiences that inspire
          </h1>
        </div>
        <p className="text-white text-center font-inter text-sx md:text-lg lg:text-[22px] not-italic font-normal leading-[1.4]">
          Your partner in innovative technology solutions.
        </p>
        <div className="flex justify-center gap-6 mt-[30px]">
          <Button
            icon={ICONS.topRightBlackArrow}
            text="Get Started"
            iconPosition="right"
            className="bg-white"
          />
          <Button
            text="View Our Work"
            className="bg-transparent  px-5 lg:px-[35px]  border  border-white"
            textClassName="text-white "
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
