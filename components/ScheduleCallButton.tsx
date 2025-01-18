import Link from "next/link";
import { Button } from "@/components/ui/button";
import { CalendarCheck } from "lucide-react";

const ScheduleCallButton = () => {
	return (
		<Link href='https://cal.com/ayberksch'>
			<Button
				variant='outline'
				className='bg-blue-300 border border-blue-100 text-blue-950 font-bold rounded-lg mb-5'
			>
				Schedule a call <CalendarCheck />
			</Button>
		</Link>
	);
};

export default ScheduleCallButton;
