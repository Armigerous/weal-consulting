import { Shield, Award, CheckCircle } from "lucide-react"

interface CertificateMockupProps {
  tier?: "gold" | "silver" | "certified"
  companyName?: string
  date?: string
  certificateId?: string
}

export default function CertificateMockup({
  tier = "gold",
  companyName = "Example Corporation",
  date = "April 15, 2025",
  certificateId = "WC-2025-04-1234",
}: CertificateMockupProps) {
  const tierColors = {
    gold: "bg-yellow-50 border-yellow-400",
    silver: "bg-gray-50 border-gray-400",
    certified: "bg-white border-primary-500",
  }

  const tierIcons = {
    gold: <Award className="h-16 w-16 text-yellow-500" fill="#FDF7E2" strokeWidth={1.5} />,
    silver: <Award className="h-16 w-16 text-gray-500" fill="#F9FAFB" strokeWidth={1.5} />,
    certified: <Shield className="h-16 w-16 text-primary-500" fill="#FEF2F2" strokeWidth={1.5} />,
  }

  const tierTitles = {
    gold: "Gold",
    silver: "Silver",
    certified: "Certified",
  }

  return (
    <div
      className={`relative mx-auto w-full max-w-2xl overflow-hidden rounded-lg border-4 ${tierColors[tier]} bg-white p-8 shadow-lg`}
    >
      <div className="absolute -right-16 -top-16 h-32 w-32 rounded-full bg-secondary-100 opacity-50"></div>
      <div className="absolute -left-16 -bottom-16 h-32 w-32 rounded-full bg-secondary-100 opacity-50"></div>

      <div className="relative z-10 flex flex-col items-center">
        <div className="mb-2 flex items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-md bg-primary-500 p-1">
            <Shield className="h-6 w-6 text-white" fill="white" />
          </div>
          <h2 className="text-xl font-bold text-accent-900">Weal Consulting</h2>
        </div>
        <p className="mb-6 text-sm text-muted-foreground">U.S. Workplace Health Certification</p>

        <div className="mb-4 flex flex-col items-center">{tierIcons[tier]}</div>

        <h1 className="mb-2 text-center text-3xl font-bold text-accent-900">{tierTitles[tier]} Certification</h1>
        <p className="mb-8 text-center text-lg">This certifies that</p>

        <h2 className="mb-8 text-center text-2xl font-bold text-primary-500">{companyName}</h2>

        <p className="mb-8 text-center">
          has met or exceeded the Weal Consulting standards for workplace health and safety, demonstrating a commitment
          to creating a healthy work environment for all employees.
        </p>

        <div className="mb-8 grid w-full grid-cols-2 gap-4">
          <div className="flex flex-col items-center border-r border-gray-200 pr-4">
            <p className="text-sm text-muted-foreground">Issue Date</p>
            <p className="font-medium">{date}</p>
          </div>
          <div className="flex flex-col items-center">
            <p className="text-sm text-muted-foreground">Certificate ID</p>
            <p className="font-medium">{certificateId}</p>
          </div>
        </div>

        <div className="mb-4 grid w-full grid-cols-2 gap-8">
          <div className="flex flex-col items-center">
            <div className="mb-2 h-px w-32 bg-gray-300"></div>
            <p className="text-sm text-muted-foreground">CEO, Weal Consulting</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="mb-2 h-px w-32 bg-gray-300"></div>
            <p className="text-sm text-muted-foreground">Regional Partner</p>
          </div>
        </div>

        <div className="mt-4 flex items-center gap-2 rounded-full border border-gray-200 bg-gray-50 px-4 py-2 text-xs text-muted-foreground">
          <CheckCircle className="h-4 w-4 text-green-500" />
          <span>Verify this certificate at wealconsulting.com/verify</span>
        </div>
      </div>
    </div>
  )
}
