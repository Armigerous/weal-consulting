import { Card, CardFooter, CardHeader } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function Loading() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-secondary-100 py-16 md:py-24">
        <div className="container">
          <div className="mx-auto max-w-3xl">
            <Link
              href="/blog"
              className="mb-6 flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-primary-500"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to all articles
            </Link>
            <Skeleton className="mb-6 h-12 w-3/4" />
            <Skeleton className="mb-8 h-6 w-1/2" />
            <Skeleton className="h-10 w-full max-w-md" />
          </div>
        </div>
      </section>

      {/* Search Results */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {Array.from({ length: 6 }).map((_, i) => (
              <Card key={i} className="h-full overflow-hidden">
                <Skeleton className="aspect-video w-full" />
                <CardHeader>
                  <Skeleton className="mb-2 h-4 w-1/3" />
                  <Skeleton className="mb-2 h-6 w-full" />
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-full" />
                </CardHeader>
                <CardFooter>
                  <div className="flex items-center gap-2">
                    <Skeleton className="h-8 w-8 rounded-full" />
                    <Skeleton className="h-4 w-24" />
                  </div>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
