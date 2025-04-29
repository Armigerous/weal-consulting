import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { getAllPostSlugs, getPostBySlug, urlFor } from "@/lib/sanity"
import { formatDate } from "@/lib/utils"
import { PortableText } from "@portabletext/react"
import { ArrowLeft, Clock, Bookmark } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import NewsletterSignup from "@/components/newsletter-signup"

type Props = {
  params: {
    slug: string
  }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = await getPostBySlug(params.slug)

  if (!post) {
    return {
      title: "Post Not Found | Weal Consulting",
      description: "The requested blog post could not be found.",
    }
  }

  return {
    title: `${post.title} | Weal Consulting Blog`,
    description: post.excerpt,
    openGraph: {
      title: `${post.title} | Weal Consulting Blog`,
      description: post.excerpt,
      url: `https://wealconsulting.com/blog/${params.slug}`,
      siteName: "Weal Consulting",
      images: [
        {
          url: post.mainImage
            ? urlFor(post.mainImage).width(1200).height(630).url()
            : "https://wealconsulting.com/og-image.png",
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
      locale: "en_US",
      type: "article",
      publishedTime: post.publishedAt,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: [
        post.mainImage
          ? urlFor(post.mainImage).width(1200).height(630).url()
          : "https://wealconsulting.com/og-image.png",
      ],
    },
  }
}

export async function generateStaticParams() {
  const slugs = await getAllPostSlugs()
  return slugs.map((slug: any) => ({
    slug: slug.slug,
  }))
}

const components = {
  types: {
    image: ({ value }: any) => {
      return (
        <figure className="my-8">
          <div className="overflow-hidden rounded-lg">
            <Image
              src={urlFor(value).width(800).url() || "/placeholder.svg"}
              alt={value.alt || "Blog image"}
              width={800}
              height={450}
              className="h-auto w-full"
            />
          </div>
          {value.caption && (
            <figcaption className="mt-2 text-center text-sm text-muted-foreground">{value.caption}</figcaption>
          )}
        </figure>
      )
    },
  },
  block: {
    h2: ({ children }: any) => <h2 className="mb-4 mt-12 scroll-m-20 text-3xl font-bold tracking-tight">{children}</h2>,
    h3: ({ children }: any) => <h3 className="mb-4 mt-8 scroll-m-20 text-2xl font-bold tracking-tight">{children}</h3>,
    h4: ({ children }: any) => <h4 className="mb-4 mt-6 scroll-m-20 text-xl font-bold tracking-tight">{children}</h4>,
    normal: ({ children }: any) => <p className="mb-6 leading-7 [&:not(:first-child)]:mt-6">{children}</p>,
    blockquote: ({ children }: any) => (
      <blockquote className="my-6 border-l-4 border-primary-500 pl-6 italic">{children}</blockquote>
    ),
  },
  list: {
    bullet: ({ children }: any) => <ul className="mb-6 ml-6 list-disc space-y-2 [&>li]:mt-2">{children}</ul>,
    number: ({ children }: any) => <ol className="mb-6 ml-6 list-decimal space-y-2 [&>li]:mt-2">{children}</ol>,
  },
  listItem: {
    bullet: ({ children }: any) => <li>{children}</li>,
    number: ({ children }: any) => <li>{children}</li>,
  },
  marks: {
    link: ({ children, value }: any) => {
      const rel = !value.href.startsWith("/") ? "noreferrer noopener" : undefined
      return (
        <a
          href={value.href}
          rel={rel}
          className="font-medium text-primary-500 underline underline-offset-4 hover:text-primary-600"
        >
          {children}
        </a>
      )
    },
    strong: ({ children }: any) => <strong className="font-bold">{children}</strong>,
    em: ({ children }: any) => <em className="italic">{children}</em>,
  },
}

export default async function BlogPostPage({ params }: Props) {
  const post = await getPostBySlug(params.slug)

  if (!post) {
    notFound()
  }

  // Calculate reading time if not provided
  const readingTime =
    post.readingTime ||
    Math.ceil(
      post.body.reduce((acc: number, block: any) => {
        if (block._type === "block" && block.children) {
          return (
            acc +
            block.children.reduce((textAcc: number, child: any) => {
              return textAcc + (child.text ? child.text.length : 0)
            }, 0)
          )
        }
        return acc
      }, 0) / 1500,
    ) // Assuming 200 words per minute, average word length of 5 characters

  // Format the URL for sharing
  const shareUrl = `https://wealconsulting.com/blog/${params.slug}`

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
            <h1 className="mb-4 text-4xl font-bold tracking-tight text-accent-900 sm:text-5xl">{post.title}</h1>
            <div className="mb-6 flex flex-wrap items-center gap-4">
              <div className="flex items-center gap-2">
                {post.authorImage && (
                  <div className="h-10 w-10 overflow-hidden rounded-full">
                    <Image
                      src={urlFor(post.authorImage).width(40).height(40).url() || "/placeholder.svg"}
                      alt={post.author || "Author"}
                      width={40}
                      height={40}
                      className="h-full w-full object-cover"
                    />
                  </div>
                )}
                <span className="font-medium">{post.author}</span>
              </div>
              <span className="text-muted-foreground">•</span>
              <time dateTime={post.publishedAt} className="text-muted-foreground">
                {formatDate(post.publishedAt)}
              </time>
              {readingTime && (
                <>
                  <span className="text-muted-foreground">•</span>
                  <span className="flex items-center gap-1 text-muted-foreground">
                    <Clock className="h-4 w-4" />
                    {readingTime} min read
                  </span>
                </>
              )}
            </div>
            <div className="flex flex-wrap gap-2">
              {post.categories &&
                post.categories.map((category: string, index: number) => (
                  <Link href={`/blog?category=${encodeURIComponent(category)}`} key={index}>
                    <Badge variant="secondary">{category}</Badge>
                  </Link>
                ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      {post.mainImage && (
        <div className="container -mt-12 mb-12">
          <div className="mx-auto max-w-4xl overflow-hidden rounded-lg shadow-lg">
            <Image
              src={urlFor(post.mainImage).width(1200).height(675).url() || "/placeholder.svg"}
              alt={post.title}
              width={1200}
              height={675}
              className="h-auto w-full"
              priority
            />
          </div>
        </div>
      )}

      {/* Blog Content */}
      <section className="py-12 md:py-16">
        <div className="container">
          <div className="mx-auto grid max-w-5xl gap-8 lg:grid-cols-12">
            {/* Social Sharing Sidebar */}
            <div className="hidden lg:col-span-1 lg:block">
              <div className="sticky top-24 flex flex-col items-center gap-4">
                <Button variant="outline" size="icon" className="rounded-full" asChild>
                  <a
                    href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(post.title)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Share on Twitter"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                    </svg>
                  </a>
                </Button>
                <Button variant="outline" size="icon" className="rounded-full" asChild>
                  <a
                    href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Share on Facebook"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                    </svg>
                  </a>
                </Button>
                <Button variant="outline" size="icon" className="rounded-full" asChild>
                  <a
                    href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Share on LinkedIn"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                      <rect x="2" y="9" width="4" height="12"></rect>
                      <circle cx="4" cy="4" r="2"></circle>
                    </svg>
                  </a>
                </Button>
                <Separator className="my-2" />
                <Button variant="outline" size="icon" className="rounded-full" aria-label="Save article">
                  <Bookmark className="h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* Main Content */}
            <div className="lg:col-span-8">
              <article className="prose prose-lg max-w-none dark:prose-invert">
                <PortableText value={post.body} components={components} />
              </article>

              {/* Mobile Share Buttons */}
              <div className="mt-8 flex items-center justify-between rounded-lg border p-4 lg:hidden">
                <div className="text-sm font-medium">Share this article</div>
                <div className="flex gap-2">
                  <Button variant="outline" size="icon" className="h-8 w-8 rounded-full" asChild>
                    <a
                      href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(post.title)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Share on Twitter"
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
                        <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                      </svg>
                    </a>
                  </Button>
                  <Button variant="outline" size="icon" className="h-8 w-8 rounded-full" asChild>
                    <a
                      href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Share on Facebook"
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
                        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                      </svg>
                    </a>
                  </Button>
                  <Button variant="outline" size="icon" className="h-8 w-8 rounded-full" asChild>
                    <a
                      href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Share on LinkedIn"
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
                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                        <rect x="2" y="9" width="4" height="12"></rect>
                        <circle cx="4" cy="4" r="2"></circle>
                      </svg>
                    </a>
                  </Button>
                  <Button variant="outline" size="icon" className="h-8 w-8 rounded-full" aria-label="Save article">
                    <Bookmark className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              {/* Author Bio */}
              {post.authorBio && (
                <div className="mt-12 rounded-lg border bg-secondary-100/50 p-6">
                  <div className="flex items-center gap-4">
                    {post.authorImage && (
                      <div className="h-16 w-16 overflow-hidden rounded-full">
                        <Image
                          src={urlFor(post.authorImage).width(64).height(64).url() || "/placeholder.svg"}
                          alt={post.author || "Author"}
                          width={64}
                          height={64}
                          className="h-full w-full object-cover"
                        />
                      </div>
                    )}
                    <div>
                      <h3 className="text-lg font-bold">About {post.author}</h3>
                      <div className="text-sm text-muted-foreground">
                        <PortableText value={post.authorBio} />
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Tags */}
              {post.categories && post.categories.length > 0 && (
                <div className="mt-8">
                  <h3 className="mb-3 text-sm font-medium text-muted-foreground">Tagged with</h3>
                  <div className="flex flex-wrap gap-2">
                    {post.categories.map((category: string, index: number) => (
                      <Link href={`/blog?category=${encodeURIComponent(category)}`} key={index}>
                        <Badge variant="outline">{category}</Badge>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-3">
              {/* Newsletter Signup */}
              <div className="sticky top-24 space-y-8">
                <NewsletterSignup />

                {/* Related Posts */}
                {post.relatedPosts && post.relatedPosts.length > 0 && (
                  <div className="rounded-lg border p-6">
                    <h3 className="mb-4 text-lg font-bold">Related Articles</h3>
                    <div className="space-y-4">
                      {post.relatedPosts.map((relatedPost: any) => (
                        <Link href={`/blog/${relatedPost.slug.current}`} key={relatedPost._id} className="group block">
                          <div className="flex gap-3">
                            {relatedPost.mainImage && (
                              <div className="h-16 w-16 flex-shrink-0 overflow-hidden rounded">
                                <Image
                                  src={urlFor(relatedPost.mainImage).width(64).height(64).url() || "/placeholder.svg"}
                                  alt={relatedPost.title}
                                  width={64}
                                  height={64}
                                  className="h-full w-full object-cover"
                                />
                              </div>
                            )}
                            <div>
                              <h4 className="line-clamp-2 text-sm font-medium group-hover:text-primary-500">
                                {relatedPost.title}
                              </h4>
                              <p className="mt-1 text-xs text-muted-foreground">
                                {formatDate(relatedPost.publishedAt)}
                              </p>
                            </div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
