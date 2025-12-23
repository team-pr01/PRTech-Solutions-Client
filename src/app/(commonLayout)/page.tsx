import Banner from "@/components/HomePage/Banner/Banner";
import FeasibilityReview from "@/components/HomePage/FeasibilityReview/FeasibilityReview";
import Hero from "@/components/HomePage/Hero/Hero";
import InAction from "@/components/HomePage/InAction/InAction";
import OurProgressBar from "@/components/HomePage/OurProgressBar/OurProgressBar";
import OurProjects from "@/components/HomePage/OurProjects/OurProjects";
import ProjectTimeline from "@/components/ProjectTimeline/ProjectTimeline";
// import ProjectTimeline from "@/components/ProjectTimeline/ProjectTimeline";

export default function Home() {
  return (
    <div className="flex flex-col justify-between items-center w-full">
   <Hero/>
      {/* <OurServices/> */}
      <FeasibilityReview/>
      <OurProjects/>
      <InAction/> 
      {/* <OurTechStack/> */}
      <OurProgressBar/>
      {/* <Testimonials/> */}
      <Banner/>
      <ProjectTimeline/>
    </div>
  );
}
