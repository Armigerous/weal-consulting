import type { Metadata } from "next"
import ApplyPageClient from "./ApplyPageClient"

export const metadata: Metadata = {
  title: "Apply for Certification | Weal Consulting",
  description: "Start your journey toward workplace health excellence by applying for Weal Certification.",
  openGraph: {
    title: "Apply for Certification | Weal Consulting",
    description: "Start your journey toward workplace health excellence by applying for Weal Certification.",
    url: "https://wealconsulting.com/apply",
    siteName: "Weal Consulting",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Apply for Weal Certification",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Apply for Certification | Weal Consulting",
    description: "Start your journey toward workplace health excellence by applying for Weal Certification.",
    images: ["/og-image.png"],
  },
}

export default function ApplyPage() {
  return <ApplyPageClient />
}
