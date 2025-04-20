
import AboutPRTech from "@/components/AboutPRTech/AboutPRTech";
import Banner from "@/components/HomePage/Banner/Banner";
import Hero from "@/components/HomePage/Hero/Hero";
import InAction from "@/components/HomePage/InAction/InAction";
import OurProgressBar from "@/components/HomePage/OurProgressBar/OurProgressBar";
import OurProjects from "@/components/HomePage/OurProjects/OurProjects";
import OurServices from "@/components/HomePage/OurServices/OurServices";
// import ProjectTimeline from "@/components/ProjectTimeline/ProjectTimeline";

export default function Home() {
  return (
    <div className="flex flex-col justify-between items-center w-full">
      <Hero/>
      <OurServices/>
      <AboutPRTech/>
      <OurProjects/>
      <InAction/> 
      {/* <OurTechStack/> */}
      <OurProgressBar/>
      <Banner/>
      {/* <ProjectTimeline/> */}
    </div>
  );
}
