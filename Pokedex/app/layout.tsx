import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import ClientProviders from './providers'

export const metadata: Metadata = {
  title: 'Pokédex',
  description: 'Un guide complet des Pokémon',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="fr">
      <body>
        <ClientProviders>{children}</ClientProviders>
      </body>
    </html>
  )
}