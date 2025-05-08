import { IMAGES } from "@/assets";
import Image from "next/image";

const RelatedBlogs = () => {
  return (
    <div className="">
      <h1 className={`text-white font-rethink text-xl md:text-2xl font-bold`}>
        Related Blogs
      </h1>

      <div className="flex flex-col gap-4 mt-4">
        <div className="flex gap-4">
          <Image src={IMAGES.dummyBlog} alt="" className="w-[110px] h-[80px] object-cover rounded" />
          <div>
            <h1
              className={`text-white font-rethink text-base md:text-xl font-medium`}
            >
              10 Web Design Trends for 2025
            </h1>
            <p className="text-neutral-65 font-Inter text-sm md:text-base leading-4 md:leading-7">
              April 10, 2025
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RelatedBlogs;
