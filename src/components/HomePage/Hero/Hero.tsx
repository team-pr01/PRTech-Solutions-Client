import { ICONS, IMAGES } from "@/assets";
import Button from "@/components/Reusable/Buttons/Button";
import Image from "next/image";
import HeroSubtitle from "./HeroSubtitle";
import TrustedBy from "./TrustedBy";
import Container from "@/components/Reusable/Container/Container";
import AnimatedButtton from "@/components/Shared/Navbar/AnimatedButtton";

const Hero = () => {
  return (
    <div className="h-[600px] md:h-[700px] lg:h-[800px] 2xl:h-[900px] bg-secondary-60 w-full">
      <div className="relative flex items-center justify-center w-full h-full">
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
        <div className="relative z-10 text-center px-4 mt-[50px] lg:mt-[100px] 2xl:mt-[50px]">
          {/* Hero Subtitle */}
          <HeroSubtitle />
          {/* Hero Title and Description */}
          <h1 className="text-center font-Rethink text-[40px] md:text-5xl lg:text-7xl 2xl:text-[96px] text-white font-bold leading-10 md:leading-[60px] lg:leading-[80px] 2xl:leading-[100px] mt-4 md:mt-6 text-balance">
            <span className="bg-gradient-to-r from-primary-20 to-primary-15 bg-clip-text text-transparent">
              We craft digital
            </span>{" "}
            experiences that inspire
          </h1>
          <p className="text-white/80 text-center font-Inter text-xs md:text-md lg:text-xl 3xl:text-[22px] font-normal leading-4 md:leading-5 lg:leading-8 2xl:leading-[30px] mt-4 lg:mt-6 max-w-[343px] lg:max-w-[520px] mx-auto">
            Award-winning digital agency helping brands stand out in the digital
            landscape.
          </p>
          <div className="flex justify-center gap-4 md:gap-5 3xl:gap-6 mt-8">
            <Button
              icon={ICONS.topRightBlackArrow}
              text="Get Started"
              iconPosition="right"
              className="bg-white "
              />
              <AnimatedButtton/>
            {/* <Button
              text="View Our Work"
              className="bg-transparent border border-white"
              textClassName="text-white lg:px-[35px]"
            /> */}
          </div>
          
          {/* Trusted by */}
          <div className="mt-4 lg:mt-[50px]">
            <TrustedBy />
          </div>
        </div>
      </Container>
    </div>
    </div>
  );
};

export default Hero;
