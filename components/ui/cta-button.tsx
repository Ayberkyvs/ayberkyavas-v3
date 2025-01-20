import { Button } from "@/components/ui/button";

interface CTAButtonProps {
	children: React.ReactNode;
	className: string;
	variant?: "link" | "default" | "destructive" | "outline" | "secondary" | "ghost";
	link: string;
	size?: "sm" | "lg" | "icon" | "default";
	buttonName: string;
}
const CTAButton = ({children, className, variant = "default", link, size = "default", buttonName}: CTAButtonProps) => {
	return (
		<a href={link} rel='noopener noreferrer'>
			<Button
				title={buttonName}
				name={buttonName}
				type="button"
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
