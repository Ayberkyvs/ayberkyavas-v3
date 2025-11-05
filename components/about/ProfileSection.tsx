import Image from "next/image";
import Socials from "@/components/Socials";
import { AboutMe } from "@/sanity/types";
import { urlFor } from "@/sanity/lib/image";

const ProfileSection = ({
  title,
  subtitle,
  description,
  imageSrc,
  imageAlt,
  links,
}: Omit<AboutMe["workExperiences"][number], "_key" | "_type">) => {
  return (
    <div className="mt-8">
      <h6 className="heading-6-bold">{title}</h6>
      <p className="text-muted">{subtitle}</p>
      {links && (
        <Socials
          className="small text-brand-600 dark:text-brand-200 mt-2"
          socials={links}
        />
      )}
      <ul className="paragraph mt-4 list-inside list-disc">{description}</ul>
      {imageSrc && (
        <Image
          src={urlFor(imageSrc).width(254).url()}
          alt={imageAlt || title}
          width={254}
          height={171}
          className="mt-4 max-h-[171px] max-w-[254px] rounded-lg"
        />
      )}
    </div>
  );
};

export default ProfileSection;
