import Navbar from "@/components/Navbar";
import { MobileMenu, MobileMenuContent } from "@/components/MobileMenu";
import ScrollIndicator from "./ScrollIndicator";
import { LogoSwitcher } from "./LogoSwitcher";
import { MenuIcon, X } from "lucide-react";
import { ModeToggle } from "./mode-toggle";
import LoginButton from "./LoginButton";

const Header = () => {
  return (
    <>
      <header className="header z-[98]">
        <div className="inner-header">
          <LogoSwitcher />
          <Navbar direction="horizontal" className="hidden md:block" />
          <MobileMenu
            className="size-fit md:hidden"
            openTrigger={<MenuIcon />}
            closeTrigger={<X />}
          >
            <MobileMenuContent>
              <div className="flex w-full gap-5">
                <LoginButton className="mb-4 flex md:hidden" />
                <ModeToggle btnVariant="secondary" className="w-1/3" />
              </div>
              <Navbar direction="vertical" itemClassName="!text-base" />
            </MobileMenuContent>
          </MobileMenu>
        </div>
        <ScrollIndicator />
      </header>
    </>
  );
};

export default Header;
