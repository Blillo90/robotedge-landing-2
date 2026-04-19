import type { Metadata } from 'next'
import { Space_Grotesk, Inter, JetBrains_Mono } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-display',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-body',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
})

export const metadata: Metadata = {
  title: 'RobotEdge — Curso de Trading Algorítmico',
  description:
    'Aprende a construir robots de trading desde cero. Sistema validado, sin experiencia previa en programación. Crea tu primer algoritmo operando en cuenta real.',
  keywords: [
    'trading algorítmico',
    'curso trading algorítmico',
    'crear robot de trading',
    'automatizar trading',
    'robot trading',
    'trading automático',
  ],
  openGraph: {
    title: 'RobotEdge — Construye el robot que opera por ti',
    description:
      'Sistema validado para construir robots de trading desde cero. Sin experiencia en programación necesaria.',
    type: 'website',
    locale: 'es_ES',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'RobotEdge — Construye el robot que opera por ti',
    description: 'Sistema validado para construir robots de trading desde cero.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="es"
      className={`${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable}`}
    >
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
