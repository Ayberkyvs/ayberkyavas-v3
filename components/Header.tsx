import React from "react";
import Navbar from "@/components/Navbar";
import {
  MobileMenu,
  MobileMenuTrigger,
  MobileMenuContent,
} from "@/components/MobileMenu";
import { MenuIcon, X } from "lucide-react";
import ScrollIndicator from "./ScrollIndicator";
import Logo from "./ui/logo";
import Link from "next/link";

const Header = () => {
  return (
    <>
      <header className="header z-[98]">
        <div className="inner-header">
          <Link
            href="/"
            title="Website Logo"
            aria-label="Website Logo"
            className="flex gap-2"
            scroll
          >
            <Logo
              className="h-[24px] w-[90px] text-text lg:h-[28px] lg:w-[104px]"
              variant="text"
            />
          </Link>
          <Navbar direction="horizontal" className="hidden md:block" />
          <MobileMenu className="md:hidden">
            <MobileMenuTrigger>
              <MenuIcon />
              <X />
            </MobileMenuTrigger>
            <MobileMenuContent>
              <Navbar direction="vertical" className="bg-transparent" />
            </MobileMenuContent>
          </MobileMenu>
        </div>
        <ScrollIndicator />
      </header>
    </>
  );
};

export default Header;
