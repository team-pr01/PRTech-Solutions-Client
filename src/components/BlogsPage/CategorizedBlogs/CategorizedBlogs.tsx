/* eslint-disable @typescript-eslint/no-explicit-any */
import Image from "next/image";
import BlogCard from "../BlogCard/BlogCard";
import { ICONS } from "@/assets";

const CategorizedBlogs = ({ heading, blogs } : { heading: string, blogs: any}) => {
  return (
    <div className="mt-10">
      <h1
        className={`text-white font-rethink text-2xl md:text-3xl xl:text-5xl font-bold`}
      >
        <span className="text-primary-20">{heading}</span> Blogs
      </h1>
      {blogs?.length < 1 ? (
        <div className="flex flex-col gap-3 items-center justify-center mt-16 bg-neutral-80/30 w-fit rounded-xl p-5 md:p-20 mx-auto">
          <Image src={ICONS.empty} alt="Empty" className="size-[200px]" />
          <h1 className="text-2xl font-semibold text-white">
            No blog found...
          </h1>
          {/* <p className="text-neutral-65">Add your insights.</p> */}
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 2xl:gap-8 mt-5">
          {blogs.map((blog:any, index:number) => (
            <BlogCard key={index} {...blog} />
          ))}
        </div>
      )}
    </div>
  );
};

export default CategorizedBlogs;
