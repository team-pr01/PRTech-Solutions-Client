"use client";
import { ICONS, IMAGES } from "@/assets";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import Button from "@/components/Reusable/Buttons/Button";
import Container from "@/components/Reusable/Container/Container";
import { navLinks } from "./navLinks";

const Navbar = () => {
  const pathname = usePathname();
  return (
    <Container>
      <div className="bg-whites-10 border border-whites-50 rounded-[15px] px-6 py-3 w-full flex items-center justify-between font-Inter">
        {/* Logo */}
        <Image
          src={IMAGES.prtechSolutionsLogoGray}
          alt={"PRTech Solutions"}
          className="h-[34px] 2xl:h-12 w-26 md:w-34 cursor-pointer"
        />
        {/* NavLinks */}
        <div className="hidden lg:block">
          <nav className="flex gap-8 items-center justify-center ">
            {navLinks.map(({ name, href, isMegaMenu }) => (
              <Link
                key={name}
                href={href}
                className={clsx(
                  "text-white item-center justify-center leading-[1.4] flex font-medium",
                  pathname === href && ""
                )}>
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
        {/* Right side buttons */}
        <div className=" hidden lg:flex items-center gap-5 justify-center">
          <Button
            icon={ICONS.darkLightMode}
            className="bg-whites-50 px-[15px] md:px-[15px] lg:px-[15px]"
          />
          <Button
            icon={ICONS.topRightBlackArrow}
            text="Get the Quote"
            iconPosition="right"
            className="bg-white p-[15px]"
          />
        </div>
        {/* Hamburger menu */}
        <Button
          icon={ICONS.hamburgerMenu}
          className="bg-transparent lg:hidden"
        />
      </div>
    </Container>
  );
};

export default Navbar;
