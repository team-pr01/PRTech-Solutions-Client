import Container from "@/components/Reusable/Container/Container";
import React from "react";
import CommentCard from "./CommentCard";
import CommentForm from "./CommentForm";

const BlogComments = () => {
  return (
    <div className="bg-secondary-60 py-14">
      <Container>
        <h1
          className={`text-white font-Inter text-xl md:text-2xl font-bold leading-8 md:leading-9`}>
          Comments (12)
        </h1>

       <div className="flex flex-col lg:flex-row gap-10 mt-10">
            <div className="flex flex-col gap-6 md:gap-8 xl:gap-10 w-full lg:w-1/2">
            <CommentCard/>
            <CommentCard/>
        </div>
        <CommentForm/>
       </div>
      </Container>
    </div>
  );
};

export default BlogComments;
