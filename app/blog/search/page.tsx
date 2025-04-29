import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { notFound } from "next/navigation"
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { searchPosts, urlFor } from "@/lib/sanity"
import { formatDate } from "@/lib/utils"
import BlogSearch from "@/components/blog-search"
import Pagination from "@/components/pagination"
import { ArrowLeft, Clock } from "lucide-react"

type Props = {
  searchParams: {
    q?: string
    page?: string
  }
}

export const metadata: Metadata = {
  title: "Search Results | Blog | Weal Consulting",
  description: "Search results for blog posts on workplace health certification and standards.",
  robots: {
    index: false,
  },
}

export default async function SearchPage({ searchParams }: Props) {
  const query = searchParams.q || ""
  const currentPage = searchParams.page ? Number.parseInt(searchParams.page) : 1

  if (!query) {
    notFound()
  }

  const { posts, pagination } = await searchPosts(query, currentPage, 9)

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-secondary-100 py-16 md:py-24">
        <div className="container">
          <div className="mx-auto max-w-3xl">
            <Link
              href="/blog"
              className="mb-6 flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-primary-500"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to all articles
            </Link>
            <h1 className="mb-6 text-4xl font-bold tracking-tight text-accent-900 sm:text-5xl">Search Results</h1>
            <p className="mb-8 text-xl text-muted-foreground">
              {pagination.total} {pagination.total === 1 ? "result" : "results"} for "{query}"
            </p>
            <div className="mb-4">
              <BlogSearch />
            </div>
          </div>
        </div>
      </section>

      {/* Search Results */}
      <section className="py-16 md:py-24">
        <div className="container">
          {posts.length > 0 ? (
            <>
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
                baseUrl="/blog/search"
                queryParams={{ q: query }}
              />
            </>
          ) : (
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="mb-4 text-2xl font-bold">No results found</h2>
              <p className="mb-8 text-muted-foreground">
                We couldn't find any articles matching your search. Try different keywords or browse all articles.
              </p>
              <Link href="/blog" className="inline-flex items-center gap-2 text-primary-500 hover:text-primary-600">
                <ArrowLeft className="h-4 w-4" />
                Back to all articles
              </Link>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}
