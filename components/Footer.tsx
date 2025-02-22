import Logo from "@/components/ui/logo";
import Socials from "@/components/Socials";
import Parallax from "@/components/animations/Parallax";
import Link from "next/link";
import Image from "next/image";

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
      name: "Medium",
      link: "https://ayberksch.medium.com/",
    },
    {
      name: "LeetCode",
      link: "https://leetcode.com/u/ayberkyvs/",
    },
  ];
  return (
    <Parallax>
      <footer className="z-[99] w-full border-t border-border bg-background py-[50px]">
        <div className="layout-prefix flex flex-col gap-5">
          <div className="flex justify-between">
            <Link
              href="/"
              scroll={true}
              title="Website Logo"
              aria-label="Website Logo"
            >
              <Logo
                className="h-[33px] w-[140px] text-white sm:h-[43px] sm:w-[180px]"
                variant="text"
              />
            </Link>
            <a
              href="https://hostedscan.com"
              target="_blank"
              rel="noopener noreferrer"
              title="HostedScan | An automated vulnerability scanner"
            >
              <Image
                src="https://hostedscan.com/protected-by-hostedscan.svg"
                alt="HostedScan | An automated vulnerability scanner"
                height={43}
                width={102}
                className="h-[33px] w-[78px] sm:h-[43px] sm:w-[102px]"
              />
            </a>
          </div>
          <hr className="border-border" />
          <div className="flex flex-wrap justify-between gap-5">
            <Socials
              className="small sm:paragraph !text-text"
              socials={socials}
            />
            <p className="small sm:paragraph !text-text">
              ©{new Date().getFullYear()} COPYRIGHT AYBERK YAVAS. ALL RIGHTS
              RESERVED.
            </p>
          </div>
        </div>
      </footer>
    </Parallax>
  );
};

export default Footer;
