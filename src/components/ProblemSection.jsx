import { useState, useRef } from 'react'
import { CalendarX2, Layers, ClockAlert, EyeOff, ArrowRight } from 'lucide-react'

const PROBLEM_CARDS = [
  {
    id: 'missed-follow-ups',
    title: 'Missed Follow-ups',
    description:
      'Patients forget appointments, miss repeat consultations, or struggle to stay connected with their healthcare providers.',
    icon: CalendarX2,
  },
  {
    id: 'fragmented-patient-information',
    title: 'Fragmented Patient Information',
    description:
      'Patient records, test results, appointment information, and communication histories may exist across disconnected systems.',
    icon: Layers,
  },
  {
    id: 'overburdened-healthcare-teams',
    title: 'Overburdened Healthcare Teams',
    description:
      'Healthcare professionals have limited time to manually track every patient who needs additional attention.',
    icon: ClockAlert,
  },
  {
    id: 'delayed-visibility',
    title: 'Delayed Visibility',
    description:
      "Without organized follow-up systems, a patient's changing circumstances may not reach the appropriate care team promptly.",
    icon: EyeOff,
  },
]

function ProblemCard({ card }) {
  const [entryEdge, setEntryEdge] = useState('top')
  const [isHovered, setIsHovered] = useState(false)
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
  const cardRef = useRef(null)
  const IconComponent = card.icon

  const handleMouseEnter = (e) => {
    if (!cardRef.current) return
    const rect = cardRef.current.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const w = rect.width
    const h = rect.height

    // Calculate normalized distances to determine the edge the cursor entered from
    const distTop = y / h
    const distBottom = (h - y) / h
    const distLeft = x / w
    const distRight = (w - x) / w

    const minDist = Math.min(distTop, distBottom, distLeft, distRight)
    let edge = 'top'
    if (minDist === distBottom) edge = 'bottom'
    else if (minDist === distLeft) edge = 'left'
    else if (minDist === distRight) edge = 'right'

    setEntryEdge(edge)
    setIsHovered(true)
    setMousePos({ x, y })
  }

  const handleMouseMove = (e) => {
    if (!cardRef.current) return
    const rect = cardRef.current.getBoundingClientRect()
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    })
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
  }

  return (
    <article
      ref={cardRef}
      onMouseEnter={handleMouseEnter}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`reveal-card group relative flex flex-col justify-between overflow-hidden rounded-2xl border p-6 sm:p-7 transition-all duration-300 backdrop-blur-md ${
        isHovered
          ? 'border-red-400/30 bg-white/90 shadow-[0_12px_28px_-6px_rgba(16,36,58,0.08),0_2px_12px_-2px_rgba(239,68,68,0.08)] -translate-y-1'
          : 'border-[#182B40]/10 bg-white/80 shadow-[0_4px_24px_-6px_rgba(16,36,58,0.06)]'
      }`}
    >
      {/* Subtle Dynamic Cursor Spotlight Glow */}
      <div
        className="pointer-events-none absolute inset-0 transition-opacity duration-300"
        style={{
          opacity: isHovered ? 1 : 0,
          background: `radial-gradient(240px circle at ${mousePos.x}px ${mousePos.y}px, rgba(239, 68, 68, 0.06), transparent 70%)`,
        }}
        aria-hidden="true"
      />

      {/* Refined Directional Edge Glow & Beam */}
      {isHovered && (
        <>
          {entryEdge === 'top' && (
            <>
              <div
                className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-red-500/[0.08] via-red-500/[0.02] to-transparent blur-[2px] animate-in fade-in duration-300"
                aria-hidden="true"
              />
              <div
                className="pointer-events-none absolute inset-x-0 top-0 h-[1.5px] bg-gradient-to-r from-transparent via-red-400/60 to-transparent shadow-[0_1px_8px_rgba(239,68,68,0.25)]"
                aria-hidden="true"
              />
            </>
          )}

          {entryEdge === 'bottom' && (
            <>
              <div
                className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-red-500/[0.08] via-red-500/[0.02] to-transparent blur-[2px] animate-in fade-in duration-300"
                aria-hidden="true"
              />
              <div
                className="pointer-events-none absolute inset-x-0 bottom-0 h-[1.5px] bg-gradient-to-r from-transparent via-red-400/60 to-transparent shadow-[0_-1px_8px_rgba(239,68,68,0.25)]"
                aria-hidden="true"
              />
            </>
          )}

          {entryEdge === 'left' && (
            <>
              <div
                className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-red-500/[0.08] via-red-500/[0.02] to-transparent blur-[2px] animate-in fade-in duration-300"
                aria-hidden="true"
              />
              <div
                className="pointer-events-none absolute inset-y-0 left-0 w-[1.5px] bg-gradient-to-b from-transparent via-red-400/60 to-transparent shadow-[1px_0_8px_rgba(239,68,68,0.25)]"
                aria-hidden="true"
              />
            </>
          )}

          {entryEdge === 'right' && (
            <>
              <div
                className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-red-500/[0.08] via-red-500/[0.02] to-transparent blur-[2px] animate-in fade-in duration-300"
                aria-hidden="true"
              />
              <div
                className="pointer-events-none absolute inset-y-0 right-0 w-[1.5px] bg-gradient-to-b from-transparent via-red-400/60 to-transparent shadow-[-1px_0_8px_rgba(239,68,68,0.25)]"
                aria-hidden="true"
              />
            </>
          )}
        </>
      )}

      {/* Gentle Ambient Mood Warmth */}
      <div
        className={`pointer-events-none absolute inset-0 bg-gradient-to-b from-red-500/[0.015] to-transparent transition-opacity duration-500 ${
          isHovered ? 'opacity-100' : 'opacity-0'
        }`}
        aria-hidden="true"
      />

      {/* Card Header and Body */}
      <div className="relative z-10">
        {/* Header with Icon */}
        <div className="flex items-start gap-3.5">
          <div
            className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl transition-all duration-300 ${
              isHovered
                ? 'bg-red-50 text-red-500 ring-1 ring-red-200/70 shadow-xs'
                : 'bg-[#182B40]/5 text-[#182B40] ring-1 ring-[#182B40]/10'
            }`}
          >
            <IconComponent
              className={`h-5 w-5 transition-colors duration-300 ${
                isHovered ? 'text-red-500' : 'text-[#182B40]'
              }`}
            />
          </div>
          <h3 className="font-display text-lg sm:text-[1.12rem] font-bold leading-snug pt-1 text-[#10243A]">
            {card.title}
          </h3>
        </div>

        <p className="mt-4 text-sm leading-relaxed text-[#718096]">
          {card.description}
        </p>
      </div>
    </article>
  )
}

export function ProblemSection() {
  return (
    <section
      id="the-care-gap"
      className="reveal-section relative bg-[#F8FAFC]/60 py-20 sm:py-28 border-t border-[#182B40]/6 overflow-hidden"
    >
      {/* Ambient background clinical texture for glassmorphic depth */}
      <div className="pointer-events-none absolute inset-0 bg-clinical-grid opacity-50" aria-hidden="true" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-[#F5F8FB] border border-[#182B40]/10 px-3.5 py-1 text-xs font-bold tracking-wider text-[#3978E8] uppercase">
            THE CARE GAP
          </span>
          <h2 className="mt-4 font-display text-3xl font-extrabold tracking-tight text-[#10243A] sm:text-4xl lg:text-[2.6rem] lg:leading-[1.15]">
            The Biggest Gaps in Healthcare Often Happen After Treatment.
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-[#718096]">
            Patients may leave a healthcare facility with instructions and treatment plans, but
            without consistent follow-up, important steps can be missed.
          </p>
        </div>

        {/* Four-Column Glassmorphism Problem Cards */}
        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {PROBLEM_CARDS.map((card) => (
            <ProblemCard key={card.id} card={card} />
          ))}
        </div>

        {/* Closing Statement Callout Banner */}
        <div className="mt-12 overflow-hidden rounded-2xl border border-[#182B40]/10 bg-white/90 backdrop-blur-md p-6 sm:p-8 lg:px-10 shadow-[0_4px_24px_-6px_rgba(16,36,58,0.06)]">
          <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
            <div className="flex items-center gap-4">
              <div
                className="hidden sm:flex h-12 w-1.5 shrink-0 rounded-full bg-gradient-to-b from-[#3978E8] to-[#55C9B5]"
                aria-hidden="true"
              />
              <p className="font-display text-xl font-bold text-[#10243A] sm:text-2xl text-center md:text-left">
                “Healthcare needs to become more continuous, not just more connected.”
              </p>
            </div>
            <a
              href="#how-it-works"
              className="inline-flex shrink-0 items-center gap-2 rounded-xl bg-white border border-[#182B40]/12 px-4 py-2.5 text-sm font-semibold text-[#10243A] shadow-2xs transition-colors hover:border-[#3978E8] hover:text-[#3978E8]"
            >
              <span>See How CareBridge Works</span>
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
