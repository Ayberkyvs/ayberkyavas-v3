import CTAButton from "./ui/cta-button";

const ContactCTAButtons = () => {
  return (
    <div className="flex flex-wrap gap-2">
      <CTAButton
        className="mb-5 w-fit rounded-lg"
        link={"/pricing"}
        buttonName="My Resume Button"
      >
        Get Started
      </CTAButton>
      <CTAButton
        className="mb-5 w-fit rounded-lg"
        variant="secondary"
        link={"/about"}
        buttonName="My Resume Button"
      >
        About Me
      </CTAButton>
    </div>
  );
};

export default ContactCTAButtons;
