import { CalendarCheck } from "lucide-react";
import CTAButton from "./ui/cta-button";

const ScheduleACallButton = () => {
	return (
		<CTAButton className="bg-blue-300 border border-blue-100 text-blue-950 font-bold rounded-lg mb-5 hover:bg-blue-950 hover:text-white" link="https://cal.com/ayberksch">
			Schedule a Call <CalendarCheck />
		</CTAButton>
	);
};

export default ScheduleACallButton;
