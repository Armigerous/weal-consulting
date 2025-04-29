import Link from "next/link"
import Image from "next/image"
import { getFeaturedPosts, urlFor } from "@/lib/sanity"
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { formatDate } from "@/lib/utils"
import { Clock } from "lucide-react"

export default async function FeaturedPosts() {
  const featuredPosts = await getFeaturedPosts(3)

  if (!featuredPosts || featuredPosts.length === 0) {
    return null
  }

  return (
    <section className="bg-secondary-100 py-16 md:py-24">
      <div className="container">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <h2 className="mb-4 text-3xl font-bold text-accent-900 sm:text-4xl">Featured Articles</h2>
          <p className="text-lg text-muted-foreground">
            Our most important insights on workplace health and certification
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-12">
          {/* Main featured post */}
          {featuredPosts[0] && (
            <Link href={`/blog/${featuredPosts[0].slug.current}`} className="group md:col-span-7 lg:col-span-8">
              <Card className="h-full overflow-hidden transition-all hover:shadow-md">
                <div className="aspect-[16/9] w-full overflow-hidden">
                  {featuredPosts[0].mainImage && (
                    <Image
                      src={urlFor(featuredPosts[0].mainImage).width(800).height(450).url() || "/placeholder.svg"}
                      alt={featuredPosts[0].title}
                      width={800}
                      height={450}
                      className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  )}
                </div>
                <CardHeader>
                  <div className="flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
                    <time dateTime={featuredPosts[0].publishedAt}>{formatDate(featuredPosts[0].publishedAt)}</time>
                    {featuredPosts[0].categories && featuredPosts[0].categories.length > 0 && (
                      <>
                        <span>•</span>
                        <Badge variant="secondary">{featuredPosts[0].categories[0]}</Badge>
                      </>
                    )}
                    {featuredPosts[0].readingTime && (
                      <>
                        <span>•</span>
                        <span className="flex items-center gap-1">
                          <Clock className="h-3 w-3" />
                          {featuredPosts[0].readingTime} min read
                        </span>
                      </>
                    )}
                  </div>
                  <CardTitle className="text-2xl group-hover:text-primary-500">{featuredPosts[0].title}</CardTitle>
                  <CardDescription className="text-base">{featuredPosts[0].excerpt}</CardDescription>
                </CardHeader>
                <CardFooter>
                  <div className="flex items-center gap-2">
                    {featuredPosts[0].authorImage && (
                      <div className="h-8 w-8 overflow-hidden rounded-full">
                        <Image
                          src={urlFor(featuredPosts[0].authorImage).width(32).height(32).url() || "/placeholder.svg"}
                          alt={featuredPosts[0].author || "Author"}
                          width={32}
                          height={32}
                          className="h-full w-full object-cover"
                        />
                      </div>
                    )}
                    <span className="text-sm font-medium">{featuredPosts[0].author}</span>
                  </div>
                </CardFooter>
              </Card>
            </Link>
          )}

          {/* Secondary featured posts */}
          <div className="grid gap-8 md:col-span-5 lg:col-span-4">
            {featuredPosts.slice(1, 3).map((post) => (
              <Link href={`/blog/${post.slug.current}`} key={post._id} className="group">
                <Card className="h-full overflow-hidden transition-all hover:shadow-md">
                  <div className="grid grid-cols-3 gap-4">
                    <div className="aspect-square overflow-hidden">
                      {post.mainImage && (
                        <Image
                          src={urlFor(post.mainImage).width(150).height(150).url() || "/placeholder.svg"}
                          alt={post.title}
                          width={150}
                          height={150}
                          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                      )}
                    </div>
                    <div className="col-span-2 p-2">
                      <div className="flex flex-wrap items-center gap-2 text-xs text-muted-foreground">
                        <time dateTime={post.publishedAt}>{formatDate(post.publishedAt)}</time>
                        {post.categories && post.categories.length > 0 && (
                          <Badge variant="secondary" className="text-xs">
                            {post.categories[0]}
                          </Badge>
                        )}
                      </div>
                      <h3 className="line-clamp-2 mt-1 font-semibold group-hover:text-primary-500">{post.title}</h3>
                      <p className="line-clamp-2 mt-1 text-xs text-muted-foreground">{post.excerpt}</p>
                    </div>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
