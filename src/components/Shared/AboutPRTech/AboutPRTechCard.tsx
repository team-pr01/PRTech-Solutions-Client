/* eslint-disable @typescript-eslint/no-explicit-any */
import Image from "next/image";
import "./AboutPRTech.css";
import { motion } from "framer-motion";

type TAboutPRTechCardProps = {
  index : number; // Make sure index is received
  icon: any;
  title: string;
  description: string;
};
const AboutPRTechCard: React.FC<TAboutPRTechCardProps> = ({
  index, // Use the received index
  icon,
  title,
  description,
}) => {
  // Animation variants for sliding up
  const slideUpVariants = {
    hidden: { y: 30, opacity: 0 }, // Start slightly lower
    visible: { y: 0, opacity: 1 },
  };
  return (
    <motion.div
      variants={slideUpVariants}
      initial="hidden"
      whileInView="visible" // Trigger animation when in view
      viewport={{ once: true, amount: 0.2 }} // Trigger once, when 20% is visible
      transition={{ duration: 0.5, delay: index * 0.5 }} // Stagger animation based on index
      className="flex gap-6 font-Inter group"
    >
      <div className="flex flex-col items-center gap-2 md:gap-[27px]">
        {/* Icon */}
        <div className="bg-primary-20 size-11 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-500 ease-in-out group-hover:scale-150">
          <Image
            src={icon}
            width={24}
            height={24}
            className="size-8"
            alt="Section Icon"
          />
        </div>
        <div className="animated-connector-line w-[2px] h-[96px]"></div>
      </div>
      <div>
        <h3
          className={`text-white font-Inter text-xl md:text-2xl font-bold leading-7 lg:leading-[33px]`}
        >
          {title}
        </h3>
        <p className="text-xs md:text-lg leading-5 lg:leading-[28px] text-primary-50 mt-2 max-w-full md:max-w-[464px]">
          {description}
        </p>
      </div>
    </motion.div>
  );
};

export default AboutPRTechCard;