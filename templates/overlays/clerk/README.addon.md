# Clerk Overlay

This overlay adds Clerk authentication to your Next.js application.

## Environment Variables

Add these to your `.env.local` file:

```env
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_...
CLERK_SECRET_KEY=sk_test_...
```

## Setup

1. Go to [Clerk Dashboard](https://dashboard.clerk.com/)
2. Create a new application
3. Copy the publishable key and secret key
4. Add them to your environment variables

## Usage

The overlay provides a unified auth API through `@/lib/auth`:

- `getSession()` - Get current session (server-side)
- `signIn()` - Sign in with Clerk
- `signOut()` - Sign out
- `requireUser()` - Require authentication (throws if not authenticated)

## Protected Routes

The middleware automatically protects routes under `/(protected)/*`. You can customize the protection pattern in `src/middleware.ts`.

## Client Components

For client components, you can use Clerk's hooks directly:

```tsx
import { useUser, SignInButton, SignOutButton } from '@clerk/nextjs'

export function AuthButton() {
  const { user } = useUser()
  
  return user ? <SignOutButton /> : <SignInButton />
}
```
