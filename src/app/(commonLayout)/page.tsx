import Banner from "@/components/HomePage/Banner/Banner";
import FeasibilityReview from "@/components/HomePage/FeasibilityReview/FeasibilityReview";
import Hero from "@/components/HomePage/Hero/Hero";
import InAction from "@/components/HomePage/InAction/InAction";
import OurProgressBar from "@/components/HomePage/OurProgressBar/OurProgressBar";
import OurProjects from "@/components/HomePage/OurProjects/OurProjects";
import OurTechStack from "@/components/HomePage/OurTechStack/OurTechStack";
import ProjectTimeline from "@/components/HomePage/ProjectTimeline/ProjectTimeline";
import AboutPRTech from "@/components/Shared/AboutPRTech/AboutPRTech";
// import ProjectTimeline from "@/components/ProjectTimeline/ProjectTimeline";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Web & App Development Services for Scalable Business Growth",
  description:
    "Conversion-focused web and app development services with feasibility-first planning, performance optimization, and scalable architecture. Work directly with engineers, not sales reps.",
  keywords: [
    "web development services",
    "custom web development",
    "next js development",
    "react native development",
    "Flutter app development",
    "react development services",
    "business website development",
  ],
  openGraph: {
    title: "Web Development Services for Scalable Business Growth",
    description:
      "We design and build high-performance websites and applications that convert, scale, and last.",
    url: "https://prtech-solutions.com",
    images: [
      {
        url: "/og/favicon.png",
        width: 1200,
        height: 630,
        alt: "PRTech Solutions – Web Development Services",
      },
    ],
  },
  alternates: {
    canonical: "https://prtech-solutions.com",
  },
};

export default function Home() {
  return (
    <div className="flex flex-col justify-between items-center w-full">
   <Hero/>
      {/* <OurServices/> */}
      <FeasibilityReview/>
      <AboutPRTech/>
      <OurProjects/>
      <InAction/> 
      <OurTechStack/>
      <OurProgressBar/>
      {/* <USPSection/> */}
      {/* <Testimonials/> */}
      <Banner/>
      <ProjectTimeline/>
    </div>
  );
}
