import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, MoreHorizontal } from "lucide-react"

interface PaginationProps {
  currentPage: number
  totalPages: number
  baseUrl: string
  queryParams?: Record<string, string>
}

export default function Pagination({ currentPage, totalPages, baseUrl, queryParams = {} }: PaginationProps) {
  // Don't show pagination if there's only one page
  if (totalPages <= 1) return null

  // Create URL with query parameters
  const createPageUrl = (page: number) => {
    const params = new URLSearchParams(queryParams)
    params.set("page", page.toString())
    return `${baseUrl}?${params.toString()}`
  }

  // Calculate which page numbers to show
  const getPageNumbers = () => {
    const pages = []

    // Always show first page
    pages.push(1)

    // Calculate start and end of page range around current page
    let rangeStart = Math.max(2, currentPage - 1)
    let rangeEnd = Math.min(totalPages - 1, currentPage + 1)

    // Adjust range to always show 3 pages if possible
    if (rangeEnd - rangeStart < 2) {
      if (rangeStart === 2) {
        rangeEnd = Math.min(4, totalPages - 1)
      } else if (rangeEnd === totalPages - 1) {
        rangeStart = Math.max(2, totalPages - 3)
      }
    }

    // Add ellipsis after first page if needed
    if (rangeStart > 2) {
      pages.push("ellipsis1")
    }

    // Add page numbers around current page
    for (let i = rangeStart; i <= rangeEnd; i++) {
      pages.push(i)
    }

    // Add ellipsis before last page if needed
    if (rangeEnd < totalPages - 1) {
      pages.push("ellipsis2")
    }

    // Always show last page if more than one page
    if (totalPages > 1) {
      pages.push(totalPages)
    }

    return pages
  }

  const pageNumbers = getPageNumbers()

  return (
    <nav className="flex items-center justify-center space-x-1 pt-8" aria-label="Pagination">
      {/* Previous page button */}
      <Button
        variant="outline"
        size="icon"
        className="h-8 w-8"
        disabled={currentPage === 1}
        asChild={currentPage !== 1}
      >
        {currentPage === 1 ? (
          <span aria-disabled="true">
            <ChevronLeft className="h-4 w-4" />
          </span>
        ) : (
          <Link href={createPageUrl(currentPage - 1)} aria-label="Previous page">
            <ChevronLeft className="h-4 w-4" />
          </Link>
        )}
      </Button>

      {/* Page numbers */}
      {pageNumbers.map((page, index) => {
        if (page === "ellipsis1" || page === "ellipsis2") {
          return (
            <span key={`ellipsis-${index}`} className="flex h-8 w-8 items-center justify-center">
              <MoreHorizontal className="h-4 w-4" />
            </span>
          )
        }

        const isCurrentPage = page === currentPage

        return (
          <Button
            key={`page-${page}`}
            variant={isCurrentPage ? "default" : "outline"}
            size="icon"
            className="h-8 w-8"
            disabled={isCurrentPage}
            asChild={!isCurrentPage}
          >
            {isCurrentPage ? (
              <span aria-current="page">{page}</span>
            ) : (
              <Link href={createPageUrl(page as number)} aria-label={`Page ${page}`}>
                {page}
              </Link>
            )}
          </Button>
        )
      })}

      {/* Next page button */}
      <Button
        variant="outline"
        size="icon"
        className="h-8 w-8"
        disabled={currentPage === totalPages}
        asChild={currentPage !== totalPages}
      >
        {currentPage === totalPages ? (
          <span aria-disabled="true">
            <ChevronRight className="h-4 w-4" />
          </span>
        ) : (
          <Link href={createPageUrl(currentPage + 1)} aria-label="Next page">
            <ChevronRight className="h-4 w-4" />
          </Link>
        )}
      </Button>
    </nav>
  )
}
