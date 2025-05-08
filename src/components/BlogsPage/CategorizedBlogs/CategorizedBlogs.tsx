import BlogCard from "../BlogCard/BlogCard";

const CategorizedBlogs = ({heading, blogs}) => {
  return (
    <div className="mt-10">
      <h1
        className={`text-white font-rethink text-2xl md:text-3xl xl:text-5xl font-bold`}
      >
        <span className="text-primary-20">{heading}</span> Blogs
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 2xl:gap-8 mt-5">
        {
          blogs.map((blog, index) => (
            <BlogCard key={index} {...blog} />
          ))
        }
      </div>
    </div>
  );
};

export default CategorizedBlogs;
