import { IMAGES } from "@/assets";
import Container from "@/components/Reusable/Container/Container";
import Heading from "@/components/Reusable/Heading/Heading";
import Image from "next/image";

const OurProgressBar = () => {
  const progressBarData = [
    {
      title: "Projects Delivered",
      value: "15+",
    },
    {
      title: "Happy Clients",
      value: "15+",
    },
    {
      title: "Tech Tools Used",
      value: "20+",
    },
    {
      title: "Years of Experience",
      value: "2+",
    },
    {
      title: "Projects Delivered",
      value: "15+",
    },
  ];
  return (
    <div className="relative bg-primary-40/40 py-16 w-full">
      <Image
        className="absolute right-0 top-0 h-full w-full z-0"
        src={IMAGES.progressBarBg}
        alt=""
      />
      <Container>
        <Heading
          heading="Our Progress at a Glance"
          subHeading="Driven by results, powered by performance- here’s how we measure success."
          align="center"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 items-center justify-between mt-16">
          {progressBarData?.map((item) => (
            <div key={item?.title} className="">
              <h1 className="text-primary-20 font-Rethink text-[64px] font-bold text-center">
                {item?.value}
              </h1>
              <p
                className={`text-neutral-30 font-Inter text-sm md:text-base 2xl:text-xl leading-4 md:leading-7 text-center`}
              >
                {item?.title}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default OurProgressBar;
