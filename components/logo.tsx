import { Shield } from "lucide-react"
import Link from "next/link"

interface LogoProps {
  variant?: "default" | "footer"
  size?: "sm" | "md" | "lg"
}

export default function Logo({ variant = "default", size = "md" }: LogoProps) {
  const sizeClasses = {
    sm: "h-5 w-5",
    md: "h-6 w-6",
    lg: "h-8 w-8",
  }

  const textSizeClasses = {
    sm: "text-sm",
    md: "text-base",
    lg: "text-xl",
  }

  return (
    <Link href="/" className="flex items-center gap-2">
      <div className="flex items-center justify-center rounded-md bg-primary-500 p-1">
        <Shield
          className={`${sizeClasses[size]} text-white`}
          fill="white"
          strokeWidth={variant === "footer" ? 1.5 : 2}
        />
      </div>
      <span className={`font-bold ${variant === "footer" ? "text-white" : "text-accent-900"} ${textSizeClasses[size]}`}>
        Weal Consulting
      </span>
    </Link>
  )
}
