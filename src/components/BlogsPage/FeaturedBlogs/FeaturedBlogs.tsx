import Container from "@/components/Reusable/Container/Container";
import FeaturedBlogCard from "./FeaturedBlogCard";
import Link from "next/link";
import { CgArrowTopRight } from "react-icons/cg";

/* eslint-disable react/no-unescaped-entities */
const FeaturedBlogs = () => {
  return (
    <div className="bg-secondary-50 font-Inter py-20 w-full relative">
      <div className="bg-primary-20 absolute top-36 bottom-0 right-0 z-0 w-[239px] h-[318px] rounded-full opacity-30 blur-[150px]"></div>
      <Container>
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-3 md:gap-0 z-10">
          <h1
            className={`text-white font-rethink text-2xl md:text-3xl xl:text-5xl font-bold`}
          >
            Check What's Special{" "}
            <span className="text-primary-20">For You</span>
          </h1>
          <Link
            href={"/"}
            className="w-fit group text-neutral-65 flex items-center gap-1 hover:underline transition-all duration-500 ease-in-out hover:-translate-y-1"
          >
            See All Featured Blogs
            <CgArrowTopRight className="text-2xl group-hover:rotate-45 transition-all duration-500 group-hover:translate-x-2" />
          </Link>
        </div>

        <div className="flex flex-col gap-10 xl:gap-12 mt-8 z-10">
          <FeaturedBlogCard />
          <FeaturedBlogCard />
        </div>
      </Container>
    </div>
  );
};

export default FeaturedBlogs;
