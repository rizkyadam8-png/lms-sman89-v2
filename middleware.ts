import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

const ROOT_DOMAIN = 'simpatik89.id'

export function middleware(request: NextRequest) {
  const hostname = request.headers.get('host') || ''
  const token = request.cookies.get('simpatik_token')?.value
  const pathname = request.nextUrl.pathname
  
  if (pathname.startsWith('/_next') || pathname.includes('.')) {
    return NextResponse.next()
  }

  const isAuthPage = pathname.startsWith('/login')
  const isSubdomain = hostname.includes(ROOT_DOMAIN) || hostname.includes('localhost')

  if (!token && !isAuthPage && pathname.startsWith('/dashboard')) {
    return NextResponse.redirect(new URL('/login', request.url))
  }

  if (token && isAuthPage) {
    return NextResponse.redirect(new URL('/dashboard', request.url))
  }

  const response = NextResponse.next()
  
  if (token) {
    response.cookies.set('simpatik_token', token, {
      domain: process.env.NODE_ENV === 'production' ? `.${ROOT_DOMAIN}` : undefined,
      path: '/',
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge: 60 * 60 * 24 * 7
    })
  }

  return response
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
}