import Link from "next/link"
import { Button } from "@/components/ui/button"
import Logo from "@/components/logo"

export default function Footer() {
  return (
    <footer className="bg-accent-900 text-white">
      <div className="container py-12 md:py-16">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <Logo variant="footer" />
            <p className="text-sm text-gray-300">
              U.S.-based workplace health certification system for businesses worldwide.
            </p>
            <div className="flex items-center gap-2">
              <Button variant="link" size="sm" asChild className="p-0 text-gray-300 hover:text-white">
                <Link href="/privacy">Privacy Policy</Link>
              </Button>
              <span className="text-gray-500">•</span>
              <Button variant="link" size="sm" asChild className="p-0 text-gray-300 hover:text-white">
                <Link href="/terms">Terms of Service</Link>
              </Button>
            </div>
          </div>
          <div>
            <h4 className="mb-4 font-medium">Certification</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <Button variant="link" size="sm" asChild className="p-0 text-gray-300 hover:text-white">
                  <Link href="/certification">Our Standards</Link>
                </Button>
              </li>
              <li>
                <Button variant="link" size="sm" asChild className="p-0 text-gray-300 hover:text-white">
                  <Link href="/process">Certification Process</Link>
                </Button>
              </li>
              <li>
                <Button variant="link" size="sm" asChild className="p-0 text-gray-300 hover:text-white">
                  <Link href="/apply">Apply Now</Link>
                </Button>
              </li>
              <li>
                <Button variant="link" size="sm" asChild className="p-0 text-gray-300 hover:text-white">
                  <Link href="/verify">Verify a Certificate</Link>
                </Button>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="mb-4 font-medium">Company</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <Button variant="link" size="sm" asChild className="p-0 text-gray-300 hover:text-white">
                  <Link href="/about">About Us</Link>
                </Button>
              </li>
              <li>
                <Button variant="link" size="sm" asChild className="p-0 text-gray-300 hover:text-white">
                  <Link href="/blog">Blog</Link>
                </Button>
              </li>
              <li>
                <Button variant="link" size="sm" asChild className="p-0 text-gray-300 hover:text-white">
                  <Link href="/contact">Contact</Link>
                </Button>
              </li>
              <li>
                <Button variant="link" size="sm" asChild className="p-0 text-gray-300 hover:text-white">
                  <Link href="/faq">FAQ</Link>
                </Button>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="mb-4 font-medium">Contact</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>info@wealconsulting.com</li>
              <li>+1 (555) 123-4567</li>
              <li className="pt-2">
                <Button
                  variant="outline"
                  size="sm"
                  asChild
                  className="border-gray-600 bg-transparent text-white hover:bg-gray-800 hover:text-white"
                >
                  <Link href="/contact">Get in Touch</Link>
                </Button>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-700 pt-6 text-center text-sm text-gray-400">
          <p>© {new Date().getFullYear()} Weal Consulting. All rights reserved.</p>
          <p className="mt-2 text-xs">
            Disclaimer: Weal Consulting does not offer medical advice, diagnosis, or treatment. Certifications are based
            on non-clinical workplace health and safety standards. Certification does not exempt a business from
            complying with national health regulations.
          </p>
        </div>
      </div>
    </footer>
  )
}
