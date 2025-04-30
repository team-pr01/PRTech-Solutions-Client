"use client"
import Container from "@/components/Reusable/Container/Container";
import Link from "next/link";


const Breadcrumbs = () => {
    return (
            <Container>
                <div className="font-Inter flex items-center gap-2 text-primary-50 font-medium leading-7">
                <Link href={"/"} className="hover:underline">Home</Link>
                <p className="">{">"}</p>
                <Link href={"/our-projects"} className="hover:underline">Our Projects</Link>
                <p className="">{">"}</p>
                <p className="text-white">E-Commerce Platform Redesign</p>
            </div>
            </Container>
    );
};

export default Breadcrumbs;