import { defineArrayMember, defineField, defineType } from "sanity";
import { FolderGit2 } from "lucide-react";

export const project = defineType({
	name: "project",
	title: "Projects",
	type: "document",
	icon: FolderGit2,
	fields: [
		defineField({
			name: "title",
			title: "Title",
			type: "string",
            placeholder: "Enter project title",
			validation: (Rule) => Rule.required().max(50).min(5),
		}),
		defineField({
			name: "description",
			title: "Description",
            placeholder: "Enter project description",
			type: "text",
			validation: (Rule) => Rule.required().max(250).min(30),
		}),
		defineField({
			name: "forWho",
			title: "For Who",
			type: "string",
            placeholder: "Enter project for who",
			initialValue: "Personal",
			validation: (Rule) => Rule.required().max(50).min(3),
		}),

		defineField({
			name: "callToActions",
			title: "Call to Actions",
			type: "array",
			of: [
				defineArrayMember({
					type: "object",
					name: "callToAction",
					fields: [
						{ type: "string", name: "label" },
						{ type: "string", name: "link" },
					],
				}),
			],
		}),
		defineField({
			name: "image",
			title: "Image",
            //? Initial value is a placeholder image
			type: "image",
			options: {
				hotspot: true, // Enable for better image cropping
			},
		}),
		defineField({
			name: "createdAt",
			title: "Created At",
            placeholder: "Enter project created at",
			type: "date",
            initialValue: () => new Date().toISOString().split('T')[0],
            validation: (Rule) => Rule.required(),
            options: {
                dateFormat: 'YYYY-MM-DD',
            }
		}),
		defineField({
			name: "isFeatured",
			title: "Is Featured",
			type: "boolean",
			initialValue: false,
			validation: (Rule) => Rule.required(),
		}),
	],
});
