"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useToast } from "@/hooks/use-toast"
import { supabase } from "@/lib/supabase"

export default function NewsletterSignup() {
  const { toast } = useToast()
  const [email, setEmail] = useState("")
  const [name, setName] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!email) {
      toast({
        title: "Error",
        description: "Please enter your email address",
        variant: "destructive",
      })
      return
    }

    setIsLoading(true)

    try {
      // Insert into Supabase
      const { error } = await supabase.from("newsletter_subscribers").insert([{ email, name }])

      if (error) throw error

      setIsSuccess(true)
      setEmail("")
      setName("")

      toast({
        title: "Success!",
        description: "Thank you for subscribing to our newsletter.",
      })
    } catch (error: any) {
      toast({
        title: "Error",
        description:
          error.message === 'duplicate key value violates unique constraint "newsletter_subscribers_email_key"'
            ? "This email is already subscribed to our newsletter."
            : "Failed to subscribe. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="rounded-lg border p-6">
      <h3 className="mb-2 text-lg font-bold">Subscribe to our Newsletter</h3>
      <p className="mb-4 text-sm text-muted-foreground">
        Get the latest workplace health insights delivered to your inbox.
      </p>

      {isSuccess ? (
        <div className="rounded-md bg-green-50 p-4">
          <p className="text-sm text-green-800">Thank you for subscribing! Check your inbox for updates.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-3">
          <div>
            <Input
              type="text"
              placeholder="Your name (optional)"
              value={name}
              onChange={(e) => setName(e.target.value)}
              disabled={isLoading}
            />
          </div>
          <div>
            <Input
              type="email"
              placeholder="Your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              disabled={isLoading}
            />
          </div>
          <Button type="submit" className="w-full" disabled={isLoading}>
            {isLoading ? "Subscribing..." : "Subscribe"}
          </Button>
          <p className="text-xs text-muted-foreground">We respect your privacy. Unsubscribe at any time.</p>
        </form>
      )}
    </div>
  )
}
