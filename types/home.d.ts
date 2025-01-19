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

export interface Blogs {
    title: string,
    image?: string,
    description: string,
    category: string,
}

export interface Projects {
    forWho: string;
    createdAt: Date;
    title: string;
    description: string;
    callToActions?: Array<{label:string, link: string}>;
    image: string;
}