'use client'

import { useUser } from '@auth0/nextjs-auth0'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

export function Navigation() {
  const { user, isLoading } = useUser()

  return (
    <nav className="border-b bg-background">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="text-xl font-bold">
            Next.js Starter
          </Link>

          <div className="flex items-center gap-4">
            {isLoading ? (
              <div className="h-8 w-20 animate-pulse rounded bg-muted" />
            ) : user ? (
              <div className="flex items-center gap-4">
                <span className="text-sm text-muted-foreground">
                  {user.name || user.email}
                </span>
                <Link href="/dashboard">
                  <Button variant="ghost" size="sm">
                    Dashboard
                  </Button>
                </Link>
                <a href="/auth/logout">
                  <Button variant="outline" size="sm">
                    Sign Out
                  </Button>
                </a>
              </div>
            ) : (
              <a href="/auth/login">
                <Button size="sm">Sign In</Button>
              </a>
            )}
          </div>
        </div>
      </div>
    </nav>
  )
}
