// components/LanguageLevelBars.tsx
import React from "react";
import clsx from "clsx";

type LanguageLevelBarsProps = {
  level: 1 | 2 | 3;
  className?: string;
};

export const LanguageLevelBars = ({
  level,
  className,
}: LanguageLevelBarsProps) => {
  return (
    <div className={clsx("flex !h-4 items-end gap-[2px]", className)}>
      {[1, 2, 3].map((bar) => (
        <div
          key={bar}
          className={clsx(
            "w-1 rounded-sm",
            bar === 1 && "h-[30%]",
            bar === 2 && "h-[60%]",
            bar === 3 && "h-full",
            bar <= level ? "bg-neutral-200" : "bg-neutral-500",
          )}
        />
      ))}
    </div>
  );
};
