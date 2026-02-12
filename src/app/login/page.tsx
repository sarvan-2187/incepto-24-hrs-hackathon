"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { createClient } from "../../../utils/supabase/client"
import { Loader2 } from "lucide-react"
import HeroBg from "../../../components/HeroBg"

export default function LoginPage() {
  const [isLoading, setIsLoading] = useState(false)
  const [isGoogleLoading, setIsGoogleLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const supabase = createClient()

  const handleGoogleLogin = async () => {
    try {
      setIsGoogleLoading(true)
      setError(null)
      const { origin } = window.location

      const { error } = await supabase.auth.signInWithOAuth({
        provider: "google",
        options: {
          redirectTo: `${origin}/auth/callback`,
        },
      })

      if (error) throw error
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to sign in with Google")
      setIsGoogleLoading(false)
    }
  }

  const handleEmailLogin = async (formData: FormData) => {
    try {
      setIsLoading(true)
      setError(null)

      const email = formData.get("email") as string
      const password = formData.get("password") as string

      const { error } = await supabase.auth.signInWithPassword({
        email,
        password,
      })

      if (error) throw error
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to sign in")
      setIsLoading(false)
    }
  }

  const handleEmailSignup = async (formData: FormData) => {
    try {
      setIsLoading(true)
      setError(null)

      const email = formData.get("email") as string
      const password = formData.get("password") as string

      const { error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          emailRedirectTo: `${window.location.origin}/auth/callback`,
        },
      })

      if (error) throw error
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to sign up")
      setIsLoading(false)
    }
  }

  return (
    <div className="relative flex min-h-screen items-center justify-center p-4">
      <Card className="relative z-10 w-full max-w-md shadow-2xl border backdrop-blur-md bg-white">
        <CardHeader className="space-y-1 text-center">
          <CardTitle className="text-3xl font-bold tracking-tight text-black">Welcome to SkillTorch</CardTitle>
          <CardDescription className="text-base text-gray-600">
            Sign in to your account or create a new one
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <Button
            onClick={handleGoogleLogin}
            disabled={isGoogleLoading || isLoading}
            variant="outline"
                      className="w-full gap-3 h-12 text-base font-medium text-black bg-gray-100 hover:bg-gray-300 transition-all duration-200"
            size="lg"
          >
            {isGoogleLoading ? (
              <Loader2 className="w-5 h-5 animate-spin" />
            ) : (
              <svg className="w-5 h-5" viewBox="0 0 24 24">
                <path
                  fill="#4285F4"
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                />
                <path
                  fill="#34A853"
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                />
                <path
                  fill="#FBBC05"
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                />
                <path
                  fill="#EA4335"
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                />
              </svg>
            )}
            Continue with Google
          </Button>

          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <Separator />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-white px-2 text-gray-600">Or continue with</span>
            </div>
          </div>

          <form action={handleEmailLogin} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email" className="text-black">Email</Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="name@example.com"
                required
                disabled={isLoading || isGoogleLoading}
                className="h-11"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password" className="text-black">Password</Label>
              <Input
                id="password"
                name="password"
                type="password"
                placeholder="Enter your password"
                required
                disabled={isLoading || isGoogleLoading}
                className="h-11"
              />
            </div>

            {error && (
              <div className="text-sm text-destructive text-center bg-destructive/10 p-3 rounded-md">
                {error}
              </div>
            )}

            <div className="flex flex-col gap-2">
              <Button
                type="submit"
                disabled={isLoading || isGoogleLoading}
                className="w-full h-11 text-base font-medium bg-black text-white hover:bg-gray-800"
                size="lg"
              >
                {isLoading ? (
                  <>
                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                    Signing in...
                  </>
                ) : (
                  "Sign in"
                )}
              </Button>
              <Button
                formAction={handleEmailSignup}
                variant="outline"
                disabled={isLoading || isGoogleLoading}
                className="w-full h-11 text-base font-medium text-black bg-gray-100 hover:bg-gray-300"
                size="lg"
              >
                Create account
              </Button>
            </div>
          </form>

          <p className="text-xs text-gray-600 text-center px-4">
            By continuing, you agree to our Terms of Service and Privacy Policy
          </p>
        </CardContent>
      </Card>
    </div>
  )
}