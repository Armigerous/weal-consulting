import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Shield, CheckCircle, Award, Building, BarChart, Users } from "lucide-react"
import Image from "next/image"
import CertificationProcess from "@/components/certification-process"
import TestimonialSection from "@/components/testimonial-section"
import FeaturedPosts from "@/components/featured-posts"

export const metadata: Metadata = {
  openGraph: {
    title: "Weal Consulting | Workplace Health Certification",
    description: "U.S.-based workplace health certification system for businesses worldwide.",
    url: "https://wealconsulting.com",
    siteName: "Weal Consulting",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Weal Consulting",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Weal Consulting | Workplace Health Certification",
    description: "U.S.-based workplace health certification system for businesses worldwide.",
    images: ["/og-image.png"],
  },
}

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-secondary-100 py-16 md:py-24">
        <div className="container grid items-center gap-6 md:grid-cols-2 md:gap-12">
          <div className="flex flex-col gap-4">
            <h1 className="text-4xl font-bold tracking-tight text-accent-900 sm:text-5xl md:text-6xl">
              Workplace Health Certification
            </h1>
            <p className="text-xl text-muted-foreground">
              Elevate your business with the gold standard in workplace health certification from a trusted U.S.
              authority.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Button asChild size="lg" className="bg-primary-500 hover:bg-primary-500/90">
                <Link href="/apply">Apply for Certification</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/process">Learn Our Process</Link>
              </Button>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="relative h-[300px] w-[300px] md:h-[400px] md:w-[400px]">
              <Image
                src="/images/hero-workplace.png"
                alt="Workplace Health Certification"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <h2 className="mb-4 text-3xl font-bold text-accent-900 sm:text-4xl">Why Choose Weal Certification?</h2>
            <p className="text-lg text-muted-foreground">
              Our comprehensive workplace health certification is based on global best practices and rigorous standards.
            </p>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader>
                <Shield className="mb-2 h-10 w-10 text-primary-500" />
                <CardTitle>Trusted Authority</CardTitle>
                <CardDescription>
                  U.S.-based certification recognized for its rigorous standards and comprehensive approach.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <CheckCircle className="mb-2 h-10 w-10 text-primary-500" />
                <CardTitle>Comprehensive Evaluation</CardTitle>
                <CardDescription>
                  Assessment across multiple health factors including ergonomics, disease prevention, and mental
                  wellness.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <Award className="mb-2 h-10 w-10 text-primary-500" />
                <CardTitle>Tiered Recognition</CardTitle>
                <CardDescription>
                  Gold, Silver, and Certified tiers to recognize different levels of workplace health excellence.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <Building className="mb-2 h-10 w-10 text-primary-500" />
                <CardTitle>Global Reach</CardTitle>
                <CardDescription>
                  Available internationally through our network of licensed regional partners.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <BarChart className="mb-2 h-10 w-10 text-primary-500" />
                <CardTitle>Data-Driven Insights</CardTitle>
                <CardDescription>
                  Detailed reports with actionable recommendations for continuous improvement.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <Users className="mb-2 h-10 w-10 text-primary-500" />
                <CardTitle>Employee Well-being</CardTitle>
                <CardDescription>
                  Focus on creating healthier, safer, and more productive work environments.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Certification Process Section */}
      <CertificationProcess />

      {/* Featured Posts */}
      <FeaturedPosts />

      {/* Testimonials */}
      <TestimonialSection />

      {/* CTA Section */}
      <section className="bg-accent-900 py-16 text-white md:py-24">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-4 text-3xl font-bold sm:text-4xl">Ready to Certify Your Workplace?</h2>
            <p className="mb-8 text-lg text-gray-300">
              Join the growing number of businesses committed to workplace health excellence.
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
