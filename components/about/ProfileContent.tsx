import Socials from "@/components/Socials";
import ProfileSection from "@/components/about/ProfileSection";
import ProfileSmallSection from "@/components/about/ProfileSmallSection";
import type { ProfileData } from "@/types/about";
import ContactCTAButtons from "@/components/ContactCTAButtons";
import { AboutMe } from "@/sanity/types";

const ProfileContent = ({data}: {data: Omit<AboutMe, "Resume" | "imageSrc" | "location">}) => {
	const { name, title, socials, bio, workExperiences, certificates, studies, technicalSkills } = data;
	return (
		<>
			<ContactCTAButtons />
			<h1 className='max-md:text-[49px] heading-1-bold'>{name}</h1>
			<h4 className='heading-4 text-neutral-300'>{title}</h4>

			{socials && (
				<div className='flex gap-4 mt-4'>
					<Socials className='text-blue-200' socials={socials} />
				</div>
			)}

			<p className='paragraph mt-8'>{bio}</p>

			<h2 className='heading-2-bold mt-12'>Work Experiences</h2>
			{workExperiences.length > 0 &&
				workExperiences.map((experience) => (
					<ProfileSection
						key={experience._key}
						title={experience.title}
						subtitle={experience.subtitle}
						description={experience.description}
						imageSrc={experience.imageSrc}
						imageAlt={experience.imageAlt}
						links={experience.links}
					/>
				))}
			{!(workExperiences.length > 0) && <p className='text-red-300 heading-6-bold mt-8'>No Work Experience Found.</p>}

			<h2 className='heading-2-bold mt-12'>Studies</h2>
			{studies.length > 0 &&
				studies.map((study) => (
					<ProfileSmallSection
						key={study._key}
						title={study.title}
						description={study.description}
					/>
				))}
			{!(studies.length > 0) && <p className='text-red-300 heading-6-bold mt-8'>No Studies Found.</p>}

			<h2 className='heading-2-bold mt-12'>Certificates</h2>
			{certificates.length > 0 && certificates.map((certificate) => (
				<ProfileSection
					key={certificate._key}
					title={certificate.title}
					subtitle={certificate.subtitle}
					description={certificate.description}
					imageSrc={certificate.imageSrc}
					imageAlt={`${certificate.title} Certificate`}
					links={certificate.links}
				/>
			))}
			{!(certificates.length > 0) && <p className='text-red-300 heading-6-bold mt-8'>No Certificates Found.</p>}

			<h2 className='heading-2-bold mt-12'>Technical skills</h2>
			{technicalSkills.length > 0 && technicalSkills.map((skill) => (
				<ProfileSmallSection
					key={skill._key}
					title={skill.title}
					description={skill.description}
				/>
			))}
			{!(technicalSkills.length > 0) && <p className='text-red-300 heading-6-bold mt-8'>No Technical Skills Found.</p>}
		</>
	);
};

export default ProfileContent;
