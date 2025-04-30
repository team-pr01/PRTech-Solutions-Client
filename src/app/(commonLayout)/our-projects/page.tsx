import Banner from "@/components/HomePage/Banner/Banner";
import OurAllProjects from "@/components/OurProjectsPage/OurAllProjects/OurAllProjects";
import OurProjectsHero from "@/components/OurProjectsPage/OurProjectsHero/OurProjectsHero";

const OurProjects = () => {
    return (
        <div>
            <OurProjectsHero/>
            <OurAllProjects/>
            <Banner/>
        </div>
    );
};

export default OurProjects;