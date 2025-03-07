"use client";
import { motion, useScroll } from "framer-motion";
import { useEffect, useState } from "react";
import FadeIn from "../animations/FadeIn";
import { cn } from "@/lib/utils";
const ProfileNameAndTitle = ({
  name,
  title,
}: {
  name: string;
  title: string;
}) => {
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
          <motion.div className="hidden text-center sm:block">
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
        </FadeIn>
      )}
    </>
  );
};

export default ProfileNameAndTitle;
