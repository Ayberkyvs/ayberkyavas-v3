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
	return <div className={`section ${className}`}>{children}</div>;
};

Section.SubHeading = ({ children, className = "" }) => {
	return <span className={`section_sub-heading ${className}`}>{children}</span>;
};

Section.Heading = ({ children, className = "" }) => {
	return <h2 className={`section_heading ${className}`}>{children}</h2>;
};

Section.Description = ({ children, className = "" }) => {
	return <p className={`section_paragraph ${className}`}>{children}</p>;
};

export default Section;
