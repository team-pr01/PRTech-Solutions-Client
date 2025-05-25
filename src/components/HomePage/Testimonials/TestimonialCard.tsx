import StarRating from "@/components/Reusable/RatingStars/RaitingStars";
import Image from "next/image";
import React from "react";

interface TestimonialCardProps {
  name: string;
  position: string;
  rating: number;
  review: string;
  briefReview: string;
  business: string;
  profileImage: string;
  dashboardImage: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  name,
  position,
  rating,
  review,
  briefReview,
  business,
  profileImage,
  dashboardImage,
}) => {
  return (
    <div className="bg-primary-60/40 font-Inter rounded-2xl p-6 md:p-10 shadow-xl flex flex-col md:flex-row items-center justify-between gap-8 border border-primary-70 relative">
     <div className="bg-primary-20 absolute -bottom-4 -left-8 z-0 size-[500px] overflow-hidden rounded-full opacity-10 blur-2xl"></div>
      <div className="bg-primary-20 absolute bottom-0 right-0 top-6 z-[-1] size-[200px] rounded-full opacity-20 blur-2xl"></div>
     
      {/* Left Section */}
      <div className="md:w-1/2 space-y-4">
        <p className="text-sm text-primary-50 uppercase tracking-wide flex items-center gap-1">
          {business}
        </p>
        <h2 className="text-2xl md:text-3xl font-semibold text-white">
          {briefReview}
        </h2>

        <StarRating rating={rating} />

        <p className="text-neutral-65 text-base leading-relaxed">
          “{review}”
        </p>

        <div className="flex items-center gap-3 pt-2">
          <Image
            src={profileImage}
            alt={name}
            width={48}
            height={48}
            className="rounded-full object-cover"
          />
          <div>
            <p className="text-sm font-medium text-white">{name}</p>
            <p className="text-sm text-neutral-70">{position}</p>
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className="md:w-1/2">
        <div
          className="rounded-xl relative overflow-hidden shadow-lg"
          style={{
            clipPath: "polygon(60px 0, 100% 0, 100% 100%, 0 100%, 0 60px)",
          }}
        >
          <Image
            src={dashboardImage}
            alt={`${name}'s Dashboard`}
            width={600}
            height={400}
            className="object-cover w-full h-auto bg-black"
          />
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
