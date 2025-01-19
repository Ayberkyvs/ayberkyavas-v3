import { Code } from "lucide-react";
import { defineType } from "sanity";

const profileSection = [
	{
		type: "string",
		name: "title",
		validation: (Rule: any) => Rule.required().max(80).min(5),
	},
	{
		type: "string",
		name: "subtitle",
		validation: (Rule: any) => Rule.required().max(100).min(5),
	},
	{
		type: "text",
		name: "description",
		validation: (Rule: any) => Rule.required().max(250).min(50),
	},
	{
		type: "array",
		name: "links",
		of: [
            {
                type: "object",
                name: "link",
                fields: [
                    { type: "string", name: "name" },
                    { type: "string", name: "url" },
                ],
            }
        ],
	},
	{
		type: "image",
		name: "image",
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
        validation: (Rule: any) => Rule.required().max(80).min(5),
    },
    {
        type: "text",
        name: "description",
        validation: (Rule: any) => Rule.required().min(50),
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
                accept: ".pdf",
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
			name: "image",
			title: "Image",
			type: "image",
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
						{ type: "string", name: "name" },
						{ type: "string", name: "link" },
					],
				},
			],
		},
		{
			name: "workExperiences",
			title: "Work Experiences",
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
