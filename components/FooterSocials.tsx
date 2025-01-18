import { ArrowUpRight } from "lucide-react";

const FooterSocials = ({className}:{className?: string}) => {
	const socials = [
		{
			name: "LinkedIn",
			url: "",
            icon: <ArrowUpRight />,
		},
		{
			name: "GitHub",
			url: "",
            icon: <ArrowUpRight />,
		},
		{
			name: "Medium",
			url: "",
            icon: <ArrowUpRight />,
		},
		{
			name: "LeetCode",
			url: "",
            icon: <ArrowUpRight />,
		},
	];
	return (
		<>
			<div className='flex gap-[10px] w-fit h-fit flex-wrap'>
				{socials.map((social, index: number) => (
					<div className={`flex-center gap-[5px] w-fit ${className}`} key={index}>
						<h1>{social.name}</h1>
						{social.icon}
					</div>
				))}
			</div>
		</>
	);
};

export default FooterSocials;
