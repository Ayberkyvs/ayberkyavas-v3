import Socials from "@/components/Socials";
import ProfileSection from "./ProfileSection";
import ProfileInfoSection from "./ProfileInfoSection";
import ScheduleCallButton from "../ScheduleCallButton";

const ProfileContent = () => {
	const profileData = {
		name: "Ayberk Yavas",
		title: "Front-End Developer",
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
		studies: {
			title: "İzmir Ekonomi Üniversitesi",
			subtitle: "Studied software engineering.",
		},
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
			<ScheduleCallButton />
			<h1 className='max-md:text-[49px] heading-1-bold'>{profileData.name}</h1>
			<h4 className='heading-4 text-neutral-300'>{profileData.title}</h4>

			{profileData.socials && (
				<div className='flex gap-4 mt-4'>
					<Socials className='text-blue-200' socials={profileData.socials} />
				</div>
			)}

			<p className='paragraph mt-8'>{profileData.bio}</p>

			<h2 className='heading-2-bold mt-12'>Work Experience</h2>
			{profileData.workExperience.map((experience, index) => (
				<ProfileSection
					key={index}
					title={experience.title}
					subtitle={experience.subtitle}
					contentList={experience.contentList}
					imageSrc={experience.imageSrc}
					imageAlt={`${experience.title} Project`}
					links={experience.links}
				/>
			))}

			<h2 className='heading-2-bold mt-12'>Studies</h2>
			<ProfileInfoSection
				name={profileData.studies.title}
				description={profileData.studies.subtitle}
			/>

			<h2 className='heading-2-bold mt-12'>Certificates</h2>
			{profileData.certificates.map((certificate, index) => (
				<ProfileSection
					key={index}
					title={certificate.title}
					subtitle={certificate.subtitle}
					contentList={certificate.contentList}
					imageSrc={certificate.imageSrc}
					imageAlt={`${certificate.title} Certificate`}
					links={certificate.links}
				/>
			))}

			<h2 className='heading-2-bold mt-12'>Technical skills</h2>
			{profileData.technicalSkills.map((skill, index) => (
				<ProfileInfoSection
					key={index}
					name={skill.name}
					description={skill.description}
				/>
			))}
		</>
	);
};

export default ProfileContent;
