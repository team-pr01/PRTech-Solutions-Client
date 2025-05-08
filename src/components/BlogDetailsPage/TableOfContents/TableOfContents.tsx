import { TbPointer } from "react-icons/tb";

const TableOfContents = () => {
  return (
    <div className="bg-neutral-800/50 rounded-2xl border border-neutral-65/30 hover:border-neutral-65/50 p-5">
      <h1 className={`text-white font-rethink text-xl md:text-2xl font-bold`}>
        Table of Contents
      </h1>
      <hr className="h-0.5 bg-neutral-65/30 w-full mt-3" />
      <div className="flex flex-col gap-3 mt-5">
        <a className="text-neutral-65 font-Inter text-sm md:text-base hover:underline flex items-center gap-2">
          <TbPointer className="text-primary-20 rotate-90" />
          Lorem, ipsum dolor.
        </a>
        <a className="text-neutral-65 font-Inter text-sm md:text-base hover:underline flex items-center gap-2">
          <TbPointer className="text-primary-20 rotate-90" />
          Lorem, ipsum dolor.
        </a>
        <a className="text-neutral-65 font-Inter text-sm md:text-base hover:underline flex items-center gap-2">
          <TbPointer className="text-primary-20 rotate-90" />
          Lorem, ipsum dolor.
        </a>
        <a className="text-neutral-65 font-Inter text-sm md:text-base hover:underline flex items-center gap-2">
          <TbPointer className="text-primary-20 rotate-90" />
          Lorem, ipsum dolor.
        </a>
        <a className="text-neutral-65 font-Inter text-sm md:text-base hover:underline flex items-center gap-2">
          <TbPointer className="text-primary-20 rotate-90" />
          Lorem, ipsum dolor.
        </a>
      </div>
    </div>
  );
};

export default TableOfContents;
