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
import { LogoSwitcher } from "./LogoSwitcher";

const Header = () => {
  return (
    <>
      <header className="header z-[98]">
        <div className="inner-header">
          <LogoSwitcher />
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
