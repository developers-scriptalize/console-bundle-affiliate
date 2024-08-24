import { type Metadata } from 'next'
import { Quicksand } from 'next/font/google'
import clsx from 'clsx'

import '@/styles/tailwind.css'
import { Footer } from '@/components/Footer'
import Link from 'next/link'

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
        <header className="sticky flex w-full items-center justify-center py-4">
          <button className="absolute left-0 top-0 p-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-10"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 9h16.5m-16.5 6.75h16.5"
              />
            </svg>
          </button>
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
