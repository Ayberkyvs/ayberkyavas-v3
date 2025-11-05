import { urlFor } from "@/sanity/lib/image";
import { AboutMe } from "@/sanity/types";
import Image from "next/image";

const ProfileSmallSection = ({
  icons,
  title,
  description,
}: Omit<AboutMe["studies"][number], "_key" | "_type">) => (
  <div className="mt-4">
    {icons && (
      <div className="mb-2 flex gap-2">
        {icons.map((icon) => (
          <div className="rounded-sm bg-white" key={icon._key}>
            <Image
              src={urlFor(icon).width(64).url()}
              alt=""
              width={32}
              height={32}
              className="size-8 object-contain"
            />
          </div>
        ))}
      </div>
    )}
    <h6 className="heading-6-bold">{title}</h6>
    <p className="paragraph">{description}</p>
  </div>
);

export default ProfileSmallSection;
