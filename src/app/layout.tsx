import { type Metadata } from 'next'
import { Quicksand } from 'next/font/google'
import clsx from 'clsx'

import '@/styles/tailwind.css'
import { Footer } from '@/components/Footer'
import Link from 'next/link'
import { Expandable, ExpandableButton } from '@/components/Expandable'
import { Menu } from '@/components/Menu'
import Image from 'next/image'

const quicksand = Quicksand({
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Everything Starts as a Square - Get lost in the world of icon design',
  description:
    'A book and video course that teaches you how to design your own icons from scratch.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={clsx(
        'h-full scroll-smooth bg-white antialiased',
        quicksand.className,
      )}
    >
      <head></head>
      <body className="flex min-h-full flex-col">
        <header className="sticky z-10 flex w-full items-center justify-center bg-slate-900 py-4">
          <Menu />
          <Link href="/" className="flex items-center space-x-3">
            <Image
              src="/logos/logo_bg_theme.png"
              height={40}
              width={40}
              className="h-6 w-6 lg:h-10 lg:w-10"
              alt="Consolebundels.nl"
            />
            <h1 className="text-lg font-semibold uppercase leading-8 tracking-widest text-white lg:text-4xl lg:leading-10">
              consolebundels.nl
            </h1>
          </Link>
        </header>
        {children}
        <Footer />
      </body>
    </html>
  )
}
