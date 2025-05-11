const BlogDetails = () => {
  return (
    <div className="w-full lg:w-[75%]">
      <h1
        className={`text-white font-rethink text-xl md:text-2xl xl:text-3xl font-bold leading-8 md:leading-9`}
      >
        10 UX Principles Every Developer Should Know 10 UX Principles Every
      </h1>
      <p className="text-neutral-65 font-Inter text-sm md:text-base 2xl:text-xl leading-4 md:leading-7 mt-5">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto ea
        animi doloribus numquam alias dolores unde ipsum excepturi, labore
        maxime, neque qui nemo eaque, molestiae ducimus est eligendi totam
        corrupti tempore aperiam eum voluptatem odio magni. Error dicta ut
        voluptatem iste delectus nam nemo, adipisci eveniet incidunt dolor,
        fugiat porro!
        <br />
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto ea
        animi doloribus numquam alias dolores unde ipsum excepturi, labore
        maxime, neque qui nemo eaque, molestiae ducimus est eligendi totam
        corrupti tempore aperiam eum voluptatem odio magni. Error dicta ut
        voluptatem iste delectus nam nemo, adipisci eveniet incidunt dolor,
        fugiat porro!
      </p>

      {/* Tags */}
      <div className="flex flex-col md:flex-row items-start lg:items-center gap-4 mt-8 lg:mt-12">
        <h1
          className={`text-white font-rethink text-xl md:text-2xl font-bold leading-8 md:leading-9`}
        >
          Tags :
        </h1>
        <div className="flex items-center gap-4 flex-wrap">
          <div className="px-4 py-2 text-neutral-65 font-Inter text-sm md:text-base border border-neutral-65/30 rounded-3xl">
            Web Development
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;
