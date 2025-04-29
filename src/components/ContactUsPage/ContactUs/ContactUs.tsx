"use client";
import Container from "@/components/Reusable/Container/Container";
import ContactUsForm from "./ContactUsForm";
import {
  contactInfo,
  socialLinks,
} from "@/components/Shared/Footer/footer.data";
import clsx from "clsx";
import { RocketArrowIcon } from "@/components/Shared/Footer/Footer";
import "../../AnimatedButtons/FillBgToTopOnHover/FillBgToTopOnHover.css";
import { motion } from "framer-motion";

const ContactUs = () => {
  const slideUpVariant = {
    hidden: { y: 50, opacity: 0 },
    visible: (delay = 0) => ({
      // Accept delay as a custom prop
      y: 0,
      opacity: 1,
      transition: {
        delay, // Use the passed delay
        duration: 0.6,
        ease: "easeOut",
      },
    }),
  };

  // Viewport settings
  const viewportSettings = {
    once: true, // Trigger animation only once
    amount: 0.1, // Trigger when 10% of the element is visible
  };

  // Calculate base delays dynamically
  const contactInfoDelayIncrement = 0.1;
  const followUsHeadingDelay =
    0.3 + (contactInfo?.length || 0) * contactInfoDelayIncrement;
  const socialLinkDelayIncrement = 0.07; // Slightly faster for smaller icons
  const firstSocialLinkDelay = followUsHeadingDelay + 0.1;
  return (
    <div className="bg-secondary-50 font-Inter py-20 w-full overflow-hidden">
      <div className="w-full relative">
        <Container>
          <div className="flex flex-col lg:flex-row justify-between gap-10 lg:gap-12 2xl:gap-16">
            {/* Left side */}
            <ContactUsForm />

            {/* Right side */}
            <div className="w-full lg:w-1/2 p-6">
              <motion.h1
                custom={0.1}
                initial="hidden"
                whileInView="visible"
                viewport={viewportSettings}
                variants={slideUpVariant}
                className="text-2xl font-bold leading-9 text-white"
              >
                Send Us Message
              </motion.h1>
              <motion.p
                custom={0.2}
                initial="hidden"
                whileInView="visible"
                viewport={viewportSettings}
                variants={slideUpVariant}
                className="text-primary-50 text-sm lg:text-base font-Inter mt-2 w-full max-w-full lg:max-w-[500px]"
              >
                Our team is ready to assist you with any questions you might
                have about our services.
              </motion.p>

              <div className="flex flex-col gap-6 mt-[44px]">
                {contactInfo?.map((info, index) => (
                  <motion.a
                    key={info.label || index}
                    custom={0.3 + index * contactInfoDelayIncrement}
                    initial="hidden"
                    whileInView="visible"
                    viewport={viewportSettings}
                    variants={slideUpVariant}
                    href={info?.href ? info?.href : undefined}
                    className="text-primary-50 font-medium leading-[30px] flex items-center gap-3 relative group w-fit"
                    style={{ cursor: info?.href ? "pointer" : "default" }}
                  >
                    <div className="bg-primary-40 group-hover:bg-primary-20 size-12 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-500 text-xl">
                      {info?.icon}
                    </div>
                    <div>
                      <h1 className="font-semibold text-white leading-normal">
                        {info?.label}
                      </h1>
                      <span className="text-sm">
                        {info?.href ? info?.href : info?.text}
                      </span>
                    </div>
                    <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-gradient-to-r from-primary-whites-30 to-primary-20 transition-all duration-300 ease-in-out group-hover:w-full"></span>
                    {info?.href && (
                      <span
                        className={clsx(
                          "absolute -right-4 top-[11px]",
                          "opacity-0",
                          "-translate-x-2 translate-y-2",
                          "group-hover:opacity-100",
                          "group-hover:-translate-y-1 group-hover:translate-x-1",
                          "transition-all duration-300 ease-out",
                          "pointer-events-none"
                        )}
                        aria-hidden="true"
                      >
                        <RocketArrowIcon />
                      </span>
                    )}
                  </motion.a>
                ))}
              </div>

              <motion.h1
                custom={followUsHeadingDelay}
                initial="hidden"
                whileInView="visible"
                viewport={viewportSettings}
                variants={slideUpVariant}
                className="font-semibold text-white leading-normal mt-[50px]"
              >
                Follow us On
              </motion.h1>
              <div className="flex items-center gap-4 mt-4">
                {socialLinks?.map((item, index) => (
                  <motion.a
                    key={item?.name}
                    custom={
                      firstSocialLinkDelay + index * socialLinkDelayIncrement
                    }
                    initial="hidden"
                    whileInView="visible"
                    viewport={viewportSettings}
                    variants={slideUpVariant}
                    href={item?.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="size-[40px] rounded-full hover:bg-primary-50 bg-primary-20 transition-all duration-300 cursor-pointer flex items-center justify-center group"
                    aria-label={`Follow us on ${item?.name}`}
                  >
                    <span className="text-xl group-hover:scale-110 transition-transform duration-300">
                      {item?.icon}
                    </span>
                  </motion.a>
                ))}
              </div>
            </div>
          </div>
        </Container>
        {/* Bg gradient */}
        <div className="bg-primary-20 absolute top-36 bottom-0 right-0 z-0 w-[239px] h-[318px] rounded-full opacity-30 blur-[150px]"></div>
      </div>
    </div>
  );
};

export default ContactUs;
