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
  const currentPath = (path: string) =>
    path === pathname.split('/')[pathname.split('/').length - 1]

  if (pathname !== '/')
    return (
      <nav
        aria-label="Breadcrumb"
        className="flex w-full items-center bg-slate-800 px-4 py-3 text-sm text-white sm:px-6 md:px-4 lg:px-5 lg:py-3"
      >
        <Link className="font-light" href="/">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1}
            stroke="currentColor"
            className="size-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
            />
          </svg>
        </Link>
        {crumbs.map((path: string, index: number) => (
          <div key={path + index} className="flex items-center">
            <span className="mx-2 lg:mx-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-3"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m8.25 4.5 7.5 7.5-7.5 7.5"
                />
              </svg>
            </span>
            <Link
              href={`/${crumbs.slice(0, index + 1).join('/')}`}
              className={clsx(
                'capitalize',
                index !== crumbs.length - 1 ? 'font-light' : 'font-semibold',
                currentPath(path) ? 'pointer-events-none' : '',
              )}
              aria-disabled={currentPath(path)}
              tabIndex={currentPath(path) ? -1 : undefined}
            >
              {path.replaceAll('-', ' ')}
            </Link>
          </div>
        ))}
      </nav>
    )
}
