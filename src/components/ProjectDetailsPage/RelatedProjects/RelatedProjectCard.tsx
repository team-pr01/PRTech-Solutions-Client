import Image from "next/image";
import { IMAGES } from "@/assets";
import Link from "next/link";

const RelatedProjectCard = () => {
  return (
    <div className="text-white flex flex-col gap-4 font-Inter">
      {/* Image frame with fixed bounds */}
      <div className="overflow-hidden rounded-lg">
        <Image
          src={IMAGES.relatedProject}
          alt="ASI Project Screenshot"
          className="w-full h-auto object-cover transition-transform duration-1000 ease-in-out hover:scale-105"
        />
      </div>

      {/* Category */}
      <span className="text-neutral-60">SAAS, Healthcare</span>

      {/* Project Title */}
      <Link
        href={"/"}
        className="font-rethink text-2xl xl:text-3xl font-bold leading-snug hover:underline transition-all duration-500 ease-in-out hover:-translate-y-1"
      >
        A fresh look at learning through a minimalist identity with impact
      </Link>
    </div>
  );
};

export default RelatedProjectCard;
