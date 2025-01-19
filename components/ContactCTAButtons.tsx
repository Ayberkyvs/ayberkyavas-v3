import ScheduleACallButton from "./ScheduleCallButton";
import ContactMeButton from "./ContactMeButton";

const ContactCTAButtons = () => {
	return (
		<div className='flex gap-2 flex-wrap'>
			<ScheduleACallButton />
			<ContactMeButton />
		</div>
	);
};

export default ContactCTAButtons;
