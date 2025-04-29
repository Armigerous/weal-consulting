"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin } from "lucide-react"
import { useToast } from "@/hooks/use-toast"
import AccordionFAQ from "@/components/accordion-faq"

export default function ContactPageClient() {
  const { toast } = useToast()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))

    toast({
      title: "Message Sent",
      description: "Thank you for contacting Weal Consulting. We'll get back to you soon.",
    })

    setFormData({
      name: "",
      email: "",
      company: "",
      message: "",
    })
    setIsSubmitting(false)
  }

  const faqs = [
    {
      question: "How long does the certification process take?",
      answer:
        "The certification process typically takes 2-4 weeks from application to certificate issuance, depending on the size and complexity of your workplace.",
    },
    {
      question: "How much does certification cost?",
      answer:
        "Certification costs vary based on company size, number of locations, and the scope of the evaluation. Please contact us for a customized quote.",
    },
    {
      question: "Is Weal Certification recognized internationally?",
      answer:
        "Yes, Weal Certification is a U.S.-based program recognized internationally as a standard for workplace health excellence.",
    },
    {
      question: "How can I verify if a business is Weal Certified?",
      answer:
        "You can verify a business's certification status by checking for their Weal badge on their website or by using our certificate verification tool at wealconsulting.com/verify.",
    },
    {
      question: "What if I fail the certification?",
      answer:
        "If your workplace doesn't meet our minimum standards, we provide a detailed report with recommendations for improvement. You can apply for re-evaluation after implementing these changes.",
    },
    {
      question: "Can I get certified for multiple locations?",
      answer:
        "Yes, we offer multi-location certification packages. Each location is evaluated separately, but we streamline the process and offer volume pricing.",
    },
  ]

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-secondary-100 py-16 md:py-24">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-6 text-4xl font-bold tracking-tight text-accent-900 sm:text-5xl">Contact Us</h1>
            <p className="mb-8 text-xl text-muted-foreground">
              Have questions about our certification process? Get in touch with our team.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid gap-12 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Send Us a Message</CardTitle>
                <CardDescription>
                  Fill out the form below and we'll get back to you as soon as possible.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name</Label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="john@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="company">Company</Label>
                    <Input
                      id="company"
                      name="company"
                      placeholder="Your Company"
                      value={formData.company}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="How can we help you?"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <Button type="submit" className="w-full" disabled={isSubmitting}>
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                  <p className="text-center text-sm text-muted-foreground">We usually reply within 24–48 hours</p>
                </form>
              </CardContent>
            </Card>
            <div className="flex flex-col justify-between">
              <div>
                <h2 className="mb-6 text-3xl font-bold text-accent-900">Contact Information</h2>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <Mail className="mt-1 h-6 w-6 text-primary-500" />
                    <div>
                      <h3 className="text-lg font-semibold">Email</h3>
                      <p className="text-muted-foreground">info@wealconsulting.com</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Phone className="mt-1 h-6 w-6 text-primary-500" />
                    <div>
                      <h3 className="text-lg font-semibold">Phone</h3>
                      <p className="text-muted-foreground">+1 (555) 123-4567</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <MapPin className="mt-1 h-6 w-6 text-primary-500" />
                    <div>
                      <h3 className="text-lg font-semibold">Headquarters</h3>
                      <p className="text-muted-foreground">
                        123 Business Avenue
                        <br />
                        Suite 456
                        <br />
                        New York, NY 10001
                        <br />
                        United States
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-12 rounded-lg border p-6">
                <h3 className="mb-4 text-xl font-semibold">Regional Partner Inquiries</h3>
                <p className="mb-4 text-muted-foreground">
                  For services in Turkey, Weal is represented by our exclusive regional partner.
                </p>
                <p className="text-muted-foreground">
                  For information about becoming a licensed regional partner in your country, please contact our
                  headquarters directly.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-secondary-100 py-16 md:py-24">
        <div className="container">
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-8 text-3xl font-bold text-accent-900 text-center">Frequently Asked Questions</h2>
            <Card>
              <CardContent className="pt-6">
                <AccordionFAQ faqs={faqs} />
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
