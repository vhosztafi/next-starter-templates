import type { Session, User } from './types'

// Default no-auth provider implementation
// This will be overridden by auth overlays

export async function getSession(): Promise<Session | null> {
  return null
}

export async function signIn(providerId?: string): Promise<void> {
  throw new Error('No authentication provider configured')
}

export async function signOut(): Promise<void> {
  throw new Error('No authentication provider configured')
}

export function useAuth(): {
  user: User | null
  status: 'authenticated' | 'unauthenticated' | 'loading'
} {
  return {
    user: null,
    status: 'unauthenticated',
  }
}
