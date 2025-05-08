import { ICONS, IMAGES } from "@/assets";
import Container from "@/components/Reusable/Container/Container";
import Image from "next/image";

const BlogDetailsHero = () => {
  const data = [
    {
      fieldName: "Author",
      icon: ICONS.user,
      value: "PRTech Solutions",
    },
    {
      fieldName: "Posted Date",
      icon: ICONS.date,
      value: "May 05, 2025",
    },
    {
      fieldName: "Comments",
      icon: ICONS.comment,
      value: `${10} Comments`,
    },
  ];
  return (
    <div className="bg-secondary-60 pt-36 pb-10">
      <Container>
        <h1
          className={`text-white font-rethink text-2xl md:text-3xl xl:text-5xl font-bold leading-8 md:leading-9 xl:leading-[64px]`}
        >
          E-Commerce Platform Redesign
        </h1>
        {/* Mapping data */}
        <div className="flex items-center gap-6 mt-4">
          {data?.map((item) => (
            <div key={item?.fieldName} className="flex items-center gap-3">
              <Image src={item?.icon} alt="" className="size-5" />
              <p className="text-neutral-65 font-Inter text-sm md:text-base leading-4 md:leading-7">
                {item?.value}
              </p>
            </div>
          ))}
        </div>
        <Image
          src={IMAGES.dummyBlog}
          alt=""
          className="rounded-t-2xl object-cover w-full mt-12"
        />
      </Container>
    </div>
  );
};

export default BlogDetailsHero;
