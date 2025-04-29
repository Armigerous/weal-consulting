"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { useToast } from "@/hooks/use-toast"
import ProgressSteps from "@/components/progress-steps"
import { CheckCircle } from "lucide-react"

export default function ApplyPageClient() {
  const { toast } = useToast()
  const [step, setStep] = useState(1)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    companyName: "",
    contactName: "",
    contactEmail: "",
    contactPhone: "",
    companySize: "",
    industry: "",
    address: "",
    city: "",
    country: "",
    postalCode: "",
    reasonForCertification: "",
    heardAbout: "",
    preferredContact: "email",
    agreeToTerms: false,
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleCheckboxChange = (name: string, checked: boolean) => {
    setFormData((prev) => ({ ...prev, [name]: checked }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))

    toast({
      title: "Application Submitted",
      description: "Thank you for applying for Weal Certification. We'll contact you within 48 hours.",
    })

    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  const nextStep = () => {
    setStep(step + 1)
    window.scrollTo(0, 0)
  }

  const prevStep = () => {
    setStep(step - 1)
    window.scrollTo(0, 0)
  }

  const steps = ["Company Information", "Facility Details", "Additional Information"]

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-secondary-100 py-16 md:py-24">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-6 text-4xl font-bold tracking-tight text-accent-900 sm:text-5xl">
              Apply for Certification
            </h1>
            <p className="mb-8 text-xl text-muted-foreground">
              Start your journey toward workplace health excellence with Weal Certification.
            </p>
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="mx-auto max-w-3xl">
            {isSubmitted ? (
              <Card className="border-green-500">
                <CardHeader>
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
                    <CheckCircle className="h-8 w-8 text-green-600" />
                  </div>
                  <CardTitle className="text-center text-2xl">Application Submitted Successfully</CardTitle>
                  <CardDescription className="text-center text-base">
                    Thank you for applying for Weal Certification
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="rounded-lg bg-secondary-100 p-6 text-center">
                    <p className="mb-2 text-lg font-medium">What happens next?</p>
                    <p className="text-muted-foreground">
                      We'll review your application and contact you within 48 hours to acknowledge receipt and discuss
                      next steps.
                    </p>
                  </div>
                  <div className="text-center">
                    <p className="mb-4 text-muted-foreground">
                      If you have any questions, please don't hesitate to contact us.
                    </p>
                    <Button asChild>
                      <a href="/contact">Contact Us</a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ) : (
              <Card>
                <CardHeader>
                  <CardTitle>Certification Application</CardTitle>
                  <CardDescription>Complete the form below to apply for Weal Certification</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="mb-8">
                    <ProgressSteps steps={steps} currentStep={step} />
                  </div>

                  <form onSubmit={handleSubmit}>
                    {step === 1 && (
                      <div className="space-y-6">
                        <div className="space-y-2">
                          <Label htmlFor="companyName">Company Name</Label>
                          <Input
                            id="companyName"
                            name="companyName"
                            value={formData.companyName}
                            onChange={handleChange}
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="contactName">Contact Person</Label>
                          <Input
                            id="contactName"
                            name="contactName"
                            value={formData.contactName}
                            onChange={handleChange}
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="contactEmail">Email</Label>
                          <Input
                            id="contactEmail"
                            name="contactEmail"
                            type="email"
                            value={formData.contactEmail}
                            onChange={handleChange}
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="contactPhone">Phone</Label>
                          <Input
                            id="contactPhone"
                            name="contactPhone"
                            value={formData.contactPhone}
                            onChange={handleChange}
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="companySize">Number of Employees</Label>
                          <Select
                            value={formData.companySize}
                            onValueChange={(value) => handleSelectChange("companySize", value)}
                          >
                            <SelectTrigger>
                              <SelectValue placeholder="Select company size" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="1-10">1-10</SelectItem>
                              <SelectItem value="11-50">11-50</SelectItem>
                              <SelectItem value="51-200">51-200</SelectItem>
                              <SelectItem value="201-500">201-500</SelectItem>
                              <SelectItem value="501+">501+</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="industry">Industry</Label>
                          <Select
                            value={formData.industry}
                            onValueChange={(value) => handleSelectChange("industry", value)}
                          >
                            <SelectTrigger>
                              <SelectValue placeholder="Select industry" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="technology">Technology</SelectItem>
                              <SelectItem value="healthcare">Healthcare</SelectItem>
                              <SelectItem value="manufacturing">Manufacturing</SelectItem>
                              <SelectItem value="retail">Retail</SelectItem>
                              <SelectItem value="education">Education</SelectItem>
                              <SelectItem value="finance">Finance</SelectItem>
                              <SelectItem value="other">Other</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div className="flex justify-end">
                          <Button type="button" onClick={nextStep}>
                            Next Step
                          </Button>
                        </div>
                      </div>
                    )}

                    {step === 2 && (
                      <div className="space-y-6">
                        <div className="space-y-2">
                          <Label htmlFor="address">Facility Address</Label>
                          <Input
                            id="address"
                            name="address"
                            value={formData.address}
                            onChange={handleChange}
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="city">City</Label>
                          <Input id="city" name="city" value={formData.city} onChange={handleChange} required />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="country">Country</Label>
                          <Input
                            id="country"
                            name="country"
                            value={formData.country}
                            onChange={handleChange}
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="postalCode">Postal/Zip Code</Label>
                          <Input
                            id="postalCode"
                            name="postalCode"
                            value={formData.postalCode}
                            onChange={handleChange}
                            required
                          />
                        </div>
                        <div className="flex justify-between">
                          <Button type="button" variant="outline" onClick={prevStep}>
                            Previous Step
                          </Button>
                          <Button type="button" onClick={nextStep}>
                            Next Step
                          </Button>
                        </div>
                      </div>
                    )}

                    {step === 3 && (
                      <div className="space-y-6">
                        <div className="space-y-2">
                          <Label htmlFor="reasonForCertification">Reason for Seeking Certification</Label>
                          <Textarea
                            id="reasonForCertification"
                            name="reasonForCertification"
                            rows={4}
                            value={formData.reasonForCertification}
                            onChange={handleChange}
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="heardAbout">How did you hear about Weal Certification?</Label>
                          <Input
                            id="heardAbout"
                            name="heardAbout"
                            value={formData.heardAbout}
                            onChange={handleChange}
                          />
                        </div>
                        <div className="space-y-2">
                          <Label>Preferred Contact Method</Label>
                          <RadioGroup
                            value={formData.preferredContact}
                            onValueChange={(value) => handleSelectChange("preferredContact", value)}
                          >
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="email" id="email" />
                              <Label htmlFor="email">Email</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="phone" id="phone" />
                              <Label htmlFor="phone">Phone</Label>
                            </div>
                          </RadioGroup>
                        </div>
                        <div className="flex items-start space-x-2">
                          <Checkbox
                            id="agreeToTerms"
                            checked={formData.agreeToTerms}
                            onCheckedChange={(checked) => handleCheckboxChange("agreeToTerms", checked as boolean)}
                            required
                          />
                          <div className="grid gap-1.5 leading-none">
                            <Label
                              htmlFor="agreeToTerms"
                              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            >
                              I agree to the terms and conditions
                            </Label>
                            <p className="text-sm text-muted-foreground">
                              By submitting this application, you agree to our terms of service and privacy policy.
                            </p>
                          </div>
                        </div>
                        <div className="flex justify-between">
                          <Button type="button" variant="outline" onClick={prevStep}>
                            Previous Step
                          </Button>
                          <Button type="submit" disabled={isSubmitting || !formData.agreeToTerms}>
                            {isSubmitting ? "Submitting..." : "Submit Application"}
                          </Button>
                        </div>
                      </div>
                    )}
                  </form>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </section>

      {/* Process Overview */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-8 text-3xl font-bold text-accent-900 text-center">What Happens Next?</h2>
            <div className="rounded-lg border bg-white p-8 shadow-sm">
              <div className="relative space-y-8">
                <div className="absolute left-[22px] top-0 h-full w-0.5 bg-gray-200"></div>

                <div className="relative flex gap-4">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-primary-500 text-white">
                    <span className="text-lg font-bold">1</span>
                  </div>
                  <div className="pt-1">
                    <h3 className="text-xl font-bold">Application Review</h3>
                    <p className="text-muted-foreground">
                      We'll review your application and contact you within 48 hours to acknowledge receipt and discuss
                      next steps.
                    </p>
                  </div>
                </div>

                <div className="relative flex gap-4">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-primary-500 text-white">
                    <span className="text-lg font-bold">2</span>
                  </div>
                  <div className="pt-1">
                    <h3 className="text-xl font-bold">Scheduling</h3>
                    <p className="text-muted-foreground">
                      Our regional partner will contact you to schedule the on-site evaluation at a time that works for
                      your business.
                    </p>
                  </div>
                </div>

                <div className="relative flex gap-4">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-primary-500 text-white">
                    <span className="text-lg font-bold">3</span>
                  </div>
                  <div className="pt-1">
                    <h3 className="text-xl font-bold">Evaluation</h3>
                    <p className="text-muted-foreground">
                      A comprehensive workplace health evaluation will be conducted according to our standardized
                      criteria.
                    </p>
                  </div>
                </div>

                <div className="relative flex gap-4">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-primary-500 text-white">
                    <span className="text-lg font-bold">4</span>
                  </div>
                  <div className="pt-1">
                    <h3 className="text-xl font-bold">Certification</h3>
                    <p className="text-muted-foreground">
                      Upon successful evaluation, you'll receive your official Weal Certification and digital badge.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
