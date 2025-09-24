import { getServerSession } from 'next-auth'
import { signIn as nextAuthSignIn, signOut as nextAuthSignOut } from 'next-auth/react'
import { authOptions } from '@/app/api/auth/[...nextauth]/auth-options'
import type { Session, User } from './types'

export async function getSession(): Promise<Session | null> {
  const session = await getServerSession(authOptions)
  
  if (!session) {
    return null
  }

  return {
    user: {
      id: session.user.id || '',
      email: session.user.email || '',
      name: session.user.name || undefined,
      image: session.user.image || undefined,
    },
    expires: session.expires,
  }
}

export async function signIn(providerId?: string): Promise<void> {
  await nextAuthSignIn(providerId)
}

export async function signOut(): Promise<void> {
  await nextAuthSignOut()
}

export function useAuth(): {
  user: User | null
  status: 'authenticated' | 'unauthenticated' | 'loading'
} {
  // This would typically use useSession from next-auth/react
  // For server components, this is handled by getSession
  return {
    user: null,
    status: 'unauthenticated',
  }
}
