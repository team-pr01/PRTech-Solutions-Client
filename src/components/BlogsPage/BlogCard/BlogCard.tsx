import { ICONS, IMAGES } from "@/assets";
import Image from "next/image";
import Link from "next/link";
import { CgArrowTopRight } from "react-icons/cg";

const BlogCard = () => {
  const text =
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";

  const shouldTruncate = text.length > 150;
  const displayedText = shouldTruncate ? `${text.slice(0, 150)}...` : text;
  return (
    <div className="group bg-neutral-800/50 rounded-2xl border border-neutral-65/30 hover:border-neutral-65/50 transition-all duration-500 ease-in-out hover:-translate-y-1">
      {/* Image will zoom when card is hovered */}
      <div className="overflow-hidden rounded-lg">
        <Image
          src={IMAGES.dummyBlog}
          alt=""
          className="rounded-t-2xl object-cover h-[280px] transition-transform duration-1000 ease-in-out group-hover:scale-105"
        />
      </div>

      <div className="p-5">
        <div className="text-primary-20 font-medium bg-secondary-20/80 border border-neutral-65/30 backdrop-blur-sm rounded-lg p-2 font-Inter text-xs w-fit">
          UX Design
        </div>

        <h1 className="text-white font-rethink text-xl xl:text-2xl font-bold leading-8 md:leading-9 mt-4">
          10 UX Principles Every Developer Should Know
        </h1>

        <p className="text-neutral-65 font-Inter text-sm md:text-base leading-4 md:leading-6 mt-2">
          {displayedText}
        </p>

        <div className="flex items-center justify-between mt-6">
          <div className="flex items-center gap-3">
            <Image src={ICONS.date} alt="" className="size-5" />
            <p className="text-neutral-65 font-Inter text-sm md:text-base leading-4 md:leading-7">
              April 10, 2025
            </p>
          </div>

          {/* This link uses its own isolated group class */}
          <Link
            href="/"
            className="w-fit group/link text-white flex items-center gap-1 hover:underline transition-all duration-500 ease-in-out hover:-translate-y-1"
          >
            See Full Article
            <CgArrowTopRight className="text-xl group-hover/link:rotate-45 transition-all duration-500 group-hover/link:translate-x-2" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
