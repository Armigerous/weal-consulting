import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Quote } from "lucide-react"

export default function TestimonialSection() {
  return (
    <section className="bg-secondary-100 py-16 md:py-24">
      <div className="container">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <h2 className="mb-4 text-3xl font-bold text-accent-900 sm:text-4xl">What Our Certified Businesses Say</h2>
          <p className="text-lg text-muted-foreground">
            Hear from organizations that have achieved Weal Certification.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <Card className="bg-white">
            <CardContent className="pt-6">
              <Quote className="mb-4 h-8 w-8 text-primary-500/50" />
              <p className="mb-4 text-lg">
                "The Weal Certification process was thorough and insightful. It helped us identify areas for improvement
                we hadn't considered before."
              </p>
            </CardContent>
            <CardFooter className="flex items-center gap-4 border-t px-6 py-4">
              <Avatar>
                <AvatarImage src="/images/testimonial-1.jpg" alt="Jane Doe" />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
              <div>
                <p className="font-medium">Jane Doe</p>
                <p className="text-sm text-muted-foreground">HR Director, Global Tech Inc.</p>
              </div>
            </CardFooter>
          </Card>
          <Card className="bg-white">
            <CardContent className="pt-6">
              <Quote className="mb-4 h-8 w-8 text-primary-500/50" />
              <p className="mb-4 text-lg">
                "Since achieving Gold certification, we've seen a measurable decrease in sick days and an increase in
                employee satisfaction."
              </p>
            </CardContent>
            <CardFooter className="flex items-center gap-4 border-t px-6 py-4">
              <Avatar>
                <AvatarImage src="/images/testimonial-2.jpg" alt="Michael Smith" />
                <AvatarFallback>MS</AvatarFallback>
              </Avatar>
              <div>
                <p className="font-medium">Michael Smith</p>
                <p className="text-sm text-muted-foreground">CEO, Wellness Works Ltd.</p>
              </div>
            </CardFooter>
          </Card>
          <Card className="bg-white md:col-span-2 lg:col-span-1">
            <CardContent className="pt-6">
              <Quote className="mb-4 h-8 w-8 text-primary-500/50" />
              <p className="mb-4 text-lg">
                "The detailed recommendations provided after our evaluation gave us a clear roadmap for improving our
                workplace health standards."
              </p>
            </CardContent>
            <CardFooter className="flex items-center gap-4 border-t px-6 py-4">
              <Avatar>
                <AvatarImage src="/images/testimonial-3.jpg" alt="Aisha Johnson" />
                <AvatarFallback>AJ</AvatarFallback>
              </Avatar>
              <div>
                <p className="font-medium">Aisha Johnson</p>
                <p className="text-sm text-muted-foreground">Operations Manager, Bright Future Corp.</p>
              </div>
            </CardFooter>
          </Card>
        </div>
      </div>
    </section>
  )
}
