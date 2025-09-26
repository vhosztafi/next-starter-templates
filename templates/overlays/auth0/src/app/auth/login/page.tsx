import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function LoginPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mx-auto max-w-md">
        <div className="rounded-lg border bg-card p-6">
          <h1 className="mb-6 text-center text-2xl font-bold">Sign In</h1>
          <p className="mb-6 text-center text-muted-foreground">
            Sign in to your account to access the dashboard and protected
            features.
          </p>

          <div className="space-y-4">
            <a href="/auth/login" className="block">
              <Button className="w-full">Sign In with Auth0</Button>
            </a>

            <div className="text-center">
              <Link
                href="/"
                className="text-sm text-muted-foreground hover:underline"
              >
                Back to Home
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
