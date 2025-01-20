import CTAButton from "./ui/cta-button";
import { CalendarCheck, Mail } from "lucide-react";

const ContactCTAButtons = () => {
	return (
		<div className='flex gap-2 flex-wrap'>
			<CTAButton
				className='bg-blue-300 border border-blue-100 text-blue-950 font-bold rounded-lg mb-5 hover:bg-blue-950 hover:text-white'
				link='https://cal.com/ayberksch'
			>
				Schedule a Call <CalendarCheck />
			</CTAButton>
			<CTAButton
				className='bg-transparent border border-blue-50 text-blue-50 font-bold rounded-lg mb-5 hover:bg-blue-300 hover:text-blue-950'
				link='mailto:contact@ayberkyavas.com'
				size='icon'
			>
				<Mail />
			</CTAButton>
		</div>
	);
};

export default ContactCTAButtons;
