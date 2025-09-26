import type { User } from './types'
import { getSession } from './provider'

// Re-export provider functions
export { getSession, signIn, signOut, useAuth } from './provider'

// Helper functions
export async function requireUser(): Promise<User> {
  const session = await getSession()
  if (!session?.user) {
    throw new Error('Authentication required')
  }
  return session.user
}

export async function withUser<T>(
  fn: (user: User) => Promise<T> | T
): Promise<T> {
  const user = await requireUser()
  return fn(user)
}
