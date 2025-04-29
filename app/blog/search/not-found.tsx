import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function NotFound() {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center">
      <h2 className="mb-2 text-3xl font-bold">Search Not Found</h2>
      <p className="mb-8 text-muted-foreground">We couldn't find what you're looking for.</p>
      <Button asChild>
        <Link href="/blog">Back to Blog</Link>
      </Button>
    </div>
  )
}
