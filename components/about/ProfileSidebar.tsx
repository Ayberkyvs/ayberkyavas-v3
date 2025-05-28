import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { EarthIcon } from "lucide-react";
import { AboutMe } from "@/sanity/types";
import { urlFor } from "@/sanity/lib/image";
import AvailableStatus from "./AvailableStatus";
import ProfileNameAndTitle from "./ProfileNameAndTitle";
import { LanguageBadge } from "./LanguageBadge";

export default function ProfileSidebar({
  data,
}: {
  data: Pick<AboutMe, "imageSrc" | "location" | "status" | "name" | "title">;
}) {
  const { imageSrc, location, status, name, title } = data;
  const languages: LanguageBadgeType[] = [
    {
      level: 3,
      name: "Turkish",
    },
    {
      level: 2,
      name: "English",
    },
    {
      level: 1,
      name: "Deutsch",
    },
  ];
  return (
    <div className="sticky top-[80px] flex w-full items-center justify-start gap-3 sm:flex-col md:top-[100px]">
      <div className="relative">
        <Image
          src={urlFor(imageSrc).width(204).url()}
          alt="Ayberk Yavas Resume Picture"
          width={204}
          height={204}
          className="rounded-full max-sm:size-[150px]"
          priority
        />
        <AvailableStatus
          className="absolute bottom-0 left-1/2 -translate-x-1/2"
          status={status}
        />
      </div>
      <div className="md:flex-center flex flex-col items-center justify-start gap-2">
        <ProfileNameAndTitle name={name} title={title} />
        <p className="flex items-center gap-[5px] text-sm text-neutral-100 md:text-base">
          <EarthIcon className="size-4" />
          {location}
        </p>
        <div className="flex w-full flex-col gap-3">
          {languages?.map((l, index: number) => (
            <LanguageBadge key={index} {...l} />
          ))}
        </div>
      </div>
    </div>
  );
}
