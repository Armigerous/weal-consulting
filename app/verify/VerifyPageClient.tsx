"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, X, Search } from "lucide-react"
import CertificateMockup from "@/components/certificate-mockup"
import { useToast } from "@/hooks/use-toast"

const VerifyPageClient = () => {
  const { toast } = useToast()
  const [certificateId, setCertificateId] = useState("")
  const [isVerifying, setIsVerifying] = useState(false)
  const [verificationResult, setVerificationResult] = useState<"success" | "error" | null>(null)
  const [certificateDetails, setCertificateDetails] = useState<{
    companyName: string
    tier: "gold" | "silver" | "certified"
    date: string
    id: string
  } | null>(null)

  const handleVerify = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!certificateId.trim()) {
      toast({
        title: "Error",
        description: "Please enter a certificate ID",
        variant: "destructive",
      })
      return
    }

    setIsVerifying(true)

    // Simulate verification process
    await new Promise((resolve) => setTimeout(resolve, 1500))

    // For demo purposes, we'll consider specific IDs as valid
    if (certificateId === "WC-2025-04-1234" || certificateId === "WC-2024-12-5678") {
      setVerificationResult("success")
      setCertificateDetails({
        companyName: certificateId === "WC-2025-04-1234" ? "Global Tech Solutions" : "Wellness Works Ltd.",
        tier: certificateId === "WC-2025-04-1234" ? "gold" : "silver",
        date: certificateId === "WC-2025-04-1234" ? "April 15, 2025" : "December 10, 2024",
        id: certificateId,
      })

      toast({
        title: "Certificate Verified",
        description: "This certificate is valid and authentic.",
      })
    } else {
      setVerificationResult("error")
      setCertificateDetails(null)

      toast({
        title: "Verification Failed",
        description: "We couldn't verify this certificate. Please check the ID and try again.",
        variant: "destructive",
      })
    }

    setIsVerifying(false)
  }

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-secondary-100 py-16 md:py-24">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-6 text-4xl font-bold tracking-tight text-accent-900 sm:text-5xl">Verify a Certificate</h1>
            <p className="mb-8 text-xl text-muted-foreground">
              Confirm the authenticity of a Weal Consulting workplace health certification.
            </p>
          </div>
        </div>
      </section>

      {/* Verification Form */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="mx-auto max-w-3xl">
            <Card>
              <CardHeader>
                <CardTitle>Certificate Verification</CardTitle>
                <CardDescription>
                  Enter the certificate ID to verify its authenticity. The ID can be found on the certificate.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleVerify} className="space-y-4">
                  <div className="flex flex-col space-y-2 sm:flex-row sm:space-x-2 sm:space-y-0">
                    <Input
                      placeholder="e.g., WC-2025-04-1234"
                      value={certificateId}
                      onChange={(e) => setCertificateId(e.target.value)}
                      className="flex-1"
                    />
                    <Button type="submit" disabled={isVerifying} className="flex items-center gap-2">
                      {isVerifying ? (
                        "Verifying..."
                      ) : (
                        <>
                          <Search className="h-4 w-4" />
                          Verify
                        </>
                      )}
                    </Button>
                  </div>

                  <div className="text-sm text-muted-foreground">
                    <p>For demo purposes, try these certificate IDs:</p>
                    <ul className="list-disc pl-5">
                      <li>WC-2025-04-1234 (Gold certification)</li>
                      <li>WC-2024-12-5678 (Silver certification)</li>
                    </ul>
                  </div>
                </form>
              </CardContent>
            </Card>

            {verificationResult && (
              <div className="mt-8">
                {verificationResult === "success" && certificateDetails && (
                  <div className="space-y-8">
                    <Card className="border-green-500">
                      <CardContent className="pt-6">
                        <div className="flex items-center gap-4">
                          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
                            <CheckCircle className="h-6 w-6 text-green-600" />
                          </div>
                          <div>
                            <h3 className="text-xl font-bold text-green-700">Certificate Verified</h3>
                            <p className="text-muted-foreground">
                              This certificate is valid and was issued by Weal Consulting.
                            </p>
                          </div>
                        </div>
                      </CardContent>
                      <CardFooter className="flex flex-col items-start border-t px-6 py-4">
                        <div className="grid w-full gap-2 sm:grid-cols-2">
                          <div>
                            <p className="text-sm text-muted-foreground">Company</p>
                            <p className="font-medium">{certificateDetails.companyName}</p>
                          </div>
                          <div>
                            <p className="text-sm text-muted-foreground">Certification Level</p>
                            <p className="font-medium capitalize">{certificateDetails.tier}</p>
                          </div>
                          <div>
                            <p className="text-sm text-muted-foreground">Issue Date</p>
                            <p className="font-medium">{certificateDetails.date}</p>
                          </div>
                          <div>
                            <p className="text-sm text-muted-foreground">Certificate ID</p>
                            <p className="font-medium">{certificateDetails.id}</p>
                          </div>
                        </div>
                      </CardFooter>
                    </Card>

                    <CertificateMockup
                      tier={certificateDetails.tier}
                      companyName={certificateDetails.companyName}
                      date={certificateDetails.date}
                      certificateId={certificateDetails.id}
                    />
                  </div>
                )}

                {verificationResult === "error" && (
                  <Card className="border-red-500">
                    <CardContent className="pt-6">
                      <div className="flex items-center gap-4">
                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-red-100">
                          <X className="h-6 w-6 text-red-600" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-red-700">Verification Failed</h3>
                          <p className="text-muted-foreground">
                            We couldn't verify this certificate. Please check the ID and try again.
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                )}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-8 text-3xl font-bold text-accent-900 text-center">Verification FAQs</h2>
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Where can I find the certificate ID?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    The certificate ID is located at the bottom of the certificate, usually in the format
                    WC-YYYY-MM-XXXX.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>How long are certificates valid?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Gold certificates are valid for 24 months, while Silver and Certified levels are valid for 12
                    months.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>What if a certificate doesn't verify?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    If a certificate doesn't verify, it may be expired, revoked, or the ID may be incorrect. Contact us
                    for assistance.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default VerifyPageClient
