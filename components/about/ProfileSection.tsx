import Image from "next/image";
import Socials from "@/components/Socials";

interface ProfileSectionProps {
    title: string;
    subtitle: string;
    contentList: string[];
    imageSrc?: string;
    imageAlt?: string;
    links?: { name: string; url: string }[];
}
const ProfileSection = ({ title, subtitle, contentList, imageSrc, imageAlt, links }: ProfileSectionProps) => {
	return (
		<div className="mt-8">
			<h6 className="heading-6-bold">{title}</h6>
			<p className="text-neutral-300">{subtitle}</p>
            {links && (
                <Socials className="small mt-2 text-blue-200" socials={links} />
            )}
			<ul className="list-disc list-inside mt-4 paragraph">
				{contentList.map((content, index) => (
					<li key={index}>{content}</li>
				))}
			</ul>
			{imageSrc && (
				<Image
					src={imageSrc}
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
