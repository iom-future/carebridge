export function Logo({ variant = 'dark', className = '' }) {
  const isLight = variant === 'light'

  return (
    <div className={`inline-flex items-center gap-3 select-none ${className}`}>
      {/* Minimal symbol communicating connection, continuity, and healthcare */}
      <div
        className={`relative flex h-10 w-10 items-center justify-center rounded-xl transition-transform duration-300 group-hover:scale-[1.03] ${
          isLight
            ? 'bg-white/10 ring-1 ring-white/15'
            : 'bg-[#10243A] shadow-sm shadow-[#10243A]/15'
        }`}
        aria-hidden="true"
      >
        <svg
          viewBox="0 0 36 36"
          fill="none"
          className="h-6 w-6"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Upper Care Arc (Healthcare Blue) */}
          <path
            d="M8.5 20.5C8.5 14.701 13.201 10 19 10C22.4 10 25.42 11.62 27.34 14.12"
            stroke="#3978E8"
            strokeWidth="2.8"
            strokeLinecap="round"
          />
          {/* Lower Continuity Arc (Soft Teal) */}
          <path
            d="M27.5 15.5C27.5 21.299 22.799 26 17 26C13.6 26 10.58 24.38 8.66 21.88"
            stroke="#55C9B5"
            strokeWidth="2.8"
            strokeLinecap="round"
          />
          {/* Bridge Connection Node */}
          <circle cx="18" cy="18" r="2.6" fill="#FFFFFF" />
        </svg>
      </div>

      <div className="flex flex-col">
        <span
          className={`font-display text-xl font-bold tracking-tight leading-none ${
            isLight ? 'text-white' : 'text-[#10243A]'
          }`}
        >
          Care<span className="text-[#3978E8]">Bridge</span>
        </span>
      </div>
    </div>
  )
}

