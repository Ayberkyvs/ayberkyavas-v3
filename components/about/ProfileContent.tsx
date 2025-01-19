import Socials from "@/components/Socials";
import ProfileSection from "./ProfileSection";
import ProfileSmallSection from "./ProfileSmallSection";
import ScheduleCallButton from "../ScheduleCallButton";
import type { ProfileData } from "@/types/about";

type ProfileContentProps = {
	data: Omit<ProfileData, "image" | "location">;
};
const ProfileContent = ({data}: ProfileContentProps) => {
	const { name, title, socials, bio, workExperience, certificates, studies, technicalSkills } = data;
	return (
		<>
			<ScheduleCallButton />
			<h1 className='max-md:text-[49px] heading-1-bold'>{name}</h1>
			<h4 className='heading-4 text-neutral-300'>{title}</h4>

			{socials && (
				<div className='flex gap-4 mt-4'>
					<Socials className='text-blue-200' socials={socials} />
				</div>
			)}

			<p className='paragraph mt-8'>{bio}</p>

			<h2 className='heading-2-bold mt-12'>Work Experience</h2>
			{workExperience.length > 0 &&
				workExperience.map((experience, index) => (
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
			{!(workExperience.length > 0) && <p className='text-red-300 heading-6-bold mt-8'>No Work Experience Found.</p>}

			<h2 className='heading-2-bold mt-12'>Studies</h2>
			{studies.length > 0 &&
				studies.map((study, index) => (
					<ProfileSmallSection
						key={index}
						name={study.name}
						description={study.description}
					/>
				))}
			{!(studies.length > 0) && <p className='text-red-300 heading-6-bold mt-8'>No Studies Found.</p>}

			<h2 className='heading-2-bold mt-12'>Certificates</h2>
			{certificates.length > 0 && certificates.map((certificate, index) => (
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
			{!(certificates.length > 0) && <p className='text-red-300 heading-6-bold mt-8'>No Certificates Found.</p>}

			<h2 className='heading-2-bold mt-12'>Technical skills</h2>
			{technicalSkills.length > 0 && technicalSkills.map((skill, index) => (
				<ProfileSmallSection
					key={index}
					name={skill.name}
					description={skill.description}
				/>
			))}
			{!(technicalSkills.length > 0) && <p className='text-red-300 heading-6-bold mt-8'>No Technical Skills Found.</p>}
		</>
	);
};

export default ProfileContent;
