import { AboutMe } from "@/sanity/types";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import Ping from "@/components/ui/ping";

interface AvailableStatusProps {
	status: AboutMe["status"];
	className?: string;
}
const AvailableStatus = ({ status, className }: AvailableStatusProps) => {
	const { isAvailable, statusContext } = status;
	const pingColors = {
		success: "bg-green-800",
		error: "bg-red-800",
	};
	return (
		<>
			<Badge
				className={cn(
					"flex-center w-fit text-center text-sm truncate border gap-2",
					{
						"border-green-900 bg-green-300 text-green-950 hover:bg-green-400":
							isAvailable,
					},
					{
						"border-red-900 bg-red-300 text-red-950 hover:bg-red-400":
							!isAvailable,
					},
					className
				)}
			>
				<Ping isAvailable={isAvailable} colors={pingColors} /> {statusContext}
			</Badge>
		</>
	);
};

export default AvailableStatus;
