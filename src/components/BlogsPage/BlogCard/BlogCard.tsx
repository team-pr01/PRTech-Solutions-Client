/* eslint-disable @typescript-eslint/no-explicit-any */
import { ICONS } from "@/assets";
import Image from "next/image";
import { CgArrowTopRight } from "react-icons/cg";

type TBlogCardProps = {
  _id: number;
  title: string;
  image: any;
  category: string;
  publishedDate: string;
  description: string;
  url: string;
};
const BlogCard: React.FC<TBlogCardProps> = ({
  title,
  image,
  category,
  publishedDate,
  description,
  url,
}) => {
  const text = description;

  const shouldTruncate = text.length > 150;
  const displayedText = shouldTruncate ? `${text.slice(0, 150)}...` : text;
  return (
    <div className="group bg-neutral-800/50 rounded-2xl border border-neutral-65/30 hover:border-neutral-65/50 transition-all duration-500 ease-in-out hover:-translate-y-1">
      {/* Image will zoom when card is hovered */}
      <div className="overflow-hidden rounded-t-2xl ">
        <Image
          src={image}
          alt=""
          className="object-cover h-[290px] transition-transform duration-1000 ease-in-out group-hover:scale-105"
        />
      </div>

      <div className="p-5">
        <div className="text-primary-20 font-medium bg-secondary-20/80 border border-neutral-65/30 backdrop-blur-sm rounded-lg p-2 font-Inter text-xs w-fit">
          {category}
        </div>

        <h1 className="text-white font-rethink text-xl xl:text-2xl font-bold leading-8 md:leading-9 mt-4">
          {title}
        </h1>

        <p className="text-neutral-65 font-Inter text-sm md:text-base leading-4 md:leading-6 mt-2">
          {displayedText}
        </p>

        <div className="flex items-center justify-between mt-6">
          <div className="flex items-center gap-3">
            <Image src={ICONS.date} alt="" className="size-5" />
            <p className="text-neutral-65 font-Inter text-sm md:text-base leading-4 md:leading-7">
              {publishedDate}
            </p>
          </div>

          {/* This link uses its own isolated group class */}
          <a
            href={url}
            target="_blank"
            className="w-fit group/link text-white flex items-center gap-1 hover:underline transition-all duration-500 ease-in-out hover:-translate-y-1"
          >
            See Full Article
            <CgArrowTopRight className="text-xl group-hover/link:rotate-45 transition-all duration-500 group-hover/link:translate-x-2" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
