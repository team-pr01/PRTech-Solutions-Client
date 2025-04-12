import Hero from "@/components/HomePage/Hero/Hero";
import OurServices from "@/components/HomePage/OurServices/OurServices";


export default function Home() {
 
  return (
    <div className="flex flex-col justify-between items-center w-full">
      <Hero/>
      <OurServices/>
    </div>
  );
}
