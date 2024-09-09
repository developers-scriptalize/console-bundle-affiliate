import { type Metadata } from 'next'
import { Quicksand } from 'next/font/google'
import clsx from 'clsx'

import '@/styles/tailwind.css'
import { Footer } from '@/components/Footer'
import Link from 'next/link'
import { Expandable, ExpandableButton } from '@/components/Expandable'
import { Menu } from '@/components/Menu'

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
        <header className="sticky z-10 flex w-full items-center justify-center py-4">
          <Menu />
          <Link href="/">
            <h1 className="text-xl font-semibold uppercase leading-10 tracking-widest lg:text-4xl">
              <span className="text-xbox">c</span>
              <span className="text-playstation">o</span>
              <span className="text-nintendo">n</span>solebundels.nl
            </h1>
          </Link>
        </header>
        {children}
        <Footer />
      </body>
    </html>
  )
}
