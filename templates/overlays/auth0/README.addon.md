# Auth0 Overlay

This overlay adds Auth0 authentication to your Next.js application.

## Environment Variables

Add these to your `.env.local` file:

```env
AUTH0_SECRET=your-secret-key-here
AUTH0_BASE_URL=http://localhost:3000
AUTH0_ISSUER_BASE_URL=https://your-domain.auth0.com
AUTH0_CLIENT_ID=your-client-id
AUTH0_CLIENT_SECRET=your-client-secret
```

## Setup

1. Go to [Auth0 Dashboard](https://manage.auth0.com/)
2. Create a new application (Regular Web Application)
3. Configure allowed callback URLs: `http://localhost:3000/api/auth/callback`
4. Configure allowed logout URLs: `http://localhost:3000`
5. Copy the domain, client ID, and client secret to your environment variables

## Usage

The overlay provides a unified auth API through `@/lib/auth`:

- `getSession()` - Get current session (server-side)
- `signIn()` - Sign in with Auth0
- `signOut()` - Sign out
- `requireUser()` - Require authentication (throws if not authenticated)

## Protected Routes

To protect routes, rename `src/middleware.example.ts` to `src/middleware.ts` and configure the matcher pattern as needed.

## Client Components

For client components, you can use Auth0's hooks directly:

```tsx
import { useUser, LoginButton, LogoutButton } from '@auth0/nextjs-auth0/client'

export function AuthButton() {
  const { user } = useUser()
  
  return user ? <LogoutButton /> : <LoginButton />
}
```
