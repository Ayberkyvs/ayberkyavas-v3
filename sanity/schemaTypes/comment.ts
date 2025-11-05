import { MessageCircle } from "lucide-react";
import { defineField, defineType } from "sanity";

export const comment = defineType({
  name: "comment",
  title: "Comment",
  type: "document",
  icon: MessageCircle,
  fields: [
    defineField({
      name: "text",
      title: "Text",
      type: "string",
      validation: (Rule: any) => Rule.required(),
    }),
    defineField({
      name: "authors",
      title: "Author",
      type: "reference",
      to: [{ type: "authors" }],
      validation: (Rule: any) => Rule.required(),
    }),
    defineField({
      name: "Blog",
      title: "Blog",
      type: "reference",
      to: [{ type: "Blog" }],
      validation: (Rule: any) => Rule.required(),
    }),
    defineField({
      name: "createdAt",
      title: "Created At",
      type: "datetime",
      initialValue: () => new Date().toISOString().split("T")[0],
    }),
    defineField({
      name: "likes",
      title: "Likes",
      type: "array",
      initialValue: [],
      of: [{ type: "string" }],
    }),
    defineField({
      name: "dislikes",
      title: "Dislikes",
      type: "array",
      initialValue: [],
      of: [{ type: "string" }],
    }),
  ],
});
