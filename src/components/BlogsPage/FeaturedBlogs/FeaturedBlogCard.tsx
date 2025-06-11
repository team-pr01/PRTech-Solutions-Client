/* eslint-disable @typescript-eslint/no-explicit-any */
import { ICONS } from "@/assets";
import FillBgOnHover from "@/components/AnimatedButtons/FillBgOnHover/FillBgOnHover";
import Image from "next/image";
import { CgArrowTopRight } from "react-icons/cg";

type TFeaturedBlogCardProps = {
  _id : number;
  title: string;
  image: any;
  category: string;
  publishedDate: string;
  description: string;
  url: string;
}
const FeaturedBlogCard:React.FC<TFeaturedBlogCardProps> = ({ title, image, category, publishedDate, description, url }) => {
  const text = description;

  const shouldTruncate = text.length > 270;
  const displayedText = shouldTruncate ? `${text.slice(0, 270)}...` : text;
  return (
    <div className="flex flex-col lg:flex-row gap-8 xl:gap-10 2xl:gap-14 font-Inter bg-neutral-800/50 rounded-2xl border border-neutral-65/30 hover:border-neutral-65/50 transition-all duration-500 ease-in-out hover:scale-105">
      <Image
        src={image}
        alt=""
        className="rounded-l-2xl w-full lg:w-1/2 h-full xl:h-[500px]"
      />

      <div className="flex flex-col gap-6 p-5 w-full lg:w-1/2">
        <div>
          <p className="text-base md:text-lg xl:text-xl text-primary-20 font-medium leading-6 md:leading-7 xl:leading-8">
            {category}
          </p>
          <h1
            className={`text-white font-rethink text-xl md:text-2xl xl:text-3xl font-bold leading-8 md:leading-9 xl:leading-11 mt-4`}
          >
            {title}
          </h1>
        </div>

        <p className="text-neutral-65 font-Inter text-sm md:text-base 2xl:text-xl leading-4 md:leading-7">
          {displayedText}
          {shouldTruncate && (
            <a
              href={url}
              target="_blank"
              className="text-white blue-500 ml-1 hover:underline font-medium text-sm"
            >
              See more
            </a>
          )}
        </p>

        <div className="flex flex-row lg:flex-col justify-between gap-0 lg:gap-6">
          <div className="flex items-center gap-3">
            <Image src={ICONS.date} alt="" className="size-5" />
            <p
              className={`text-neutral-65 font-Inter text-sm md:text-base 2xl:text-xl leading-4 md:leading-7`}
            >
              {publishedDate}
            </p>
          </div>

          <a href={url} target="_blank">
            <FillBgOnHover classNames="w-fit group bg-white text-secondary-60 group-hover:text-white flex items-center gap-1">
              Read Full Article
              <CgArrowTopRight className="text-base md:text-xl lg:text-2xl group-hover:rotate-45 transition-all duration-500 group-hover:translate-x-2" />
            </FillBgOnHover>
          </a>
        </div>
      </div>
    </div>
  );
};

export default FeaturedBlogCard;
