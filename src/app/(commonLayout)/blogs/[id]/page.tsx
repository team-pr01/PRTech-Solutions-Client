import BlogDetails from "@/components/BlogDetailsPage/BlogDetails/BlogDetails";
import BlogDetailsHero from "@/components/BlogDetailsPage/BlogDetailsHero/BlogDetailsHero";
import FollowUsOn from "@/components/BlogDetailsPage/FollowUsOn/FollowUsOn";
import TableOfContents from "@/components/BlogDetailsPage/TableOfContents/TableOfContents";
import Container from "@/components/Reusable/Container/Container";

const BlogDetailsPage = () => {
    return (
        <div>
           <BlogDetailsHero/>
           <Container>
           <div className="flex flex-col-reverse lg:flex-row gap-5 lg:gap-12 mt-12">
           <BlogDetails/>
           <div className="flex flex-col gap-5 w-full lg:w-[25%]">
           <TableOfContents/>
           <FollowUsOn/>
           </div>
           </div>
           </Container>
        </div>
    );
};

export default BlogDetailsPage;