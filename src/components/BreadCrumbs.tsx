'use client'
import clsx from 'clsx'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useMemo } from 'react'

export function BreadCrumbs() {
  const pathname = usePathname()
  const crumbs = useMemo(
    () => pathname.split('/').filter((str: string) => str.length > 0),
    [pathname],
  )

  if (pathname !== '/')
    return (
      <nav
        aria-label="Breadcrumb"
        className="w-full bg-slate-800 px-4 py-3 text-sm text-white sm:px-6 md:px-4 lg:px-5 lg:py-3"
      >
        <Link className="font-light" href="/">
          Home
        </Link>
        {crumbs.map((path: string, index: number) => (
          <Link key={path} href={`/${crumbs.slice(0, index + 1).join('/')}`}>
            <span
              className={clsx(
                'capitalize',
                index !== crumbs.length - 1 ? 'font-light' : 'font-semibold',
              )}
            >
              {' / ' + path.replaceAll('-', ' ')}
            </span>
          </Link>
        ))}
      </nav>
    )
}
