'use client'

import { useUser } from '@auth0/nextjs-auth0'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export function AuthButton() {
  const { user, error, isLoading } = useUser()

  if (isLoading) {
    return <Button disabled>Loading...</Button>
  }

  if (error) {
    return <Button variant="destructive">Error loading user</Button>
  }

  if (user) {
    return (
      <div className="flex items-center gap-4">
        <span className="text-sm text-muted-foreground">
          Welcome, {user.name || user.email}!
        </span>
        <Link href="/dashboard">
          <Button>Dashboard</Button>
        </Link>
        <a href="/auth/logout">
          <Button variant="outline">Sign Out</Button>
        </a>
      </div>
    )
  }

  return (
    <a href="/auth/login">
      <Button>Sign In</Button>
    </a>
  )
}
