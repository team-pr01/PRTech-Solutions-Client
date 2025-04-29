import AboutPRTech from "@/components/AboutPRTech/AboutPRTech";
import AboutUsHero from "@/components/AboutUsPage/AboutUsHero/AboutUsHero";
import OurStory from "@/components/AboutUsPage/OurStory/OurStory";
import WhyWorkWithUs from "@/components/AboutUsPage/WhyWorkWithUs/WhyWorkWithUs";
import Banner from "@/components/HomePage/Banner/Banner";
import OurProgressBar from "@/components/HomePage/OurProgressBar/OurProgressBar";
import FAQ from "@/components/Shared/FAQ/FAQ";

const AboutUs = () => {
    return (
        <div>
           <AboutUsHero/>
           <OurStory/>
           <WhyWorkWithUs/>
           <AboutPRTech/>
           <FAQ/>
           <OurProgressBar/>
           <Banner/>
        </div>
    );
};

export default AboutUs;