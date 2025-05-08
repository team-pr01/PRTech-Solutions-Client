import BlogsHero from "@/components/BlogsPage/BlogsHero/BlogsHero";
import FeaturedBlogs from "@/components/BlogsPage/FeaturedBlogs/FeaturedBlogs";
import OurAllBlogs from "@/components/BlogsPage/OurAllBlogs/OurAllBlogs";
import Banner from "@/components/HomePage/Banner/Banner";
import React from "react";

const Blogs = () => {
  return (
    <div>
      <BlogsHero />
      <FeaturedBlogs/>
      <OurAllBlogs/>
      <Banner/>
    </div>
  );
};

export default Blogs;
