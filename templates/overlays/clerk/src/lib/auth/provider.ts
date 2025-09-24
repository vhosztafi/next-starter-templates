import { auth, currentUser } from '@clerk/nextjs/server'
import { signIn as clerkSignIn, signOut as clerkSignOut } from '@clerk/nextjs'
import type { Session, User } from './types'

export async function getSession(): Promise<Session | null> {
  const { userId } = await auth()
  
  if (!userId) {
    return null
  }

  const user = await currentUser()
  
  if (!user) {
    return null
  }

  return {
    user: {
      id: user.id,
      email: user.emailAddresses[0]?.emailAddress || '',
      name: user.fullName || undefined,
      image: user.imageUrl || undefined,
    },
    expires: new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString(), // 24 hours
  }
}

export async function signIn(providerId?: string): Promise<void> {
  await clerkSignIn()
}

export async function signOut(): Promise<void> {
  await clerkSignOut()
}

export function useAuth(): {
  user: User | null
  status: 'authenticated' | 'unauthenticated' | 'loading'
} {
  // This would typically use useUser from @clerk/nextjs
  // For server components, this is handled by getSession
  return {
    user: null,
    status: 'unauthenticated',
  }
}
