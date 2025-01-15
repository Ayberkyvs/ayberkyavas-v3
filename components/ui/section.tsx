import React, { ReactNode } from "react";

interface SectionProps {
  children: ReactNode;
  className?: string;
}

interface SectionChildProps {
  children: ReactNode;
  className?: string;
}

const Section: React.FC<SectionProps> & {
  SubHeading: React.FC<SectionChildProps>;
  Heading: React.FC<SectionChildProps>;
  Description: React.FC<SectionChildProps>;
} = ({ children, className = "" }) => {
  return <div className={`section-heading ${className}`}>{children}</div>;
};

Section.SubHeading = ({ children, className = "" }) => {
  return <h6 className={`sub-heading ${className}`}>{children}</h6>;
};

Section.Heading = ({ children, className = "" }) => {
  return <h2 className={`heading-2-bold ${className}`}>{children}</h2>;
};

Section.Description = ({ children, className = "" }) => {
  return <p className={`paragraph ${className}`}>{children}</p>;
};

export default Section;
