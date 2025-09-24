import { getSession as auth0GetSession } from '@auth0/nextjs-auth0'
import { UserProfile } from '@auth0/nextjs-auth0/client'
import type { Session, User } from './types'

export async function getSession(): Promise<Session | null> {
  const session = await auth0GetSession()
  
  if (!session) {
    return null
  }

  return {
    user: {
      id: session.user.sub || '',
      email: session.user.email || '',
      name: session.user.name || undefined,
      image: session.user.picture || undefined,
    },
    expires: new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString(), // 24 hours
  }
}

export async function signIn(providerId?: string): Promise<void> {
  // Auth0 handles sign-in through the API route
  window.location.href = '/api/auth/login'
}

export async function signOut(): Promise<void> {
  // Auth0 handles sign-out through the API route
  window.location.href = '/api/auth/logout'
}

export function useAuth(): {
  user: User | null
  status: 'authenticated' | 'unauthenticated' | 'loading'
} {
  // This would typically use useUser from @auth0/nextjs-auth0
  // For server components, this is handled by getSession
  return {
    user: null,
    status: 'unauthenticated',
  }
}
