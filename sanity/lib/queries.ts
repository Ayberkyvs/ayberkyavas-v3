import { defineQuery } from "next-sanity";

export const ABOUT_ME_QUERY = defineQuery(`
  *[_type == "aboutMe"] | order(_updatedAt desc)[0] {
    "Resume": Resume.asset -> url,
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
    views,
    _id,
    title,
    content,
    authors -> {
    name,
    image,
  },
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
    views,
    _id,
    title,
    createdAt,
    description,
    authors -> {
      name,
      image,
    },
    content,
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
  authors -> {
    _id,
    name,
    image,
  },
  content,
  category,
  imageSrc,
  imageAlt,
  views,
}
`);

export const AUTHOR_BY_GOOGLE_ID_QUERY = defineQuery(`
  *[_type == "authors" && id == $id][0]{
      _id,
      id,
      name,
      username,
      email,
      image,
      bio
  }
`);

export const AUTHOR_ID_BY_GOOGLE_ID_QUERY = defineQuery(`
  *[_type == "authors" && id == $id][0]{
    _id
  }
`);

export const GET_COMMENTS_QUERY = defineQuery(`
  *[_type == "comment" && Blog->._id == $postId] | order(createdAt desc) {
    _id,
    text,
    createdAt,
    authors -> {
      _id,
      name,
      image
    },
    likes,
    dislikes,
}
`);
export const GET_COMMENT_BY_ID_QUERY = defineQuery(`
  *[_type == "comment" && _id == $commentId][0] {
    _id,
    authors -> {
      _id,
      name,
      image
    },
    likes,
    dislikes,
}
`);

export const GET_PRICING_CARD_QUERY = defineQuery(`
  *[_type == "pricing"] | order(_createdAt desc)[0] {
    pricingCards [] {
      _id,
      title,
      description,
      priceDetails {
        price,
        priceDescription
      },
      isPopular,
      features,
      buttonText,
}
  }
`);
export const GET_COMPARISON_TABLE_QUERY = defineQuery(`
*[_type == "pricing"] | order(_createdAt desc)[0] {
  comparisonTable {
    title,
    features[] {
      name,
      starter,
      professional,
      custom
    }
  }
}
`);
