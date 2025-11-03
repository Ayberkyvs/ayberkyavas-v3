import Socials from "@/components/Socials";
import ProfileSection from "@/components/about/ProfileSection";
import ProfileSmallSection from "@/components/about/ProfileSmallSection";
import ContactCTAButtons from "@/components/ContactCTAButtons";
import { AboutMe } from "@/sanity/types";
import CTAButton from "../ui/cta-button";
import { FileUser, Mail } from "lucide-react";
import InfiniteCarousel from "@/components/InfiniteCarousel";
import Image from "next/image";
import { brands } from "@/lib/consts";

const ProfileContent = ({
  data,
}: {
  data: Omit<AboutMe, "imageSrc" | "location">;
}) => {
  const {
    Resume: resumeLink,
    name,
    title,
    socials,
    bio,
    workExperiences,
    certificates,
    studies,
    technicalSkills,
  } = data;
  return (
    <>
      <div className="flex flex-wrap gap-2">
        <CTAButton
          className="mb-5 w-fit rounded-lg"
          link={(resumeLink as any) || "/"}
          buttonName="My Resume Button"
        >
          My Resume
          <FileUser />
        </CTAButton>
        <CTAButton
          className="mb-5 rounded-lg border border-border-strong bg-transparent font-bold !text-foreground hover:bg-brand hover:!text-white dark:bg-transparent"
          link="mailto:contact@ayberkyavas.com"
          size="icon"
          buttonName="Mail me"
        >
          <Mail />
        </CTAButton>
      </div>
      <h1 className="heading-1-bold max-md:text-[49px]">{name}</h1>
      <h4 className="heading-4 text-muted">{title}</h4>

      {socials && (
        <div className="mt-4 flex gap-4">
          <Socials socials={socials} />
        </div>
      )}

      <p className="paragraph mt-8">{bio}</p>

      <div className="mt-8 w-full max-w-screen-2xl overflow-hidden">
        <InfiniteCarousel>
          {brands &&
            brands.map((brand, index) => (
              <div
                key={index}
                className="embla__slide flex h-[75px] w-[200px] items-center justify-center gap-2 text-foreground opacity-100"
              >
                <Image
                  src={brand.image}
                  alt={`${brand.name} logo svg`}
                  width={50}
                  height={50}
                  className="aspect-square brightness-0 dark:invert md:size-[50px]"
                />
                <p className="heading-6-bold hidden lg:flex">{brand.name}</p>
              </div>
            ))}
        </InfiniteCarousel>
      </div>
      <h2 className="heading-3-bold md:heading-2-bold mt-12">
        Work Experiences
      </h2>
      {workExperiences.length > 0 &&
        workExperiences.map((experience) => (
          <ProfileSection
            key={experience._key}
            title={experience.title}
            subtitle={experience.subtitle}
            description={experience.description}
            imageSrc={experience.imageSrc}
            imageAlt={experience.imageAlt}
            links={experience.links}
          />
        ))}
      {!(workExperiences.length > 0) && (
        <p className="heading-6-bold mt-8 text-red-300">
          No Work Experience Found.
        </p>
      )}

      <h2 className="heading-3-bold md:heading-2-bold mt-12">Studies</h2>
      {studies.length > 0 &&
        studies.map((study) => (
          <ProfileSmallSection
            key={study._key}
            title={study.title}
            description={study.description}
          />
        ))}
      {!(studies.length > 0) && (
        <p className="heading-6-bold mt-8 text-red-300">No Studies Found.</p>
      )}

      <h2 className="heading-3-bold md:heading-2-bold mt-12">Certificates</h2>
      {certificates.length > 0 &&
        certificates.map((certificate) => (
          <ProfileSection
            key={certificate._key}
            title={certificate.title}
            subtitle={certificate.subtitle}
            description={certificate.description}
            imageSrc={certificate.imageSrc}
            imageAlt={`${certificate.title} Certificate`}
            links={certificate.links}
          />
        ))}
      {!(certificates.length > 0) && (
        <p className="heading-6-bold mt-8 text-red-300">
          No Certificates Found.
        </p>
      )}

      <h2 className="heading-3-bold md:heading-2-bold mt-12">
        Technical skills
      </h2>
      {technicalSkills.length > 0 &&
        technicalSkills.map((skill) => (
          <ProfileSmallSection
            icons={skill.icons}
            key={skill._key}
            title={skill.title}
            description={skill.description}
          />
        ))}
      {!(technicalSkills.length > 0) && (
        <p className="heading-6-bold mt-8 text-red-300">
          No Technical Skills Found.
        </p>
      )}
    </>
  );
};

export default ProfileContent;
