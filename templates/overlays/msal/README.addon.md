# MSAL Overlay

This overlay adds Microsoft Authentication Library (MSAL) for Azure AD authentication to your Next.js application.

## Environment Variables

Add these to your `.env.local` file:

```env
NEXT_PUBLIC_AZURE_TENANT_ID=your-tenant-id
NEXT_PUBLIC_AZURE_CLIENT_ID=your-client-id
NEXT_PUBLIC_AZURE_REDIRECT_URI=http://localhost:3000/auth/callback
NEXT_PUBLIC_AZURE_SCOPES=User.Read,openid,profile,email
```

## Setup

1. Go to [Azure Portal](https://portal.azure.com/)
2. Navigate to Azure Active Directory > App registrations
3. Create a new registration
4. Configure redirect URIs: `http://localhost:3000/auth/callback`
5. Copy the Application (client) ID and Directory (tenant) ID
6. Add them to your environment variables

## Usage

The overlay provides a unified auth API through `@/lib/auth`:

- `getSession()` - Get current session (server-side)
- `signIn()` - Sign in with Azure AD
- `signOut()` - Sign out
- `requireUser()` - Require authentication (throws if not authenticated)

## Protected Routes

The middleware automatically protects routes under `/(protected)/*`. You can customize the protection pattern in `src/middleware.ts`.

## Client Components

For client components, you can use MSAL's hooks directly:

```tsx
import { useMsal } from '@azure/msal-react'

export function AuthButton() {
  const { instance, accounts } = useMsal()
  
  return accounts.length > 0 ? (
    <button onClick={() => instance.logoutRedirect()}>Sign Out</button>
  ) : (
    <button onClick={() => instance.loginRedirect()}>Sign In</button>
  )
}
```
