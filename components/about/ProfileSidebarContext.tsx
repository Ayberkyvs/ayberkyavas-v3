"use client";
import { motion, useScroll } from "framer-motion";
import { useEffect, useState } from "react";
import FadeIn from "../animations/FadeIn";
import { cn } from "@/lib/utils";
import { ProfileSidebarContextType } from "@/types/about";
import Socials from "../Socials";

const ProfileSidebarContext = ({
  name,
  title,
  socials,
}: ProfileSidebarContextType) => {
  const { scrollY } = useScroll(); // Scroll değerini al
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const unsubscribe = scrollY.on("change", (latest) => {
      if (!(latest > 100)) setIsVisible(false);
      else setIsVisible(true);
    });
    return () => unsubscribe();
  }, [scrollY]);
  return (
    <>
      {isVisible && (
        <FadeIn direction="down" distance={20} duration={0.3}>
          <motion.div className="mb-4 hidden text-center sm:block">
            <span
              className={cn(
                "heading-6-bold sm:heading-5-bold text-white",
                "max-md:text-lg",
              )}
            >
              {name}
            </span>
            <p className="paragraph max-md:text-sm">{title}</p>
          </motion.div>
          {socials && (
            <Socials
              socials={socials}
              className="w-full rounded-lg border border-button-secondary-border bg-button-secondary-bg py-2 text-sm text-button-secondary-text shadow-button-secondary-shadow hover:bg-button-secondary-hover"
            />
          )}
        </FadeIn>
      )}
    </>
  );
};

export default ProfileSidebarContext;
