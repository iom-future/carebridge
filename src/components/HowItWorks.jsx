import { useState } from 'react'
import {
  Link2,
  Sparkles,
  Users,
  CheckCircle2,
  ArrowRight,
  Calendar,
  ShieldCheck,
  ClipboardCheck,
} from 'lucide-react'

const WORKFLOW_STEPS = [
  {
    number: '01',
    title: 'Connect',
    fullTitle: '01 — Connect',
    description:
      'Organize relevant patient information, appointments, care plans, and follow-up requirements from supported sources.',
    icon: Link2,
    tag: 'Structured Intake',
    highlight: 'Unifies visit summaries, scheduled labs, and post-consultation instructions.',
    metricsLabel: 'Sources organized',
    metricsValue: 'Consultations · Care Plans · Schedules',
  },
  {
    number: '02',
    title: 'Understand',
    fullTitle: '02 — Understand',
    description:
      'AI helps organize information, identify missing follow-ups, and highlight patterns or potential concerns for appropriate clinical review.',
    icon: Sparkles,
    tag: 'AI-Assisted Triage Support',
    highlight:
      'Surfaces overdue check-ins and unreviewed test results for qualified clinicians to inspect.',
    metricsLabel: 'Review safeguard',
    metricsValue: '100% Clinician-Verified Flags',
  },
  {
    number: '03',
    title: 'Coordinate',
    fullTitle: '03 — Coordinate',
    description:
      'Help healthcare teams manage follow-up tasks, contact patients, and coordinate the next steps in their care journey.',
    icon: Users,
    tag: 'Team Workflow',
    highlight:
      'Assigns clear follow-up ownership across nurses, care coordinators, and primary clinicians.',
    metricsLabel: 'Coordination channels',
    metricsValue: 'Staff Queues · Approved Patient Outreach',
  },
  {
    number: '04',
    title: 'Follow Through',
    fullTitle: '04 — Follow Through',
    description:
      'Track completed follow-ups, outstanding actions, and patient responses so care teams can maintain continuity.',
    icon: CheckCircle2,
    tag: 'Closed-Loop Continuity',
    highlight:
      'Logs verified outcomes and updates the continuous patient timeline automatically.',
    metricsLabel: 'Continuity record',
    metricsValue: 'Auditable Follow-up Timeline',
  },
]

export function HowItWorks() {
  const [activeStepIndex, setActiveStepIndex] = useState(0)
  const activeStep = WORKFLOW_STEPS[activeStepIndex]

  return (
    <section
      id="how-it-works"
      className="reveal-section relative overflow-hidden bg-[#F5F8FB] py-20 sm:py-28 scroll-mt-20"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-white border border-[#182B40]/10 px-3.5 py-1 text-xs font-bold tracking-wider text-[#3978E8] uppercase shadow-2xs">
            A MORE CONNECTED APPROACH
          </span>
          <h2 className="mt-4 font-display text-3xl font-extrabold tracking-tight text-[#10243A] sm:text-4xl lg:text-[2.6rem] lg:leading-[1.15]">
            One Connected View of the Patient Journey.
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-[#718096]">
            CareBridge brings patient follow-ups, care coordination, and relevant health
            information into one organized workflow.
          </p>
        </div>

        {/* Horizontal 4-Step Workflow on Desktop / Vertical Timeline on Mobile */}
        <div className="relative mt-16">
          {/* Desktop Connecting Line representing continuity of care */}
          <div
            className="hidden lg:block absolute top-11 left-[10%] right-[10%] h-0.5 bg-gradient-to-r from-[#3978E8]/30 via-[#55C9B5] to-[#3978E8]/30"
            aria-hidden="true"
          />

          <div className="grid grid-cols-1 gap-6 lg:grid-cols-4 lg:gap-6">
            {WORKFLOW_STEPS.map((step, index) => {
              const StepIcon = step.icon
              const isSelected = index === activeStepIndex
              return (
                <div
                  key={step.number}
                  onClick={() => setActiveStepIndex(index)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault()
                      setActiveStepIndex(index)
                    }
                  }}
                  role="button"
                  tabIndex={0}
                  aria-pressed={isSelected}
                  className={`reveal-card group relative flex flex-col rounded-2xl border p-6 text-left transition-all duration-300 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#3978E8] ${
                    isSelected
                      ? 'border-[#3978E8] bg-white shadow-lg shadow-[#10243A]/8 -translate-y-1'
                      : 'border-[#182B40]/10 bg-white/85 hover:border-[#3978E8]/40 hover:bg-white hover:shadow-md'
                  }`}
                >
                  {/* Mobile vertical timeline connector */}
                  {index < WORKFLOW_STEPS.length - 1 && (
                    <span
                      className="lg:hidden absolute -bottom-6 left-11 h-6 w-0.5 bg-gradient-to-b from-[#3978E8] to-[#55C9B5]"
                      aria-hidden="true"
                    />
                  )}

                  {/* Step Number & Icon Row */}
                  <div className="flex items-center justify-between">
                    <div
                      className={`relative z-10 flex h-12 w-12 items-center justify-center rounded-xl transition-colors duration-300 ${
                        isSelected
                          ? 'bg-[#3978E8] text-white shadow-md shadow-[#3978E8]/25'
                          : 'bg-[#10243A] text-white group-hover:bg-[#3978E8]'
                      }`}
                    >
                      <StepIcon className="h-5 w-5" />
                    </div>
                    <span
                      className={`rounded-full px-3 py-1 font-mono text-xs font-bold tracking-wider ${
                        isSelected
                          ? 'bg-[#3978E8]/12 text-[#3978E8]'
                          : 'bg-[#F5F8FB] text-[#718096]'
                      }`}
                    >
                      STEP {step.number}
                    </span>
                  </div>

                  {/* Step Title & Copy */}
                  <h3 className="mt-6 font-display text-xl font-bold text-[#10243A]">
                    {step.fullTitle}
                  </h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-[#718096] flex-1">
                    {step.description}
                  </p>

                  {/* Step Footer */}
                  <div className="mt-5 pt-4 border-t border-[#182B40]/8 flex items-center justify-between">
                    <span className="text-xs font-semibold text-[#182B40]">{step.tag}</span>
                    <span
                      className={`inline-flex items-center gap-1 text-xs font-semibold transition-colors ${
                        isSelected ? 'text-[#3978E8]' : 'text-[#718096] group-hover:text-[#3978E8]'
                      }`}
                    >
                      <span>View stage</span>
                      <ArrowRight className="h-3.5 w-3.5" />
                    </span>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Editorial Photography + Active Workflow Spotlight */}
        <div className="mt-12 overflow-hidden rounded-3xl border border-[#182B40]/10 bg-white shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            {/* Left: Interactive Stage Details */}
            <div className="flex flex-col justify-between p-6 sm:p-10 lg:col-span-7">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full bg-[#55C9B5]/15 px-3 py-1 text-xs font-bold text-[#10243A]">
                  <span>Stage {activeStep.number} in Action</span>
                  <span>·</span>
                  <span>{activeStep.tag}</span>
                </div>

                <h3 className="mt-4 font-display text-2xl font-bold text-[#10243A] sm:text-3xl">
                  {activeStep.fullTitle}: {activeStep.highlight}
                </h3>

                <p className="mt-3 text-base leading-relaxed text-[#718096]">
                  {activeStep.description}
                </p>

                {/* Mini UI representation of workflow continuity */}
                <div className="mt-6 grid grid-cols-1 gap-3.5 sm:grid-cols-3">
                  <div className="rounded-xl border border-[#182B40]/8 bg-[#F5F8FB] p-3.5">
                    <div className="flex items-center gap-2 text-xs font-semibold text-[#10243A]">
                      <Calendar className="h-4 w-4 text-[#3978E8]" />
                      <span>Scheduled Care</span>
                    </div>
                    <p className="mt-1 text-xs text-[#718096]">
                      Follow-up milestones linked directly to the consultation plan.
                    </p>
                  </div>

                  <div className="rounded-xl border border-[#182B40]/8 bg-[#F5F8FB] p-3.5">
                    <div className="flex items-center gap-2 text-xs font-semibold text-[#10243A]">
                      <ShieldCheck className="h-4 w-4 text-[#55C9B5]" />
                      <span>Clinical Control</span>
                    </div>
                    <p className="mt-1 text-xs text-[#718096]">
                      Authorized staff review and approve every next step.
                    </p>
                  </div>

                  <div className="rounded-xl border border-[#182B40]/8 bg-[#F5F8FB] p-3.5">
                    <div className="flex items-center gap-2 text-xs font-semibold text-[#10243A]">
                      <ClipboardCheck className="h-4 w-4 text-[#3978E8]" />
                      <span>Shared Visibility</span>
                    </div>
                    <p className="mt-1 text-xs text-[#718096]">
                      Clear handoffs across nurses, doctors, and care coordinators.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-5 border-t border-[#182B40]/8 flex flex-wrap items-center justify-between gap-4">
                <div>
                  <span className="text-xs uppercase tracking-wider font-semibold text-[#718096]">
                    {activeStep.metricsLabel}
                  </span>
                  <p className="text-sm font-bold text-[#10243A]">{activeStep.metricsValue}</p>
                </div>

                <div className="flex items-center gap-2">
                  {WORKFLOW_STEPS.map((s, idx) => (
                    <button
                      key={s.number}
                      type="button"
                      onClick={() => setActiveStepIndex(idx)}
                      aria-label={`Select step ${s.number}: ${s.title}`}
                      className={`h-2.5 rounded-full transition-all cursor-pointer ${
                        idx === activeStepIndex
                          ? 'w-8 bg-[#3978E8]'
                          : 'w-2.5 bg-[#182B40]/15 hover:bg-[#182B40]/30'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Right: Authentic Healthcare Coordination Photography */}
            <div className="relative min-h-[280px] lg:col-span-5 bg-[#10243A]">
              <img
                src="/images/nurse-coordination.jpg"
                alt="A nurse and physician coordinating patient follow-up care together in a modern clinical environment"
                loading="lazy"
                className="h-full w-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#10243A]/85 via-[#10243A]/20 to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 rounded-2xl border border-white/15 bg-[#10243A]/85 p-4 text-white backdrop-blur-md">
                <p className="text-xs font-semibold uppercase tracking-wider text-[#55C9B5]">
                  Connected Clinical Teamwork
                </p>
                <p className="mt-1 text-xs leading-relaxed text-white/90">
                  Designed so nurses, physicians, and care coordinators share one clear view of
                  each patient&apos;s follow-up status.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

