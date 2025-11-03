import { AboutMe } from "@/sanity/types";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { UserRoundCheck, UserRoundX } from "lucide-react";

interface AvailableStatusProps {
  status: AboutMe["status"];
  className?: string;
}
const AvailableStatus = ({ status, className }: AvailableStatusProps) => {
  const { isAvailable, statusContext } = status;
  return (
    <>
      <Badge
        className={cn(
          "flex-center w-fit cursor-pointer gap-1 truncate border text-center text-sm",
          {
            "border-green-300 bg-green-200 text-green-900 hover:bg-green-300 dark:border-green-700 dark:bg-green-500 dark:text-green-950 dark:hover:bg-green-400":
              isAvailable,
          },
          {
            "border-red-300 bg-red-200 text-red-900 hover:bg-red-300 dark:border-red-700 dark:bg-red-500 dark:text-red-950 dark:hover:bg-red-400":
              !isAvailable,
          },
          className,
        )}
      >
        {isAvailable ? (
          <UserRoundCheck className="size-[1.2em]" />
        ) : (
          <UserRoundX className="size-[1.2em]" />
        )}
        {statusContext}
      </Badge>
    </>
  );
};

export default AvailableStatus;
