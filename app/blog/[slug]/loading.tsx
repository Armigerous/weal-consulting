import { Skeleton } from "@/components/ui/skeleton"

export default function Loading() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-secondary-100 py-16 md:py-24">
        <div className="container">
          <div className="mx-auto max-w-3xl">
            <Skeleton className="mb-6 h-4 w-32" />
            <Skeleton className="mb-4 h-12 w-full" />
            <div className="mb-6 flex items-center gap-4">
              <div className="flex items-center gap-2">
                <Skeleton className="h-10 w-10 rounded-full" />
                <Skeleton className="h-4 w-24" />
              </div>
              <Skeleton className="h-4 w-4 rounded-full" />
              <Skeleton className="h-4 w-32" />
              <Skeleton className="h-4 w-4 rounded-full" />
              <Skeleton className="h-4 w-20" />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <div className="container -mt-12 mb-12">
        <div className="mx-auto max-w-4xl overflow-hidden rounded-lg">
          <Skeleton className="aspect-video w-full" />
        </div>
      </div>

      {/* Blog Content */}
      <section className="py-12 md:py-16">
        <div className="container">
          <div className="mx-auto max-w-3xl">
            <div className="space-y-6">
              <Skeleton className="h-6 w-full" />
              <Skeleton className="h-6 w-full" />
              <Skeleton className="h-6 w-3/4" />
              <Skeleton className="h-6 w-full" />
              <Skeleton className="h-6 w-5/6" />
              <Skeleton className="h-6 w-full" />
              <Skeleton className="h-6 w-4/5" />
              <Skeleton className="h-6 w-full" />
              <Skeleton className="h-6 w-full" />
              <Skeleton className="h-6 w-2/3" />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
