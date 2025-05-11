import BlogComments from "@/components/BlogDetailsPage/BlogComments/BlogComments";
import BlogDetails from "@/components/BlogDetailsPage/BlogDetails/BlogDetails";
import BlogDetailsHero from "@/components/BlogDetailsPage/BlogDetailsHero/BlogDetailsHero";
import CompanyProfile from "@/components/BlogDetailsPage/CompanyProfile/CompanyProfile";
import FollowUsOn from "@/components/BlogDetailsPage/FollowUsOn/FollowUsOn";
import RelatedBlogs from "@/components/BlogDetailsPage/RelatedBlogs/RelatedBlogs";
import TableOfContents from "@/components/BlogDetailsPage/TableOfContents/TableOfContents";
import Container from "@/components/Reusable/Container/Container";

const BlogDetailsPage = () => {
  return (
    <div>
      <BlogDetailsHero />
      <div className="border-b border-neutral-65/30">
        <Container>
        <div className="flex flex-col-reverse lg:flex-row gap-5 lg:gap-12 py-20">
          <BlogDetails />
          <div className="flex flex-col gap-5 w-full lg:w-[25%]">
            <TableOfContents />
            <CompanyProfile />
            <FollowUsOn />
            <RelatedBlogs />
          </div>
        </div>
      </Container>
      </div>
      <BlogComments/>
    </div>
  );
};

export default BlogDetailsPage;
