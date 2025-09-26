import { auth0 } from '../auth0'
import type { Session, User } from './types'

export async function getSession(): Promise<Session | null> {
  const session = await auth0.getSession()

  if (!session) {
    return null
  }

  return {
    user: {
      sub: session.user.sub,
      email: session.user.email || '',
      name: session.user.name,
      picture: session.user.picture,
      email_verified: session.user.email_verified,
      updated_at: session.user.updated_at,
    },
    accessToken: session.accessToken as string | undefined,
    idToken: session.idToken as string | undefined,
    refreshToken: session.refreshToken as string | undefined,
  }
}

export async function signIn(): Promise<void> {
  // This will be handled by Auth0's login route
  window.location.href = '/auth/login'
}

export async function signOut(): Promise<void> {
  // This will be handled by Auth0's logout route
  window.location.href = '/auth/logout'
}

export function useAuth(): {
  user: User | null
  status: 'authenticated' | 'unauthenticated' | 'loading'
} {
  // For client components, use the Auth0 React hook
  // This is a placeholder - actual implementation would use useUser from @auth0/nextjs-auth0
  return {
    user: null,
    status: 'unauthenticated',
  }
}
