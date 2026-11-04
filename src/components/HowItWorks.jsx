import {
  Link2,
  Sparkles,
  Users,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Calendar,
  Layers,
  HeartHandshake,
} from 'lucide-react'

const WORKFLOW_STEPS = [
  {
    number: '01',
    stepBadge: 'STEP 01',
    title: 'Connect',
    tag: 'Structured Intake',
    headline: 'Organize Patient Data & Care Plans into One Unified Timeline',
    description:
      'Organize relevant patient records, appointments, care plans, and follow-up requirements from existing hospital systems without adding friction to clinical routines.',
    image: '/images/how-it-works-connect.jpg',
    imageAlt: 'Physician in a modern clinic reviewing digital patient records and care timelines on a medical tablet',
    icon: Link2,
    badgeText: 'Intake Synchronization',
    badgeColor: 'bg-[#3978E8]/10 text-[#3978E8] border-[#3978E8]/20',
    metricLabel: 'Sources Synchronized',
    metricValue: 'Visits · Labs · Care Plans',
    featureIcon: Layers,
    featureText: 'Automated Record Sync',
  },
  {
    number: '02',
    stepBadge: 'STEP 02',
    title: 'Understand',
    tag: 'AI-Assisted Triage Support',
    headline: 'Surface Overdue Follow-ups for Qualified Clinical Review',
    description:
      'Intelligent triage flags overdue check-ins, unreviewed lab tests, and changes in recovery status — presenting clear summaries for healthcare teams to inspect before taking action.',
    image: '/images/how-it-works-understand.jpg',
    imageAlt: 'Clinical specialist thoughtfully analyzing AI-assisted patient triage alerts and diagnostic timeline patterns',
    icon: Sparkles,
    badgeText: 'Clinical Oversight',
    badgeColor: 'bg-[#55C9B5]/15 text-[#10243A] border-[#55C9B5]/30',
    metricLabel: 'Review Safeguard',
    metricValue: '100% Clinician-Verified',
    featureIcon: ShieldCheck,
    featureText: 'Physician Safeguards',
  },
  {
    number: '03',
    stepBadge: 'STEP 03',
    title: 'Coordinate',
    tag: 'Care Team Workflow',
    headline: 'Streamline Interdisciplinary Handoffs & Timely Patient Contact',
    description:
      'Empower nurses, care coordinators, and primary physicians to seamlessly assign follow-up responsibilities, send verified patient communications, and confirm upcoming appointments.',
    image: '/images/how-it-works-coordinate.jpg',
    imageAlt: 'Collaborative healthcare team of nurses and care coordinators managing patient follow-up queues',
    icon: Users,
    badgeText: 'Team Alignment',
    badgeColor: 'bg-[#3978E8]/10 text-[#3978E8] border-[#3978E8]/20',
    metricLabel: 'Coordination Channels',
    metricValue: 'Staff Queues · Patient Outreach',
    featureIcon: Calendar,
    featureText: 'Shared Task Queues',
  },
  {
    number: '04',
    stepBadge: 'STEP 04',
    title: 'Follow Through',
    tag: 'Closed-Loop Continuity',
    headline: 'Track Recovery Outcomes & Maintain Seamless Long-term Contact',
    description:
      'Log completed consultations, track recovery milestones, and capture patient feedback so care teams know exactly who is progressing well and who needs timely re-engagement.',
    image: '/images/how-it-works-follow-through.jpg',
    imageAlt: 'Recovering patient at home comfortably completing a post-discharge digital health check-in on a smartphone',
    icon: CheckCircle2,
    badgeText: 'Closed-Loop Care',
    badgeColor: 'bg-[#55C9B5]/15 text-[#10243A] border-[#55C9B5]/30',
    metricLabel: 'Continuity Record',
    metricValue: 'Auditable Patient Timeline',
    featureIcon: HeartHandshake,
    featureText: 'Continuous Contact',
  },
]

export function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="reveal-section relative overflow-hidden bg-[#F5F8FB] py-20 sm:py-28 scroll-mt-20 border-t border-[#182B40]/6"
    >
      {/* Subtle background clinical grid pattern */}
      <div className="pointer-events-none absolute inset-0 bg-clinical-grid opacity-60" aria-hidden="true" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
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
            information into one organized, continuous workflow.
          </p>
        </div>

        {/* Alternating Side-by-Side Steps */}
        <div className="mt-16 sm:mt-20 space-y-16 lg:space-y-24">
          {WORKFLOW_STEPS.map((step, index) => {
            const StepIcon = step.icon
            const FeatureIcon = step.featureIcon
            const isImageLeft = index % 2 === 0

            return (
              <div
                key={step.number}
                className={`reveal-card relative flex flex-col items-center gap-10 lg:gap-16 ${
                  isImageLeft ? 'lg:flex-row' : 'lg:flex-row-reverse'
                }`}
              >
                {/* Image Column */}
                <div className="group relative w-full lg:w-1/2">
                  {/* Subtle Ambient Glow behind Image */}
                  <div
                    className={`pointer-events-none absolute -inset-3 rounded-3xl opacity-30 blur-2xl transition-opacity duration-500 group-hover:opacity-60 ${
                      index % 2 === 0
                        ? 'bg-gradient-to-tr from-[#3978E8]/25 via-[#55C9B5]/20 to-transparent'
                        : 'bg-gradient-to-tl from-[#55C9B5]/25 via-[#3978E8]/20 to-transparent'
                    }`}
                    aria-hidden="true"
                  />

                  {/* Glassmorphic Image Frame */}
                  <div className="relative overflow-hidden rounded-3xl border border-[#182B40]/10 bg-white/80 p-2 sm:p-2.5 shadow-[0_8px_30px_-6px_rgba(16,36,58,0.08)] backdrop-blur-md transition-all duration-300 group-hover:shadow-[0_16px_36px_-6px_rgba(16,36,58,0.14)] group-hover:-translate-y-1">
                    <div className="relative aspect-[16/10] sm:aspect-[16/10] w-full overflow-hidden rounded-2xl bg-[#10243A]">
                      <img
                        src={step.image}
                        alt={step.imageAlt}
                        loading="lazy"
                        className="h-full w-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                      />
                    </div>
                  </div>
                </div>

                {/* Content Column */}
                <div className="flex w-full flex-col justify-center lg:w-1/2">
                  {/* Step Badge & Tag */}
                  <div className="flex flex-wrap items-center gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#10243A] text-white shadow-xs">
                      <StepIcon className="h-5 w-5" />
                    </div>
                    <span className="inline-flex items-center gap-2 rounded-full bg-white border border-[#182B40]/10 px-3.5 py-1 font-mono text-xs font-bold tracking-wider text-[#3978E8] shadow-2xs">
                      <span>{step.stepBadge}</span>
                      <span>·</span>
                      <span className="text-[#10243A]">{step.tag}</span>
                    </span>
                  </div>

                  {/* Headline */}
                  <h3 className="mt-5 font-display text-2xl sm:text-3xl font-extrabold tracking-tight text-[#10243A] leading-tight">
                    {step.headline}
                  </h3>

                  {/* Description */}
                  <p className="mt-3.5 text-base sm:text-lg leading-relaxed text-[#718096]">
                    {step.description}
                  </p>

                  {/* Clinical Safeguard / Metric Box */}
                  <div className="mt-7 flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-[#182B40]/10 bg-white/80 p-4 shadow-xs backdrop-blur-md">
                    <div className="flex items-center gap-3">
                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#F5F8FB] text-[#3978E8]">
                        <FeatureIcon className="h-4.5 w-4.5" />
                      </div>
                      <div>
                        <p className="text-[11px] font-semibold uppercase tracking-wider text-[#718096]">
                          {step.metricLabel}
                        </p>
                        <p className="text-sm font-bold text-[#10243A]">
                          {step.metricValue}
                        </p>
                      </div>
                    </div>
                    <div className="inline-flex items-center gap-1 text-xs font-semibold text-[#3978E8]">
                      <span>{step.featureText}</span>
                      <ArrowRight className="h-3.5 w-3.5" />
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Closing Continuity Callout */}
        <div className="mt-16 sm:mt-24 overflow-hidden rounded-3xl border border-[#182B40]/10 bg-white p-6 sm:p-10 shadow-sm">
          <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#3978E8]">
                Continuous Care Infrastructure
              </span>
              <h4 className="mt-2 font-display text-xl font-bold text-[#10243A] sm:text-2xl">
                Ready to see CareBridge configured for your clinical team?
              </h4>
              <p className="mt-1.5 text-sm text-[#718096]">
                Explore how structured follow-ups improve patient outcomes while saving coordinator time.
              </p>
            </div>
            <a
              href="#pilot"
              className="inline-flex shrink-0 items-center gap-2 rounded-xl bg-[#3978E8] px-5 py-3 text-sm font-semibold text-white shadow-md shadow-[#3978E8]/20 transition-all hover:bg-[#2C66D0] hover:shadow-lg"
            >
              <span>Request Clinical Pilot</span>
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
