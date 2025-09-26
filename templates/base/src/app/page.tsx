import { Button } from '@/components/ui/button'
import { getSession } from '@/lib/auth'
import Link from 'next/link'
import Image from 'next/image'

export default async function HomePage() {
  const session = await getSession()

  return (
    <main className="container mx-auto px-4 py-8">
      <div className="mx-auto max-w-2xl text-center">
        <h1 className="mb-6 text-4xl font-bold tracking-tight">
          Welcome to Next.js Starter
        </h1>
        <p className="mb-8 text-lg text-muted-foreground">
          A modern Next.js starter template with TypeScript, Tailwind CSS, and
          Auth0 authentication.
        </p>

        <div className="space-y-4">
          {session ? (
            <div className="space-y-4">
              <div className="rounded-lg border bg-card p-6">
                <h2 className="mb-4 text-xl font-semibold">Welcome back!</h2>
                <div className="mb-4 space-y-2">
                  <p>
                    <strong>Email:</strong> {session.user.email}
                  </p>
                  {session.user.name && (
                    <p>
                      <strong>Name:</strong> {session.user.name}
                    </p>
                  )}
                  {session.user.picture && (
                    <div>
                      <strong>Avatar:</strong>
                      <Image
                        src={session.user.picture}
                        alt="User avatar"
                        width={32}
                        height={32}
                        className="ml-2 inline-block h-8 w-8 rounded-full"
                      />
                    </div>
                  )}
                </div>
                <div className="flex justify-center gap-4">
                  <Link href="/dashboard">
                    <Button>Go to Dashboard</Button>
                  </Link>
                </div>
              </div>
            </div>
          ) : (
            <div className="space-y-4">
              <div className="flex justify-center gap-4">
                <a href="/auth/login">
                  <Button>Sign In</Button>
                </a>
                <Button variant="outline">Learn More</Button>
              </div>
              <p className="text-sm text-muted-foreground">
                Sign in to access your dashboard and protected features.
              </p>
            </div>
          )}
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          <div className="rounded-lg border bg-card p-6">
            <h3 className="mb-2 text-lg font-semibold">Authentication</h3>
            <p className="text-sm text-muted-foreground">
              Secure user authentication powered by Auth0 with support for
              multiple providers.
            </p>
          </div>
          <div className="rounded-lg border bg-card p-6">
            <h3 className="mb-2 text-lg font-semibold">Protected Routes</h3>
            <p className="text-sm text-muted-foreground">
              Middleware-based route protection with automatic redirects for
              unauthenticated users.
            </p>
          </div>
          <div className="rounded-lg border bg-card p-6">
            <h3 className="mb-2 text-lg font-semibold">Modern Stack</h3>
            <p className="text-sm text-muted-foreground">
              Built with Next.js 15, TypeScript, Tailwind CSS, and the latest
              best practices.
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}
