import ProfileContent from "@/components/about/ProfileContent";
import ProfileSidebar from "@/components/about/ProfileSidebar";
import ContactCard from "@/components/ContactCard";
import { Metadata } from "next";
import { client } from "@/sanity/lib/client";
import { ABOUT_ME_QUERY} from "@/sanity/lib/queries";
import { AboutMe } from "@/sanity/types";

export const metadata: Metadata = {
	title: "About me",
	description:
		"Front-End Developer with expertise in React, TypeScript, JavaScript, and CSS, with strong proficiency in Next.js and experience building MERN stack applications. Skilled in tools like Tanstack Query and Webpack, with additional experience in MongoDB and PostgreSQL. Focused on performance optimization, responsive design, SEO-friendly development, and creating user-centered experiences. Attentive to security vulnerabilities and best practices, dedicated to staying current with the latest technologies, thriving in team environments, and continuously improving both professionally and personally.",
	openGraph: {
		images: "",
	},
};
const Page = async () => {
	const profileData: AboutMe = await client.fetch(ABOUT_ME_QUERY);
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
