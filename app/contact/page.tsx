import type { Metadata } from "next"
import ContactPageClient from "./ContactPageClient"

export const metadata: Metadata = {
  title: "Contact Us | Weal Consulting",
  description: "Get in touch with Weal Consulting for questions about our workplace health certification process.",
  openGraph: {
    title: "Contact Us | Weal Consulting",
    description: "Get in touch with Weal Consulting for questions about our workplace health certification process.",
    url: "https://wealconsulting.com/contact",
    siteName: "Weal Consulting",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Contact Weal Consulting",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Us | Weal Consulting",
    description: "Get in touch with Weal Consulting for questions about our workplace health certification process.",
    images: ["/og-image.png"],
  },
}

export default function ContactPage() {
  return <ContactPageClient />
}
