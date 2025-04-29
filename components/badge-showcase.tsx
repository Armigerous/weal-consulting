import { Shield, Award } from "lucide-react"

export default function BadgeShowcase() {
  return (
    <div className="grid gap-8 md:grid-cols-3">
      <div className="flex flex-col items-center">
        <div className="mb-4 flex h-24 w-24 items-center justify-center rounded-full bg-yellow-100 p-4">
          <Award className="h-12 w-12 text-yellow-500" fill="#FDF7E2" strokeWidth={1.5} />
        </div>
        <div className="flex items-center gap-1 rounded-full border border-yellow-200 bg-yellow-50 px-3 py-1">
          <Shield className="h-4 w-4 text-yellow-500" />
          <span className="text-sm font-medium text-yellow-700">Gold Certified</span>
        </div>
      </div>
      <div className="flex flex-col items-center">
        <div className="mb-4 flex h-24 w-24 items-center justify-center rounded-full bg-gray-100 p-4">
          <Award className="h-12 w-12 text-gray-500" fill="#F9FAFB" strokeWidth={1.5} />
        </div>
        <div className="flex items-center gap-1 rounded-full border border-gray-200 bg-gray-50 px-3 py-1">
          <Shield className="h-4 w-4 text-gray-500" />
          <span className="text-sm font-medium text-gray-700">Silver Certified</span>
        </div>
      </div>
      <div className="flex flex-col items-center">
        <div className="mb-4 flex h-24 w-24 items-center justify-center rounded-full bg-red-100 p-4">
          <Shield className="h-12 w-12 text-primary-500" fill="#FEF2F2" strokeWidth={1.5} />
        </div>
        <div className="flex items-center gap-1 rounded-full border border-red-200 bg-red-50 px-3 py-1">
          <Shield className="h-4 w-4 text-primary-500" />
          <span className="text-sm font-medium text-primary-500">Weal Certified</span>
        </div>
      </div>
    </div>
  )
}
