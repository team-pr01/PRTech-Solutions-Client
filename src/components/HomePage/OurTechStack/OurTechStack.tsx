import Heading from "@/components/Reusable/Heading/Heading";
import Container from "@/components/Reusable/Container/Container";
import TechStackCard from "./TechStackCard";
import MarqueeColumn from "./MarqueeColumn";
import Image from "next/image";
import { ANIMATEDICONS, ICONS, IMAGES } from "@/assets";
import Link from "next/link";
import FillBgOnHover from "@/components/AnimatedButtons/FillBgOnHover/FillBgOnHover";
import { CgArrowTopRight } from "react-icons/cg";

const OurTechStack = () => {
  const webTechnologies = [
    { technologyName: "React.JS", icon: ICONS.reactJs },
    { technologyName: "Next.JS", icon: ICONS.nextJs },
    { technologyName: "JavaScript", icon: ICONS.javascript },
    { technologyName: "TypeScript", icon: ICONS.typescript },
    { technologyName: "Node.JS", icon: ICONS.nodeJs },
    { technologyName: "Express.JS", icon: ICONS.expressJs },
    { technologyName: "Django", icon: ICONS.django },
    { technologyName: "HTML", icon: ICONS.html },
    { technologyName: "CSS", icon: ICONS.css },
    { technologyName: "Tailwind CSS", icon: ICONS.tailwindCss },
    { technologyName: "Redux", icon: ICONS.redux },
    { technologyName: "REST API", icon: ICONS.restApi },
  ];

  const androidTechnologies = [
    { technologyName: "Android Studio", icon: ICONS.androidStudio },
    { technologyName: "React Native", icon: ICONS.reactNative },
    { technologyName: "Swift (IOS)", icon: ICONS.swift },
    { technologyName: "Java", icon: ICONS.java },
    { technologyName: "Firebase", icon: ICONS.firebase },
    { technologyName: "Expo", icon: ICONS.expo },
  ];

  const tools = [
    { technologyName: "Docker", icon: ICONS.docker },
    { technologyName: "AWS", icon: ICONS.aws },
    { technologyName: "Vercel", icon: ICONS.vercel },
    { technologyName: "MongoDB", icon: ICONS.mongoDb },
    { technologyName: "PostgreSQL", icon: ICONS.postgresql },
    { technologyName: "Prisma", icon: ICONS.prisma },
  ];

  return (
    <div className="w-full bg-secondary-60 overflow-hidden relative">
      <div className="bg-primary-20 absolute top-36 bottom-0 left-0 z-0 size-[239px] rounded-full opacity-40 blur-[150px]"></div>
      <Image
        src={IMAGES.techStackShadow}
        alt=""
        className=" absolute top-0 right-[270px] w-[550px] h-[150px] z-10"
      />
      <Image
        src={IMAGES.techStackShadow}
        alt=""
        className=" absolute bottom-0 right-[270px] w-[550px] h-[150px] z-10 rotate-180"
      />
      <Container>
        <div className="flex flex-col xl:flex-row items-center gap-12 xl:gap-24">
          {/* Left Column */}
          <div className="w-full xl:w-[55%] py-14">
            <Image src={ANIMATEDICONS.techStack} alt="" className="size-28" />
            <Heading
              heading="Our Tech Stack"
              subHeading="We use cutting-edge technologies to build scalable, high-performance solutions."
              align="left"
            />
            <p className="text-primary-50 text-lg font-Inter mt-6 md:mt-10 lg:mt-12 xl:mt-10 mb-10">
              At the heart of our development process is a powerful and diverse
              tech stack. We utilize the latest technologies, frameworks, and
              tools to craft scalable, secure, and high-performance solutions
              tailored to your needs. From front-end interfaces to back-end
              infrastructure, every component is chosen for its reliability,
              efficiency, and ability to adapt with innovation.
              <br />
              <br />
              Whether it’s web, mobile, or cloud-based systems, our stack
              ensures seamless integration, faster deployment, and long-term
              maintainability. With a constant eye on emerging trends and best
              practices, we build solutions that don’t just meet today’s demands
              — they’re ready for tomorrow’s challenges too.
              {/* Keep full text as in your code */}
            </p>
            <Link href={"/about-us"} className="">
              <FillBgOnHover classNames="w-fit group bg-white text-secondary-60 group-hover:text-white flex items-center gap-1">
                More About Us
                <CgArrowTopRight className="text-2xl group-hover:rotate-45 transition-all duration-500 group-hover:translate-x-2" />
              </FillBgOnHover>
            </Link>
          </div>

          {/* Right Column - Marquee Tech Cards */}
          <div className="w-full xl:w-[42%] flex gap-4 xl:gap-10">
            <MarqueeColumn direction="up">
              {webTechnologies.map((item, i) => (
                <TechStackCard key={`up-${i}`} {...item} />
              ))}
            </MarqueeColumn>
            <MarqueeColumn direction="down" height="h-[680px]">
              {androidTechnologies.map((item, i) => (
                <TechStackCard key={`down-${i}`} {...item} />
              ))}
            </MarqueeColumn>
            <MarqueeColumn direction="up">
              {tools.map((item, i) => (
                <TechStackCard key={`up2-${i}`} {...item} />
              ))}
            </MarqueeColumn>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default OurTechStack;
