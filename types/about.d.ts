export interface ProfileData {
	name: string;
	title: string;
    image: string;
	bio: string;
    location: string;
	socials: { name: string; url: string }[];
	workExperience: ProfileSection[];
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
	links?: { name: string; url: string }[];
}

export interface ProfileSmallSection {
	title: string;
	description: string;
}
