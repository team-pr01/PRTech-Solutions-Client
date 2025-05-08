import BlogCard from "../BlogCard/BlogCard";

const CategorizedBlogs = () => {
  return (
    <div>
      <h1
        className={`text-white font-rethink text-2xl md:text-3xl xl:text-5xl font-bold`}
      >
        All Blogs
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 2xl:gap-8 mt-8">
        <BlogCard />
      </div>
    </div>
  );
};

export default CategorizedBlogs;
