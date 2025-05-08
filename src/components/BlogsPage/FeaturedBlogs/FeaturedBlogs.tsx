import Container from "@/components/Reusable/Container/Container";
import FeaturedBlogCard from "./FeaturedBlogCard";

/* eslint-disable react/no-unescaped-entities */
const FeaturedBlogs = () => {
  return (
    <div className="bg-secondary-50 font-Inter py-20 w-full">
      <Container>
        <h1
          className={`text-white font-rethink text-2xl md:text-3xl xl:text-5xl font-bold leading-8 md:leading-9 xl:leading-[64px]`}
        >
          Check What's Special For You
        </h1>

        <div className="flex flex-col gap-10 mt-6">
            <FeaturedBlogCard/>
            <FeaturedBlogCard/>
        </div>
      </Container>
    </div>
  );
};

export default FeaturedBlogs;
