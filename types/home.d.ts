import { Project } from "./../sanity/types";
import { Project } from "@/sanity/types";
import { SocialsData } from "@/types/socials";

export interface Testimonial {
  avatar: string;
  name: string;
  role: string;
  comment: string;
  links?: Array<SocialsData>;
}

export interface Brand {
  name: string;
  image: string;
}

export type NavbarItemDataType = {
  name: string;
  href: string;
  btnType: "link" | "default";
};

export interface AuthorInfoType {
  aboutMeData: { name: string; image?: string };
  createdAt: string;
  content: string;
  size?: "sm" | "md" | "lg";
}

export interface HeroProduct {
  title: string;
  link?: string;
  imageSrc: string;
}
