import Logo from "@/components/ui/logo";
import Socials from "@/components/Socials";
import Parallax from "@/components/animations/Parallax";
import Link from "next/link";
import { cn } from "@/lib/utils";

const Footer = () => {
  const socials: Array<{ name: string; link: string }> = [
    {
      name: "LinkedIn",
      link: "https://www.linkedin.com/in/ayberksch/",
    },
    {
      name: "GitHub",
      link: "https://github.com/Ayberkyvs",
    },
    {
      name: "Instagram",
      link: "https://www.instagram.com/ayberksch",
    },
  ];
  return (
    <Parallax>
      <footer className="z-[99] w-full border-t border-border-strong bg-background py-[50px]">
        <div className="layout-prefix flex flex-col gap-5">
          <div className="flex justify-between">
            <Link
              href="/"
              scroll={true}
              title="Website Logo"
              aria-label="Website Logo"
            >
              <Logo
                className="h-[33px] w-[130px] sm:h-[43px] sm:w-[170px]"
                variant="text"
              />
            </Link>
          </div>
          <hr className="border-border-strong" />
          <div className="flex flex-wrap justify-between gap-5">
            <Socials
              className={cn("small text-brand-500 dark:text-brand-200")}
              socials={socials}
            />
            <p className={cn("small text-brand-500 dark:text-brand-200")}>
              ©{new Date().getFullYear()} - AYBERK YAVAS, all rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </Parallax>
  );
};

export default Footer;
