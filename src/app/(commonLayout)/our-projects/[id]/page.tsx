import Banner from "@/components/HomePage/Banner/Banner";
// import ProjectSnapshots from "@/components/OurProjectsPage/ProjectSnapshots/ProjectSnapshots";
import ProjectDetails from "@/components/ProjectDetailsPage/ProjectDetails/ProjectDetails";
import ProjectDetailsHero from "@/components/ProjectDetailsPage/ProjectDetailsHero/ProjectDetailsHero";
import RelatedProjects from "@/components/ProjectDetailsPage/RelatedProjects/RelatedProjects";

const ProjectDetailsPage = () => {
    return (
        <div>
            <ProjectDetailsHero/>
            <ProjectDetails/>
            {/* <ProjectSnapshots/> */}
            <RelatedProjects/>
            <Banner/>
        </div>
    );
};

export default ProjectDetailsPage;