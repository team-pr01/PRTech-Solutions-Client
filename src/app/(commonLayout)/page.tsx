import Hero from "@/components/HomePage/Hero/Hero";
import InAction from "@/components/HomePage/InAction/InAction";
import OurProjects from "@/components/HomePage/OurProjects/OurProjects";
import OurServices from "@/components/HomePage/OurServices/OurServices";
import OurTechStack from "@/components/HomePage/OurTechStack/OurTechStack";

export default function Home() {
  return (
    <div className="flex flex-col justify-between items-center w-full">
      <Hero/>
      <OurServices/>
      <OurProjects/>
      <InAction/> 
      {/* <OurTechStack/> */}
    </div>
  );
}
