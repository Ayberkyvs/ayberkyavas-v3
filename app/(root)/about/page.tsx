import ProfileContent from "@/components/about/ProfileContent";
import ProfileSidebar from "@/components/about/ProfileSidebar";
import ContactCard from "@/components/ContactCard";
import { ProfileData } from "@/types/about";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "About me",
	description:
		"Front-End Developer with expertise in React, TypeScript, JavaScript, and CSS, with strong proficiency in Next.js and experience building MERN stack applications. Skilled in tools like Tanstack Query and Webpack, with additional experience in MongoDB and PostgreSQL. Focused on performance optimization, responsive design, SEO-friendly development, and creating user-centered experiences. Attentive to security vulnerabilities and best practices, dedicated to staying current with the latest technologies, thriving in team environments, and continuously improving both professionally and personally.",
	openGraph: {
		images: "",
	},
};
const Page = () => {
	const profileData: ProfileData = {
		name: "Ayberk Yavas",
		title: "Front-End Developer",
		image: "/avatar.png",
		location: "Izmir/Turkey",
		bio: "Front-End Developer with expertise in React, TypeScript, JavaScript, and CSS, with strong proficiency in Next.js and experience building MERN stack applications. Skilled in tools like Tanstack Query and Webpack, with additional experience in MongoDB and PostgreSQL. Focused on performance optimization, responsive design, SEO-friendly development, and creating user-centered experiences. Attentive to security vulnerabilities and best practices, dedicated to staying current with the latest technologies, thriving in team environments, and continuously improving both professionally and personally.",
		socials: [
			{
				name: "LinkedIn",
				url: "https://www.linkedin.com/in/ayberksch/",
			},
			{
				name: "GitHub",
				url: "https://github.com/Ayberkyvs",
			},
			{
				name: "Medium",
				url: "https://ayberksch.medium.com/",
			},
			{
				name: "LeetCode",
				url: "https://leetcode.com/u/ayberkyvs/",
			},
		],
		workExperience: [
			{
				title: "Reform Marine",
				subtitle: "Senior Design Engineer",
				contentList: [
					"Redesigned the UI/UX for the FLY platform, resulting in a 20% increase in user engagement and 30% faster load times.",
					"Spearheaded the integration of AI tools into design workflows, enabling designers to iterate 50% faster.",
				],
				imageSrc: "/laptop.png",
				links: [
					{
						name: "Reform Marine",
						url: "https://www.reformmarine.com/",
					},
					{
						name: "Github",
						url: "https://www.reformmarine.com/",
					},
				],
			},
			{
				title: "DigiME",
				subtitle: "Senior Design Engineer",
				contentList: [
					"Redesigned the UI/UX for the FLY platform, resulting in a 20% increase in user engagement and 30% faster load times.",
					"Spearheaded the integration of AI tools into design workflows, enabling designers to iterate 50% faster.",
				],
				imageSrc: "/laptop.png",
				links: [
					{
						name: "DigiME",
						url: "https://www.digime3d.com/",
					},
				],
			},
		],
		studies: [
			{
				name: "İzmir Ekonomi Üniversitesi",
				description: "Studied software engineering.",
			},
		],
		certificates: [
			{
				title: "Meta",
				subtitle: "Front-End Developer",
				contentList: [
					"Redesigned the UI/UX for the FLY platform, resulting in a 20% increase in user engagement and 30% faster load times.",
					"Spearheaded the integration of AI tools into design workflows, enabling designers to iterate 50% faster.",
				],
				imageSrc: "/laptop.png",
				links: [
					{
						name: "View Certificate",
						url: "https://www.coursera.org/account/accomplishments/professional-cert/G1Z8VD7P21EA",
					},
				],
			},
		],
		technicalSkills: [
			{
				name: "Next.js",
				description:
					"Spearheaded the integration of AI tools into design workflows, enabling designers to iterate 50% faster.",
			},
			{
				name: "React",
				description:
					"Spearheaded the integration of AI tools into design workflows, enabling designers to iterate 50% faster.",
			},
		],
	};
	return (
		<>
			<section className='layout-prefix w-full h-fit mt-[60px] md:mt-[80px]'>
				<div className='grid max-sm:grid-rows-[auto_1fr] max-sm:auto-rows-auto grid-cols-2 xs:grid-cols-4 sm:grid-cols-8 lg:grid-cols-12 gap-[15px]'>
					<div className='col-span-12 sm:col-span-2'>
						<ProfileSidebar data={profileData} />
					</div>
					<div className='col-span-12 sm:col-start-3 lg:col-start-4 xs:col-end-5 sm:col-end-9 lg:col-end-13'>
						<ProfileContent data={profileData} />
					</div>
				</div>
			</section>
			<div className='layout-prefix flex-center flex-col gap-[100px] w-full mb-0'>
				<ContactCard />
			</div>
		</>
	);
};

export default Page;
