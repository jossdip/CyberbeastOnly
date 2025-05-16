import type { Metadata } from 'next'
import '@/styles/globals.css'
import { Inter } from 'next/font/google'
import { Providers } from './providers'

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