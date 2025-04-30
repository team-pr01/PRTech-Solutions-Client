import Container from "@/components/Reusable/Container/Container";
import Breadcrumbs from "../Breadcrumbs/Breadcrumbs";
import Image from "next/image";
import { ICONS, IMAGES } from "@/assets";

const ProjectDetailsHero = () => {
  return (
    <div className="bg-secondary-60 pt-36">
      <Breadcrumbs />
      <div className="bg-gradient-to-r from-blue-950/30 to-indigo-900/30 py-7 mt-6">
        <Container>
          <h1
            className={`text-white font-rethink text-3xl md:text-5xl font-bold leading-9 2xl:leading-[64px]`}
          >
            E-Commerce Platform Redesign
          </h1>
          <p
            className={`text-neutral-65 font-Inter text-sm md:text-base 2xl:text-xl leading-4 md:leading-7 mt-3`}
          >
            Client : John Smith
          </p>

          <div className="mt-[50px]">
            <div className="relative bg-neutral-85/50 border border-primary-40 rounded-lg flex gap-3 p-6 w-full sm:w-[342px]">
              <Image
                className="absolute right-0 top-0 h-full w-full opacity-60 overflow-hidden"
                src={IMAGES.techStackGradientBg1}
                alt=""
              />
              <Image
                className="absolute left-0 bottom-0 h-full w-full opacity-60 overflow-hidden"
                src={IMAGES.techStackGradientBg2}
                alt=""
              />
              <Image src={ICONS.date} alt={``} className="size-6" />
              <div>
                <h1 className="text-white text-[8px] lg:text-lg font-bold leading-5">
                  Date
                </h1>
                <p
                  className={`text-neutral-65 font-Inter text-sm md:text-base mt-2`}
                >
                  April 10, 2025
                </p>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default ProjectDetailsHero;
