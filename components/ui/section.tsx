import React, { ReactNode } from "react";
import { Badge } from "./badge";

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
  Badge: React.FC<SectionChildProps>;
} = ({ children, className = "" }) => {
  return <div className={`section ${className}`}>{children}</div>;
};

Section.SubHeading = ({ children, className = "" }) => {
  return (
    <span className={`section_sub-heading text-balance ${className}`}>
      {children}
    </span>
  );
};

Section.Heading = ({ children, className = "" }) => {
  return (
    <h2 className={`section_heading text-balance ${className}`}>{children}</h2>
  );
};

Section.Description = ({ children, className = "" }) => {
  return (
    <p className={`section_paragraph text-balance ${className}`}>{children}</p>
  );
};

Section.Badge = ({ children, className = "" }) => {
  return (
    <Badge variant="secondary" className={`mb-4 w-fit ${className}`}>
      {children}
    </Badge>
  );
};

export default Section;
