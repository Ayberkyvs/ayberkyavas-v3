import React from "react";
import Section from "./ui/section";

interface SectionHeadingProps {
  sub_heading?: string;
  heading?: string;
  description?: string;
}
const SectionHeading = ({
  sub_heading,
  heading,
  description,
}: SectionHeadingProps) => {
  return (
    <>
      <Section>
        {sub_heading && <Section.SubHeading>{sub_heading}</Section.SubHeading>}
        {heading && <Section.Heading>{heading}</Section.Heading>}
        {description && (
          <Section.Description>{description}</Section.Description>
        )}
      </Section>
    </>
  );
};

export default SectionHeading;
