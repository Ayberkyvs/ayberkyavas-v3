import { Project } from './../sanity/types';
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