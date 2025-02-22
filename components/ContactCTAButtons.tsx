import CTAButton from "./ui/cta-button";
import { CalendarCheck, Mail } from "lucide-react";

const ContactCTAButtons = () => {
  return (
    <div className="flex flex-wrap gap-2">
      <CTAButton
        className="mb-5 w-fit rounded-lg border border-blue-100 bg-blue-300 font-bold text-blue-950 hover:bg-blue-300/90"
        link="https://cal.com/ayberksch"
        buttonName="Schedule a Call"
      >
        Schedule a Call <CalendarCheck />
      </CTAButton>
      <CTAButton
        className="mb-5 rounded-lg border border-blue-50 bg-transparent font-bold text-blue-50 hover:bg-blue-300 hover:text-blue-950"
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
