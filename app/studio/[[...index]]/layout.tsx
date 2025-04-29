import type React from "react"
export const metadata = {
  title: "Sanity Studio",
  description: "Manage your blog content with Sanity Studio",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
