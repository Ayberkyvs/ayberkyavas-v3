import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

const FooterSocials = ({className}:{className?: string}) => {
	const socials = [
		{
			name: "LinkedIn",
			url: "https://www.linkedin.com/in/ayberksch/",
            icon: <ArrowUpRight />,
		},
		{
			name: "GitHub",
			url: "https://github.com/Ayberkyvs",
            icon: <ArrowUpRight />,
		},
		{
			name: "Medium",
			url: "https://ayberksch.medium.com/",
            icon: <ArrowUpRight />,
		},
		{
			name: "LeetCode",
			url: "https://leetcode.com/u/ayberkyvs/",
            icon: <ArrowUpRight />,
		},
	];
	return (
		<>
			<div className='flex gap-[10px] w-fit h-fit flex-wrap'>
				{socials.map((social, index: number) => (
					<Link href={social.url} className={`flex-center gap-[5px] w-fit ${className}`} key={index}>
						<h1>{social.name}</h1>
						{social.icon}
					</Link>
				))}
			</div>
		</>
	);
};

export default FooterSocials;
