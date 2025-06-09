import Banner from "@/components/HomePage/Banner/Banner";
import AllServices from "@/components/OurServicesPage/AllServices/AllServices";
import OurServicesHero from "@/components/OurServicesPage/OurServicesHero/OurServicesHero";

const OurServices = () => {
  return (
    <div>
      <OurServicesHero />
      <AllServices/>
      <Banner/>
    </div>
  );
};

export default OurServices;
