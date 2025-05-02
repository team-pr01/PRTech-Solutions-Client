import { ICONS } from "@/assets";
import Image from "next/image";

const timelineData = [
  {
    title: "Technologies Used",
    description: "Requirements gathering and planning",
  },
  {
    title: "Design Phase",
    description: "UI/UX design and prototyping",
  },
  {
    title: "Development",
    description: "Frontend and backend implementation",
  },
  {
    title: "Testing",
    description: "Quality assurance and user testing",
  },
  {
    title: "Launch",
    description: "Deployment and go-live",
  },
];

const ProjectTimeline = () => {
  return (
    <div className="border border-secondary-40 rounded-2xl p-6 w-full lg:w-[30%] h-fit">
      {/* Heading */}
      <div className="flex items-center gap-4">
        <Image src={ICONS.timelineBycicle} alt="" className="size-7" />
        <h1 className="font-Rethink text-2xl font-bold leading-11 text-white">
          Project Timeline
        </h1>
      </div>

      {/* Timeline */}
      <div className="relative mt-6 pl-6 border-l border-neutral-60 space-y-8">
        {timelineData.map((item, index) => {
          const isLast = index === timelineData.length - 1;
          return (
            <div key={index} className="relative">
              {/* Dot */}
              <span
                className={`absolute -left-[30.5px] top-1.5 rounded-full ${
                  isLast ? "bg-green-500" : "bg-blue-500"
                } size-3`}
              />
              {/* Content */}
              <h2 className="font-Rethink text-lg font-bold text-neutral-15">
                {item.title}
              </h2>
              <p className="text-neutral-65 font-Inter text-sm md:text-base mt-1">
                {item.description}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProjectTimeline;
