import { Code } from "lucide-react";
import { defineType } from "sanity";

const profileSection = [
	{
		type: "string",
		name: "title",
		validation: (Rule: any) => Rule.required().max(80).min(3),
	},
	{
		type: "string",
		name: "subtitle",
		validation: (Rule: any) => Rule.required().max(100).min(3),
	},
	{
		type: "text",
		name: "description",
		validation: (Rule: any) => Rule.required().max(500).min(50),
	},
	{
		type: "array",
		name: "links",
		of: [
            {
                type: "object",
                name: "link",
                fields: [
                    { type: "string", name: "name", validation: (Rule: any) => Rule.required(), },
                    { type: "string", name: "link", validation: (Rule: any) => Rule.required(), },
                ],
            }
        ],
	},
	{
		type: "image",
		name: "imageSrc",
		options: {
			hotspot: true,
		},
	},
	{
		type: "string",
		name: "imageAlt",
	},
];

const profileSmallSection = [
    {
        type: "string",
        name: "title",
        validation: (Rule: any) => Rule.required().max(80).min(3),
    },
    {
        type: "text",
        name: "description",
        validation: (Rule: any) => Rule.required().min(20),
    },
];

export const aboutMe = defineType({
	name: "aboutMe",
	title: "About Me",
	type: "document",
    icon: Code,
	fields: [
        {
            name: "Resume",
            title: "Resume",
            type: "file",
            options: {
                accept: "application/pdf",
            },
            validation: (Rule) => Rule.required(),
        },
		{
			name: "name",
			title: "Name",
			type: "string",
			validation: (Rule) => Rule.required().max(20).min(5),
		},
		{
			name: "title",
			title: "Title",
			type: "string",
			validation: (Rule) => Rule.required().max(80).min(10),
		},
		{
			name: "imageSrc",
			title: "Image",
			type: "image",
			validation: (Rule) => Rule.required(),
			options: {
				hotspot: true,
			},
		},
		{
			name: "bio",
			title: "Bio",
			type: "text",
			validation: (Rule) => Rule.required().min(250),
		},
		{
			name: "location",
			title: "Location",
			type: "string",
			validation: (Rule) => Rule.required().max(30).min(3),
		},
		{
			name: "socials",
			title: "Socials",
			type: "array",
			of: [
				{
					type: "object",
					name: "social",
					fields: [
						{ type: "string", name: "name", validation: (Rule: any) => Rule.required(), },
						{ type: "string", name: "link", validation: (Rule: any) => Rule.required(), },
					],
				},
			],
		},
		{
			name: "workExperiences",
			title: "Work Experiences",
			validation: (Rule: any) => Rule.required(),
			type: "array",
			of: [
                {
                    type: "object",
                    name: "workExperience",
                    fields: profileSection,
                },
            ],
		},
		{
			name: "studies",
			title: "Studies",
			validation: (Rule: any) => Rule.required(),
			type: "array",
			of: [
				{
					type: "object",
					name: "study",
					fields: profileSmallSection,
				},
			],
		},
        {
			name: "certificates",
			title: "Certificates",
			validation: (Rule: any) => Rule.required(),
			type: "array",
			of: [
                {
                    type: "object",
                    name: "certificate",
                    fields: profileSection
                },
            ],
		},
		{
			name: "technicalSkills",
			title: "Technical Skills",
			validation: (Rule: any) => Rule.required(),
			type: "array",
			of: [
				{
					type: "object",
					name: "technicalSkill",
					fields: profileSmallSection,
				},
			],
		},
	],
});
