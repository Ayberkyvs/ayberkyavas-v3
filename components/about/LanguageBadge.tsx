import { LanguageLevelBars } from "./LanguageLevelBars";
import { Badge } from "../ui/badge";

export const LanguageBadge = ({ name, level }: LanguageBadgeType) => {
  return (
    <Badge
      variant="outline"
      className="relative flex h-fit w-full justify-between overflow-hidden text-neutral-200"
    >
      <span className="z-10">{name}</span>
      <LanguageLevelBars level={level} className="z-10 h-fit" />
    </Badge>
  );
};
