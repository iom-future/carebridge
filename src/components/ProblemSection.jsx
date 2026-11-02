import { CalendarX2, Layers, ClockAlert, EyeOff, ArrowRight } from 'lucide-react'

const PROBLEM_CARDS = [
  {
    number: '01',
    title: 'Missed Follow-ups',
    description:
      'Patients forget appointments, miss repeat consultations, or struggle to stay connected with their healthcare providers.',
    icon: CalendarX2,
    accent: 'border-t-[#3978E8]',
    badgeBg: 'bg-[#3978E8]/10 text-[#3978E8]',
  },
  {
    number: '02',
    title: 'Fragmented Patient Information',
    description:
      'Patient records, test results, appointment information, and communication histories may exist across disconnected systems.',
    icon: Layers,
    accent: 'border-t-[#55C9B5]',
    badgeBg: 'bg-[#55C9B5]/15 text-[#10243A]',
  },
  {
    number: '03',
    title: 'Overburdened Healthcare Teams',
    description:
      'Healthcare professionals have limited time to manually track every patient who needs additional attention.',
    icon: ClockAlert,
    accent: 'border-t-[#3978E8]',
    badgeBg: 'bg-[#3978E8]/10 text-[#3978E8]',
  },
  {
    number: '04',
    title: 'Delayed Visibility',
    description:
      "Without organized follow-up systems, a patient's changing circumstances may not reach the appropriate care team promptly.",
    icon: EyeOff,
    accent: 'border-t-[#55C9B5]',
    badgeBg: 'bg-[#55C9B5]/15 text-[#10243A]',
  },
]

export function ProblemSection() {
  return (
    <section
      id="the-care-gap"
      className="reveal-section relative bg-white py-20 sm:py-28 border-t border-[#182B40]/6"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
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

        {/* Four-Column Problem Cards */}
        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {PROBLEM_CARDS.map((card) => {
            const IconComponent = card.icon
            return (
              <article
                key={card.number}
                className={`reveal-card group relative flex flex-col justify-between rounded-2xl border border-[#182B40]/10 border-t-4 ${card.accent} bg-white p-6 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-[#10243A]/6`}
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs font-bold tracking-wider text-[#718096]">
                      {card.number} —
                    </span>
                    <div
                      className={`flex h-11 w-11 items-center justify-center rounded-xl ${card.badgeBg} transition-transform duration-300 group-hover:scale-105`}
                    >
                      <IconComponent className="h-5 w-5" />
                    </div>
                  </div>

                  <h3 className="mt-6 font-display text-xl font-bold text-[#10243A]">
                    {card.number} — {card.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-[#718096]">
                    {card.description}
                  </p>
                </div>

                {/* Subtle visual status indicator bar at bottom of card */}
                <div className="mt-6 pt-4 border-t border-[#182B40]/6 flex items-center justify-between text-xs text-[#718096]">
                  <span>Continuity challenge</span>
                  <span className="h-1.5 w-8 rounded-full bg-[#182B40]/10 group-hover:bg-[#3978E8]/50 transition-colors" />
                </div>
              </article>
            )
          })}
        </div>

        {/* Closing Statement Callout Banner */}
        <div className="mt-12 overflow-hidden rounded-2xl border border-[#182B40]/10 bg-[#F5F8FB] p-6 sm:p-8 lg:px-10">
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

