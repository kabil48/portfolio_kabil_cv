import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { LanguageProvider } from '../contexts/LanguageContext'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Portfolio - BOUNOUARA Mohamed Kabil',
  description: 'Full Stack Developer Portfolio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <body className={`${inter.className} bg-background text-foreground`}>
        <LanguageProvider>
          <div className="min-h-screen bg-gradient-to-b from-[#0f0f1a] to-[#1a1a2e]">
            <div className="fixed inset-0 -z-10">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-purple-500/10 via-transparent to-transparent blur-2xl" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-amber-500/10 via-transparent to-transparent blur-2xl" />
            </div>
            {children}
          </div>
        </LanguageProvider>
      </body>
    </html>
  )
}

