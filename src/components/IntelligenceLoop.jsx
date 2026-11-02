import { useState } from 'react'
import { FileText, Sparkles, UserCheck, RefreshCw } from 'lucide-react'

const LOOP_STAGES = [
  {
    number: '01',
    title: 'Patient Information',
    fullTitle: '01 — Patient Information',
    description: 'Relevant records, care plans, appointments, and patient updates.',
    icon: FileText,
    positionLabel: 'Top · Intake & Context',
    detail:
      'Brings together scheduled consultations, care instructions, and recent updates into a structured care context.',
  },
  {
    number: '02',
    title: 'AI-Assisted Organization',
    fullTitle: '02 — AI-Assisted Organization',
    description: 'Information is organized and potential follow-up needs are highlighted.',
    icon: Sparkles,
    positionLabel: 'Right · Structured Structuring',
    detail:
      'Helps surface overdue follow-ups, pending test reviews, or care gaps so nothing slips through the cracks.',
  },
  {
    number: '03',
    title: 'Human Review & Coordination',
    fullTitle: '03 — Human Review & Coordination',
    description:
      'Authorized healthcare professionals review relevant information and determine the appropriate next action.',
    icon: UserCheck,
    positionLabel: 'Bottom · Clinical Authority',
    detail:
      'Clinicians and care coordinators evaluate flagged items and decide the appropriate clinical or administrative next step.',
  },
  {
    number: '04',
    title: 'Follow-up & Feedback',
    fullTitle: '04 — Follow-up & Feedback',
    description:
      "Patient responses and completed care activities update the patient's coordination history.",
    icon: RefreshCw,
    positionLabel: 'Left · Continuous Update',
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
          <div className="lg:col-span-6 flex justify-center">
            <div className="relative flex h-[340px] w-[340px] sm:h-[430px] sm:w-[430px] items-center justify-center">
              {/* Outer Ambient Ring */}
              <div
                className="pointer-events-none absolute inset-4 rounded-full border border-[#3978E8]/15 bg-white/50 shadow-inner"
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
                  r="138"
                  fill="none"
                  stroke="#182B40"
                  strokeOpacity="0.08"
                  strokeWidth="2"
                />

                {/* Animated dashed continuity ring (animated by GSAP .loop-orbit-ring) */}
                <circle
                  cx="200"
                  cy="200"
                  r="138"
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
                  r="96"
                  fill="none"
                  stroke="#55C9B5"
                  strokeOpacity="0.22"
                  strokeWidth="1.5"
                  strokeDasharray="4 6"
                />
              </svg>

              {/* Central CareBridge Symbol Hub */}
              <div className="relative z-10 flex h-28 w-28 sm:h-32 sm:w-32 flex-col items-center justify-center rounded-full border-4 border-white bg-[#10243A] text-white shadow-xl shadow-[#10243A]/20">
                <svg
                  viewBox="0 0 36 36"
                  fill="none"
                  className="h-9 w-9"
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
                <span className="mt-1.5 font-display text-[11px] font-bold tracking-wider uppercase text-[#55C9B5]">
                  CareBridge
                </span>
                <span className="text-[9px] text-white/70">Continuous Loop</span>
              </div>

              {/* 4 Interconnected Stage Nodes positioned around the circle */}
              {[
                {
                  idx: 0,
                  posClass: 'top-2 left-1/2 -translate-x-1/2',
                  shortLabel: '01 · Patient Info',
                },
                {
                  idx: 1,
                  posClass: 'right-1 top-1/2 -translate-y-1/2',
                  shortLabel: '02 · AI Organization',
                },
                {
                  idx: 2,
                  posClass: 'bottom-2 left-1/2 -translate-x-1/2',
                  shortLabel: '03 · Human Review',
                },
                {
                  idx: 3,
                  posClass: 'left-1 top-1/2 -translate-y-1/2',
                  shortLabel: '04 · Follow-up',
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
                    className={`absolute ${node.posClass} z-20 flex flex-col items-center gap-1.5 rounded-2xl border px-3.5 py-2.5 transition-all duration-300 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#3978E8] ${
                      isSelected
                        ? 'border-[#3978E8] bg-white shadow-lg shadow-[#3978E8]/20 scale-105'
                        : 'border-[#182B40]/12 bg-white/95 hover:border-[#3978E8]/40 shadow-sm'
                    }`}
                    aria-label={`Inspect stage ${stage.fullTitle}`}
                    aria-pressed={isSelected}
                  >
                    <div
                      className={`flex h-8 w-8 items-center justify-center rounded-xl transition-colors ${
                        isSelected
                          ? 'bg-[#3978E8] text-white'
                          : 'bg-[#F5F8FB] text-[#10243A]'
                      }`}
                    >
                      <NodeIcon className="h-4 w-4" />
                    </div>
                    <span className="text-[11px] font-bold text-[#10243A] whitespace-nowrap">
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
              const StageIcon = stage.icon
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
                  className={`reveal-card rounded-2xl border p-5 sm:p-6 transition-all duration-300 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#3978E8] ${
                    isSelected
                      ? 'border-[#3978E8] bg-white shadow-md shadow-[#10243A]/6'
                      : 'border-[#182B40]/10 bg-white/80 hover:border-[#3978E8]/35 hover:bg-white'
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <div
                      className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl font-mono text-sm font-bold transition-colors ${
                        isSelected
                          ? 'bg-[#3978E8] text-white shadow-xs shadow-[#3978E8]/30'
                          : 'bg-[#F5F8FB] text-[#10243A]'
                      }`}
                    >
                      <StageIcon className="h-5 w-5" />
                    </div>

                    <div className="min-w-0 flex-1">
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <h3 className="font-display text-lg font-bold text-[#10243A]">
                          {stage.fullTitle}
                        </h3>
                        <span
                          className={`rounded-full px-2.5 py-0.5 text-[11px] font-semibold ${
                            isSelected
                              ? 'bg-[#55C9B5]/20 text-[#10243A]'
                              : 'bg-[#F5F8FB] text-[#718096]'
                          }`}
                        >
                          Stage {stage.number}
                        </span>
                      </div>

                      <p className="mt-1.5 text-sm leading-relaxed text-[#718096]">
                        {stage.description}
                      </p>

                      {isSelected && (
                        <div className="mt-3 pt-3 border-t border-[#182B40]/8 flex items-center justify-between text-xs text-[#182B40]">
                          <span>{stage.detail}</span>
                        </div>
                      )}
                    </div>
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

