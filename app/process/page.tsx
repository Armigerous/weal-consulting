import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Our Process | Weal Consulting",
  description:
    "Learn about Weal Consulting's thorough workplace health certification process from application to certification.",
  openGraph: {
    title: "Our Process | Weal Consulting",
    description:
      "Learn about Weal Consulting's thorough workplace health certification process from application to certification.",
    url: "https://wealconsulting.com/process",
    siteName: "Weal Consulting",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Weal Consulting Process",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Process | Weal Consulting",
    description:
      "Learn about Weal Consulting's thorough workplace health certification process from application to certification.",
    images: ["/og-image.png"],
  },
}

export default function ProcessPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-secondary-100 py-16 md:py-24">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-6 text-4xl font-bold tracking-tight text-accent-900 sm:text-5xl">
              Our Certification Process
            </h1>
            <p className="mb-8 text-xl text-muted-foreground">
              A transparent, thorough, and professional evaluation process from application to certification.
            </p>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="mx-auto max-w-4xl">
            {/* Step 1 */}
            <div className="mb-16 grid gap-8 md:grid-cols-2">
              <div className="flex flex-col justify-center">
                <div className="mb-4 flex items-center gap-4">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary-500 text-white">
                    <span className="text-2xl font-bold">1</span>
                  </div>
                  <h2 className="text-3xl font-bold text-accent-900">Application</h2>
                </div>
                <div className="space-y-4">
                  <p>
                    The certification process begins with your business submitting an application to receive Weal
                    Certification.
                  </p>
                  <h3 className="text-xl font-semibold">Required Information:</h3>
                  <ul className="ml-6 list-disc space-y-2">
                    <li>Company name and contact person</li>
                    <li>Number of employees</li>
                    <li>Industry</li>
                    <li>Facility address(es)</li>
                    <li>Reason for seeking certification</li>
                  </ul>
                  <p>
                    Applications are acknowledged within 48 hours, and our regional partner will contact you to arrange
                    the inspection.
                  </p>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="relative h-[300px] w-[300px]">
                  <Image
                    src="/placeholder.svg?height=300&width=300"
                    alt="Application Process"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            </div>

            {/* Step 2 */}
            <div className="mb-16 grid gap-8 md:grid-cols-2">
              <div className="order-2 flex items-center justify-center md:order-1">
                <div className="relative h-[300px] w-[300px]">
                  <Image
                    src="/placeholder.svg?height=300&width=300"
                    alt="Evaluation Process"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
              <div className="order-1 flex flex-col justify-center md:order-2">
                <div className="mb-4 flex items-center gap-4">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary-500 text-white">
                    <span className="text-2xl font-bold">2</span>
                  </div>
                  <h2 className="text-3xl font-bold text-accent-900">Evaluation</h2>
                </div>
                <div className="space-y-4">
                  <p>
                    Our licensed regional partner conducts a comprehensive workplace health evaluation at your facility.
                  </p>
                  <h3 className="text-xl font-semibold">Evaluation Categories:</h3>
                  <ul className="ml-6 list-disc space-y-2">
                    <li>Infectious disease protocols</li>
                    <li>Ergonomics & physical safety</li>
                    <li>Chemical exposure control</li>
                    <li>Mental wellness policies</li>
                    <li>Cleanliness, ventilation, and hygiene</li>
                    <li>Food & nutrition provisions (if relevant)</li>
                  </ul>
                  <p>
                    The evaluation includes observations, documentation review, and optional employee interviews or
                    surveys.
                  </p>
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="mb-16 grid gap-8 md:grid-cols-2">
              <div className="flex flex-col justify-center">
                <div className="mb-4 flex items-center gap-4">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary-500 text-white">
                    <span className="text-2xl font-bold">3</span>
                  </div>
                  <h2 className="text-3xl font-bold text-accent-900">Scoring & Recommendation</h2>
                </div>
                <div className="space-y-4">
                  <p>After the evaluation, our partner calculates a Weal Score using our standardized rubric.</p>
                  <h3 className="text-xl font-semibold">Certification Tiers:</h3>
                  <ul className="ml-6 list-disc space-y-2">
                    <li>Gold (90–100)</li>
                    <li>Silver (75–89)</li>
                    <li>Certified (60–74)</li>
                    <li>Fail (Below 60)</li>
                  </ul>
                  <p>
                    The partner adds recommendations for improvement and submits the full report and proposed score to
                    Weal Consulting for review.
                  </p>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="relative h-[300px] w-[300px]">
                  <Image
                    src="/placeholder.svg?height=300&width=300"
                    alt="Scoring Process"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            </div>

            {/* Step 4 */}
            <div className="mb-16 grid gap-8 md:grid-cols-2">
              <div className="order-2 flex items-center justify-center md:order-1">
                <div className="relative h-[300px] w-[300px]">
                  <Image
                    src="/placeholder.svg?height=300&width=300"
                    alt="Certification Process"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
              <div className="order-1 flex flex-col justify-center md:order-2">
                <div className="mb-4 flex items-center gap-4">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary-500 text-white">
                    <span className="text-2xl font-bold">4</span>
                  </div>
                  <h2 className="text-3xl font-bold text-accent-900">Certification & Issuance</h2>
                </div>
                <div className="space-y-4">
                  <p>Weal Consulting generates an official digital certificate with:</p>
                  <ul className="ml-6 list-disc space-y-2">
                    <li>Business name</li>
                    <li>Certification tier (Gold/Silver/etc.)</li>
                    <li>Validity period (1 or 2 years)</li>
                    <li>Certificate ID</li>
                    <li>Signature of Weal official</li>
                    <li>Partner acknowledgment</li>
                  </ul>
                  <p>
                    You'll also receive a badge pack for online use, and optionally, a physical certificate delivered by
                    our partner.
                  </p>
                </div>
              </div>
            </div>

            {/* Step 5 */}
            <div className="grid gap-8 md:grid-cols-2">
              <div className="flex flex-col justify-center">
                <div className="mb-4 flex items-center gap-4">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary-500 text-white">
                    <span className="text-2xl font-bold">5</span>
                  </div>
                  <h2 className="text-3xl font-bold text-accent-900">Re-evaluation & Follow-up</h2>
                </div>
                <div className="space-y-4">
                  <p>Certifications expire after 12 or 24 months, depending on the tier achieved.</p>
                  <p>Weal Consulting or our partner will reach out 1–2 months before expiry to arrange:</p>
                  <ul className="ml-6 list-disc space-y-2">
                    <li>Full re-evaluation</li>
                    <li>Limited audit</li>
                    <li>New tier upgrade (if improvements were made)</li>
                  </ul>
                  <p>
                    This ensures your certification remains current and reflects your ongoing commitment to workplace
                    health.
                  </p>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="relative h-[300px] w-[300px]">
                  <Image
                    src="/placeholder.svg?height=300&width=300"
                    alt="Re-evaluation Process"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Legal Disclaimer */}
      <section className="bg-secondary-100 py-12">
        <div className="container">
          <div className="mx-auto max-w-3xl rounded-lg border border-gray-200 bg-white p-8 shadow-sm">
            <h2 className="mb-4 text-2xl font-bold text-accent-900">Legal Disclaimer</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>Weal Consulting does not offer medical advice, diagnosis, or treatment.</p>
              <p>Certifications are based on non-clinical workplace health and safety standards.</p>
              <p>Certification does not exempt a business from complying with national health regulations.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-accent-900 py-16 text-white md:py-24">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-4 text-3xl font-bold sm:text-4xl">Begin Your Certification Journey</h2>
            <p className="mb-8 text-lg text-gray-300">Take the first step toward a healthier workplace environment.</p>
            <Button asChild size="lg" className="bg-primary-500 hover:bg-primary-500/90">
              <Link href="/apply">Apply for Certification</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
