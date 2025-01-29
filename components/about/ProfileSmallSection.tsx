import { AboutMe } from "@/sanity/types";

const ProfileSmallSection = ({
	title,
	description,
}: Omit<AboutMe["studies"][number], "_key" | "_type">) => (
	<div className="mt-4">
		<h6 className="heading-6-bold">{title}</h6>
		<p className="paragraph">{description}</p>
	</div>
);

export default ProfileSmallSection;
