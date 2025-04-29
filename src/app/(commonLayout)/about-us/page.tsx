import AboutPRTech from "@/components/AboutPRTech/AboutPRTech";
import AboutUsHero from "@/components/AboutUsPage/AboutUsHero/AboutUsHero";
import OurStory from "@/components/AboutUsPage/OurStory/OurStory";
import WhyWorkWithUs from "@/components/AboutUsPage/WhyWorkWithUs/WhyWorkWithUs";
import FAQ from "@/components/Shared/FAQ/FAQ";

const AboutUs = () => {
    return (
        <div>
           <AboutUsHero/>
           <OurStory/>
           <WhyWorkWithUs/>
           <AboutPRTech/>
           <FAQ/>
        </div>
    );
};

export default AboutUs;