import { ICONS, IMAGES } from "@/assets";
import Button from "@/components/Reusable/Buttons/Button";
import Image from "next/image";
import HeroSubtitle from "./HeroSubtitle";
import TrustedBy from "./TrustedBy";
import Container from "@/components/Shared/Container/Container";

const Hero = () => {
  return (
    <div className="relative flex items-center justify-center w-full h-[500px] md:h-[700px] lg:h-[900px] bg-secondary-60 ">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={IMAGES.heroImage}
          alt="PRTech solutions hero bg"
          className=" w-full h-full object-cover"
          priority
        />
      </div>

      {/* Hero Content */}
      <Container>
        <div className="relative z-10 text-center px-4 mt-[50px] ">
          {/* Hero Subtitle */}
          <HeroSubtitle />
          {/* Hero Title and Description */}
          <div className="flex flex-col my-4 md:my-5 lg:my-[25px] ">
            <h1 className="text-center font-Rethink text-[40px] md:text-5xl lg:text-8xl bg-gradient-to-r from-primary-20 to-primary-15 bg-clip-text text-transparent not-italic font-bold leading-[1.13]">
              We craft digital
            </h1>
            <h1 className="text-center font-Rethink text-[40px] md:text-5xl lg:text-8xl text-white not-italic font-bold leading-[1.13]">
              experiences that inspire
            </h1>
          </div>
          <p className="text-white text-center font-inter text-sx md:text-lg lg:text-[22px] not-italic font-normal leading-[1.4]">
            Your partner in innovative technology solutions.
          </p>
          <div className="flex justify-center gap-4 md:gap-5 lg:gap-6 mt-[30px]">
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
          {/* Trusted by */}
          <div className="mt-[20px] md:mt-[26px] lg:mt-[30px]">
            <TrustedBy />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Hero;
