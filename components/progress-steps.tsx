import { CheckCircle } from "lucide-react"

interface ProgressStepsProps {
  steps: string[]
  currentStep: number
}

export default function ProgressSteps({ steps, currentStep }: ProgressStepsProps) {
  return (
    <div className="mb-12 pt-4">
      <div className="relative flex justify-between">
        {/* Horizontal line connecting steps */}
        <div className="absolute left-0 top-4 h-0.5 w-full -translate-y-1/2 bg-gray-300"></div>

        {/* Steps */}
        {steps.map((step, index) => (
          <div key={index} className="relative flex flex-col items-center">
            {/* Step circle */}
            <div
              className={`relative z-10 flex h-8 w-8 items-center justify-center rounded-full border-2 transition-colors duration-300 ${
                index < currentStep
                  ? "border-primary-500 bg-primary-500 text-white"
                  : index === currentStep
                    ? "border-primary-500 bg-white text-primary-500"
                    : "border-gray-300 bg-white text-gray-300"
              }`}
            >
              {index < currentStep ? <CheckCircle className="h-5 w-5" /> : <span>{index + 1}</span>}
            </div>

            {/* Step label */}
            <span
              className={`absolute top-10 whitespace-nowrap text-xs transition-colors duration-300 ${
                index <= currentStep ? "font-medium text-primary-500" : "text-muted-foreground"
              }`}
            >
              {step}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}
