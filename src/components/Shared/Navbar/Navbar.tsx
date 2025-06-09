"use client";
import { ICONS, IMAGES } from "@/assets";
import Image from "next/image";
import Container from "@/components/Reusable/Container/Container";
import { navLinks } from "./navLinks";
import Link from "next/link";
import clsx from "clsx";
import FillBgToTopOnHover from "@/components/AnimatedButtons/FillBgToTopOnHover/FillBgToTopOnHover";
import { useEffect, useRef, useState } from "react";
import MegaMenu from "./MegaMenu";
import { motion, AnimatePresence } from "framer-motion";
import HamburgerMenu from "./HambugerMenu";

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
  const [open, setOpen] = useState(false); // for MegaMenu (desktop & mobile)
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const dropDownRef = useRef<HTMLDivElement>(null);

  const megaMenuVariants = {
    hidden: {
      opacity: 0,
      y: -20,
      transition: { duration: 0.3 },
      transitionEnd: { display: "none" },
    },
    visible: {
      opacity: 1,
      y: 0,
      display: "block",
      transition: { duration: 0.3 },
    },
  };

  useEffect(() => {
    const close = (e: MouseEvent) => {
      if (
        dropDownRef.current &&
        !dropDownRef.current.contains(e.target as Node)
      ) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", close);
    return () => document.removeEventListener("mousedown", close);
  }, []);

  return (
    <Container>
      {/* Navbar top bar */}
      <div id="navbar" className="bg-whites-10 border border-whites-50 rounded-[15px] px-6 py-3 w-full flex items-center justify-between font-Inter relative">
        {/* Logo */}
        <Link href={"/"}>
          <Image
            src={IMAGES.prtechSolutionsLogoGray}
            alt={"PRTech Solutions"}
            className="h-[34px] 2xl:h-12 w-26 md:w-34 cursor-pointer"
          />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:block">
          <nav className="flex gap-8 items-center">
            {navLinks.map(({ name, href }) => (
              <Link
                key={name}
                href={href}
                className={clsx(
                  "text-white flex items-center font-medium relative group py-2 px-1"
                )}
              >
                <span className="relative z-10">{name}</span>
                <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-gradient-to-r from-primary-whites-30 to-primary-20 transition-all duration-300 ease-in-out group-hover:w-full"></span>
                {href !== "/our-services" && (
                  <span
                    className={clsx(
                      "absolute -right-3 top-[13px]",
                      "opacity-0 -translate-x-2 translate-y-2",
                      "group-hover:opacity-100 group-hover:-translate-y-1 group-hover:translate-x-1",
                      "transition-all duration-300 ease-out pointer-events-none"
                    )}
                    aria-hidden="true"
                  >
                    <RocketArrowIcon />
                  </span>
                )}
              </Link>
            ))}

            {/* Services with MegaMenu */}
            <div
              ref={dropDownRef}
              onMouseEnter={() => setOpen(true)}
              className="relative text-white"
            >
              <button className="flex items-center font-medium group cursor-pointer">
                Services
                <Image
                  src={ICONS.dropDownWhiteArrow}
                  alt="dropdown arrow"
                  className={`ml-1 size-6 transition-transform ${
                    open ? "rotate-180" : "rotate-0"
                  }`}
                />
              </button>

             
            </div>
          </nav>
        </div>

        {/* Desktop CTA */}
        <div className="hidden lg:flex items-center gap-5">
          <Link href="/book-consultation">
            <FillBgToTopOnHover btnText="Get Free Quote" />
          </Link>
        </div>

        {/* Hamburger for Mobile */}
        <button className="lg:hidden" onClick={() => setSidebarOpen(true)}>
          <Image src={ICONS.hamburgerMenu} alt="menu" className="h-6 w-6" />
        </button>
      </div>

       <AnimatePresence>
                {open && (
                  <motion.div
                    key="mega-menu"
                    variants={megaMenuVariants}
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    className="absolute left-0 right-0 z-50"
                  >
                    <MegaMenu />
                  </motion.div>
                )}
              </AnimatePresence>

      <HamburgerMenu
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
      />
    </Container>
  );
};

export default Navbar;
