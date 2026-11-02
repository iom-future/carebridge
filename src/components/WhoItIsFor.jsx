import {
  Building2,
  Hospital,
  HeartHandshake,
  Stethoscope,
  UsersRound,
  CheckCircle2,
  CalendarClock,
} from 'lucide-react'

const AUDIENCE_CARDS = [
  {
    title: 'Primary Healthcare Centres',
    description:
      'Organize patient follow-ups and maintain visibility into outstanding care activities.',
    icon: Building2,
    image: '/images/clinician-review.jpg',
    imageAlt:
      'A primary care professional thoughtfully reviewing patient follow-up schedules at a sunlit desk',
    tag: 'Continuity at the First Point of Care',
    spanClass: 'lg:col-span-4',
  },
  {
    title: 'Hospitals & Clinics',
    description:
      'Coordinate post-consultation activities and support continuity between departments.',
    icon: Hospital,
    image: '/images/doctor-consultation.jpg',
    imageAlt: 'A doctor having a calm, reassuring consultation with a patient in a modern clinic',
    tag: 'Post-Consultation Coordination',
    spanClass: 'lg:col-span-4',
  },
  {
    title: 'Community Health Organizations',
    description:
      'Support follow-up programmes and improve coordination across community-based care services.',
    icon: HeartHandshake,
    image: '/images/community-health.jpg',
    imageAlt:
      'A community healthcare worker interacting warmly with an older patient in a welcoming community health lounge',
    tag: 'Community-Based Outreach',
    spanClass: 'lg:col-span-4',
  },
]

export function WhoItIsFor() {
  return (
    <section
      id="who-its-for"
      className="reveal-section relative bg-white py-20 sm:py-28 scroll-mt-20"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-[#F5F8FB] border border-[#182B40]/10 px-3.5 py-1 text-xs font-bold tracking-wider text-[#3978E8] uppercase">
            BUILT FOR CONNECTED CARE
          </span>
          <h2 className="mt-4 font-display text-3xl font-extrabold tracking-tight text-[#10243A] sm:text-4xl lg:text-[2.6rem] lg:leading-[1.15]">
            Supporting Everyone Involved in the Patient Journey.
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-[#718096]">
            From primary care facilities to patients and family caregivers at home, CareBridge
            keeps everyone aligned around the next step in care.
          </p>
        </div>

        {/* Top Row: 3 Healthcare Organization Cards with Editorial Photography */}
        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3 lg:grid-cols-12">
          {AUDIENCE_CARDS.map((card) => {
            const IconComponent = card.icon
            return (
              <article
                key={card.title}
                className={`reveal-card group flex flex-col overflow-hidden rounded-2xl border border-[#182B40]/10 bg-white shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-[#3978E8]/35 hover:shadow-xl hover:shadow-[#10243A]/6 ${card.spanClass}`}
              >
                {/* Editorial Photograph */}
                <div className="relative h-52 w-full overflow-hidden bg-[#10243A]">
                  <img
                    src={card.image}
                    alt={card.imageAlt}
                    loading="lazy"
                    className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#10243A]/65 via-transparent to-transparent" />
                  <span className="absolute bottom-3 left-4 rounded-full bg-white/95 px-3 py-1 text-[11px] font-bold text-[#10243A] shadow-xs">
                    {card.tag}
                  </span>
                </div>

                {/* Card Copy */}
                <div className="flex flex-1 flex-col justify-between p-6">
                  <div>
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#F5F8FB] text-[#3978E8] group-hover:bg-[#3978E8] group-hover:text-white transition-colors">
                        <IconComponent className="h-5 w-5" />
                      </div>
                      <h3 className="font-display text-xl font-bold text-[#10243A]">
                        {card.title}
                      </h3>
                    </div>
                    <p className="mt-3.5 text-sm leading-relaxed text-[#718096]">
                      {card.description}
                    </p>
                  </div>
                </div>
              </article>
            )
          })}
        </div>

        {/* Bottom Row: Asymmetric 2-Card Showcase for Healthcare Professionals + Patients & Caregivers */}
        <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-12">
          {/* Card 4: Healthcare Professionals (5 cols) */}
          <article className="reveal-card group flex flex-col justify-between overflow-hidden rounded-2xl border border-[#182B40]/10 bg-[#F5F8FB] p-6 sm:p-8 transition-all duration-300 hover:-translate-y-1 hover:border-[#3978E8]/35 hover:shadow-xl hover:shadow-[#10243A]/6 lg:col-span-5">
            <div>
              <div className="flex items-center justify-between gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#10243A] text-white">
                  <Stethoscope className="h-5 w-5 text-[#55C9B5]" />
                </div>
                <span className="rounded-full bg-white border border-[#182B40]/10 px-3 py-1 text-xs font-semibold text-[#10243A]">
                  Clinical & Coordination Staff
                </span>
              </div>

              <h3 className="mt-6 font-display text-2xl font-bold text-[#10243A]">
                Healthcare Professionals
              </h3>
              <p className="mt-2.5 text-base leading-relaxed text-[#718096]">
                Manage assigned follow-ups and access relevant patient information within their
                authorized roles.
              </p>
            </div>

            {/* Editorial Photo + Role View */}
            <div className="mt-6 overflow-hidden rounded-xl border border-[#182B40]/10 bg-white">
              <div className="grid grid-cols-1 sm:grid-cols-12 items-center">
                <div className="sm:col-span-5 h-36 sm:h-full bg-[#10243A]">
                  <img
                    src="/images/nurse-coordination.jpg"
                    alt="Healthcare professionals reviewing assigned patient follow-ups"
                    loading="lazy"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="p-4 sm:col-span-7 space-y-2 text-xs">
                  <div className="font-bold text-[#10243A]">Authorized Role Workspace</div>
                  <div className="flex items-center gap-2 text-[#718096]">
                    <CheckCircle2 className="h-3.5 w-3.5 shrink-0 text-[#55C9B5]" />
                    <span>Clear daily follow-up task lists</span>
                  </div>
                  <div className="flex items-center gap-2 text-[#718096]">
                    <CheckCircle2 className="h-3.5 w-3.5 shrink-0 text-[#55C9B5]" />
                    <span>Role-appropriate clinical visibility</span>
                  </div>
                </div>
              </div>
            </div>
          </article>

          {/* Card 5: Patients & Caregivers (7 cols) — Highlighting the human experience beyond the dashboard */}
          <article className="reveal-card group overflow-hidden rounded-2xl border border-[#3978E8]/20 bg-gradient-to-br from-[#F5F8FB] via-white to-[#55C9B5]/10 p-6 sm:p-8 transition-all duration-300 hover:-translate-y-1 hover:border-[#3978E8]/40 hover:shadow-xl hover:shadow-[#10243A]/6 lg:col-span-7">
            <div className="grid grid-cols-1 items-center gap-6 md:grid-cols-12">
              <div className="md:col-span-7 flex flex-col justify-between">
                <div>
                  <div className="inline-flex items-center gap-2 rounded-full bg-[#55C9B5]/20 px-3 py-1 text-xs font-bold text-[#10243A]">
                    <UsersRound className="h-3.5 w-3.5 text-[#10243A]" />
                    <span>Human-Centred Care Experience</span>
                  </div>

                  <h3 className="mt-4 font-display text-2xl font-bold text-[#10243A]">
                    Patients &amp; Caregivers
                  </h3>
                  <p className="mt-2.5 text-base leading-relaxed text-[#718096]">
                    Receive clearer communication about planned appointments and follow-up
                    activities.
                  </p>
                </div>

                {/* Patient & Caregiver Illustration Card */}
                <div className="mt-6 rounded-xl border border-[#182B40]/10 bg-white p-4 shadow-2xs">
                  <div className="flex items-center justify-between text-[11px] font-semibold text-[#718096]">
                    <span>PATIENT &amp; CAREGIVER VIEW (SAMPLE)</span>
                    <span className="text-[#3978E8]">Clear Next Steps</span>
                  </div>
                  <div className="mt-2.5 flex items-start gap-3">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#3978E8]/10 text-[#3978E8]">
                      <CalendarClock className="h-4 w-4" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-[#10243A]">
                        Upcoming Follow-up: Thursday, 10:00 AM
                      </p>
                      <p className="mt-0.5 text-xs text-[#718096]">
                        Simple appointment reminders and structured check-ins help patients and
                        families stay confident after leaving the clinic.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Authentic Patient & Caregiver Photograph */}
              <div className="md:col-span-5">
                <div className="relative overflow-hidden rounded-2xl border border-[#182B40]/10 bg-[#10243A] shadow-md">
                  <img
                    src="/images/patient-conversation.jpg"
                    alt="A patient and family caregiver speaking warmly with a healthcare professional"
                    loading="lazy"
                    className="h-64 w-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#10243A]/70 via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-3 right-3 text-white">
                    <span className="text-[11px] font-semibold text-[#55C9B5]">
                      Supportive Continuity
                    </span>
                    <p className="text-xs font-medium text-white/95">
                      Clear communication for patients and families between visits.
                    </p>
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

