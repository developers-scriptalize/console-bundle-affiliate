'use client'

import clsx from 'clsx'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useRef, useState } from 'react'

function MenuItem({ label, path }: { label: string; path: string }) {
  return (
    <Link href={path}>
      <li className="border-t border-slate-700 p-6 hover:bg-slate-700">
        {label}
      </li>
    </Link>
  )
}

export function Menu() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()
  const ref = useRef(pathname)

  useEffect(() => {
    // Check if the pathname has changed
    if (ref.current !== pathname) {
      setOpen(false)
    }
    // Update the ref to store the current pathname
    ref.current = pathname
  }, [pathname])

  return (
    <>
      <button
        className="absolute left-0 top-0 p-4"
        onClick={() => setOpen(true)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1}
          stroke="white"
          className="size-8"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12H12m-8.25 5.25h16.5"
          />
        </svg>
      </button>
      <nav
        className={clsx(
          'ease-[cubic-bezier(0.165, 0.84, 0.44, 1)] fixed left-0 top-0 h-screen w-full bg-slate-800 text-white shadow-md duration-300 md:w-1/2 lg:w-1/3',
          open ? 'translate-x-0' : '-translate-x-full',
        )}
      >
        <button className="p-4" onClick={() => setOpen(false)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1}
            stroke="currentColor"
            className="size-6 lg:size-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18 18 6M6 6l12 12"
            />
          </svg>
        </button>

        <ul className="font-semibold lg:text-lg">
          <MenuItem label="Home" path="/" />
          <MenuItem label="Xbox" path="/xbox" />
          <MenuItem label="Playstation" path="/playstation" />
          <MenuItem label="Nintendo" path="/nintendo" />
          <MenuItem label="Blog" path="/blog" />
        </ul>
      </nav>
    </>
  )
}
