import './globals.css'
import { Inter } from 'next/font/google'
import Meta from "../components/Meta";

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="tr">
      <head>
        <Meta />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
