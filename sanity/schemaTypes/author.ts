import { CircleUser } from "lucide-react";
import { defineField, defineType } from "sanity";

export const author = defineType({
  name: "authors",
  title: "Authors",
  type: "document",
  icon: CircleUser,
  fields: [
    defineField({
      name: "id",
      title: "Google ID",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "name",
      title: "Name",
      type: "string",
      placeholder: "Enter author name",
      validation: (Rule) => Rule.required().max(80).min(5),
    }),
    defineField({
      name: "email",
      title: "Email",
      type: "string",
      placeholder: "Enter author email",
      validation: (Rule) => Rule.required().email(),
    }),
    defineField({
      name: "image",
      title: "Image",
      type: "url",
    }),
    defineField({
      name: "createdAt",
      title: "Created At",
      type: "date",
      initialValue: () => new Date().toISOString().split("T")[0],
      validation: (Rule) => Rule.required(),
      options: {
        dateFormat: "DD-MM-YYYY",
      },
    }),
  ],
  preview: {
    select: { title: "name" },
  },
});
