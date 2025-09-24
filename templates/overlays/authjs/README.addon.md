# Auth.js Overlay

This overlay adds NextAuth.js authentication to your Next.js application.

## Environment Variables

Add these to your `.env.local` file:

```env
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your-secret-key-here
GOOGLE_CLIENT_ID=your-google-client-id
GOOGLE_CLIENT_SECRET=your-google-client-secret
```

## Setup

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select an existing one
3. Enable the Google+ API
4. Create credentials (OAuth 2.0 Client ID)
5. Add `http://localhost:3000/api/auth/callback/google` to authorized redirect URIs
6. Copy the Client ID and Client Secret to your environment variables

## Usage

The overlay provides a unified auth API through `@/lib/auth`:

- `getSession()` - Get current session (server-side)
- `signIn()` - Sign in with a provider
- `signOut()` - Sign out
- `requireUser()` - Require authentication (throws if not authenticated)

## Protected Routes

To protect routes, rename `src/middleware.example.ts` to `src/middleware.ts` and configure the matcher pattern as needed.
