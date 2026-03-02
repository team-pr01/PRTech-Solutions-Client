import AboutUsHero from "@/components/AboutUsPage/AboutUsHero/AboutUsHero";
import  { WhatWeDoDifferentlySection } from "@/components/AboutUsPage/DecisionFlowSection/DecisionFlowSection";
import OurExpertise from "@/components/AboutUsPage/ExpertiesSection/ExpertiesSection";
import OurStory from "@/components/AboutUsPage/OurStory/OurStory";
import ProjectTimeline from "@/components/AboutUsPage/ProjectTimeline/ProjectTimeline";
import WhyWorkWithUs from "@/components/AboutUsPage/WhyWorkWithUs/WhyWorkWithUs";
import Banner from "@/components/HomePage/Banner/Banner";
import OurProgressBar from "@/components/HomePage/OurProgressBar/OurProgressBar";
import AboutPRTech from "@/components/Shared/AboutPRTech/AboutPRTech";
import FAQ from "@/components/Shared/FAQ/FAQ";

const AboutUs = () => {
    return (
        <div>
           <AboutUsHero/>
           <WhatWeDoDifferentlySection/>
           <AboutPRTech/>
           <WhyWorkWithUs/>
           <ProjectTimeline/>
           <OurExpertise/>
           {/* <OurStory/> */}
           <FAQ/>
           <OurProgressBar/>
           <Banner/>
        </div>
    );
};

export default AboutUs;