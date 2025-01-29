import CTAButton from "./ui/cta-button";
import { CalendarCheck, Mail } from "lucide-react";

const ContactCTAButtons = () => {
	return (
		<div className="flex gap-2 flex-wrap">
			<CTAButton
				className="w-fit bg-blue-300 border border-blue-100 text-blue-950 font-bold rounded-lg mb-5 hover:bg-blue-300/90"
				link="https://cal.com/ayberksch"
				buttonName="Schedule a Call"
			>
				Schedule a Call <CalendarCheck />
			</CTAButton>
			<CTAButton
				className="bg-transparent border border-blue-50 text-blue-50 font-bold rounded-lg mb-5 hover:bg-blue-300 hover:text-blue-950"
				link="mailto:contact@ayberkyavas.com"
				size="icon"
				buttonName="Mail me"
			>
				<Mail />
			</CTAButton>
		</div>
	);
};

export default ContactCTAButtons;
