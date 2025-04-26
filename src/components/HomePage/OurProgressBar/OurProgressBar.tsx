"use client";
import { useEffect, useRef, useState } from "react";
import { ANIMATEDICONS, IMAGES } from "@/assets";
import Container from "@/components/Reusable/Container/Container";
import Heading from "@/components/Reusable/Heading/Heading";
import Image from "next/image";
import CountUp from "react-countup";

const OurProgressBar = () => {
  const progressBarData = [
    { title: "Projects Delivered", value: "15" },
    { title: "Happy Clients", value: "15" },
    { title: "Tech Tools Used", value: "20" },
    { title: "Years of Experience", value: "2" },
    { title: "Success Ratio", value: "98" },
  ];

  const [inView, setInView] = useState(false);
  const sectionRef = useRef<HTMLDivElement | null>(null);

  // 👇 Native Intersection Observer setup
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setInView(entry.isIntersecting);
        });
      },
      {
        threshold: 0.5,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={sectionRef}
      className="relative bg-primary-40/40 py-16 w-full overflow-hidden"
    >
      <Image
        className="absolute right-0 top-0 h-full w-full z-0"
        src={IMAGES.progressBarBg}
        alt=""
      />
      <Container>
        <Image src={ANIMATEDICONS.progressGif} alt="" className="size-28 justify-self-center mb-10" />
        <Heading
          heading="Our Progress at a Glance"
          subHeading="Driven by results, powered by performance – here’s how we measure success."
          align="center"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 items-center justify-between mt-16 z-10 relative">
          {progressBarData.map((item) => (
            <div key={item.title}>
              <h1 className="text-primary-20 font-Rethink text-[64px] font-bold text-center">
                {inView ? (
                  <CountUp end={Number(item.value)} />
                ) : (
                  0
                )}
                {item.title === "Success Ratio" ? "%" : "+"}
              </h1>
              <p className="text-neutral-30 font-Inter text-sm md:text-base 2xl:text-xl leading-4 md:leading-7 text-center">
                {item.title}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default OurProgressBar;
