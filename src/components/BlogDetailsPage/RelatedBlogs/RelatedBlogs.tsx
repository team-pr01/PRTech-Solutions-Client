import { IMAGES } from "@/assets";
import Image from "next/image";
import Link from "next/link";

const RelatedBlogs = () => {
  return (
    <div className="">
      <h1 className={`text-white font-rethink text-xl md:text-2xl font-bold`}>
        Related Blogs
      </h1>

      <div className="flex flex-col gap-4 mt-4">
        {/* Related blog card */}
        <div className="flex gap-4">
          <Image
            src={IMAGES.dummyBlog}
            alt=""
            className="w-[110px] h-[80px] object-cover rounded"
          />
          <div>
            <Link
            href={`/blogs/${2}`}
              className={`text-white font-rethink text-base md:text-xl font-medium hover:underline`}
            >
              10 Web Design Trends for 2025
            </Link>
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
