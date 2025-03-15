import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { Project } from "@/sanity/types";
import { urlFor } from "@/sanity/lib/image";
const ProjectCard = ({ data }: { data: Project }) => {
  const { forWho, createdAt, title, description, callToActions, imageSrc } =
    data;
  return (
    <div className="relative flex h-fit min-h-[400px] w-full flex-col items-center gap-5 overflow-hidden rounded-lg border border-border bg-card-background p-[30px] xl:flex-row xl:p-[50px]">
      <div className="flex w-full flex-col gap-5 xl:max-w-[490px]">
        <div>
          <h6 className="heading-6-bold uppercase text-brand">
            {forWho} - {new Date(createdAt).getFullYear()}
          </h6>
          <h3 className="heading-4-bold uppercase">{title}</h3>
        </div>
        <hr className="border border-border" />
        <p className="paragraph">{description}</p>
        <div className="flex gap-2">
          {callToActions &&
            callToActions.length > 0 &&
            callToActions.map((cta) => (
              <Link href={cta.link || "#"} key={cta._key}>
                <Button variant="secondary" size="sm" className="w-fit">
                  {cta.label}
                </Button>
              </Link>
            ))}
        </div>
      </div>
      <Image
        src={urlFor(imageSrc).width(557).url()}
        alt="Laptop"
        width={557}
        height={376}
        className="-bottom-10 flex h-auto w-full basis-1/2 xl:absolute xl:-right-12 xl:h-[376px] xl:max-w-[557px]"
      />
    </div>
  );
};

export default ProjectCard;
