import { SocialsData } from "@/types/socials";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

interface SocialsProps {
	className: string;
	socials: Array<SocialsData>;
}
const Socials = ({className, socials}: SocialsProps) => {
	return (
		<>
			<div className='flex gap-[10px] w-fit h-fit flex-wrap'>
				{socials?.map((social, index: number) => (
					<Link href={social.link || '#'} className={`flex-center gap-[5px] w-fit ${className}`} key={social.link + index}>
						<span>{social.name}</span>
						<ArrowUpRight className="w-[1.2em] h-[1.2em]"/>
					</Link>
				))}
			</div>
		</>
	);
};

export default Socials;
