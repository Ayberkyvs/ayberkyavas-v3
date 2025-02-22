import { defineType, type Rule } from "sanity";

const profileSection = [
  {
    type: "string",
    name: "title",
    validation: (Rule: Rule) => Rule.required().max(80).min(3),
  },
  {
    type: "string",
    name: "subtitle",
    validation: (Rule: Rule) => Rule.required().max(100).min(3),
  },
  {
    type: "text",
    name: "description",
    validation: (Rule: Rule) => Rule.required().max(500).min(50),
  },
  {
    type: "array",
    name: "links",
    of: [
      {
        type: "object",
        name: "link",
        fields: [
          {
            type: "string",
            name: "name",
            validation: (Rule: Rule) => Rule.required(),
          },
          {
            type: "string",
            name: "link",
            validation: (Rule: Rule) => Rule.required(),
          },
        ],
      },
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
    validation: (Rule: Rule) => Rule.required().max(80).min(3),
  },
  {
    type: "text",
    name: "description",
    validation: (Rule: Rule) => Rule.required().min(20),
  },
];

export const aboutMe = defineType({
  name: "aboutMe",
  title: "About Me",
  type: "document",
  fields: [
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
      name: "status",
      title: "Status",
      type: "object",
      validation: (Rule) => Rule.required(),
      fields: [
        {
          name: "statusContext",
          title: "Status Context",
          type: "string",
          validation: (Rule) => Rule.required().min(10),
        },
        {
          name: "isAvailable",
          title: "Is Available",
          type: "boolean",
          validation: (Rule) => Rule.required(),
        },
      ],
    },
    {
      name: "Resume",
      title: "Upload Your Resume",
      type: "file",
      options: {
        accept: "application/pdf",
      },
      validation: (Rule) => Rule.required(),
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
            {
              type: "string",
              name: "name",
              validation: (Rule) => Rule.required(),
            },
            {
              type: "string",
              name: "link",
              validation: (Rule) => Rule.required(),
            },
          ],
        },
      ],
    },
    {
      name: "workExperiences",
      title: "Work Experiences",
      validation: (Rule) => Rule.required(),
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
      validation: (Rule) => Rule.required(),
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
      validation: (Rule) => Rule.required(),
      type: "array",
      of: [
        {
          type: "object",
          name: "certificate",
          fields: profileSection,
        },
      ],
    },
    {
      name: "technicalSkills",
      title: "Technical Skills",
      validation: (Rule) => Rule.required(),
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
