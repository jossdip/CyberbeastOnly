import React from 'react'
import type { Metadata } from 'next'
import '../styles/globals.css'
import { Inter } from 'next/font/google'
import { Providers } from './providers'
import { redirect } from 'next/navigation'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Cybertruck Location - Premier loueur en Europe',
  description: 'Le premier et unique loueur de Cybertruck en Europe. Vivez une expérience de location exclusive et innovante.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  if (typeof window !== 'undefined' && window.location.pathname !== '/cyberbeast' && !window.location.pathname.startsWith('/cyberbeast/')) {
    window.location.replace('/cyberbeast');
    return null;
  }
  return (
    <html lang="fr">
      <body className={inter.className}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
} 