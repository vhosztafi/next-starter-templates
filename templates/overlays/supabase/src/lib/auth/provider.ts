import { createClient } from '@/lib/supabaseServer'
import { createClient as createBrowserClient } from '@/lib/supabaseClient'
import type { Session, User } from './types'

export async function getSession(): Promise<Session | null> {
  const supabase = await createClient()
  
  const {
    data: { session },
  } = await supabase.auth.getSession()

  if (!session?.user) {
    return null
  }

  return {
    user: {
      id: session.user.id,
      email: session.user.email || '',
      name: session.user.user_metadata?.full_name || undefined,
      image: session.user.user_metadata?.avatar_url || undefined,
    },
    expires: new Date(session.expires_at! * 1000).toISOString(),
  }
}

export async function signIn(providerId?: string): Promise<void> {
  const supabase = createBrowserClient()
  
  if (providerId) {
    await supabase.auth.signInWithOAuth({
      provider: providerId as any,
    })
  } else {
    // Default to email/password or redirect to login page
    window.location.href = '/login'
  }
}

export async function signOut(): Promise<void> {
  const supabase = createBrowserClient()
  await supabase.auth.signOut()
}

export function useAuth(): {
  user: User | null
  status: 'authenticated' | 'unauthenticated' | 'loading'
} {
  // This would typically use useUser from @supabase/auth-helpers-react
  // For server components, this is handled by getSession
  return {
    user: null,
    status: 'unauthenticated',
  }
}
