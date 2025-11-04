import { SquarePercent } from "lucide-react";
import { defineField, defineType } from "sanity";
import { v4 as uuidv4 } from "uuid";

export const pricing = defineType({
  name: "pricing",
  title: "Pricing",
  type: "document",
  icon: SquarePercent,
  preview: {
    prepare() {
      return {
        title: "Pricing Settings",
      };
    },
  },
  fields: [
    defineField({
      name: "pricingCards",
      title: "Pricing Cards",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "title",
              title: "Title",
              type: "string",
            },
            {
              name: "description",
              title: "Description",
              type: "string",
            },
            {
              type: "object",
              name: "priceDetails",
              title: "Price Details",
              fields: [
                {
                  name: "price",
                  title: "Price",
                  type: "string",
                },
                {
                  name: "priceDescription",
                  title: "Price Description",
                  type: "string",
                },
              ],
            },
            {
              name: "features",
              title: "Features",
              type: "array",
              of: [{ type: "string" }],
            },
            {
              name: "isPopular",
              title: "Is Popular",
              type: "boolean",
              initialValue: false,
            },
            {
              name: "buttonText",
              title: "Button Text",
              type: "string",
            },
          ],
        },
      ],
    }),

    // ✅ Comparison Table
    defineField({
      name: "comparisonTable",
      title: "Comparison Table",
      type: "object",
      fields: [
        {
          name: "title",
          title: "Title",
          type: "string",
          description:
            "Optional title for this comparison table (e.g., 'Plan Comparison')",
        },
        {
          name: "features",
          title: "Features",
          type: "array",
          of: [
            {
              type: "object",
              name: "feature",
              title: "Feature",
              fields: [
                {
                  name: "name",
                  title: "Feature Name",
                  type: "string",
                  validation: (Rule) => Rule.required(),
                },
                {
                  name: "starter",
                  title: "Starter Plan",
                  type: "boolean",
                  initialValue: false,
                },
                {
                  name: "professional",
                  title: "Professional Plan",
                  type: "boolean",
                  initialValue: false,
                },
                {
                  name: "custom",
                  title: "Custom Plan",
                  type: "boolean",
                  initialValue: false,
                },
              ],
              preview: {
                select: { title: "name" },
              },
            },
          ],
        },
      ],
    }),
  ],
});
