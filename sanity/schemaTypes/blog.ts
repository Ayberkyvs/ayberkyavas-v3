import { defineField, defineType } from "sanity";
import { Rss } from "lucide-react";

export const blog = defineType({
	name: "Blog",
	title: "Blogs",
	type: "document",
	icon: Rss,
	fields: [
		defineField({
			name: "title",
			title: "Title",
            placeholder: "Enter blog title",
			type: "string",
			validation: (Rule) => Rule.required().max(50).min(5),
		}),
		defineField({
			name: "slug",
			title: "Slug",
			type: "slug",
			options: {
				source: "title",
				maxLength: 200,
				slugify: (input) => input.toLowerCase().replace(/\s+/g, "-").slice(0, 200),
			},
			validation: (Rule) => Rule.required(),
		}),
		defineField({
			name: "description",
			title: "Description",
            placeholder: "Enter blog description",
			type: "text",
			validation: (Rule) => Rule.required().max(250).min(30),
		}),
		defineField({
			name: "content",
			title: "Content",
            placeholder: "Enter blog content",
			type: "markdown",
			validation: (Rule) => Rule.required().min(200),
		}),
		defineField({
			name: "category",
			title: "Category",
            placeholder: "Enter blog category",
			type: "string",
			validation: (Rule) => Rule.required().max(30).min(3),
		}),
		defineField({
			name: "createdAt",
			title: "Created At",
            placeholder: "Enter blog created at",
			type: "date",
            initialValue: () => new Date().toISOString().split('T')[0],
            validation: (Rule) => Rule.required(),
            options: {
                dateFormat: 'YYYY-MM-DD',
            }
		}),
		defineField({
			name: "imageSrc",
			title: "Image",
			type: "image",
			options: {
				hotspot: true, // Enable for better image cropping
			},
		}),
		defineField({
			name: "imageAlt",
			title: "Image Alt",
            placeholder: "Enter Image Alt Text",
			type: "string",
			validation: (Rule) => Rule.max(20).min(5),
		}),
	],
});
