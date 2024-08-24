interface GlossProps {
  colour?: string
}

export function Gloss({ colour = 'bg-[rgba(255,255,255,0.08)]' }: GlossProps) {
  return (
    <span
      className={`ease-[cubic-bezier(0.165, 0.84, 0.44, 1)] group-hover:animate-shinelong absolute -inset-x-full top-0 hidden h-full w-full -skew-x-[15deg] transform cursor-pointer opacity-0 blur-sm delay-200 group-hover:block group-hover:opacity-100 ${colour}`}
    />
  )
}
