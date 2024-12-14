import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Entropy AI',
  description: 'Explore the depths of AI with Entropy',
  icons: {
    icon: '/newicon.png',
    apple: '/newicon.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/newicon.png" type="image/png" sizes="180x180" />
        <link rel="apple-touch-icon" href="/newicon.png" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}

