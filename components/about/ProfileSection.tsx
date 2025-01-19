import Image from "next/image";
import Socials from "@/components/Socials";
import { AboutMe } from "@/sanity/types";
import { urlFor } from "@/sanity/lib/image";

const ProfileSection = ({ title, subtitle, description, imageSrc, imageAlt, links }: Omit<AboutMe["workExperiences"][number], '_key' | '_type'>) => {
	return (
		<div className="mt-8">
			<h6 className="heading-6-bold">{title}</h6>
			<p className="text-neutral-300">{subtitle}</p>
            {links && (
                <Socials className="small mt-2 text-blue-200" socials={links} />
            )}
			<ul className="list-disc list-inside mt-4 paragraph">
				{description}
			</ul>
			{imageSrc && (
				<Image
					src={urlFor(imageSrc).width(254).url()}
					alt={imageAlt || title}
					width={254}
					height={171}
					className="mt-4 rounded-lg aspect-16/9 max-w-[254px] max-h-[171px]"
				/>
			)}
		</div>
	);
};

export default ProfileSection;
