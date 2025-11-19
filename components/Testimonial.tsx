import React from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import Image from "next/image";
import Socials from "@/components/Socials";
import type { Testimonial } from "@/types/home";

type TestimonialProps = {
  data: Testimonial;
};
const Testimonial = ({ data }: TestimonialProps) => {
  const { avatar, name, role, comment, links } = data;
  return (
    <Card className="border border-card-border bg-card-bg">
      <CardHeader className="flex flex-row gap-5">
        <Image
          src={avatar}
          alt="Testimonials Avatar"
          width={60}
          height={60}
          className="size-[60px] rounded-lg object-cover"
        />
        <div>
          <h4 className="heading-6-bold font-semibold">{name}</h4>
          <p className="small line-clamp-1 text-muted">{role}</p>
        </div>
      </CardHeader>
      <CardContent className="h-fit min-h-[150px]">
        <p className="paragraph">{comment}</p>
      </CardContent>
      {links && links.length > 0 && (
        <CardFooter>
          <Socials
            className="text-xs text-brand-500 dark:text-brand-200"
            socials={links}
          />
        </CardFooter>
      )}
    </Card>
  );
};

export default Testimonial;
