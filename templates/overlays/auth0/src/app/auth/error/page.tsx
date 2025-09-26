import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function AuthErrorPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mx-auto max-w-md">
        <div className="rounded-lg border bg-card p-6">
          <h1 className="mb-6 text-center text-2xl font-bold text-red-600">
            Authentication Error
          </h1>
          <p className="mb-6 text-center text-muted-foreground">
            There was an error during the authentication process. This could be
            due to:
          </p>

          <ul className="mb-6 space-y-2 text-sm text-muted-foreground">
            <li>• User cancelled the login process</li>
            <li>• Network connectivity issues</li>
            <li>• Invalid Auth0 configuration</li>
            <li>• Session expired</li>
          </ul>

          <div className="space-y-4">
            <a href="/auth/login" className="block">
              <Button className="w-full">Try Again</Button>
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
