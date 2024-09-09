'use client'
import clsx from 'clsx'
import { useState } from 'react'

export function Menu() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <button
        className="absolute left-0 top-0 p-4"
        onClick={() => setOpen(!open)}
      >
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
      <div
        className={clsx(
          'ease-[cubic-bezier(0.165, 0.84, 0.44, 1)] fixed left-0 top-0 h-screen w-full bg-white shadow-md duration-300 md:w-1/2 lg:w-1/3',
          open ? '-translate-x-full' : 'translate-x-0',
        )}
      >
        <button className="p-4" onClick={() => setOpen(!open)}>
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
              d="M6 18 18 6M6 6l12 12"
            />
          </svg>
        </button>
        <div className="mt-6 p-6">
          <h1 className="text-xl font-semibold uppercase leading-10 tracking-widest lg:text-4xl">
            <span className="text-xbox">c</span>
            <span className="text-playstation">o</span>
            <span className="text-nintendo">n</span>solebundels.nl
          </h1>
        </div>
      </div>
    </>
  )
}
