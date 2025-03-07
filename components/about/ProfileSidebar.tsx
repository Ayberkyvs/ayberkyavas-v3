import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { EarthIcon } from "lucide-react";
import { AboutMe } from "@/sanity/types";
import { urlFor } from "@/sanity/lib/image";
import AvailableStatus from "./AvailableStatus";
import ProfileNameAndTitle from "./ProfileNameAndTitle";

export default function ProfileSidebar({
  data,
}: {
  data: Pick<AboutMe, "imageSrc" | "location" | "status" | "name" | "title">;
}) {
  const { imageSrc, location, status, name, title } = data;
  return (
    <div className="sticky top-[80px] flex w-full flex-col items-center gap-3 md:top-[100px]">
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
        <div className="flex gap-3">
          <Badge variant="outline" className="text-neutral-300">
            English
          </Badge>
          <Badge variant="outline" className="bg-blue-200 text-black">
            Turkish
          </Badge>
        </div>
      </div>
    </div>
  );
}
