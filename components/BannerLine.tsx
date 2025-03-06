import React from "react";
import { ScrollingBanner } from "@/components/animations/ScrollingBanner";
import Logo from "@/components/ui/logo";

const BannerLine = () => {
  const slogans = [
    "GOOD QUALITY",
    "USER FRIENDLY",
    "FRONTEND SERVICE",
    "ACCESSIBLE",
    "INTERACTIVE",
    "RESPONSIVE",
    "MAINTAINABLE",
  ];
  return (
    <div className="flex-center -ml-2 h-[60px] w-screen -rotate-3 bg-gradient-to-r from-blue-300 to-[var(--brand)] md:h-[70px]">
      <ScrollingBanner speed={1}>
        {slogans.map((slogan, index: number) => (
          <div
            className="flex-center w-fit flex-[0_0_55%] gap-3 xs:flex-[0_0_45%] sm:flex-[0_0_35%] md:flex-[0_0_25%] lg:flex-[0_0_20%] 2xl:flex-[0_0_15%]"
            key={index}
          >
            <Logo
              className="h-[20px] w-[29px] text-black lg:h-[30px] lg:w-[39px]"
              variant="icon"
            />
            <span className="lg:heading-6-bold truncate text-base font-bold !text-black xs:text-lg">
              {slogan}
            </span>
          </div>
        ))}
      </ScrollingBanner>
    </div>
  );
};

export default BannerLine;
