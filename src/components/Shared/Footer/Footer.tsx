/* eslint-disable react/no-unescaped-entities */
import { ICONS, IMAGES } from "@/assets";
import Container from "@/components/Reusable/Container/Container";
import Image from "next/image";
import Link from "next/link";
import { contactInfo, footerLinks, socialLinks } from "./footer.data";
import "./Footer.css";
import clsx from "clsx";

const RocketArrowIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={2}
    stroke="currentColor"
    className="w-4 h-4"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
    />
  </svg>
);
const Footer = () => {
  const companyResourses = [
    {
      label : "Privacy Policy",
      path : "/"
    },
    {
      label : "Terms & Conditions",
      path : "/"
    },
    {
      label : "Refund Policy",
      path : "/"
    },
  ]
  return (
    <div className="bg-secondary-10 font-Inter">
      {/* <div className="animated-gradient-line"></div> */}
      <div className="relative">
        <div className="bg-primary-20 absolute top-0 right-0 left-0 z-0 w-[1000px] h-[50px] opacity-30 blur-[100px] mx-auto hidden xl:block"></div>
        <Image
          src={IMAGES.linnerBgLeft}
          className="absolute left-0 bottom-0 top-0 h-full z-0"
          alt=""
        />
        <Image
          src={IMAGES.linnerBgRight}
          className="absolute right-0 top-0 bottom-0 h-full z-0"
          alt=""
        />
        <Container>
          <div className="pt-16 pb-10 z-50">
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 justify-between gap-10 xl:gap-0">
              {/* Logo and social links */}
              <div className="flex flex-col gap-6 z-50">
                <Image
                  src={IMAGES.prtechSolutionsLogoGray}
                  alt={"PRTech Solutions"}
                  className="h-[34px] 2xl:h-12 w-26 md:w-34 cursor-pointer"
                />
                <p className="text-primary-50 leading-[18px] md:leading-7 max-w-full md:max-w-[302px]">
                  We're a digital agency focused on creating impactful digital
                  experiences that drive results for our clients.
                </p>
                <div className="flex items-center gap-4">
                  {socialLinks?.map((item) => (
                    <a
                      href={item?.link}
                      key={item?.name}
                      className="size-[40px] rounded-full hover:bg-primary-50 bg-primary-20 transition-all duration-300 cursor-pointer flex items-center justify-center group"
                    >
                      {item?.icon}
                    </a>
                  ))}
                </div>
              </div>

              {/* Company, Services and Contact Links */}
              {footerLinks?.map((item) => (
                <div key={item?.heading} className="flex flex-col gap-3 z-50">
                  <h1
                    className={`text-white text-xl md:text-2xl font-bold leading-7 lg:leading-[33px]`}
                  >
                    {item?.heading}
                  </h1>
                  <div className="h-[2px] w-[140px] animated-gradient-line"></div>
                  {item?.links?.map((link) => (
                    <Link
                      key={link?.name}
                      href={link?.link}
                      className="text-primary-50 font-medium leading-[30px] relative group w-fit"
                    >
                      {link?.name}
                      <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-gradient-to-r from-primary-whites-30 to-primary-20 transition-all duration-300 ease-in-out group-hover:w-full"></span>
                      <span
                        className={clsx(
                          "absolute -right-4 top-[11px]",
                          "opacity-0", // Start hidden
                          "-translate-x-2 translate-y-2",
                          "group-hover:opacity-100",
                          // On hover, translate UP (-y) and RIGHT (+x) significantly
                          "group-hover:-translate-y-1 group-hover:translate-x-1",
                          "transition-all duration-300 ease-out",
                          "pointer-events-none"
                        )}
                        aria-hidden="true"
                      >
                        <RocketArrowIcon />
                      </span>
                    </Link>
                  ))}
                </div>
              ))}
              <div className="flex flex-col gap-3 z-10">
                <h1
                  className={`text-white text-xl md:text-2xl font-bold leading-7 lg:leading-[33px]`}
                >
                  Contact
                </h1>
                <div className="h-[2px] w-[140px] animated-gradient-line"></div>
                {contactInfo?.map((info, index) => (
                  <Link
                    key={index}
                    href={info?.href ? info?.href : "/"}
                    className="text-primary-50 font-medium leading-[30px] flex items-center gap-3 relative group w-fit"
                  >
                    {info?.icon}
                    {info?.href ? info?.href : info?.text}
                    <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-gradient-to-r from-primary-whites-30 to-primary-20 transition-all duration-300 ease-in-out group-hover:w-full"></span>
                      <span
                        className={clsx(
                          "absolute -right-4 top-[11px]",
                          "opacity-0", // Start hidden
                          "-translate-x-2 translate-y-2",
                          "group-hover:opacity-100",
                          // On hover, translate UP (-y) and RIGHT (+x) significantly
                          "group-hover:-translate-y-1 group-hover:translate-x-1",
                          "transition-all duration-300 ease-out",
                          "pointer-events-none"
                        )}
                        aria-hidden="true"
                      >
                        <RocketArrowIcon />
                      </span>
                  </Link>
                ))}
              </div>
            </div>

            <hr className="border border-primary-50/50 h-[0.5px] w-full my-10 z-20" />
            <div className="flex flex-col lg:flex-row items-start md:items-center justify-between gap-7 md:gap-0">
              <p className="text-primary-50 leading-6 z-10">
                © 2025 PRTech Solutions. All rights reserved.
              </p>
              <div className="flex flex-col lg:flex-row items-start md:items-center gap-4 md:gap-12 z-10">
                {
                  companyResourses?.map(item => 
                    <Link
                    key={item?.label}
                  href={item?.path}
                  className="text-primary-50 leading-6 relative group w-fit"
                >
                  {item?.label}
                  <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-gradient-to-r from-primary-whites-30 to-primary-20 transition-all duration-300 ease-in-out group-hover:w-full"></span>
                      <span
                        className={clsx(
                          "absolute -right-4 top-[8px]",
                          "opacity-0", // Start hidden
                          "-translate-x-2 translate-y-2",
                          "group-hover:opacity-100",
                          // On hover, translate UP (-y) and RIGHT (+x) significantly
                          "group-hover:-translate-y-1 group-hover:translate-x-1",
                          "transition-all duration-300 ease-out",
                          "pointer-events-none"
                        )}
                        aria-hidden="true"
                      >
                        <RocketArrowIcon />
                      </span>
                </Link>
                  )
                }
              </div>
              <button className="bg-secondary-40 size-12 rounded-full flex items-center justify-center cursor-pointer">
                <Image
                  src={ICONS.upArrow}
                  className="size-7 animate-bounce"
                  alt="up-arrow"
                />
              </button>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Footer;
