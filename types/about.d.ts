import { AboutMe } from "@/sanity/types";
import { SocialsData } from "./socials";

export interface ProfileData {
	name: string;
	title: string;
    imageSrc: string;
	bio: string;
    location: string;
	socials: { name: string; link: string }[];
	workExperiences: ProfileSection[];
	certificates: ProfileSection[];
    studies: ProfileSmallSection[];
    technicalSkills: ProfileSmallSection[];
}

export interface ProfileSection {
	title: string;
	subtitle: string;
	description: string;
	imageSrc?: string;
	imageAlt?: string;
	links?: SocialsData[];
}

export interface ProfileSmallSection {
	title: string;
	description: string;
}
