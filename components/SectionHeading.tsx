import React from "react";
import Section from "./ui/section";

interface SectionHeadingProps {
  sub_heading?: string;
  heading?: string;
  description?: string;
  badge?: string;
}
const SectionHeading = ({
  sub_heading,
  heading,
  description,
  badge,
}: SectionHeadingProps) => {
  return (
    <>
      <Section className="flex-center mx-auto size-fit">
        {badge && <Section.Badge>{badge}</Section.Badge>}
        {sub_heading && <Section.SubHeading>{sub_heading}</Section.SubHeading>}
        {heading && <Section.Heading>{heading}</Section.Heading>}
        {description && (
          <Section.Description className="mt-4">
            {description}
          </Section.Description>
        )}
      </Section>
    </>
  );
};

export default SectionHeading;
