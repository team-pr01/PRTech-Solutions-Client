"use client";
import { ICONS, IMAGES } from "@/assets";
import FillBgToTopOnHover from "@/components/AnimatedButtons/FillBgToTopOnHover/FillBgToTopOnHover";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { navLinks } from "./navLinks";
import { services } from "./MegaMenu.data";
import { usePathname } from "next/navigation";

type HamburgerMenuProps = {
  sidebarOpen: boolean;
  setSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const HamburgerMenu = ({ sidebarOpen, setSidebarOpen }: HamburgerMenuProps) => {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  return (
    <div>
      <AnimatePresence>
        {sidebarOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              key="sidebar-backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              onClick={() => setSidebarOpen(false)}
              className="sticky inset-0 bg-black z-40"
            />
            {/* Sidebar */}
            <motion.div
              key="sidebar"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.3 }}
              className="fixed overflow-y-auto right-0 top-0 h-full w-[80%] max-w-sm bg-secondary-20 z-50 flex flex-col justify-between"
            >
              <div className="flex flex-col">
                {/* Close Button */}
                <div className="flex items-center justify-between mb-6 px-4 py-6">
                  <Link href={"/"}>
                    <Image
                      src={IMAGES.prtechSolutionsLogoGray}
                      alt={"PRTech Solutions"}
                      className="h-[34px] 2xl:h-12 w-26 md:w-34 cursor-pointer"
                    />
                  </Link>

                  <button onClick={() => setSidebarOpen(false)}>
                    <span className="text-white text-xl">✕</span>
                  </button>
                </div>

                {/* NavLinks */}
                <nav className="flex flex-col gap-6">
                  {navLinks.map(({ name, href }) => (
                    <Link
                      key={name}
                      href={href}
                      className={`text-white font-medium px-4 py-2 ${pathname === href ? "border-l-4 border-primary-20" : ""}`}
                      onClick={() => setSidebarOpen(false)}
                    >
                      {name}
                    </Link>
                  ))}

                  {/* Expandable Services */}
                  <div className="text-white font-medium mt-2">
                    <div
                      onClick={() => setOpen(!open)}
                      className="flex justify-between items-center cursor-pointer px-4 py-2"
                    >
                      <span>Services</span>
                      <Image
                        src={ICONS.dropDownWhiteArrow}
                        alt="arrow"
                        className={`size-5 transition-transform ${
                          open ? "rotate-180" : "rotate-0"
                        }`}
                      />
                    </div>

                    <AnimatePresence>
                      {open && (
                        <motion.div
                          key="mobile-services"
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          className="pl-5 mt-2"
                        >
                          <div className="flex flex-col gap-4">
                            {services?.map((service) => (
                              <div key={service.label} className="flex gap-4">
                                <div className="relative size-5">
                                  <Image
                                    src={ICONS.boxShape}
                                    alt=""
                                    className="size-5"
                                  />
                                  <Image
                                    src={service.icon}
                                    alt=""
                                    className="size-3 absolute top-1 right-[4px]"
                                  />
                                </div>

                                <div>
                                  <h1 className="text-md font-normal text-white">
                                    {service.label}
                                  </h1>
                                </div>
                              </div>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </nav>
              </div>

              {/* CTA Button */}
              <div className="mt-6 px-4 py-6">
                <Link href="/book-consultation">
                  <FillBgToTopOnHover btnText="Get Free Quote" classNames="w-full py-3" />
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default HamburgerMenu;
