import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

interface SocialsProps {
	className: string;
	socials: Array<{ name: string; link: string }>;
}
const Socials = ({ className, socials }: SocialsProps) => {
	return (
		<>
			<div className="flex gap-[10px] size-fit flex-wrap">
				{socials?.map((social, index: number) => (
					<Link
						href={social.link || "#"}
						className={`flex-center gap-[5px] w-fit ${className}`}
						key={social.link + index}
					>
						<span>{social.name}</span>
						<ArrowUpRight className="size-[1.2em]" />
					</Link>
				))}
			</div>
		</>
	);
};

export default Socials;
