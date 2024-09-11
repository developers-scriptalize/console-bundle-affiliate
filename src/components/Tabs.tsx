'use client'
import clsx from 'clsx'
import { usePathname, useSearchParams, useRouter } from 'next/navigation'
import { useCallback, useMemo, useEffect } from 'react'

export function Tabs() {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const params = useMemo(() => searchParams.get('category'), [searchParams])

  useEffect(() => {
    if (!searchParams.has('category')) {
      router.push(pathname + '?' + createQueryString('category', 'consoles'))
    }
  }, [])

  // Get a new searchParams string by merging the current
  // searchParams with a provided key/value pair
  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString())
      params.set(name, value)

      return params.toString()
    },
    [searchParams],
  )
  return (
    <div className="my-6 flex space-x-3 md:my-0 lg:space-x-6">
      <span
        className={clsx(
          'grow rounded-lg px-4 py-3 text-center text-white outline',
          params === 'consoles'
            ? 'bg-slate-800 font-semibold outline-slate-800'
            : 'cursor-pointer bg-none outline-white',
        )}
        onClick={() =>
          router.push(
            pathname + '?' + createQueryString('category', 'consoles'),
          )
        }
      >
        Consoles
      </span>
      <span
        className={clsx(
          'grow rounded-lg px-4 py-3 text-center text-white outline',
          params === 'accessories'
            ? 'bg-slate-800 font-semibold outline-slate-800'
            : 'cursor-pointer bg-none outline-white',
        )}
        onClick={() =>
          router.push(
            pathname + '?' + createQueryString('category', 'accessories'),
          )
        }
      >
        Accessoires
      </span>
      <span
        className={clsx(
          'grow rounded-lg px-4 py-3 text-center text-white outline',
          params === 'games'
            ? 'bg-slate-800 font-semibold outline-slate-800'
            : 'cursor-pointer bg-none outline-white',
        )}
        onClick={() =>
          router.push(pathname + '?' + createQueryString('category', 'games'))
        }
      >
        Games
      </span>
    </div>
  )
}
