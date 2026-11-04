const HERO_BAR_ITEMS = [
  {
    value: '100%',
    label: 'HUMAN-LED DECISIONS',
  },
  {
    value: '4-Stage',
    label: 'CONTINUITY WORKFLOW',
  },
  {
    value: 'Unified',
    label: 'PATIENT FOLLOW-UPS',
  },
  {
    value: 'Team-First',
    label: 'CARE COORDINATION',
  },
]

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-white pt-0 pb-16 lg:pb-24">
      {/* Hidden SVG ClipPaths for the Rounded Bottom Slanted Shape & Pop-Out Image */}
      <svg className="pointer-events-none absolute h-0 w-0" aria-hidden="true">
        <defs>
          {/* Blue Slanted Backdrop glued to the right wall & top navbar with a Smooth Rounded Bottom Tip */}
          <clipPath id="hero-blue-shape" clipPathUnits="objectBoundingBox">
            <path d="M 0.14,0 L 1,0 L 1,0.84 L 0.34,0.97 Q 0.20,1.0 0.18,0.85 L 0.14,0 Z" />
          </clipPath>

          {/* Bottom-only rounded clip for the Team Cutout so their left side steps out past x=0.14 while their bottom follows the rounded shape */}
          <clipPath id="hero-team-popout-clip" clipPathUnits="objectBoundingBox">
            <path d="M 0,0 L 1,0 L 1,0.84 L 0.34,0.97 Q 0.20,1.0 0.12,0.88 L 0,0.82 Z" />
          </clipPath>
        </defs>
      </svg>

      {/* Decorative Hollow Circle Rings on the White Canvas */}
      <div
        className="pointer-events-none absolute top-10 left-[3%] sm:left-[5%] lg:left-[6%] h-28 w-28 sm:h-34 sm:w-34 rounded-full border-[16px] sm:border-[18px] border-[#3978E8]/10 z-0"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute bottom-10 left-6 sm:left-12 h-13 w-13 rounded-full border-[8px] border-[#3978E8]/10 z-0"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none hidden lg:block absolute bottom-12 right-12 h-12 w-12 rounded-full border-[8px] border-[#3978E8]/12 z-0"
        aria-hidden="true"
      />

      {/* TOP ROW: Hero Text Content + Right-Wall & Top-Navbar Glued Shape & Team Image */}
      <div
        id="platform"
        className="relative w-full md:min-h-[440px] lg:min-h-[520px] xl:min-h-[560px] flex flex-col md:flex-row md:items-center"
      >
        {/* Desktop Right-Side Slanted Blue Shape + Pop-Out Team Image (Active at MD view and above) */}
        <div className="hidden md:block absolute top-0 bottom-0 right-0 w-[52%] lg:w-[58%] xl:w-[62%] z-10 select-none">
          {/* Layer 1: Blue Slanted Shape with Smooth Rounded Bottom Tip */}
          <div
            className="absolute inset-0 bg-gradient-to-br from-[#3978E8] via-[#326FD9] to-[#265BC0]"
            style={{ clipPath: 'url(#hero-blue-shape)' }}
          >
            {/* Hollow Circle Ring — Upper Left inside Blue Backdrop */}
            <div
              className="pointer-events-none absolute top-10 md:top-12 lg:top-14 left-[22%] h-28 w-28 lg:h-36 lg:w-36 rounded-full border-[14px] lg:border-[18px] border-white/18"
              aria-hidden="true"
            />

            {/* Hollow Circle Ring — Top Right Corner inside Blue Backdrop */}
            <div
              className="pointer-events-none absolute -top-8 -right-8 h-36 w-36 lg:h-48 lg:w-48 rounded-full border-[18px] lg:border-[22px] border-white/18"
              aria-hidden="true"
            />

            {/* Soft ambient glow inside blue shape */}
            <div
              className="pointer-events-none absolute bottom-8 left-1/3 h-48 w-48 lg:h-64 lg:w-64 rounded-full bg-[#55C9B5]/20 blur-3xl"
              aria-hidden="true"
            />
          </div>

          {/* Layer 2: Transparent Cutout Team Image coming out from the left of the Blue Shape towards the hero content */}
          <div
            className="absolute inset-0 z-10"
            style={{ clipPath: 'url(#hero-team-popout-clip)' }}
          >
            <picture>
              <source
                type="image/webp"
                srcSet={`${import.meta.env.BASE_URL}images/hero-team.webp`}
              />
              <img
                src={`${import.meta.env.BASE_URL}images/hero-team.png`}
                alt="Three CareBridge healthcare professionals — two physicians in white coats with stethoscopes and a care coordinator in scrubs holding a clipboard"
                width={1200}
                height={896}
                fetchPriority="high"
                decoding="async"
                className="absolute bottom-0 left-[1%] right-0 w-[96%] max-w-[390px] lg:max-w-[620px] xl:max-w-[780px] h-[92%] lg:h-[94%] object-contain object-bottom drop-shadow-[0_18px_28px_rgba(16,36,58,0.22)]"
              />
            </picture>
          </div>
        </div>

        {/* Left Content Container */}
        <div className="relative z-20 mx-auto w-full max-w-7xl px-4 pt-8 sm:px-6 md:py-6 lg:py-12">
          <div className="grid grid-cols-1 items-center gap-6 md:gap-8 md:grid-cols-12">
            {/* Left Column: CareBridge Hero Text & Left-Aligned Buttons */}
            <div className="md:col-span-6 lg:col-span-5 xl:col-span-5">
              <h1 className="hero-animate relative font-display text-3xl sm:text-4xl md:text-[2.1rem] lg:text-[2.85rem] xl:text-[3.25rem] font-extrabold tracking-tight text-[#10243A] leading-[1.15] md:leading-[1.14]">
                Healthcare Doesn&apos;t End at the Hospital Door.
              </h1>

              {/* Reduced size supporting text */}
              <p className="hero-animate mt-3 md:mt-3.5 lg:mt-4 max-w-xs md:max-w-sm lg:max-w-md text-xs leading-relaxed text-[#718096] lg:text-sm">
                CareBridge helps healthcare teams stay connected to patients through intelligent
                follow-ups, coordinated care, and earlier visibility into patients who may need
                attention.
              </p>

              {/* CTA Buttons: Left-aligned and side-by-side when unstacked */}
              <div className="hero-animate mt-5 md:mt-6 lg:mt-7 flex flex-col sm:flex-row sm:flex-nowrap items-stretch sm:items-center justify-start gap-2.5 sm:gap-3.5 lg:gap-4">
                <a
                  href="#pilot"
                  className="inline-flex h-10 sm:h-11 lg:h-12 w-full sm:w-auto md:w-[165px] lg:w-[210px] xl:w-[235px] shrink-0 items-center justify-center rounded-full border border-transparent bg-[#3978E8] px-4 lg:px-6 text-xs sm:text-xs lg:text-sm font-bold text-white shadow-md shadow-[#3978E8]/25 transition-all duration-200 hover:bg-[#2C66D0] hover:shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-[#3978E8] focus-visible:ring-offset-2 whitespace-nowrap"
                >
                  Partner With CareBridge
                </a>

                <a
                  href="#capabilities"
                  className="inline-flex h-10 sm:h-11 lg:h-12 w-full sm:w-auto md:w-[165px] lg:w-[210px] xl:w-[235px] shrink-0 items-center justify-center rounded-full border border-[#182B40]/12 bg-white/85 px-4 lg:px-6 text-xs sm:text-xs lg:text-sm font-semibold text-[#182B40] shadow-[0_4px_24px_-6px_rgba(16,36,58,0.1)] backdrop-blur-md transition-all duration-200 hover:border-[#3978E8]/40 hover:bg-white hover:text-[#3978E8] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#3978E8] focus-visible:ring-offset-2 whitespace-nowrap"
                >
                  Explore the Platform
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile / Tablet Slanted Blue Hero Shape + Pop-Out Image (Hidden at MD view and above) */}
        <div className="relative md:hidden mt-6 w-full flex justify-end select-none">
          <div className="relative w-[94%] sm:w-[86%] h-[340px] sm:h-[420px]">
            <div
              className="absolute inset-0 bg-gradient-to-br from-[#3978E8] via-[#326FD9] to-[#265BC0]"
              style={{ clipPath: 'url(#hero-blue-shape)' }}
            >
              <div
                className="pointer-events-none absolute top-8 left-[22%] h-24 w-24 rounded-full border-[12px] border-white/18"
                aria-hidden="true"
              />
              <div
                className="pointer-events-none absolute -top-6 -right-6 h-32 w-32 rounded-full border-[16px] border-white/18"
                aria-hidden="true"
              />
            </div>

            <div
              className="absolute inset-0 z-10"
              style={{ clipPath: 'url(#hero-team-popout-clip)' }}
            >
              <picture>
                <source
                  type="image/webp"
                  srcSet={`${import.meta.env.BASE_URL}images/hero-team.webp`}
                />
                <img
                  src={`${import.meta.env.BASE_URL}images/hero-team.png`}
                  alt="Three CareBridge healthcare professionals smiling warmly"
                  width={1200}
                  height={896}
                  fetchPriority="high"
                  decoding="async"
                  className="absolute bottom-0 left-[1%] right-0 w-[96%] h-[94%] object-contain object-bottom drop-shadow-[0_14px_24px_rgba(16,36,58,0.22)]"
                />
              </picture>
            </div>
          </div>
        </div>
      </div>

      {/* BOTTOM BAR: Centered Underneath Both the Hero Text Content and the Hero Image */}
      <div className="hero-animate relative z-30 mx-auto mt-6 sm:mt-8 min-[960px]:mt-10 max-w-5xl px-3 sm:px-6 lg:px-8">
        <div className="rounded-2xl sm:rounded-3xl border border-[#182B40]/8 bg-gradient-to-r from-[#E6F0FA]/90 via-[#EFF5FB]/95 to-[#F6F8FB]/95 px-2 py-4 sm:px-8 sm:py-7 shadow-[0_8px_30px_-6px_rgba(16,36,58,0.06)] backdrop-blur-md">
          <div className="grid grid-cols-4 gap-1 sm:gap-6 text-center">
            {HERO_BAR_ITEMS.map((item) => (
              <div key={item.label} className="flex flex-col items-center justify-center px-1">
                <span className="font-display text-sm sm:text-2xl lg:text-[1.85rem] font-extrabold tracking-tight text-[#10243A] leading-none">
                  {item.value}
                </span>
                <span className="mt-1.5 sm:mt-2.5 text-[8px] sm:text-[11px] font-semibold tracking-[0.12em] text-[#718096] uppercase leading-tight">
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
