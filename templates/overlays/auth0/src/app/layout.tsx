import { Auth0Provider } from '@auth0/nextjs-auth0'
import { Navigation } from '@/components/navigation'
import { inter } from '@/lib/fonts'
import './globals.css'

export const metadata = {
  title: 'Next.js Starter',
  description: 'A modern Next.js starter template with Auth0 authentication',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Auth0Provider>
          <Navigation />
          {children}
        </Auth0Provider>
      </body>
    </html>
  )
}
