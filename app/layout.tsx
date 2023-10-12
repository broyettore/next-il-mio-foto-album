import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Loner\'s Diary',
  description: 'A Gallery of photos by anynone who wishes to share them',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" data-theme="garden">
      <body className={inter.className}>
        <Header />
        <main>
          {children}
        </main>
        <Footer />
        </body>
    </html>
  )
}
