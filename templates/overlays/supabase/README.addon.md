# Supabase Overlay

This overlay adds Supabase authentication to your Next.js application.

## Environment Variables

Add these to your `.env.local` file:

```env
NEXT_PUBLIC_SUPABASE_URL=your-supabase-url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-supabase-anon-key
```

## Setup

1. Go to [Supabase Dashboard](https://supabase.com/dashboard)
2. Create a new project
3. Go to Settings > API
4. Copy the Project URL and anon public key
5. Add them to your environment variables

## Usage

The overlay provides a unified auth API through `@/lib/auth`:

- `getSession()` - Get current session (server-side)
- `signIn()` - Sign in with Supabase
- `signOut()` - Sign out
- `requireUser()` - Require authentication (throws if not authenticated)

## Protected Routes

The middleware automatically protects routes and redirects unauthenticated users to `/login`. You can customize the protection pattern in `src/middleware.ts`.

## Client Components

For client components, you can use Supabase's hooks directly:

```tsx
import { createClient } from '@/lib/supabaseClient'
import { useEffect, useState } from 'react'

export function AuthButton() {
  const [user, setUser] = useState(null)
  const supabase = createClient()

  useEffect(() => {
    const getUser = async () => {
      const { data: { user } } = await supabase.auth.getUser()
      setUser(user)
    }
    getUser()
  }, [])

  return user ? (
    <button onClick={() => supabase.auth.signOut()}>Sign Out</button>
  ) : (
    <button onClick={() => supabase.auth.signInWithOAuth({ provider: 'google' })}>
      Sign In
    </button>
  )
}
```
