import { ICONS, IMAGES } from "@/assets";
import Image from "next/image";
import React from "react";

const TestimonialCard = ({
  review,
  isMiddle,
}: {
  review: string;
  isMiddle: boolean;
}) => {
  return (
    <div
      className={`border border-secondary-40 rounded-lg p-4 font-Inter flex flex-col gap-3 relative overflow-hidden ${
        isMiddle ? "bg-primary-20/40" : "bg-neutral-85/50"
      }`}
    >
      <div className="bg-primary-20 size-[200px] opacity-20 blur-[100px] absolute top-0 left-0"></div>
      <div className="bg-primary-20 size-[100px] opacity-20 blur-[100px] absolute right-0 bottom-0 border-0"></div>
      <div className="flex items-center justify-between">
        <Image src={ICONS.quote} alt="" className="size-16 opacity-30" />
        <div className="flex items-center gap-2">
          {[1, 2, 3, 4, 5].map((item) => (
            <Image
              key={item}
              src={ICONS.star}
              alt=""
              className="size-5 opacity-80"
            />
          ))}
        </div>
      </div>
      {review}
      <p className="text-neutral-60">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus non
        error, sed pariatur reprehenderit distinctio voluptatem enim ea quis
        numquam. Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Exercitationem, illo. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit,
        amet consectetur adipisicing elit. Minus, repellat!
      </p>

      <div className="flex items-center gap-3 mt-2">
        <Image
          src={IMAGES.aboutPrTech2}
          alt=""
          className="size-12 rounded-full"
        />
        <div>
          <h1 className="text-neutral-30 font-semibold">John Smith</h1>
          <p className="text-neutral-65 text-xs">CEO of NIT Pune</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
