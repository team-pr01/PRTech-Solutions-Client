import Heading from "@/components/Reusable/Heading/Heading";
import Container from "@/components/Reusable/Container/Container";
import TechStackCard from "./TechStackCard";
import MarqueeColumn from "./MarqueeColumn";

const OurTechStack = () => {
  const cards = new Array(6).fill(null);

  return (
    <div className="w-full bg-secondary-60 overflow-hidden">
      <Container>
        <div className="flex flex-col xl:flex-row items-center gap-12 xl:gap-24">
          {/* Left Column */}
          <div className="w-full xl:w-[55%] py-14">
            <Heading
              heading="Our Tech Stack"
              subHeading="We use cutting-edge technologies to build scalable, high-performance solutions."
              align="left"
            />
            <p className="text-primary-50 text-xl font-Inter mt-6 md:mt-10 lg:mt-12 xl:mt-16 2xl:mt-[70px]">
            At the heart of our development process is a powerful and diverse tech stack. We utilize the latest technologies, frameworks, and tools to craft scalable, secure, and high-performance solutions tailored to your needs. From front-end interfaces to back-end infrastructure, every component is chosen for its reliability, efficiency, and ability to adapt with innovation. 
            <br />
            <br />
            Whether it’s web, mobile, or cloud-based systems, our stack ensures seamless integration, faster deployment, and long-term maintainability. With a constant eye on emerging trends and best practices, we build solutions that don’t just meet today’s demands — they’re ready for tomorrow’s challenges too.
              {/* Keep full text as in your code */}
            </p>
          </div>

          {/* Right Column - Marquee Tech Cards */}
          <div className="w-full xl:w-[42%] flex gap-4 xl:gap-10">
            <MarqueeColumn direction="up">
              {cards.map((_, i) => (
                <TechStackCard key={`up-${i}`} />
              ))}
            </MarqueeColumn>
            <MarqueeColumn direction="down">
              {cards.map((_, i) => (
                <TechStackCard key={`down-${i}`} />
              ))}
            </MarqueeColumn>
            <MarqueeColumn direction="up">
              {cards.map((_, i) => (
                <TechStackCard key={`up2-${i}`} />
              ))}
            </MarqueeColumn>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default OurTechStack;
