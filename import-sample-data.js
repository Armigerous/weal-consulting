import { createClient } from "@sanity/client"

// Initialize the Sanity client
const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  token: process.env.SANITY_API_TOKEN, // You need a write token
  apiVersion: "2023-05-03",
  useCdn: false,
})

// Import the sample data
import { authors, categories, posts } from "./sample-blog-data.js"

// Helper function to create documents and handle errors
async function createDocument(doc, type) {
  try {
    const result = await client.create(doc)
    console.log(`${type} created: ${result._id}`)
    return result
  } catch (err) {
    console.error(`Failed to create ${type}:`, err.message)
    return null
  }
}

// Main import function
async function importData() {
  console.log("Starting data import...")

  // Create authors
  console.log("Creating authors...")
  const createdAuthors = {}
  for (const author of authors) {
    const result = await createDocument(author, "author")
    if (result) {
      createdAuthors[author.name] = result._id
    }
  }

  // Create categories
  console.log("Creating categories...")
  const createdCategories = {}
  for (const category of categories) {
    const result = await createDocument(category, "category")
    if (result) {
      createdCategories[category.title] = result._id
    }
  }

  // Create posts with references to authors and categories
  console.log("Creating posts...")
  for (const post of posts) {
    // Find the author reference
    const authorName = post.author
    if (authorName && createdAuthors[authorName]) {
      post.author = {
        _type: "reference",
        _ref: createdAuthors[authorName],
      }
    } else {
      // Default to the first author if the specified one doesn't exist
      const firstAuthorId = Object.values(createdAuthors)[0]
      if (firstAuthorId) {
        post.author = {
          _type: "reference",
          _ref: firstAuthorId,
        }
      } else {
        console.warn(`No author found for post: ${post.title}`)
        continue // Skip this post if no author is available
      }
    }

    // Set up category references
    if (post.categories && Array.isArray(post.categories)) {
      post.categories = post.categories
        .filter((cat) => createdCategories[cat])
        .map((cat) => ({
          _type: "reference",
          _ref: createdCategories[cat],
        }))
    } else {
      // Assign a random category if none specified
      const randomCategoryId =
        Object.values(createdCategories)[Math.floor(Math.random() * Object.values(createdCategories).length)]
      if (randomCategoryId) {
        post.categories = [
          {
            _type: "reference",
            _ref: randomCategoryId,
          },
        ]
      }
    }

    await createDocument(post, "post")
  }

  console.log("Data import completed!")
}

// Run the import
importData().catch((err) => {
  console.error("Import failed:", err)
  process.exit(1)
})
