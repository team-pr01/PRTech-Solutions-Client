"use client";
import { ICONS, IMAGES } from "@/assets";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { navItems } from "./NavLinks";
import Button from "@/components/Reusable/Buttons/Button";

const Navbar = () => {
  const pathname = usePathname();
  return (
    <div className="flex items-center w-full justify-between lg:border lg:border-whites-60 lg:bg-whites-50 p-[11px] rounded-[15px]  max-w-7xl mx-6 ">
      <div>
        <Image
          src={IMAGES.prtechSolutionsLogoGray}
          alt={"PRTech Solutions"}
          className="h-[34px] md:h-12 w-26 md:w-34 cursor-pointer"
        />
      </div>
      <div className=" hidden lg:block ">
        <nav className="flex gap-8 items-center justify-center ">
          {navItems.map(({ name, href, isMegaMenu }) => (
            <Link
              key={name}
              href={href}
              className={clsx(
                "text-white font-inter text-base item-center justify-center font-medium leading-[1.4] flex flex-row",
                pathname === href && "font-semibold"
              )}
            >
              {name}
              {isMegaMenu && (
                <Image
                  src={ICONS.dropDownWhiteArrow}
                  alt={"arrow right"}
                  className="size-6"
                />
              )}
            </Link>
          ))}
        </nav>
      </div>
      <div className=" hidden lg:flex items-center gap-5 justify-center">
        <Button icon={ICONS.darkLightMode} className="bg-whites-50" />
        <Button
          icon={ICONS.topRightBlackArrow}
          text="Get the Quote"
          iconPosition="right"
          className="bg-white"
        />
      </div>
      <Button icon={ICONS.hamburgerMenu} className="bg-transparent lg:hidden " />
    </div>
  );
};

export default Navbar;
