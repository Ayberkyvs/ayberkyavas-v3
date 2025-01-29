import { defineQuery } from "next-sanity";

export const ABOUT_ME_QUERY = defineQuery(`
  *[_type == "aboutMe"] | order(_updatedAt desc)[0] {
  imageSrc,
  name,
    title,
    bio,
    location,
    status,
    socials[] {
      name,
      link
    },
    workExperiences[] {
      ...,
    },
    studies[] {
      ...,
    },
    certificates[] {
      ...,
    },
    technicalSkills[] {
      ...,
    },
  }
`);

export const FEATURED_PROJECTS_QUERY = defineQuery(`
*[_type == "project" && isFeatured] | order(_createdAt desc) | order(createdAt desc) [0...3]{
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
  imageSrc,
}`);

export const LATEST_BLOGS_QUERY = defineQuery(`
  *[_type == "Blog"] | order(_createdAt desc) [0...4]{
    slug,
    _id,
    title,
    createdAt,
    description,
    category,
    imageSrc,
    imageAlt,
  }
`);

export const RESUME_QUERY = defineQuery(`
   *[_type == "aboutMe"] | order(_createdAt desc)[0] {
    "Resume": Resume.asset -> url,
  }
`);

export const PROJECTS_QUERY = defineQuery(`
  *[_type == "project"] | order(_createdAt desc) | order(createdAt desc) {
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
    imageSrc,
  }
`);

export const BLOGS_QUERY = defineQuery(`
    *[_type == "Blog" && defined(slug.current) && !defined($search) || title match $search || category match $search] | order(_createdAt desc) {
    slug,
    _id,
    title,
    createdAt,
    description,
    category,
    imageSrc,
    imageAlt,
  }
`);

export const BLOG_QUERY = defineQuery(`
  *[_type == "Blog" && slug.current == $slug][0]{
  slug,
  _id,
  title,
  createdAt,
  description,
  content,
  category,
  imageSrc,
  imageAlt,
}
`);

export const ABOUT_ME_BASIC_QUERY = defineQuery(`
  *[_type == "aboutMe"] | order(_createdAt desc) [0]{
    name,
    imageSrc,
  }
`);
