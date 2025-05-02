import ProjectSnapshots from "@/components/OurProjectsPage/ProjectSnapshots/ProjectSnapshots";
import ProjectDetails from "@/components/ProjectDetailsPage/ProjectDetails/ProjectDetails";
import ProjectDetailsHero from "@/components/ProjectDetailsPage/ProjectDetailsHero/ProjectDetailsHero";

const ProjectDetailsPage = () => {
    return (
        <div>
            <ProjectDetailsHero/>
            <ProjectDetails/>
            <ProjectSnapshots/>
        </div>
    );
};

export default ProjectDetailsPage;