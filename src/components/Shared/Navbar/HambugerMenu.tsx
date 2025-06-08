"use client";
import { ICONS } from "@/assets";
import FillBgToTopOnHover from "@/components/AnimatedButtons/FillBgToTopOnHover/FillBgToTopOnHover";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { navLinks } from "./navLinks";
import { services } from "./MegaMenu.data";

type HamburgerMenuProps = {
  sidebarOpen: boolean;
  setSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const HamburgerMenu = ({ sidebarOpen, setSidebarOpen }: HamburgerMenuProps) => {
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
              className="fixed inset-0 bg-black z-40"
            />
            {/* Sidebar */}
            <motion.div
              key="sidebar"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.3 }}
              className="fixed right-0 top-0 h-full w-[80%] max-w-sm bg-neutral-80 z-50 p-6 flex flex-col justify-between"
            >
              <div>
                {/* Close Button */}
                <div className="flex justify-end mb-6">
                  <button onClick={() => setSidebarOpen(false)}>
                    <span className="text-white text-xl">✕</span>
                  </button>
                </div>

                {/* NavLinks */}
                <nav className="flex flex-col gap-4">
                  {navLinks.map(({ name, href }) => (
                    <Link
                      key={name}
                      href={href}
                      className="text-white font-medium"
                      onClick={() => setSidebarOpen(false)}
                    >
                      {name}
                    </Link>
                  ))}

                  {/* Expandable Services */}
                  <div className="text-white font-medium mt-2">
                    <div
                      onClick={() => setOpen(!open)}
                      className="flex justify-between items-center cursor-pointer"
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
              <div className="mt-6">
                <Link href="/book-consultation">
                  <FillBgToTopOnHover btnText="Get Free Quote" />
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
