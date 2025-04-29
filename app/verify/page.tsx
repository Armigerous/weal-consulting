import type { Metadata } from "next"
import VerifyPageClient from "./VerifyPageClient"

export const metadata: Metadata = {
  title: "Verify Certificate | Weal Consulting",
  description: "Verify the authenticity of a Weal Consulting workplace health certification.",
  openGraph: {
    title: "Verify Certificate | Weal Consulting",
    description: "Verify the authenticity of a Weal Consulting workplace health certification.",
    url: "https://wealconsulting.com/verify",
    siteName: "Weal Consulting",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Verify Weal Certification",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Verify Certificate | Weal Consulting",
    description: "Verify the authenticity of a Weal Consulting workplace health certification.",
    images: ["/og-image.png"],
  },
}

export default function VerifyPage() {
  return <VerifyPageClient />
}
