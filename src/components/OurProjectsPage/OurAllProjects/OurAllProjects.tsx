import OurProjectCard from "../../HomePage/OurProjects/OurProjectCard"
import Container from "@/components/Reusable/Container/Container";

const OurAllProjects = () => {
    return (
        <div className="font-Inter py-20 w-full">
            <Container>
            <div className="flex flex-col gap-6 lg:gap-10 mt-7 w-full">
              {[1, 2, 3, 4, 5].map((project, index) => (
                <OurProjectCard
                  key={index}
                  index={index}
                  cardDirection={index % 2 !== 0 ? "left" : "right"}
                />
              ))}
            </div>
            </Container>
        </div>
    );
};

export default OurAllProjects;