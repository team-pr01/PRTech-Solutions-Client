import Container from "@/components/Reusable/Container/Container";
import RelatedProjectCard from "./RelatedProjectCard";
import Image from "next/image";
import { IMAGES } from "@/assets";

const RelatedProjects = () => {
  return (
    <div className="bg-secondary-50 font-Inter py-20 w-full overflow-hidden relative">
      <Image
        src={IMAGES.linnerBg2}
        alt=""
        className="absolute left-0 top-0 h-full opacity-10"
      />
      <div className="w-full relative">
        <Container>
          <div>
            <h1
              className={`text-white font-rethink text-2xl md:text-3xl xl:text-5xl font-bold leading-8 md:leading-9 xl:leading-[64px]`}
            >
              Related Projects
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8 xl:gap-10 mt-10">
              <RelatedProjectCard />
              <RelatedProjectCard />
              <RelatedProjectCard />
            </div>
          </div>
        </Container>
        {/* Bg gradient */}
        <div className="bg-primary-20 absolute top-36 bottom-0 right-0 z-0 w-[239px] h-[318px] rounded-full opacity-30 blur-[150px]"></div>
      </div>
    </div>
  );
};

export default RelatedProjects;
