import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { getSession } from '@/lib/auth'

export default async function middleware(request: NextRequest) {
  // Add any additional middleware logic here
  const session = await getSession()

  if (!session) {
    return NextResponse.redirect(new URL('/auth/login', request.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/(protected)/:path*'],
}
