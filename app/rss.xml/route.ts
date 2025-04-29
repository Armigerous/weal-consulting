import { NextResponse } from "next/server"
import { getAllPosts, urlFor } from "@/lib/sanity"

export async function GET() {
  const posts = await getAllPosts()
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://wealconsulting.com"

  // Format the current date according to RFC 822
  const now = new Date()
  const pubDate = now.toUTCString()

  // Create the RSS feed XML
  const rssXml = `<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
<channel>
  <title>Weal Consulting Blog</title>
  <link>${baseUrl}/blog</link>
  <description>Expert articles, guides, and news on workplace health certification and standards.</description>
  <language>en-us</language>
  <lastBuildDate>${pubDate}</lastBuildDate>
  <atom:link href="${baseUrl}/rss.xml" rel="self" type="application/rss+xml" />
  ${posts
    .map((post: any) => {
      const postDate = new Date(post.publishedAt).toUTCString()
      const imageUrl = post.mainImage ? urlFor(post.mainImage).width(1200).height(630).url() : ""

      return `
  <item>
    <title><![CDATA[${post.title}]]></title>
    <link>${baseUrl}/blog/${post.slug.current}</link>
    <guid>${baseUrl}/blog/${post.slug.current}</guid>
    <pubDate>${postDate}</pubDate>
    <description><![CDATA[${post.excerpt}]]></description>
    ${imageUrl ? `<enclosure url="${imageUrl}" type="image/jpeg" />` : ""}
    ${post.categories?.map((category: string) => `<category>${category}</category>`).join("") || ""}
    <author>${post.author || "info@wealconsulting.com"}</author>
  </item>`
    })
    .join("")}
</channel>
</rss>`

  // Return the RSS feed with the appropriate content type
  return new NextResponse(rssXml, {
    headers: {
      "Content-Type": "application/xml",
    },
  })
}
