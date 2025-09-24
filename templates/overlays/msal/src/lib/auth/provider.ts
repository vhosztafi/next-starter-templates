import { PublicClientApplication } from '@azure/msal-browser'
import type { Session, User } from './types'

const msalConfig = {
  auth: {
    clientId: process.env.NEXT_PUBLIC_AZURE_CLIENT_ID!,
    authority: `https://login.microsoftonline.com/${process.env.NEXT_PUBLIC_AZURE_TENANT_ID}`,
    redirectUri: process.env.NEXT_PUBLIC_AZURE_REDIRECT_URI!,
  },
}

const pca = new PublicClientApplication(msalConfig)

export async function getSession(): Promise<Session | null> {
  // This is a simplified implementation
  // In a real app, you'd need to handle token storage and validation
  if (typeof window === 'undefined') {
    return null
  }

  const accounts = pca.getAllAccounts()
  
  if (accounts.length === 0) {
    return null
  }

  const account = accounts[0]
  
  return {
    user: {
      id: account.homeAccountId,
      email: account.username || '',
      name: account.name || undefined,
      image: undefined,
    },
    expires: new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString(), // 24 hours
  }
}

export async function signIn(providerId?: string): Promise<void> {
  if (typeof window === 'undefined') {
    return
  }

  try {
    await pca.loginRedirect({
      scopes: process.env.NEXT_PUBLIC_AZURE_SCOPES?.split(',') || ['User.Read'],
    })
  } catch (error) {
    console.error('MSAL sign in error:', error)
  }
}

export async function signOut(): Promise<void> {
  if (typeof window === 'undefined') {
    return
  }

  try {
    await pca.logoutRedirect()
  } catch (error) {
    console.error('MSAL sign out error:', error)
  }
}

export function useAuth(): {
  user: User | null
  status: 'authenticated' | 'unauthenticated' | 'loading'
} {
  // This would typically use useMsal from @azure/msal-react
  // For server components, this is handled by getSession
  return {
    user: null,
    status: 'unauthenticated',
  }
}
