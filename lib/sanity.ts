import { createClient } from "next-sanity"
import imageUrlBuilder from "@sanity/image-url"

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "",
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  apiVersion: "2023-05-03",
  useCdn: process.env.NODE_ENV === "production",
})

// Helper function for generating image URLs with the Sanity Image Pipeline
const builder = imageUrlBuilder(client)

export function urlFor(source: any) {
  return builder.image(source)
}

// Fetch all blog posts
export async function getAllPosts(page = 1, pageSize = 9) {
  const start = (page - 1) * pageSize
  const end = start + pageSize

  const posts = await client.fetch(
    `*[_type == "post"] | order(publishedAt desc) {
      _id,
      title,
      slug,
      publishedAt,
      excerpt,
      "categories": categories[]->title,
      "author": author->name,
      "authorImage": author->image,
      mainImage,
      featured,
      readingTime
    }[${start}...${end}]`,
  )

  // Get the total count for pagination
  const count = await client.fetch(`count(*[_type == "post"])`)

  return {
    posts,
    pagination: {
      total: count,
      page,
      pageSize,
      totalPages: Math.ceil(count / pageSize),
    },
  }
}

// Fetch featured blog posts
export async function getFeaturedPosts(limit = 3) {
  return client.fetch(
    `*[_type == "post" && featured == true] | order(publishedAt desc)[0...${limit}] {
      _id,
      title,
      slug,
      publishedAt,
      excerpt,
      "categories": categories[]->title,
      "author": author->name,
      "authorImage": author->image,
      mainImage,
      readingTime
    }`,
  )
}

// Fetch a single blog post by slug
export async function getPostBySlug(slug: string) {
  return client.fetch(
    `*[_type == "post" && slug.current == $slug][0] {
      _id,
      title,
      slug,
      publishedAt,
      excerpt,
      body,
      "categories": categories[]->title,
      "author": author->name,
      "authorBio": author->bio,
      "authorImage": author->image,
      mainImage,
      readingTime,
      "relatedPosts": *[_type == "post" && slug.current != $slug && count(categories[@._ref in ^.^.categories[]._ref]) > 0] | order(publishedAt desc)[0...3] {
        _id,
        title,
        slug,
        publishedAt,
        excerpt,
        "categories": categories[]->title,
        mainImage
      }
    }`,
    { slug },
  )
}

// Fetch all post slugs
export async function getAllPostSlugs() {
  const slugs = await client.fetch(`*[_type == "post"].slug.current`)
  return slugs.map((slug: string) => ({ slug }))
}

// Fetch posts by category
export async function getPostsByCategory(category: string, page = 1, pageSize = 9) {
  const start = (page - 1) * pageSize
  const end = start + pageSize

  const posts = await client.fetch(
    `*[_type == "post" && $category in categories[]->title] | order(publishedAt desc) {
      _id,
      title,
      slug,
      publishedAt,
      excerpt,
      "categories": categories[]->title,
      "author": author->name,
      "authorImage": author->image,
      mainImage,
      readingTime
    }[${start}...${end}]`,
    { category },
  )

  // Get the total count for pagination
  const count = await client.fetch(`count(*[_type == "post" && $category in categories[]->title])`, { category })

  return {
    posts,
    pagination: {
      total: count,
      page,
      pageSize,
      totalPages: Math.ceil(count / pageSize),
    },
  }
}

// Search posts
export async function searchPosts(query: string, page = 1, pageSize = 9) {
  const start = (page - 1) * pageSize
  const end = start + pageSize

  const posts = await client.fetch(
    `*[_type == "post" && (title match $query || excerpt match $query || pt::text(body) match $query)] | order(publishedAt desc) {
      _id,
      title,
      slug,
      publishedAt,
      excerpt,
      "categories": categories[]->title,
      "author": author->name,
      "authorImage": author->image,
      mainImage,
      readingTime
    }[${start}...${end}]`,
    { query: `*${query}*` },
  )

  // Get the total count for pagination
  const count = await client.fetch(
    `count(*[_type == "post" && (title match $query || excerpt match $query || pt::text(body) match $query)])`,
    { query: `*${query}*` },
  )

  return {
    posts,
    pagination: {
      total: count,
      page,
      pageSize,
      totalPages: Math.ceil(count / pageSize),
    },
  }
}

// Get all categories
export async function getAllCategories() {
  return client.fetch(
    `*[_type == "category"] | order(title asc) {
      _id,
      title,
      description
    }`,
  )
}
