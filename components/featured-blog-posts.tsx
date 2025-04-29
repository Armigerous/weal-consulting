import Link from "next/link"
import Image from "next/image"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { getAllPosts, urlFor } from "@/lib/sanity"
import { formatDate } from "@/lib/utils"
import { ArrowRight } from "lucide-react"

export default async function FeaturedBlogPosts() {
  const posts = await getAllPosts()
  const featuredPosts = posts.slice(0, 3)

  if (featuredPosts.length === 0) {
    return null
  }

  return (
    <section className="bg-white py-16 md:py-24">
      <div className="container">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <h2 className="mb-4 text-3xl font-bold text-accent-900 sm:text-4xl">Latest Insights</h2>
          <p className="text-lg text-muted-foreground">
            Expert articles and guides on workplace health certification and standards.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {featuredPosts.map((post: any) => (
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
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <time dateTime={post.publishedAt}>{formatDate(post.publishedAt)}</time>
                    {post.categories && post.categories.length > 0 && (
                      <>
                        <span>•</span>
                        <span>{post.categories[0]}</span>
                      </>
                    )}
                  </div>
                  <CardTitle className="line-clamp-2 group-hover:text-primary-500">{post.title}</CardTitle>
                  <CardDescription className="line-clamp-3">{post.excerpt}</CardDescription>
                </CardHeader>
              </Card>
            </Link>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-lg font-medium text-primary-500 hover:text-primary-600"
          >
            View all articles
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  )
}
