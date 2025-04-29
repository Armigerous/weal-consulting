import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ClipboardList, Search, Calculator, Award, RefreshCw } from "lucide-react"
import Image from "next/image"

export default function CertificationProcess() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="container">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <h2 className="mb-4 text-3xl font-bold text-accent-900 sm:text-4xl">Our Certification Process</h2>
          <p className="text-lg text-muted-foreground">
            A transparent, thorough, and professional evaluation process from application to certification.
          </p>
        </div>

        <div className="mb-16 grid gap-8 md:grid-cols-2">
          <div className="flex items-center justify-center">
            <div className="relative h-[300px] w-full max-w-[500px] overflow-hidden rounded-lg shadow-md">
              <Image
                src="/images/certification-process.png"
                alt="Certification Process"
                fill
                className="object-cover"
              />
            </div>
          </div>
          <div>
            <p className="mb-6 text-lg text-muted-foreground">
              Our certification process is designed to be thorough yet efficient, providing valuable insights into your
              workplace health practices while minimizing disruption to your operations.
            </p>
            <p className="text-lg text-muted-foreground">
              Each step is carefully structured to ensure a comprehensive evaluation that leads to meaningful
              recommendations and recognition of your workplace health achievements.
            </p>
          </div>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardHeader className="flex flex-row items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary-500 text-white">
                <ClipboardList className="h-6 w-6" />
              </div>
              <div>
                <CardTitle>1. Application</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base">
                Submit your application through our website. We'll acknowledge receipt within 48 hours and connect you
                with a regional partner.
              </CardDescription>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary-500 text-white">
                <Search className="h-6 w-6" />
              </div>
              <div>
                <CardTitle>2. Evaluation</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base">
                Our licensed partner conducts a comprehensive workplace health evaluation based on our standardized
                criteria.
              </CardDescription>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary-500 text-white">
                <Calculator className="h-6 w-6" />
              </div>
              <div>
                <CardTitle>3. Scoring</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base">
                Your workplace is scored using our proprietary Weal Score system, with recommendations for improvement.
              </CardDescription>
            </CardContent>
          </Card>
          <Card className="md:col-span-2 lg:col-span-1">
            <CardHeader className="flex flex-row items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary-500 text-white">
                <Award className="h-6 w-6" />
              </div>
              <div>
                <CardTitle>4. Certification</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base">
                Weal Consulting issues an official digital certificate with your achieved tier (Gold, Silver, or
                Certified) and digital badge.
              </CardDescription>
            </CardContent>
          </Card>
          <Card className="md:col-span-2 lg:col-span-1">
            <CardHeader className="flex flex-row items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary-500 text-white">
                <RefreshCw className="h-6 w-6" />
              </div>
              <div>
                <CardTitle>5. Re-evaluation</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base">
                Certifications are valid for 12-24 months. We'll contact you before expiry to arrange re-evaluation or
                upgrades.
              </CardDescription>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
