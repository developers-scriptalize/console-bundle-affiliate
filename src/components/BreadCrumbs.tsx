'use client'
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
      <div className="mx-auto w-full px-4 py-3 sm:px-6 md:max-w-4xl md:px-4 lg:max-w-7xl lg:px-8 lg:py-6">
        <Link href="/">Home</Link>
        {crumbs.map((path: string, index: number) => (
          <Link href={`/${crumbs.slice(0, index + 1).join('/')}`}>
            <span className="capitalize">{' / ' + path}</span>
          </Link>
        ))}
      </div>
    )
}
