import { env } from '@/env.mjs'

export function TailwindIndicator() {
  if (env.NODE_ENV === 'production') return null
  // console.log(env.NODE_ENV)

  return (
    <div className="fixed bottom-1 left-1 z-50 flex h-7 w-7 items-center justify-center rounded-full bg-gray-800 p-3 font-mono text-base text-white">
      <div className="block sm:hidden">xs</div>
      <div className="hidden sm:block md:hidden lg:hidden xl:hidden 2xl:hidden">
        sm
      </div>
      <div className="hidden md:block lg:hidden xl:hidden 2xl:hidden">md</div>
      <div className="hidden lg:block xl:hidden 2xl:hidden">lg</div>
      <div className="hidden xl:block 2xl:hidden">xl</div>
      <div className="hidden 2xl:block">2xl</div>
    </div>
  )
}
