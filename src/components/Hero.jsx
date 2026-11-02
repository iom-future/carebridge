import { useState } from 'react'
import {
  ArrowRight,
  ShieldCheck,
  Activity,
  Users,
  Calendar,
  FileCheck2,
  CheckCircle2,
  Clock,
  Bell,
  Stethoscope,
  MessageSquare,
  UserCheck,
  Sparkles,
  Info,
} from 'lucide-react'

const SAMPLE_COHORTS = [
  {
    id: 'post-consult',
    label: 'Post-Consultation Care',
    caseCode: 'Sample Record #CB-408 (Illustrative)',
    department: 'Outpatient General Medicine',
    metrics: {
      requiringFollowUp: '24',
      upcomingAppointments: '38',
      pendingTestReviews: '11',
      followUpCompletion: '92%',
    },
    notificationNote: 'Patient reported missed medication refill window — queued for nurse review.',
    timeline: [
      {
        title: 'Consultation completed',
        time: 'Day 1 · 10:30 AM',
        detail: 'Outpatient visit summary & 14-day care plan logged',
        status: 'completed',
        icon: Stethoscope,
      },
      {
        title: 'Follow-up scheduled',
        time: 'Day 1 · 11:15 AM',
        detail: '7-day check-in & lab review automatically queued',
        status: 'completed',
        icon: Calendar,
      },
      {
        title: 'Patient contacted',
        time: 'Day 5 · 09:00 AM',
        detail: 'Structured SMS/portal check-in response received',
        status: 'completed',
        icon: MessageSquare,
      },
      {
        title: 'Care team review',
        time: 'Today · Pending Action',
        detail: 'Assigned to care coordinator for clinical follow-up',
        status: 'active',
        icon: UserCheck,
      },
    ],
  },
  {
    id: 'chronic-care',
    label: 'Community Follow-up',
    caseCode: 'Sample Record #CB-512 (Illustrative)',
    department: 'Primary Care Continuity',
    metrics: {
      requiringFollowUp: '18',
      upcomingAppointments: '29',
      pendingTestReviews: '07',
      followUpCompletion: '94%',
    },
    notificationNote: 'Routine blood work result received — ready for scheduled clinician review.',
    timeline: [
      {
        title: 'Consultation completed',
        time: 'Oct 24 · 02:15 PM',
        detail: 'Primary care consultation & routine monitoring schedule set',
        status: 'completed',
        icon: Stethoscope,
      },
      {
        title: 'Follow-up scheduled',
        time: 'Oct 24 · 02:30 PM',
        detail: 'Community health check-in scheduled for Week 2',
        status: 'completed',
        icon: Calendar,
      },
      {
        title: 'Patient contacted',
        time: 'Nov 01 · 10:20 AM',
        detail: 'Appointment reminder confirmed by patient caregiver',
        status: 'completed',
        icon: MessageSquare,
      },
      {
        title: 'Care team review',
        time: 'Today · Ready for Review',
        detail: 'Care coordinator verifying pre-visit lab completion',
        status: 'active',
        icon: UserCheck,
      },
    ],
  },
]

export function Hero() {
  const [selectedCohortId, setSelectedCohortId] = useState('post-consult')
  const activeCohort =
    SAMPLE_COHORTS.find((c) => c.id === selectedCohortId) || SAMPLE_COHORTS[0]

  return (
    <section
      id="top"
      className="relative overflow-hidden bg-gradient-to-b from-[#F5F8FB] via-[#F5F8FB]/70 to-white pt-8 pb-20 lg:pt-14 lg:pb-28"
    >
      {/* Subtle architectural background grid & soft ambient radial glow */}
      <div className="pointer-events-none absolute inset-0 bg-clinical-grid opacity-70" />
      <div
        className="pointer-events-none absolute -top-32 right-0 h-[520px] w-[520px] rounded-full bg-[#3978E8]/8 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute top-40 -left-24 h-[420px] w-[420px] rounded-full bg-[#55C9B5]/10 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-10 xl:gap-14">
          {/* Left Column: Copy, CTAs, and Trust Indicators */}
          <div className="lg:col-span-6">
            <div className="hero-animate inline-flex items-center gap-2 rounded-full border border-[#3978E8]/20 bg-white px-3.5 py-1.5 shadow-2xs">
              <span className="h-2 w-2 rounded-full bg-[#55C9B5]" aria-hidden="true" />
              <span className="text-xs font-bold tracking-wider text-[#10243A] uppercase">
                AI-POWERED HEALTHCARE COORDINATION
              </span>
            </div>

            <h1 className="hero-animate mt-6 font-display text-4xl font-extrabold tracking-tight text-[#10243A] sm:text-5xl xl:text-[3.4rem] xl:leading-[1.1]">
              Healthcare Doesn&apos;t End at the{' '}
              <span className="bg-gradient-to-r from-[#10243A] via-[#3978E8] to-[#269E8B] bg-clip-text text-transparent">
                Hospital Door.
              </span>
            </h1>

            <p className="hero-animate mt-6 max-w-xl text-lg leading-relaxed text-[#718096] sm:text-xl">
              CareBridge helps healthcare teams stay connected to patients through intelligent
              follow-ups, coordinated care, and earlier visibility into patients who may need
              attention.
            </p>

            {/* CTA Buttons */}
            <div className="hero-animate mt-8 flex flex-col gap-3.5 sm:flex-row sm:items-center">
              <a
                href="#pilot"
                className="group inline-flex items-center justify-center gap-2.5 rounded-xl bg-[#3978E8] px-6 py-3.5 text-base font-semibold text-white shadow-md shadow-[#3978E8]/20 transition-all duration-200 hover:bg-[#2C66D0] hover:shadow-lg hover:shadow-[#3978E8]/25 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#3978E8] focus-visible:ring-offset-2"
              >
                <span>Partner With CareBridge</span>
                <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
              </a>

              <a
                href="#capabilities"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-[#182B40]/15 bg-white px-6 py-3.5 text-base font-semibold text-[#182B40] shadow-2xs transition-all duration-200 hover:border-[#3978E8]/40 hover:bg-[#F5F8FB] hover:text-[#3978E8] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#3978E8] focus-visible:ring-offset-2"
              >
                <span>Explore the Platform</span>
              </a>
            </div>

            {/* Trust Indicators */}
            <div className="hero-animate mt-10 pt-8 border-t border-[#182B40]/10">
              <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-3">
                <div className="flex items-center gap-2.5">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#10243A]/6 text-[#10243A]">
                    <ShieldCheck className="h-4 w-4 text-[#3978E8]" />
                  </div>
                  <span className="text-xs font-semibold leading-snug text-[#182B40]">
                    Human-led clinical decisions
                  </span>
                </div>

                <div className="flex items-center gap-2.5">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#10243A]/6 text-[#10243A]">
                    <Activity className="h-4 w-4 text-[#55C9B5]" />
                  </div>
                  <span className="text-xs font-semibold leading-snug text-[#182B40]">
                    Connected patient follow-ups
                  </span>
                </div>

                <div className="flex items-center gap-2.5">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#10243A]/6 text-[#10243A]">
                    <Users className="h-4 w-4 text-[#3978E8]" />
                  </div>
                  <span className="text-xs font-semibold leading-snug text-[#182B40]">
                    Designed for healthcare teams
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Illustrative Patient-Care Dashboard */}
          <div id="platform" className="hero-dashboard relative lg:col-span-6 scroll-mt-24">
            {/* Subtle Floating Notification: "Follow-up review needed" */}
            <div
              className="dashboard-float relative z-20 mb-4 sm:mb-0 sm:absolute sm:-top-5 sm:right-4 lg:-right-2 max-w-xs rounded-2xl border border-[#3978E8]/25 bg-white/95 p-3.5 shadow-xl shadow-[#10243A]/10 backdrop-blur-md"
              role="region"
              aria-label="Illustrative follow-up review notification"
            >
              <div className="flex items-start gap-3">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#3978E8]/12 text-[#3978E8]">
                  <Bell className="h-4 w-4" />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-xs font-bold text-[#10243A]">
                      Follow-up review needed
                    </span>
                    <span className="inline-flex items-center rounded-full bg-[#55C9B5]/15 px-2 py-0.5 text-[10px] font-semibold text-[#10243A]">
                      Clinician Queue
                    </span>
                  </div>
                  <p className="mt-1 text-[11px] leading-snug text-[#718096]">
                    {activeCohort.notificationNote}
                  </p>
                </div>
              </div>
            </div>

            {/* Main Enterprise Healthcare Dashboard Card */}
            <div className="relative overflow-hidden rounded-2xl border border-[#182B40]/12 bg-white shadow-2xl shadow-[#10243A]/10">
              {/* Top Window Header Bar */}
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#182B40]/8 bg-[#10243A] px-4 py-3 text-white sm:px-5">
                <div className="flex items-center gap-2.5">
                  <div className="flex items-center gap-1.5" aria-hidden="true">
                    <span className="h-2.5 w-2.5 rounded-full bg-white/25" />
                    <span className="h-2.5 w-2.5 rounded-full bg-[#55C9B5]/80" />
                    <span className="h-2.5 w-2.5 rounded-full bg-[#3978E8]/80" />
                  </div>
                  <span className="text-xs font-semibold tracking-wide text-white/90">
                    CareBridge Coordination Console
                  </span>
                </div>

                {/* Clear Illustrative Data Label per Spec */}
                <span className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-2.5 py-0.5 text-[11px] font-medium text-[#55C9B5] ring-1 ring-white/15">
                  <Info className="h-3 w-3" />
                  Illustrative Sample Data
                </span>
              </div>

              {/* Dashboard Body */}
              <div className="p-4 sm:p-6">
                {/* Header & Interactive View Switcher */}
                <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-center">
                  <div>
                    <h2 className="text-sm font-bold text-[#10243A] uppercase tracking-wider">
                      Patient Follow-up Overview
                    </h2>
                    <p className="text-xs text-[#718096] mt-0.5">
                      {activeCohort.department} · Daily Coordination Summary
                    </p>
                  </div>

                  {/* Interactive Cohort Tabs */}
                  <div
                    className="inline-flex rounded-xl bg-[#F5F8FB] p-1 border border-[#182B40]/8 self-start"
                    role="tablist"
                    aria-label="Sample care workflow views"
                  >
                    {SAMPLE_COHORTS.map((cohort) => {
                      const isSelected = cohort.id === selectedCohortId
                      return (
                        <button
                          key={cohort.id}
                          type="button"
                          role="tab"
                          aria-selected={isSelected}
                          onClick={() => setSelectedCohortId(cohort.id)}
                          className={`rounded-lg px-2.5 py-1 text-xs font-semibold transition-all cursor-pointer ${
                            isSelected
                              ? 'bg-white text-[#10243A] shadow-2xs'
                              : 'text-[#718096] hover:text-[#10243A]'
                          }`}
                        >
                          {cohort.label}
                        </button>
                      )
                    })}
                  </div>
                </div>

                {/* 4 Metric Cards */}
                <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4">
                  <div className="rounded-xl border border-[#182B40]/8 bg-[#F5F8FB]/70 p-3.5 transition-colors hover:border-[#3978E8]/30">
                    <div className="flex items-center justify-between text-[#718096]">
                      <span className="text-[11px] font-medium leading-tight">
                        Patients requiring follow-up
                      </span>
                      <Users className="h-3.5 w-3.5 shrink-0 text-[#3978E8]" />
                    </div>
                    <div className="mt-2 flex items-baseline justify-between">
                      <span className="font-display text-2xl font-bold text-[#10243A]">
                        {activeCohort.metrics.requiringFollowUp}
                      </span>
                      <span className="rounded-md bg-[#3978E8]/10 px-1.5 py-0.5 text-[10px] font-semibold text-[#3978E8]">
                        Prioritized
                      </span>
                    </div>
                  </div>

                  <div className="rounded-xl border border-[#182B40]/8 bg-[#F5F8FB]/70 p-3.5 transition-colors hover:border-[#3978E8]/30">
                    <div className="flex items-center justify-between text-[#718096]">
                      <span className="text-[11px] font-medium leading-tight">
                        Upcoming appointments
                      </span>
                      <Calendar className="h-3.5 w-3.5 shrink-0 text-[#55C9B5]" />
                    </div>
                    <div className="mt-2 flex items-baseline justify-between">
                      <span className="font-display text-2xl font-bold text-[#10243A]">
                        {activeCohort.metrics.upcomingAppointments}
                      </span>
                      <span className="text-[10px] font-medium text-[#718096]">Next 7d</span>
                    </div>
                  </div>

                  <div className="rounded-xl border border-[#182B40]/8 bg-[#F5F8FB]/70 p-3.5 transition-colors hover:border-[#3978E8]/30">
                    <div className="flex items-center justify-between text-[#718096]">
                      <span className="text-[11px] font-medium leading-tight">
                        Pending test reviews
                      </span>
                      <FileCheck2 className="h-3.5 w-3.5 shrink-0 text-[#3978E8]" />
                    </div>
                    <div className="mt-2 flex items-baseline justify-between">
                      <span className="font-display text-2xl font-bold text-[#10243A]">
                        {activeCohort.metrics.pendingTestReviews}
                      </span>
                      <span className="rounded-md bg-amber-500/10 px-1.5 py-0.5 text-[10px] font-semibold text-amber-700">
                        Assigned
                      </span>
                    </div>
                  </div>

                  <div className="rounded-xl border border-[#182B40]/8 bg-[#F5F8FB]/70 p-3.5 transition-colors hover:border-[#55C9B5]/40">
                    <div className="flex items-center justify-between text-[#718096]">
                      <span className="text-[11px] font-medium leading-tight">
                        Follow-up completion
                      </span>
                      <CheckCircle2 className="h-3.5 w-3.5 shrink-0 text-[#55C9B5]" />
                    </div>
                    <div className="mt-2 flex items-baseline justify-between">
                      <span className="font-display text-2xl font-bold text-[#10243A]">
                        {activeCohort.metrics.followUpCompletion}
                      </span>
                      <span className="rounded-md bg-[#55C9B5]/15 px-1.5 py-0.5 text-[10px] font-semibold text-[#10243A]">
                        Sample KPI
                      </span>
                    </div>
                  </div>
                </div>

                {/* Illustrative Patient Timeline */}
                <div className="mt-5 rounded-xl border border-[#182B40]/10 bg-white p-4">
                  <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-[#182B40]/8">
                    <div className="flex items-center gap-2">
                      <span className="inline-flex h-2 w-2 rounded-full bg-[#3978E8]" />
                      <h3 className="text-xs font-bold text-[#10243A] uppercase tracking-wider">
                        Illustrative Patient Journey Timeline
                      </h3>
                    </div>
                    <span className="text-[11px] font-medium text-[#718096]">
                      {activeCohort.caseCode}
                    </span>
                  </div>

                  <ol className="mt-3.5 space-y-3" aria-label="Patient care timeline steps">
                    {activeCohort.timeline.map((step, index) => {
                      const StepIcon = step.icon
                      const isActive = step.status === 'active'
                      return (
                        <li
                          key={step.title}
                          className={`relative flex items-start gap-3.5 rounded-xl p-2.5 transition-colors ${
                            isActive
                              ? 'bg-[#3978E8]/6 border border-[#3978E8]/25'
                              : 'hover:bg-[#F5F8FB]'
                          }`}
                        >
                          {/* Connector line */}
                          {index < activeCohort.timeline.length - 1 && (
                            <span
                              className="absolute top-9 left-[21px] h-5 w-0.5 bg-[#182B40]/12"
                              aria-hidden="true"
                            />
                          )}

                          <div
                            className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-lg text-xs font-semibold ${
                              isActive
                                ? 'bg-[#3978E8] text-white shadow-xs shadow-[#3978E8]/30'
                                : 'bg-[#55C9B5]/20 text-[#10243A]'
                            }`}
                          >
                            <StepIcon className="h-3.5 w-3.5" />
                          </div>

                          <div className="min-w-0 flex-1">
                            <div className="flex flex-wrap items-center justify-between gap-1">
                              <p className="text-xs font-bold text-[#10243A]">{step.title}</p>
                              <span
                                className={`inline-flex items-center gap-1 text-[11px] font-medium ${
                                  isActive ? 'text-[#3978E8] font-semibold' : 'text-[#718096]'
                                }`}
                              >
                                {isActive ? (
                                  <Clock className="h-3 w-3" />
                                ) : (
                                  <CheckCircle2 className="h-3 w-3 text-[#55C9B5]" />
                                )}
                                {step.time}
                              </span>
                            </div>
                            <p className="mt-0.5 text-xs text-[#718096]">{step.detail}</p>
                          </div>
                        </li>
                      )
                    })}
                  </ol>
                </div>

                {/* Bottom Footer Bar inside Dashboard */}
                <div className="mt-4 flex flex-wrap items-center justify-between gap-2 rounded-xl bg-[#F5F8FB] px-3.5 py-2.5 text-[11px] text-[#718096]">
                  <span className="inline-flex items-center gap-1.5 font-medium text-[#182B40]">
                    <Sparkles className="h-3.5 w-3.5 text-[#3978E8]" />
                    AI-assisted organization · All clinical actions require human authorization
                  </span>
                  <span className="font-mono text-[10px] text-[#718096]">
                    NON-DIAGNOSTIC PREVIEW
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

