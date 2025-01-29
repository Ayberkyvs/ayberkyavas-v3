import { cn } from "@/lib/utils";

interface PingProps {
	isAvailable: boolean;
	colors: { success: string; error: string };
	className?: string;
}
const Ping = ({ isAvailable, colors, className = "" }: PingProps) => {
	const { success, error } = colors;
	return (
		<>
			<div className={cn("relative", className)}>
				<div className="">
					<span className="flex size-[11px]">
						<span
							className={cn(
								"absolute inline-flex size-full animate-ping rounded-full opacity-75",
								isAvailable ? success : error
							)}
						></span>
						<span
							className={cn(
								"relative inline-flex size-[11px] rounded-full",
								isAvailable ? success : error
							)}
						></span>
					</span>
				</div>
			</div>
		</>
	);
};

export default Ping;
