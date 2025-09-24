import { NextRequest, NextResponse } from 'next/server'
import { PublicClientApplication } from '@azure/msal-browser'

const msalConfig = {
  auth: {
    clientId: process.env.NEXT_PUBLIC_AZURE_CLIENT_ID!,
    authority: `https://login.microsoftonline.com/${process.env.NEXT_PUBLIC_AZURE_TENANT_ID}`,
    redirectUri: process.env.NEXT_PUBLIC_AZURE_REDIRECT_URI!,
  },
}

export async function GET(request: NextRequest) {
  const pca = new PublicClientApplication(msalConfig)
  
  try {
    const response = await pca.handleRedirectPromise()
    
    if (response) {
      // Successful authentication
      return NextResponse.redirect(new URL('/dashboard', request.url))
    } else {
      // No response, redirect to login
      return NextResponse.redirect(new URL('/login', request.url))
    }
  } catch (error) {
    console.error('MSAL callback error:', error)
    return NextResponse.redirect(new URL('/login?error=callback', request.url))
  }
}
