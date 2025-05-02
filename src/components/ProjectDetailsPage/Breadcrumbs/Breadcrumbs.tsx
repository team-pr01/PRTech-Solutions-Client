"use client";
import Container from "@/components/Reusable/Container/Container";
import Link from "next/link";

const Breadcrumbs = () => {
  const text = "E-Commerce Platform Redesign and Optimization";

  return (
    <Container>
      <div className="font-Inter flex items-center gap-1 md:gap-2 text-primary-50 font-medium leading-7 text-xs md:text-base">
        <Link href={"/"} className="hover:underline">
          Home
        </Link>
        <p className="">{">"}</p>
        <Link href={"/our-projects"} className="hover:underline">
          Our Projects
        </Link>
        <p className="">{">"}</p>
        <p className="text-white block md:hidden">
          {text.length > 20 ? `${text.slice(0, 20)}...` : text}
        </p>

        <p className="text-white hidden md:block">
          E-Commerce Platform Redesign
        </p>
      </div>
    </Container>
  );
};

export default Breadcrumbs;
