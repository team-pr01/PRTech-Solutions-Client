import { IMAGES } from "@/assets";
import Image from "next/image";

const CommentCard = () => {
  return (
    <div className="font-Inter bg-neutral-800/40 rounded-2xl border border-neutral-65/30 hover:border-neutral-65/50 p-5">
      <div className="flex items-center gap-4">
        <Image
          src={IMAGES.prtechSolutions}
          alt=""
          className="size-14 rounded-full"
        />
        <div>
          <h1 className={`text-white text-base md:text-lg font-bold`}>
            John Smith
          </h1>
          <p className="text-primary-50 text-sm mt-1">April 7, 2025</p>
        </div>
      </div>

      <p className="text-primary-50 text-sm lg:text-base font-Inter leading-4 md:leading-7 mt-4">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto ea
        animi doloribus numquam alias dolores unde ipsum excepturi, labore
        maxime, neque qui nemo eaque, molestiae ducimus est eligendi totam
        corrupti tempore aperiam eum voluptatem odio magni. Error dicta ut
        voluptatem iste delectus nam nemo, adipisci eveniet incidunt dolor,
        fugiat porro!
      </p>
    </div>
  );
};

export default CommentCard;
