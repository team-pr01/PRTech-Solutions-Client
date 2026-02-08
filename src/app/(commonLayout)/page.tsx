import Banner from "@/components/HomePage/Banner/Banner";
import Hero from "@/components/HomePage/Hero/Hero";
import OurProgressBar from "@/components/HomePage/OurProgressBar/OurProgressBar";
import OurProjects from "@/components/HomePage/OurProjects/OurProjects";
import OurServices from "@/components/HomePage/OurServices/OurServices";
import Testimonials from "@/components/HomePage/Testimonials/Testimonials";
import AboutPRTech from "@/components/Shared/AboutPRTech/AboutPRTech";
// import ProjectTimeline from "@/components/ProjectTimeline/ProjectTimeline";

export default function Home() {
  return (
    <div className="flex flex-col justify-between items-center w-full">
      <Hero/>
      <OurServices/>
      <AboutPRTech/>
      <OurProjects/>
      {/* <InAction/>  */}
      {/* <OurTechStack/> */}
      <OurProgressBar/>
      <Testimonials/>
      <Banner/>
      {/* <ProjectTimeline/> */}
    </div>
  );
}
