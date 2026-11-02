import {
  CalendarCheck,
  MessageSquareText,
  BellRing,
  GitBranch,
  UserCheck,
  BarChart3,
  ShieldAlert,
  Check,
  Clock,
} from 'lucide-react'

export function Capabilities() {
  return (
    <section
      id="capabilities"
      className="reveal-section relative bg-white py-20 sm:py-28 scroll-mt-20"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-[#F5F8FB] border border-[#182B40]/10 px-3.5 py-1 text-xs font-bold tracking-wider text-[#3978E8] uppercase">
            THE CAREBRIDGE PLATFORM
          </span>
          <h2 className="mt-4 font-display text-3xl font-extrabold tracking-tight text-[#10243A] sm:text-4xl lg:text-[2.6rem] lg:leading-[1.15]">
            Everything Needed to Keep Care Moving.
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-[#718096]">
            A coordinated set of tools that helps healthcare organizations manage the work that
            happens between consultations.
          </p>
        </div>

        {/* Six-Card Asymmetric / Structured Feature Grid */}
        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-12">
          {/* Feature 01 — Intelligent Follow-up Management (7 cols on lg) */}
          <article className="reveal-card group flex flex-col justify-between rounded-2xl border border-[#182B40]/10 bg-[#F5F8FB]/60 p-6 sm:p-8 transition-all duration-300 hover:-translate-y-1 hover:border-[#3978E8]/35 hover:bg-white hover:shadow-xl hover:shadow-[#10243A]/6 lg:col-span-7">
            <div>
              <div className="flex items-center justify-between gap-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#3978E8] text-white shadow-xs shadow-[#3978E8]/25">
                  <CalendarCheck className="h-5 w-5" />
                </div>
                <span className="font-mono text-xs font-bold tracking-wider text-[#718096]">
                  FEATURE 01
                </span>
              </div>

              <h3 className="mt-6 font-display text-2xl font-bold text-[#10243A]">
                Intelligent Follow-up Management
              </h3>
              <p className="mt-2.5 text-base leading-relaxed text-[#718096]">
                Organize patients who need repeat consultations, test reviews, medication
                follow-ups, or other planned care activities.
              </p>
            </div>

            {/* Realistic UI Illustration: Follow-up Queue Component */}
            <div className="mt-6 rounded-xl border border-[#182B40]/10 bg-white p-4 shadow-2xs">
              <div className="flex items-center justify-between text-[11px] font-semibold text-[#718096] pb-2.5 border-b border-[#182B40]/8">
                <span>PLANNED FOLLOW-UP QUEUE (SAMPLE)</span>
                <span className="text-[#3978E8]">3 Active Tracks</span>
              </div>
              <div className="mt-3 space-y-2">
                <div className="flex items-center justify-between rounded-lg bg-[#F5F8FB] px-3 py-2 text-xs">
                  <div className="flex items-center gap-2.5">
                    <span className="h-2 w-2 rounded-full bg-[#3978E8]" />
                    <span className="font-semibold text-[#10243A]">
                      14-Day Post-Discharge Consultation
                    </span>
                  </div>
                  <span className="rounded-md bg-[#3978E8]/12 px-2 py-0.5 text-[11px] font-semibold text-[#3978E8]">
                    Due Tomorrow
                  </span>
                </div>
                <div className="flex items-center justify-between rounded-lg bg-[#F5F8FB] px-3 py-2 text-xs">
                  <div className="flex items-center gap-2.5">
                    <span className="h-2 w-2 rounded-full bg-[#55C9B5]" />
                    <span className="font-semibold text-[#10243A]">
                      Diagnostic Lab Panel Review
                    </span>
                  </div>
                  <span className="rounded-md bg-[#55C9B5]/20 px-2 py-0.5 text-[11px] font-semibold text-[#10243A]">
                    Scheduled
                  </span>
                </div>
                <div className="flex items-center justify-between rounded-lg bg-[#F5F8FB] px-3 py-2 text-xs">
                  <div className="flex items-center gap-2.5">
                    <span className="h-2 w-2 rounded-full bg-[#10243A]" />
                    <span className="font-semibold text-[#10243A]">
                      Medication Tolerance Check-In
                    </span>
                  </div>
                  <span className="rounded-md bg-[#182B40]/8 px-2 py-0.5 text-[11px] font-medium text-[#718096]">
                    Day 7 Window
                  </span>
                </div>
              </div>
            </div>
          </article>

          {/* Feature 02 — Patient Communication (5 cols on lg) */}
          <article className="reveal-card group flex flex-col justify-between rounded-2xl border border-[#182B40]/10 bg-[#F5F8FB]/60 p-6 sm:p-8 transition-all duration-300 hover:-translate-y-1 hover:border-[#3978E8]/35 hover:bg-white hover:shadow-xl hover:shadow-[#10243A]/6 lg:col-span-5">
            <div>
              <div className="flex items-center justify-between gap-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#10243A] text-white">
                  <MessageSquareText className="h-5 w-5 text-[#55C9B5]" />
                </div>
                <span className="font-mono text-xs font-bold tracking-wider text-[#718096]">
                  FEATURE 02
                </span>
              </div>

              <h3 className="mt-6 font-display text-2xl font-bold text-[#10243A]">
                Patient Communication
              </h3>
              <p className="mt-2.5 text-base leading-relaxed text-[#718096]">
                Support structured communication between patients and healthcare providers through
                approved communication channels.
              </p>
            </div>

            {/* Realistic UI Illustration: Structured Outreach Card */}
            <div className="mt-6 rounded-xl border border-[#182B40]/10 bg-white p-4 shadow-2xs">
              <div className="flex items-center justify-between text-[11px] font-semibold text-[#718096]">
                <span>APPROVED OUTREACH TEMPLATE</span>
                <span className="rounded-full bg-[#55C9B5]/15 px-2 py-0.5 text-[10px] font-bold text-[#10243A]">
                  Verified Channel
                </span>
              </div>
              <div className="mt-3 rounded-lg bg-[#F5F8FB] p-3 text-xs text-[#182B40]">
                “Hello from Valley Primary Clinic: Your follow-up appointment is scheduled for
                Thursday at 10:00 AM. Reply 1 to confirm or 2 to request a call from our care
                coordinator.”
              </div>
              <div className="mt-2.5 flex items-center justify-between text-[11px] text-[#718096]">
                <span className="inline-flex items-center gap-1 font-medium text-[#10243A]">
                  <Check className="h-3.5 w-3.5 text-[#55C9B5]" /> Patient response logged to
                  timeline
                </span>
              </div>
            </div>
          </article>

          {/* Feature 03 — Clinical Review Alerts (5 cols on lg) */}
          <article className="reveal-card group flex flex-col justify-between rounded-2xl border border-[#182B40]/10 bg-[#F5F8FB]/60 p-6 sm:p-8 transition-all duration-300 hover:-translate-y-1 hover:border-[#3978E8]/35 hover:bg-white hover:shadow-xl hover:shadow-[#10243A]/6 lg:col-span-5">
            <div>
              <div className="flex items-center justify-between gap-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#3978E8]/12 text-[#3978E8]">
                  <BellRing className="h-5 w-5" />
                </div>
                <span className="font-mono text-xs font-bold tracking-wider text-[#718096]">
                  FEATURE 03
                </span>
              </div>

              <h3 className="mt-6 font-display text-2xl font-bold text-[#10243A]">
                Clinical Review Alerts
              </h3>
              <p className="mt-2.5 text-base leading-relaxed text-[#718096]">
                Highlight information that may require professional attention, helping authorized
                healthcare personnel review potential concerns.
              </p>
            </div>

            {/* Realistic UI Illustration: Non-Diagnostic Clinical Review Flag */}
            <div className="mt-6 rounded-xl border border-[#3978E8]/25 bg-white p-4 shadow-2xs">
              <div className="flex items-start gap-3">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#3978E8]/10 text-[#3978E8]">
                  <ShieldAlert className="h-4 w-4" />
                </div>
                <div>
                  <span className="text-xs font-bold text-[#10243A]">
                    Flagged for Authorized Clinician Review
                  </span>
                  <p className="mt-1 text-xs leading-relaxed text-[#718096]">
                    CareBridge never presents an AI-generated warning as a confirmed diagnosis.
                    All alerts route to qualified personnel.
                  </p>
                </div>
              </div>
            </div>
          </article>

          {/* Feature 04 — Patient Journey Tracking (7 cols on lg) */}
          <article className="reveal-card group flex flex-col justify-between rounded-2xl border border-[#182B40]/10 bg-[#F5F8FB]/60 p-6 sm:p-8 transition-all duration-300 hover:-translate-y-1 hover:border-[#3978E8]/35 hover:bg-white hover:shadow-xl hover:shadow-[#10243A]/6 lg:col-span-7">
            <div>
              <div className="flex items-center justify-between gap-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#55C9B5]/20 text-[#10243A]">
                  <GitBranch className="h-5 w-5" />
                </div>
                <span className="font-mono text-xs font-bold tracking-wider text-[#718096]">
                  FEATURE 04
                </span>
              </div>

              <h3 className="mt-6 font-display text-2xl font-bold text-[#10243A]">
                Patient Journey Tracking
              </h3>
              <p className="mt-2.5 text-base leading-relaxed text-[#718096]">
                Maintain an organized timeline of consultations, follow-up activities, patient
                responses, and outstanding care tasks.
              </p>
            </div>

            {/* Realistic UI Illustration: Horizontal Journey Progress Stepper */}
            <div className="mt-6 rounded-xl border border-[#182B40]/10 bg-white p-4 shadow-2xs">
              <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-4">
                {[
                  { step: 'Initial Visit', state: 'Logged', done: true },
                  { step: 'Care Plan Set', state: 'Verified', done: true },
                  { step: 'Patient Check-In', state: 'Received', done: true },
                  { step: 'Follow-up Visit', state: 'Upcoming', done: false },
                ].map((item) => (
                  <div
                    key={item.step}
                    className={`rounded-lg border p-2.5 ${
                      item.done
                        ? 'border-[#55C9B5]/35 bg-[#55C9B5]/8'
                        : 'border-[#3978E8]/30 bg-[#3978E8]/6'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-[#718096]">
                        {item.state}
                      </span>
                      {item.done ? (
                        <Check className="h-3.5 w-3.5 text-[#55C9B5]" />
                      ) : (
                        <Clock className="h-3.5 w-3.5 text-[#3978E8]" />
                      )}
                    </div>
                    <p className="mt-1.5 text-xs font-bold text-[#10243A]">{item.step}</p>
                  </div>
                ))}
              </div>
            </div>
          </article>

          {/* Feature 05 — Care Team Coordination (6 cols on lg) */}
          <article className="reveal-card group flex flex-col justify-between rounded-2xl border border-[#182B40]/10 bg-[#F5F8FB]/60 p-6 sm:p-8 transition-all duration-300 hover:-translate-y-1 hover:border-[#3978E8]/35 hover:bg-white hover:shadow-xl hover:shadow-[#10243A]/6 lg:col-span-6">
            <div>
              <div className="flex items-center justify-between gap-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#10243A] text-white">
                  <UserCheck className="h-5 w-5 text-[#3978E8]" />
                </div>
                <span className="font-mono text-xs font-bold tracking-wider text-[#718096]">
                  FEATURE 05
                </span>
              </div>

              <h3 className="mt-6 font-display text-2xl font-bold text-[#10243A]">
                Care Team Coordination
              </h3>
              <p className="mt-2.5 text-base leading-relaxed text-[#718096]">
                Help authorized staff assign follow-up responsibilities, monitor outstanding tasks,
                and coordinate patient care.
              </p>
            </div>

            {/* Realistic UI Illustration: Role Assignment List */}
            <div className="mt-6 rounded-xl border border-[#182B40]/10 bg-white p-4 shadow-2xs">
              <div className="space-y-2.5 text-xs">
                <div className="flex items-center justify-between rounded-lg bg-[#F5F8FB] px-3 py-2">
                  <div>
                    <span className="font-bold text-[#10243A]">Nursing Care Desk</span>
                    <span className="ml-2 text-[#718096]">· Post-visit call outreach</span>
                  </div>
                  <span className="rounded-full bg-[#55C9B5]/20 px-2.5 py-0.5 text-[10px] font-bold text-[#10243A]">
                    Assigned
                  </span>
                </div>
                <div className="flex items-center justify-between rounded-lg bg-[#F5F8FB] px-3 py-2">
                  <div>
                    <span className="font-bold text-[#10243A]">Attending Clinician</span>
                    <span className="ml-2 text-[#718096]">· Lab review sign-off</span>
                  </div>
                  <span className="rounded-full bg-[#3978E8]/12 px-2.5 py-0.5 text-[10px] font-bold text-[#3978E8]">
                    In Queue
                  </span>
                </div>
              </div>
            </div>
          </article>

          {/* Feature 06 — Healthcare Insights (6 cols on lg) */}
          <article className="reveal-card group flex flex-col justify-between rounded-2xl border border-[#182B40]/10 bg-[#F5F8FB]/60 p-6 sm:p-8 transition-all duration-300 hover:-translate-y-1 hover:border-[#3978E8]/35 hover:bg-white hover:shadow-xl hover:shadow-[#10243A]/6 lg:col-span-6">
            <div>
              <div className="flex items-center justify-between gap-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#3978E8] text-white">
                  <BarChart3 className="h-5 w-5" />
                </div>
                <span className="font-mono text-xs font-bold tracking-wider text-[#718096]">
                  FEATURE 06
                </span>
              </div>

              <h3 className="mt-6 font-display text-2xl font-bold text-[#10243A]">
                Healthcare Insights
              </h3>
              <p className="mt-2.5 text-base leading-relaxed text-[#718096]">
                Provide organizations with operational visibility into follow-up completion,
                outstanding tasks, and care coordination patterns.
              </p>
            </div>

            {/* Realistic UI Illustration: Operational Visibility Bars (Sample Data) */}
            <div className="mt-6 rounded-xl border border-[#182B40]/10 bg-white p-4 shadow-2xs">
              <div className="flex items-center justify-between text-[11px] font-semibold text-[#718096] mb-2.5">
                <span>OPERATIONAL COORDINATION VISIBILITY</span>
                <span className="font-mono text-[10px]">SAMPLE VIEW</span>
              </div>
              <div className="space-y-2.5">
                <div>
                  <div className="flex justify-between text-xs mb-1">
                    <span className="font-semibold text-[#10243A]">
                      Scheduled Follow-ups Completed
                    </span>
                    <span className="font-bold text-[#3978E8]">On Track</span>
                  </div>
                  <div className="h-2 w-full overflow-hidden rounded-full bg-[#F5F8FB]">
                    <div className="h-full w-[86%] rounded-full bg-gradient-to-r from-[#3978E8] to-[#55C9B5]" />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-xs mb-1">
                    <span className="font-semibold text-[#10243A]">
                      Pending Tasks Assigned to Care Teams
                    </span>
                    <span className="font-bold text-[#10243A]">Organized</span>
                  </div>
                  <div className="h-2 w-full overflow-hidden rounded-full bg-[#F5F8FB]">
                    <div className="h-full w-[94%] rounded-full bg-[#10243A]" />
                  </div>
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  )
}

