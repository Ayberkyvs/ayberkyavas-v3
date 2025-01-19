import { defineQuery } from "next-sanity";

export const ABOUT_ME_QUERY = defineQuery(`
    *[_type == "aboutMe"] | order(_updatedAt desc)[0] {
  "imageSrc": image.asset->url,
  name,
    title,
    bio,
    location,
    socials[] {
      name,
      link
    },
    workExperiences[] {
      ...,
      "imageSrc": image.asset->url
    },
    studies[] {
      ...,
    },
    certificates[] {
      ...,
      "imageSrc": image.asset->url
    },
    technicalSkills[] {
      ...,
    },
  }
`);

export const FEATURED_PROJECTS_QUERY = defineQuery(`
*[_type == "project" && isFeatured] | order(_createdAt desc) [0...3]{
  _id,
  forWho,
  createdAt,
  title,
  description,
  callToActions[] {
    _key,
    link,
    label,
  },
  "imageSrc": image.asset->url,
}`);

export const LATEST_BLOGS_QUERY = defineQuery(`
  *[_type == "Blog"] | order(_createdAt desc) [0...6]{
    _id,
    title,
    createdAt,
    description,
    category,
  }
`);

export const RESUME_QUERY = defineQuery(`
   *[_type == "aboutMe"] | order(_updatedAt desc)[0] {
    "Resume": Resume.asset -> url,
  }
`);