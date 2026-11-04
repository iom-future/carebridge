import { useState } from 'react'
import { FileText, Sparkles, UserCheck, RefreshCw } from 'lucide-react'

const LOOP_STAGES = [
  {
    number: '01',
    title: 'Patient Information',
    description: 'Relevant records, care plans, appointments, and patient updates.',
    icon: FileText,
    positionLabel: 'Intake & Context',
    detail:
      'Brings together scheduled consultations, care instructions, and recent updates into a structured care context.',
  },
  {
    number: '02',
    title: 'AI-Assisted Organization',
    description: 'Information is organized and potential follow-up needs are highlighted.',
    icon: Sparkles,
    positionLabel: 'AI Structuring',
    detail:
      'Helps surface overdue follow-ups, pending test reviews, or care gaps so nothing slips through the cracks.',
  },
  {
    number: '03',
    title: 'Human Review & Coordination',
    description:
      'Authorized healthcare professionals review relevant information and determine the appropriate next action.',
    icon: UserCheck,
    positionLabel: 'Clinical Review',
    detail:
      'Clinicians and care coordinators evaluate flagged items and decide the appropriate clinical or administrative next step.',
  },
  {
    number: '04',
    title: 'Follow-up & Feedback',
    description:
      "Patient responses and completed care activities update the patient's coordination history.",
    icon: RefreshCw,
    positionLabel: 'Continuous Feedback',
    detail:
      'Verified outcomes and patient confirmations feed directly back into the patient timeline to keep the care cycle moving.',
  },
]

export function IntelligenceLoop() {
  const [activeStage, setActiveStage] = useState(0)

  return (
    <section
      id="intelligence-loop"
      className="reveal-section relative overflow-hidden bg-[#F5F8FB] py-20 sm:py-28 border-y border-[#182B40]/8"
    >
      <div className="pointer-events-none absolute inset-0 bg-clinical-grid opacity-60" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-white border border-[#182B40]/10 px-3.5 py-1 text-xs font-bold tracking-wider text-[#3978E8] uppercase shadow-2xs">
            CONTINUOUS CARE INTELLIGENCE
          </span>
          <h2 className="mt-4 font-display text-3xl font-extrabold tracking-tight text-[#10243A] sm:text-4xl lg:text-[2.6rem] lg:leading-[1.15]">
            Every Patient Interaction Should Move Care Forward.
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-[#718096]">
            CareBridge is designed around an ongoing cycle of patient information, follow-up
            coordination, professional review, and verified outcomes.
          </p>
        </div>

        {/* Circular Intelligence-Loop Visualization + Interactive Stage Cards */}
        <div className="mt-16 grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
          {/* Left / Center on Desktop: Circular Intelligence Loop Diagram */}
          <div className="lg:col-span-6 flex justify-center w-full">
            <div className="relative flex w-full max-w-[390px] sm:max-w-[440px] sm:h-[440px] lg:max-w-[460px] lg:h-[460px] aspect-square items-center justify-center">
              {/* Outer Ambient Ring */}
              <div
                className="pointer-events-none absolute inset-3 sm:inset-4 rounded-full border border-[#3978E8]/15 bg-white/50 shadow-inner"
                aria-hidden="true"
              />

              {/* Animated SVG Circular Connecting Loop */}
              <svg
                viewBox="0 0 400 400"
                className="pointer-events-none absolute inset-0 h-full w-full"
                aria-hidden="true"
              >
                <defs>
                  <linearGradient id="careLoopGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#3978E8" />
                    <stop offset="50%" stopColor="#55C9B5" />
                    <stop offset="100%" stopColor="#10243A" />
                  </linearGradient>
                </defs>

                {/* Base track circle */}
                <circle
                  cx="200"
                  cy="200"
                  r="140"
                  fill="none"
                  stroke="#182B40"
                  strokeOpacity="0.08"
                  strokeWidth="2"
                />

                {/* Animated dashed continuity ring (animated by GSAP .loop-orbit-ring) */}
                <circle
                  cx="200"
                  cy="200"
                  r="140"
                  fill="none"
                  stroke="url(#careLoopGrad)"
                  strokeWidth="3.5"
                  strokeDasharray="16 10"
                  strokeLinecap="round"
                  className="loop-orbit-ring origin-center"
                />

                {/* Subtle directional quadrant arcs */}
                <circle
                  cx="200"
                  cy="200"
                  r="92"
                  fill="none"
                  stroke="#55C9B5"
                  strokeOpacity="0.22"
                  strokeWidth="1.5"
                  strokeDasharray="4 6"
                />
              </svg>

              {/* Central CareBridge Symbol Hub */}
              <div className="relative z-10 flex h-22 w-22 sm:h-28 sm:w-28 lg:h-32 lg:w-32 flex-col items-center justify-center rounded-full border-2 sm:border-4 border-white bg-[#10243A] text-white shadow-xl shadow-[#10243A]/20">
                <svg
                  viewBox="0 0 36 36"
                  fill="none"
                  className="h-6 w-6 sm:h-8 sm:w-8 lg:h-9 lg:w-9"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path
                    d="M8.5 20.5C8.5 14.701 13.201 10 19 10C22.4 10 25.42 11.62 27.34 14.12"
                    stroke="#3978E8"
                    strokeWidth="2.8"
                    strokeLinecap="round"
                  />
                  <path
                    d="M27.5 15.5C27.5 21.299 22.799 26 17 26C13.6 26 10.58 24.38 8.66 21.88"
                    stroke="#55C9B5"
                    strokeWidth="2.8"
                    strokeLinecap="round"
                  />
                  <circle cx="18" cy="18" r="2.8" fill="#FFFFFF" />
                </svg>
                <span className="mt-1 font-display text-[9.5px] sm:text-[11px] font-bold tracking-wider uppercase text-[#55C9B5]">
                  CareBridge
                </span>
                <span className="hidden sm:inline text-[8.5px] lg:text-[9px] text-white/70">
                  Continuous Loop
                </span>
              </div>

              {/* 4 Interconnected Stage Nodes positioned directly on the spinning orbit track */}
              {[
                {
                  idx: 0,
                  posClass: 'top-[15%] left-1/2 -translate-x-1/2 -translate-y-1/2',
                  shortLabel: 'Patient Info',
                },
                {
                  idx: 1,
                  posClass: 'top-1/2 left-[85%] -translate-x-1/2 -translate-y-1/2',
                  shortLabel: 'AI Organization',
                },
                {
                  idx: 2,
                  posClass: 'top-[85%] left-1/2 -translate-x-1/2 -translate-y-1/2',
                  shortLabel: 'Human Review',
                },
                {
                  idx: 3,
                  posClass: 'top-1/2 left-[15%] -translate-x-1/2 -translate-y-1/2',
                  shortLabel: 'Follow-up',
                },
              ].map((node) => {
                const stage = LOOP_STAGES[node.idx]
                const NodeIcon = stage.icon
                const isSelected = activeStage === node.idx
                return (
                  <button
                    key={stage.number}
                    type="button"
                    onClick={() => setActiveStage(node.idx)}
                    className={`absolute ${node.posClass} z-20 flex flex-col items-center gap-1 sm:gap-1.5 rounded-xl sm:rounded-2xl border px-2 py-1.5 sm:px-3 sm:py-2 transition-all duration-300 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#3978E8] ${
                      isSelected
                        ? 'border-[#3978E8] bg-white shadow-lg shadow-[#3978E8]/20 scale-105'
                        : 'border-[#182B40]/12 bg-white/95 hover:border-[#3978E8]/40 shadow-sm'
                    }`}
                    aria-label={`Inspect stage ${stage.title}`}
                    aria-pressed={isSelected}
                  >
                    <div
                      className={`flex h-7 w-7 sm:h-8 sm:w-8 items-center justify-center rounded-lg sm:rounded-xl transition-colors ${
                        isSelected
                          ? 'bg-[#3978E8] text-white'
                          : 'bg-[#F5F8FB] text-[#10243A]'
                      }`}
                    >
                      <NodeIcon className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                    </div>
                    <span className="text-[9.5px] sm:text-[11px] font-bold text-[#10243A] whitespace-nowrap">
                      {node.shortLabel}
                    </span>
                  </button>
                )
              })}
            </div>
          </div>

          {/* Right Column: All Four Stages List with Active Expansion */}
          <div className="lg:col-span-6 space-y-4">
            {LOOP_STAGES.map((stage, index) => {
              const isSelected = activeStage === index
              return (
                <div
                  key={stage.number}
                  onClick={() => setActiveStage(index)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault()
                      setActiveStage(index)
                    }
                  }}
                  role="button"
                  tabIndex={0}
                  aria-pressed={isSelected}
                  className={`group relative overflow-hidden rounded-2xl border p-5 sm:p-6 transition-all duration-300 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#3978E8] ${
                    isSelected
                      ? 'border-[#3978E8] bg-white shadow-md shadow-[#10243A]/6'
                      : 'border-[#182B40]/10 bg-white/80 hover:border-[#3978E8]/35 hover:bg-white'
                  }`}
                >
                  {/* Big Watermark Number on the Top Left */}
                  <span
                    className={`pointer-events-none absolute -top-3 left-2 font-display text-7xl sm:text-8xl font-black tracking-tighter leading-none select-none transition-colors duration-300 ${
                      isSelected
                        ? 'text-[#3978E8]/[0.12]'
                        : 'text-[#182B40]/[0.05] group-hover:text-[#182B40]/[0.08]'
                    }`}
                    aria-hidden="true"
                  >
                    {stage.number}
                  </span>

                  <div className="relative z-10">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <h3 className="font-display text-lg font-bold text-[#10243A]">
                        {stage.title}
                      </h3>
                      <span
                        className={`rounded-full px-2.5 py-0.5 text-[11px] font-semibold ${
                          isSelected
                            ? 'bg-[#55C9B5]/20 text-[#10243A]'
                            : 'bg-[#F5F8FB] text-[#718096]'
                        }`}
                      >
                        {stage.positionLabel}
                      </span>
                    </div>

                    <p className="mt-2 text-sm leading-relaxed text-[#718096]">
                      {stage.description}
                    </p>

                    {isSelected && (
                      <div className="mt-3.5 pt-3 border-t border-[#182B40]/8 flex items-center justify-between text-xs text-[#182B40]">
                        <span>{stage.detail}</span>
                      </div>
                    )}
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Closing Statement Box */}
        <div className="mt-14 rounded-2xl border border-[#10243A]/12 bg-[#10243A] px-6 py-7 text-center text-white shadow-lg sm:px-10">
          <p className="mx-auto max-w-3xl font-display text-lg font-semibold leading-relaxed sm:text-xl">
            “The goal is not simply to collect more patient data. It is to help healthcare teams
            act on the information they already have.”
          </p>
        </div>
      </div>
    </section>
  )
}

