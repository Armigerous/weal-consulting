import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { getAllPosts, getAllCategories, urlFor } from "@/lib/sanity"
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { formatDate } from "@/lib/utils"
import BlogSearch from "@/components/blog-search"
import Pagination from "@/components/pagination"
import { Clock } from "lucide-react"

export const metadata: Metadata = {
  title: "Blog | Weal Consulting",
  description: "Latest insights and articles on workplace health certification and standards.",
  openGraph: {
    title: "Blog | Weal Consulting",
    description: "Latest insights and articles on workplace health certification and standards.",
    url: "https://wealconsulting.com/blog",
    siteName: "Weal Consulting",
    images: [
      {
        url: "https://wealconsulting.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "Weal Consulting Blog",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog | Weal Consulting",
    description: "Latest insights and articles on workplace health certification and standards.",
    images: ["https://wealconsulting.com/og-image.png"],
  },
}

interface BlogPageProps {
  searchParams: {
    page?: string
    category?: string
  }
}

export default async function BlogPage({ searchParams }: BlogPageProps) {
  const currentPage = searchParams.page ? Number.parseInt(searchParams.page) : 1
  const category = searchParams.category || ""

  const { posts, pagination } = await getAllPosts(currentPage, 9)
  const categories = await getAllCategories()

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-secondary-100 py-16 md:py-24">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-6 text-4xl font-bold tracking-tight text-accent-900 sm:text-5xl">
              Workplace Health Insights
            </h1>
            <p className="mb-8 text-xl text-muted-foreground">
              Expert articles, guides, and news on workplace health certification and standards.
            </p>
            <div className="mx-auto flex justify-center">
              <BlogSearch />
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-16 md:py-24">
        <div className="container">
          {/* Categories */}
          <div className="mb-8 flex flex-wrap items-center justify-center gap-2">
            <Link
              href="/blog"
              className={`rounded-full px-4 py-2 text-sm transition-colors ${
                !category ? "bg-primary-500 text-white" : "bg-gray-100 hover:bg-gray-200"
              }`}
            >
              All
            </Link>
            {categories.map((cat: any) => (
              <Link
                key={cat._id}
                href={`/blog?category=${encodeURIComponent(cat.title)}`}
                className={`rounded-full px-4 py-2 text-sm transition-colors ${
                  category === cat.title ? "bg-primary-500 text-white" : "bg-gray-100 hover:bg-gray-200"
                }`}
              >
                {cat.title}
              </Link>
            ))}
          </div>

          {/* RSS Link */}
          <div className="mb-8 text-center">
            <Link
              href="/rss.xml"
              className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-primary-500"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M4 11a9 9 0 0 1 9 9" />
                <path d="M4 4a16 16 0 0 1 16 16" />
                <circle cx="5" cy="19" r="1" />
              </svg>
              Subscribe to RSS Feed
            </Link>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post: any) => (
              <Link href={`/blog/${post.slug.current}`} key={post._id} className="group">
                <Card className="h-full overflow-hidden transition-all hover:shadow-md">
                  <div className="aspect-video w-full overflow-hidden">
                    {post.mainImage && (
                      <Image
                        src={urlFor(post.mainImage).width(600).height(340).url() || "/placeholder.svg"}
                        alt={post.title}
                        width={600}
                        height={340}
                        className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    )}
                  </div>
                  <CardHeader>
                    <div className="flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
                      <time dateTime={post.publishedAt}>{formatDate(post.publishedAt)}</time>
                      {post.categories && post.categories.length > 0 && (
                        <>
                          <span>•</span>
                          <Badge variant="secondary">{post.categories[0]}</Badge>
                        </>
                      )}
                      {post.readingTime && (
                        <>
                          <span>•</span>
                          <span className="flex items-center gap-1">
                            <Clock className="h-3 w-3" />
                            {post.readingTime} min read
                          </span>
                        </>
                      )}
                    </div>
                    <CardTitle className="line-clamp-2 group-hover:text-primary-500">{post.title}</CardTitle>
                    <CardDescription className="line-clamp-3">{post.excerpt}</CardDescription>
                  </CardHeader>
                  <CardFooter>
                    <div className="flex items-center gap-2">
                      {post.authorImage && (
                        <div className="h-8 w-8 overflow-hidden rounded-full">
                          <Image
                            src={urlFor(post.authorImage).width(32).height(32).url() || "/placeholder.svg"}
                            alt={post.author || "Author"}
                            width={32}
                            height={32}
                            className="h-full w-full object-cover"
                          />
                        </div>
                      )}
                      <span className="text-sm font-medium">{post.author}</span>
                    </div>
                  </CardFooter>
                </Card>
              </Link>
            ))}
          </div>

          {/* Pagination */}
          <Pagination
            currentPage={pagination.page}
            totalPages={pagination.totalPages}
            baseUrl="/blog"
            queryParams={category ? { category } : {}}
          />
        </div>
      </section>
    </div>
  )
}
