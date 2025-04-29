import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Shield, CheckCircle, Award } from "lucide-react"
import Link from "next/link"
import CertificateMockup from "@/components/certificate-mockup"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Certification | Weal Consulting",
  description: "Explore Weal Consulting's comprehensive workplace health certification system and standards.",
  openGraph: {
    title: "Certification | Weal Consulting",
    description: "Explore Weal Consulting's comprehensive workplace health certification system and standards.",
    url: "https://wealconsulting.com/certification",
    siteName: "Weal Consulting",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Weal Consulting Certification",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Certification | Weal Consulting",
    description: "Explore Weal Consulting's comprehensive workplace health certification system and standards.",
    images: ["/og-image.png"],
  },
}

export default function CertificationPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-secondary-100 py-16 md:py-24">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-6 text-4xl font-bold tracking-tight text-accent-900 sm:text-5xl">
              Workplace Health Certification
            </h1>
            <p className="mb-8 text-xl text-muted-foreground">
              Our comprehensive certification system evaluates and recognizes excellence in workplace health practices.
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <Button asChild size="lg" className="bg-primary-500 hover:bg-primary-500/90">
                <Link href="/apply">Apply for Certification</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/process">View Process</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Certification Criteria */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <h2 className="mb-4 text-3xl font-bold text-accent-900 sm:text-4xl">Our Certification Criteria</h2>
            <p className="text-lg text-muted-foreground">
              Based on global workplace safety and wellness best practices, our evaluation covers these key areas:
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle>Infectious Disease Protocols</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Evaluation of policies, procedures, and facilities for preventing the spread of infectious diseases in
                  the workplace.
                </CardDescription>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Ergonomics & Physical Safety</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Assessment of workstations, equipment, and practices to prevent physical injuries and promote comfort.
                </CardDescription>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Chemical Exposure Control</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Review of handling, storage, and protection measures for chemicals and hazardous substances.
                </CardDescription>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Mental Wellness Policies</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Evaluation of programs, policies, and resources that support employee mental health and well-being.
                </CardDescription>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Cleanliness & Ventilation</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Assessment of cleaning protocols, air quality, and ventilation systems to ensure a healthy
                  environment.
                </CardDescription>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Food & Nutrition Provisions</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Review of food safety, nutritional options, and facilities for meal preparation and consumption.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Certification Tiers */}
      <section className="bg-white py-16 md:py-24">
        <div className="container">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <h2 className="mb-4 text-3xl font-bold text-accent-900 sm:text-4xl">Certification Tiers</h2>
            <p className="text-lg text-muted-foreground">
              Our tiered certification system recognizes different levels of workplace health excellence.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            <Card className="border-2 border-yellow-400">
              <CardHeader className="text-center">
                <Award className="mx-auto mb-2 h-16 w-16 text-yellow-400" fill="#FDF7E2" strokeWidth={1.5} />
                <CardTitle className="text-2xl">Gold Certification</CardTitle>
                <CardDescription className="text-base">Score: 90-100</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-green-500" />
                    <span>Exceptional workplace health standards</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-green-500" />
                    <span>Comprehensive policies and implementation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-green-500" />
                    <span>Innovative health promotion initiatives</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-green-500" />
                    <span>Industry-leading practices</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            <Card className="border-2 border-gray-300">
              <CardHeader className="text-center">
                <Award className="mx-auto mb-2 h-16 w-16 text-gray-400" fill="#F9FAFB" strokeWidth={1.5} />
                <CardTitle className="text-2xl">Silver Certification</CardTitle>
                <CardDescription className="text-base">Score: 75-89</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-green-500" />
                    <span>Strong workplace health standards</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-green-500" />
                    <span>Well-developed policies and procedures</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-green-500" />
                    <span>Effective health promotion programs</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-green-500" />
                    <span>Above-average industry practices</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            <Card className="border-2 border-primary-500">
              <CardHeader className="text-center">
                <Shield className="mx-auto mb-2 h-16 w-16 text-primary-500" fill="#FEF2F2" strokeWidth={1.5} />
                <CardTitle className="text-2xl">Certified</CardTitle>
                <CardDescription className="text-base">Score: 60-74</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-green-500" />
                    <span>Satisfactory workplace health standards</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-green-500" />
                    <span>Basic policies and procedures in place</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-green-500" />
                    <span>Standard health promotion efforts</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-green-500" />
                    <span>Meets industry baseline requirements</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Sample Certificate */}
      <section className="bg-secondary-100 py-16 md:py-24">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-4 text-3xl font-bold text-accent-900 sm:text-4xl">Sample Certificate</h2>
            <p className="mb-8 text-lg text-muted-foreground">
              Upon successful certification, your business will receive an official Weal Consulting certificate.
            </p>
            <CertificateMockup />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-accent-900 py-16 text-white md:py-24">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-4 text-3xl font-bold sm:text-4xl">Ready to Get Certified?</h2>
            <p className="mb-8 text-lg text-gray-300">Start your journey toward workplace health excellence today.</p>
            <Button asChild size="lg" className="bg-primary-500 hover:bg-primary-500/90">
              <Link href="/apply">Apply for Certification</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
