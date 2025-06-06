"use client";
import { ICONS, IMAGES } from "@/assets";
import Image from "next/image";
import Button from "@/components/Reusable/Buttons/Button";
import Container from "@/components/Reusable/Container/Container";
import { navLinks } from "./navLinks";
import Link from "next/link";
import clsx from "clsx";
import { usePathname } from "next/navigation";
import FillBgToTopOnHover from "@/components/AnimatedButtons/FillBgToTopOnHover/FillBgToTopOnHover";
import { useEffect, useRef, useState } from "react";
import MegaMenu from "./MegaMenu";

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

const Navbar = () => {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const dropDownRef = useRef(null);
  const items = ["React", "Angular", "Vue"];
  useEffect(() => {
    const close = (e) => {
      if (dropDownRef.current && !dropDownRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", close);

    return () => {
      document.removeEventListener("mousedown", close);
    };
  }, []);

  return (
    <Container>
      <div
        id="navbar"
        className="bg-whites-10 border border-whites-50 rounded-[15px] px-6 py-3 w-full flex items-center justify-between font-Inter"
      >
        {/* Logo */}
        <Link href={"/"}>
          <Image
            src={IMAGES.prtechSolutionsLogoGray}
            alt={"PRTech Solutions"}
            className="h-[34px] 2xl:h-12 w-26 md:w-34 cursor-pointer"
          />
        </Link>

        {/* NavLinks */}
        <div className="hidden lg:block">
          <nav className="flex gap-8 items-center justify-center w-full">
            {/* Dropdown */}
            <div
              ref={dropDownRef}
              className="relative mx-auto w-fit text-white"
            >
              <button
                onClick={() => setOpen(!open)}
                onMouseEnter={() => setOpen(true)}
                className="text-white items-center justify-center leading-[1.4] flex font-medium cursor-pointer group"
              >
                Services
                <Image
                  src={ICONS.dropDownWhiteArrow}
                  alt={"dropdown arrow"}
                  className="ml-1 size-6 relative z-10"
                />
              </button>
            </div>
           
            {navLinks.map(({ name, href }) => (
              <Link
                key={name}
                href={href}
                className={clsx(
                  "text-white item-center justify-center leading-[1.4] flex font-medium",
                  "relative group py-2 px-1",
                  pathname === href && ""
                )}
              >
                <span className="relative z-10">{name}</span>
                <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-gradient-to-r from-primary-whites-30 to-primary-20 transition-all duration-300 ease-in-out group-hover:w-full"></span>
                {href !== "/our-services" && (
                  <>
                    {/* Rocket animation */}
                    <span
                      className={clsx(
                        "absolute -right-3 top-[13px]",
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
                  </>
                )}
              </Link>
            ))}
          </nav>
        </div>
        {/* Right side buttons */}
        <div className=" hidden lg:flex items-center gap-5 justify-center">
          <Button
            icon={ICONS.darkLightMode}
            className="bg-whites-50 px-[15px] md:px-[15px] lg:px-[15px]"
          />
          <Link href={"/book-consultation"}>
            <FillBgToTopOnHover btnText="Get Free Quote" />
          </Link>
        </div>
        {/* Hamburger menu */}
        <Button
          icon={ICONS.hamburgerMenu}
          className="bg-transparent lg:hidden"
        />
      </div>
       <div
              className={clsx(
                "fixed z-50",
                open ? "visible" : "invisible",
                "max-w-screen flex " // Optional: add px if needed to align with content
              )}
            >
              <MegaMenu />
            </div>
    </Container>
  );
};

export default Navbar;
