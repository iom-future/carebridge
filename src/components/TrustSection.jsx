import {
  UserCheck,
  Lock,
  Eye,
  ClipboardCheck,
  Shield,
  Sparkles,
  CheckCircle2,
  FileSearch,
} from 'lucide-react'

const TRUST_PRINCIPLES = [
  {
    title: 'Human Oversight',
    description:
      'Clinical decisions remain with qualified healthcare professionals. AI-generated suggestions and flags require appropriate review.',
    icon: UserCheck,
  },
  {
    title: 'Patient Privacy',
    description:
      'Patient information should be protected through appropriate access controls, secure data handling, and responsible retention practices.',
    icon: Lock,
  },
  {
    title: 'Transparent Assistance',
    description:
      'Users should understand when information or recommendations are AI-assisted and what evidence supports them.',
    icon: Eye,
  },
  {
    title: 'Responsible Deployment',
    description:
      'Features should be tested and evaluated in appropriate healthcare settings before being relied upon in clinical workflows.',
    icon: ClipboardCheck,
  },
]

export function TrustSection() {
  return (
    <section
      id="trust"
      className="reveal-section relative overflow-hidden bg-[#10243A] py-20 text-white sm:py-28 scroll-mt-20"
    >
      {/* Subtle architectural grid overlay */}
      <div className="pointer-events-none absolute inset-0 bg-navy-grid opacity-80" />
      <div
        className="pointer-events-none absolute -bottom-28 -right-28 h-96 w-96 rounded-full bg-[#3978E8]/15 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/8 px-3.5 py-1 text-xs font-bold tracking-wider text-[#55C9B5] uppercase">
            TRUST IS PART OF THE PRODUCT
          </span>
          <h2 className="mt-4 font-display text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-[2.6rem] lg:leading-[1.15]">
            Healthcare AI Must Earn the Right to Be Trusted.
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-white/75">
            CareBridge is designed to support healthcare professionals while respecting patient
            privacy, clinical responsibility, and the importance of human oversight.
          </p>
        </div>

        {/* Main Content Grid: Secure Patient Record Interface + Four Trust Principles */}
        <div className="mt-16 grid grid-cols-1 items-start gap-10 lg:grid-cols-12">
          {/* Left Column: Secure Patient Record & Clinical Governance Interface (5 cols) */}
          <div className="reveal-card lg:col-span-5 rounded-2xl border border-white/15 bg-[#16314E]/90 p-5 sm:p-6 shadow-2xl backdrop-blur-sm">
            {/* Interface Top Bar */}
            <div className="flex flex-wrap items-center justify-between gap-2 pb-4 border-b border-white/10">
              <div className="flex items-center gap-2">
                <Shield className="h-4 w-4 text-[#55C9B5]" />
                <span className="text-xs font-bold tracking-wider uppercase text-white">
                  Protected Coordination Record
                </span>
              </div>
              <span className="rounded-full bg-white/10 px-2.5 py-0.5 text-[10px] font-semibold text-[#55C9B5]">
                Illustrative Sample View
              </span>
            </div>

            {/* Role-Based Access Indicator */}
            <div className="mt-4 rounded-xl border border-white/10 bg-[#10243A]/80 p-3.5">
              <div className="flex items-center justify-between text-xs">
                <span className="text-white/70">Authorized Viewer Role</span>
                <span className="inline-flex items-center gap-1.5 font-semibold text-[#55C9B5]">
                  <Lock className="h-3.5 w-3.5" /> Assigned Care Team Only
                </span>
              </div>
              <div className="mt-2 flex items-center justify-between text-[11px] text-white/60">
                <span>Record Reference: #CB-SAMPLE-09</span>
                <span>Audit Log Active</span>
              </div>
            </div>

            {/* Transparent AI Assistance & Evidence Box */}
            <div className="mt-4 rounded-xl border border-[#3978E8]/40 bg-[#3978E8]/12 p-4">
              <div className="flex items-center justify-between gap-2">
                <span className="inline-flex items-center gap-1.5 text-xs font-bold text-white">
                  <Sparkles className="h-3.5 w-3.5 text-[#55C9B5]" />
                  AI-Assisted Follow-up Summary
                </span>
                <span className="rounded-md bg-white/10 px-2 py-0.5 text-[10px] font-semibold text-white/90">
                  Transparency Label
                </span>
              </div>

              <p className="mt-2 text-xs leading-relaxed text-white/85">
                Highlighted because a scheduled 14-day post-consultation check-in has not yet been
                confirmed.
              </p>

              {/* Supporting Source Evidence */}
              <div className="mt-3 rounded-lg bg-[#10243A]/70 p-2.5 text-[11px] text-white/75">
                <div className="flex items-center gap-1.5 font-semibold text-[#55C9B5]">
                  <FileSearch className="h-3.5 w-3.5" />
                  <span>Supporting Source Context:</span>
                </div>
                <p className="mt-1">
                  Outpatient Care Plan logged Day 1 · Scheduled follow-up window: Day 14.
                </p>
              </div>
            </div>

            {/* Mandatory Human Clinician Review Controls */}
            <div className="mt-4 rounded-xl border border-white/10 bg-[#10243A]/80 p-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-white">
                  Required Clinical Sign-Off
                </span>
                <span className="text-[11px] text-[#55C9B5] font-medium">
                  Human Decision Required
                </span>
              </div>
              <p className="mt-1 text-[11px] text-white/65">
                AI suggestions do not trigger clinical actions automatically. Authorized staff must
                review and confirm next steps.
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                <span className="inline-flex items-center gap-1.5 rounded-lg bg-[#3978E8] px-3 py-1.5 text-xs font-semibold text-white">
                  <CheckCircle2 className="h-3.5 w-3.5" />
                  Confirm Follow-up Task
                </span>
                <span className="inline-flex items-center rounded-lg border border-white/15 bg-white/5 px-3 py-1.5 text-xs font-medium text-white/80">
                  Dismiss / Modify
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Four Trust Principles Grid (7 cols) */}
          <div className="lg:col-span-7 grid grid-cols-1 gap-5 sm:grid-cols-2">
            {TRUST_PRINCIPLES.map((principle, idx) => {
              const IconComponent = principle.icon
              return (
                <article
                  key={principle.title}
                  className="reveal-card flex flex-col justify-between rounded-2xl border border-white/12 bg-white/6 p-6 backdrop-blur-xs transition-all duration-300 hover:border-[#55C9B5]/40 hover:bg-white/10"
                >
                  <div>
                    <div className="flex items-center justify-between">
                      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#3978E8]/20 text-[#55C9B5] ring-1 ring-white/15">
                        <IconComponent className="h-5 w-5" />
                      </div>
                      <span className="font-mono text-xs font-bold text-white/45">
                        0{idx + 1}
                      </span>
                    </div>

                    <h3 className="mt-5 font-display text-xl font-bold text-white">
                      {principle.title}
                    </h3>
                    <p className="mt-2.5 text-sm leading-relaxed text-white/75">
                      {principle.description}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs text-[#55C9B5]">
                    <span>Core Governance Principle</span>
                    <span className="h-1.5 w-1.5 rounded-full bg-[#55C9B5]" />
                  </div>
                </article>
              )
            })}

            {/* Responsible Governance Note */}
            <div className="sm:col-span-2 rounded-2xl border border-white/12 bg-[#16314E]/60 p-5 text-xs leading-relaxed text-white/75">
              <strong className="font-semibold text-white">
                Commitment to Responsible Validation:
              </strong>{' '}
              CareBridge does not claim autonomous diagnostic capability. Privacy, security, and
              applicable healthcare regulatory requirements are established and verified with
              participating healthcare organizations prior to any real-world deployment.
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

