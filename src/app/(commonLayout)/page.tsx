import Banner from "@/components/HomePage/Banner/Banner";
import Hero from "@/components/HomePage/Hero/Hero";
import InAction from "@/components/HomePage/InAction/InAction";
import OurProgressBar from "@/components/HomePage/OurProgressBar/OurProgressBar";
import OurProjects from "@/components/HomePage/OurProjects/OurProjects";
import OurServices from "@/components/HomePage/OurServices/OurServices";

export default function Home() {
  return (
    <div className="flex flex-col justify-between items-center w-full">
      <Hero/>
      <OurServices/>
      <OurProjects/>
      <InAction/> 
      {/* <OurTechStack/> */}
      <OurProgressBar/>
      <Banner/>
    </div>
  );
}
