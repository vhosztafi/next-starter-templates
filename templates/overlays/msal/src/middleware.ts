import { NextResponse, type NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  // Simple middleware to check for auth cookie
  // In a real implementation, you'd validate the MSAL token
  const authCookie = request.cookies.get('msal-auth')
  
  if (
    !authCookie &&
    !request.nextUrl.pathname.startsWith('/login') &&
    !request.nextUrl.pathname.startsWith('/auth')
  ) {
    const url = request.nextUrl.clone()
    url.pathname = '/login'
    return NextResponse.redirect(url)
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/(protected)/:path*']
}
