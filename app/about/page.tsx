import type { Metadata } from "next"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { Shield, Globe, Award, Users } from "lucide-react"

export const metadata: Metadata = {
  title: "About Us | Weal Consulting",
  description:
    "Learn about Weal Consulting, a U.S.-based organization dedicated to improving workplace health standards globally.",
  openGraph: {
    title: "About Us | Weal Consulting",
    description:
      "Learn about Weal Consulting, a U.S.-based organization dedicated to improving workplace health standards globally.",
    url: "https://wealconsulting.com/about",
    siteName: "Weal Consulting",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "About Weal Consulting",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Us | Weal Consulting",
    description:
      "Learn about Weal Consulting, a U.S.-based organization dedicated to improving workplace health standards globally.",
    images: ["/og-image.png"],
  },
}

export default function AboutPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-secondary-100 py-16 md:py-24">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-6 text-4xl font-bold tracking-tight text-accent-900 sm:text-5xl">
              About Weal Consulting
            </h1>
            <p className="mb-8 text-xl text-muted-foreground">
              A U.S.-based organization dedicated to improving workplace health standards globally.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid gap-12 md:grid-cols-2">
            <div>
              <h2 className="mb-6 text-3xl font-bold text-accent-900">Our Mission</h2>
              <p className="mb-4 text-lg text-muted-foreground">
                Weal Consulting is dedicated to elevating workplace health standards worldwide through our comprehensive
                certification system. We believe that healthy workplaces lead to healthier employees, increased
                productivity, and stronger businesses.
              </p>
              <p className="text-lg text-muted-foreground">
                Our mission is to provide businesses with a clear framework for assessing and improving their workplace
                health practices, while recognizing those that demonstrate excellence.
              </p>
            </div>
            <div>
              <h2 className="mb-6 text-3xl font-bold text-accent-900">Our Vision</h2>
              <p className="mb-4 text-lg text-muted-foreground">
                We envision a world where every workplace prioritizes the health and well-being of its employees,
                creating environments that promote physical safety, mental wellness, and overall health.
              </p>
              <p className="text-lg text-muted-foreground">
                Through our certification program and global network of partners, we aim to establish a universal
                standard for workplace health that transcends borders and industries.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="bg-white py-16 md:py-24">
        <div className="container">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <h2 className="mb-4 text-3xl font-bold text-accent-900 sm:text-4xl">Our Approach</h2>
            <p className="text-lg text-muted-foreground">
              Weal Consulting takes a comprehensive, evidence-based approach to workplace health certification.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="flex flex-col items-center text-center">
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary-500 text-white">
                <Shield className="h-8 w-8" />
              </div>
              <h3 className="mb-2 text-xl font-semibold">Standards-Based</h3>
              <p className="text-muted-foreground">
                Our certification criteria are based on global best practices and rigorous standards for workplace
                health and safety.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary-500 text-white">
                <Globe className="h-8 w-8" />
              </div>
              <h3 className="mb-2 text-xl font-semibold">Globally Accessible</h3>
              <p className="text-muted-foreground">
                Through our network of licensed regional partners, our certification is available to businesses around
                the world.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary-500 text-white">
                <Award className="h-8 w-8" />
              </div>
              <h3 className="mb-2 text-xl font-semibold">Recognition of Excellence</h3>
              <p className="text-muted-foreground">
                Our tiered certification system recognizes and rewards different levels of workplace health excellence.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary-500 text-white">
                <Users className="h-8 w-8" />
              </div>
              <h3 className="mb-2 text-xl font-semibold">Continuous Improvement</h3>
              <p className="text-muted-foreground">
                We provide detailed recommendations to help businesses continuously improve their workplace health
                practices.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Global Reach */}
      <section className="bg-secondary-100 py-16 md:py-24">
        <div className="container">
          <div className="grid gap-12 md:grid-cols-2">
            <div className="flex items-center justify-center">
              <div className="relative h-[400px] w-full max-w-[500px] overflow-hidden rounded-lg shadow-md">
                <Image src="/images/global-map.jpg" alt="Global Map" fill className="object-cover" />
              </div>
            </div>
            <div className="flex flex-col justify-center">
              <h2 className="mb-6 text-3xl font-bold text-accent-900">Global Reach</h2>
              <p className="mb-4 text-lg text-muted-foreground">
                Weal Certification is available internationally through our network of licensed regional partners who
                conduct evaluations according to our standardized criteria.
              </p>
              <p className="mb-6 text-lg text-muted-foreground">
                While our partners handle the on-the-ground work, all certifications are issued by Weal Consulting,
                ensuring consistency and quality across regions.
              </p>
              <p className="text-lg text-muted-foreground">
                Our international approach allows us to adapt to local contexts while maintaining the high standards
                that define Weal Certification.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Future Developments */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-6 text-3xl font-bold text-accent-900 text-center">Future Developments</h2>
            <p className="mb-8 text-lg text-muted-foreground text-center">
              We're continuously evolving our certification program to better serve businesses worldwide.
            </p>
            <div className="space-y-6">
              <div className="rounded-lg border p-6">
                <h3 className="mb-2 text-xl font-semibold">Public Certificate Lookup Tool</h3>
                <p className="text-muted-foreground">
                  Soon, we'll launch a public database where anyone can verify a business's certification status using
                  their certificate ID.
                </p>
              </div>
              <div className="rounded-lg border p-6">
                <h3 className="mb-2 text-xl font-semibold">Online Verifier Badge</h3>
                <p className="text-muted-foreground">
                  We're developing an embed code that certified businesses can add to their websites to display their
                  certification status in real-time.
                </p>
              </div>
              <div className="rounded-lg border p-6">
                <h3 className="mb-2 text-xl font-semibold">Awards System</h3>
                <p className="text-muted-foreground">
                  We plan to launch the "Weal Workplace Health of the Year" awards to recognize exceptional achievements
                  in workplace health practices.
                </p>
              </div>
              <div className="rounded-lg border p-6">
                <h3 className="mb-2 text-xl font-semibold">Internal Auditor Training</h3>
                <p className="text-muted-foreground">
                  We're developing a training program for businesses to certify internal auditors who can help maintain
                  standards between official evaluations.
                </p>
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
            <h2 className="mb-4 text-3xl font-bold sm:text-4xl">Join the Workplace Health Movement</h2>
            <p className="mb-8 text-lg text-gray-300">
              Be part of a global initiative to improve workplace health standards.
            </p>
            <Button asChild size="lg" className="bg-primary-500 hover:bg-primary-500/90">
              <Link href="/apply">Apply for Certification</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
