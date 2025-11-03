import Image from "next/image";
import { AboutMe } from "@/sanity/types";
import { urlFor } from "@/sanity/lib/image";
import AvailableStatus from "./AvailableStatus";
import ProfileSidebarContext from "./ProfileSidebarContext";

export default function ProfileSidebar({
  data,
}: {
  data: Pick<AboutMe, "imageSrc" | "status" | "name" | "title" | "socials">;
}) {
  const { imageSrc, status, name, title, socials } = data;

  return (
    <div className="static top-[100px] flex w-full items-center justify-start gap-3 sm:flex-col md:sticky">
      <div className="relative w-fit">
        <Image
          src={urlFor(imageSrc).width(204).url()}
          alt="Ayberk Yavas Resume Picture"
          width={204}
          height={204}
          className="z-[-1] rounded-full border border-border-soft"
          priority
        />
        <AvailableStatus
          className="absolute bottom-0 left-1/2 max-w-full -translate-x-1/2"
          status={status}
        />
      </div>
      <div className="md:flex-center flex flex-col items-center justify-start gap-2">
        <ProfileSidebarContext name={name} title={title} />
      </div>
    </div>
  );
}
