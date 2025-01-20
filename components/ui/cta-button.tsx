import { Button } from "@/components/ui/button";

interface CTAButtonProps {
	children: React.ReactNode;
	className: string;
	variant?: "link" | "default" | "destructive" | "outline" | "secondary" | "ghost";
	link: string;
	size?: "sm" | "lg" | "icon" | "default";
}
const CTAButton = ({children, className, variant = "default", link, size = "default"}: CTAButtonProps) => {
	return (
		<a href={link} rel='noopener noreferrer'>
			<Button
				variant={variant}
				size={size}
				className={`${className}`}
			>
				{children}
			</Button>
		</a>
	);
};

export default CTAButton;
