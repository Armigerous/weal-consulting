"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu } from "lucide-react"
import Logo from "@/components/logo"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Logo />
        </div>
        <nav className="hidden md:flex md:gap-6">
          <Link href="/" className="text-sm font-medium text-accent-900 transition-colors hover:text-primary-500">
            Home
          </Link>
          <Link
            href="/certification"
            className="text-sm font-medium text-accent-900 transition-colors hover:text-primary-500"
          >
            Certification
          </Link>
          <Link
            href="/process"
            className="text-sm font-medium text-accent-900 transition-colors hover:text-primary-500"
          >
            Our Process
          </Link>
          <Link href="/about" className="text-sm font-medium text-accent-900 transition-colors hover:text-primary-500">
            About Us
          </Link>
          <Link href="/blog" className="text-sm font-medium text-accent-900 transition-colors hover:text-primary-500">
            Blog
          </Link>
          <Link href="/verify" className="text-sm font-medium text-accent-900 transition-colors hover:text-primary-500">
            Verify
          </Link>
          <Link
            href="/contact"
            className="text-sm font-medium text-accent-900 transition-colors hover:text-primary-500"
          >
            Contact
          </Link>
        </nav>
        <div className="flex items-center gap-4">
          <Button asChild variant="default" className="hidden md:flex">
            <Link href="/apply">Apply for Certification</Link>
          </Button>
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <nav className="flex flex-col gap-4">
                <Link
                  href="/"
                  onClick={() => setIsOpen(false)}
                  className="text-lg font-medium text-accent-900 transition-colors hover:text-primary-500"
                >
                  Home
                </Link>
                <Link
                  href="/certification"
                  onClick={() => setIsOpen(false)}
                  className="text-lg font-medium text-accent-900 transition-colors hover:text-primary-500"
                >
                  Certification
                </Link>
                <Link
                  href="/process"
                  onClick={() => setIsOpen(false)}
                  className="text-lg font-medium text-accent-900 transition-colors hover:text-primary-500"
                >
                  Our Process
                </Link>
                <Link
                  href="/about"
                  onClick={() => setIsOpen(false)}
                  className="text-lg font-medium text-accent-900 transition-colors hover:text-primary-500"
                >
                  About Us
                </Link>
                <Link
                  href="/blog"
                  onClick={() => setIsOpen(false)}
                  className="text-lg font-medium text-accent-900 transition-colors hover:text-primary-500"
                >
                  Blog
                </Link>
                <Link
                  href="/verify"
                  onClick={() => setIsOpen(false)}
                  className="text-lg font-medium text-accent-900 transition-colors hover:text-primary-500"
                >
                  Verify
                </Link>
                <Link
                  href="/contact"
                  onClick={() => setIsOpen(false)}
                  className="text-lg font-medium text-accent-900 transition-colors hover:text-primary-500"
                >
                  Contact
                </Link>
                <Button asChild variant="default" className="mt-4">
                  <Link href="/apply" onClick={() => setIsOpen(false)}>
                    Apply for Certification
                  </Link>
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
