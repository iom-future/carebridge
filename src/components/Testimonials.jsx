import { Star, Quote, CheckCircle2, TrendingUp, Building2, ShieldCheck, HeartHandshake } from 'lucide-react'

const TESTIMONIALS = [
  {
    id: 'dr-babatunde-alabi',
    name: 'Dr. Babatunde Alabi, FWACS',
    role: 'Chief Medical Director & Lead Surgeon',
    organization: 'Crestview Specialist Hospital',
    location: 'Victoria Island, Lagos',
    image: '/images/testimonial-babatunde-alabi.jpg',
    category: 'Surgical Follow-up',
    badgeColor: 'bg-[#3978E8]/10 text-[#3978E8] border-[#3978E8]/20',
    metric: '89% Post-Op Protocol Adherence',
    metricIcon: TrendingUp,
    quote:
      'Before CareBridge, our surgical post-op follow-up rate was barely 45%. Patients would leave our surgical wards and we had little structured visibility until an emergency occurred. With automated care paths and prompt check-ins, patient retention exceeded 89% in three months. It has transformed surgical outcomes across our hospital.',
  },
  {
    id: 'matron-amina-yusuf',
    name: 'Matron Amina Yusuf, RN, RM',
    role: 'Head of Nursing Services',
    organization: 'Medix Apex Hospital',
    location: 'Garki, Abuja',
    image: '/images/testimonial-amina-yusuf.jpg',
    category: 'Care Coordination',
    badgeColor: 'bg-[#55C9B5]/15 text-[#10243A] border-[#55C9B5]/30',
    metric: '65% Reduction in Staff Admin Time',
    metricIcon: ShieldCheck,
    quote:
      'Managing post-discharge patient queues manually used to overwhelm my nursing team. CareBridge gives us a single dashboard where every scheduled lab, medication milestone, and call is organized. We no longer lose patients between discharge and recovery.',
  },
  {
    id: 'dr-chinelo-eze',
    name: 'Dr. Chinelo Eze, MBBS, FMCP',
    role: 'Consultant Cardiologist & Chronic Care Lead',
    organization: 'Evergreen Medical Centre',
    location: 'Independence Layout, Enugu',
    image: '/images/testimonial-chinelo-eze.jpg',
    category: 'Chronic Disease Care',
    badgeColor: 'bg-[#3978E8]/10 text-[#3978E8] border-[#3978E8]/20',
    metric: '4.2x Faster Clinical Intervention',
    metricIcon: Building2,
    quote:
      'For hypertensive and diabetic patients, continuous follow-up is life-saving. CareBridge surfaces patients who miss follow-up readings early, allowing my team to intervene before acute complications develop. It brings tertiary-grade continuity to everyday clinical practice.',
  },
  {
    id: 'mr-tunde-adeleke',
    name: 'Mr. Tunde Adeleke',
    role: 'Recovering Patient (Post-Cardiac Surgery)',
    organization: 'Verified Patient Follow-up',
    location: 'Ikeja, Lagos',
    image: '/images/testimonial-tunde-adeleke.jpg',
    category: 'Patient Experience',
    badgeColor: 'bg-[#55C9B5]/15 text-[#10243A] border-[#55C9B5]/30',
    metric: '100% Recovery Protocol Adherence',
    metricIcon: HeartHandshake,
    quote:
      'Leaving the hospital after my procedure felt intimidating, but CareBridge kept me connected to my surgical care team. The WhatsApp-integrated follow-up reminders and scheduled doctor check-ins gave my family total peace of mind throughout my 90-day recovery.',
  },
]

export function Testimonials() {
  return (
    <section
      id="testimonials"
      className="reveal-section relative overflow-hidden bg-[#F8FAFC]/70 py-20 sm:py-28 scroll-mt-20 border-t border-[#182B40]/6"
    >
      {/* Background clinical grid */}
      <div className="pointer-events-none absolute inset-0 bg-clinical-grid opacity-50" aria-hidden="true" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-white border border-[#182B40]/10 px-3.5 py-1 text-xs font-bold tracking-wider text-[#3978E8] uppercase shadow-2xs">
            VOICES OF CAREBRIDGE
          </span>
          <h2 className="mt-4 font-display text-3xl font-extrabold tracking-tight text-[#10243A] sm:text-4xl lg:text-[2.6rem] lg:leading-[1.15]">
            Trusted by Leading Nigerian Healthcare Providers & Recovering Patients.
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-[#718096]">
            From tertiary surgical centres in Lagos and Abuja to chronic care clinics across Nigeria,
            see how CareBridge bridges the post-consultation gap with continuous, human-led care.
          </p>
        </div>

        {/* 4 Testimonial Cards Grid */}
        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2 lg:gap-8">
          {TESTIMONIALS.map((item) => {
            const MetricIcon = item.metricIcon
            return (
              <article
                key={item.id}
                className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-[#182B40]/10 bg-white/95 p-6 sm:p-8 shadow-[0_4px_24px_-6px_rgba(16,36,58,0.06)] backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-[#3978E8]/40 hover:shadow-xl hover:shadow-[#10243A]/8"
              >
                {/* Decorative Subtle Quote Watermark */}
                <Quote
                  className="pointer-events-none absolute -right-2 -bottom-2 h-28 w-28 text-[#182B40]/[0.03] transition-transform duration-500 group-hover:scale-110"
                  aria-hidden="true"
                />

                <div>
                  {/* Top Row: Headshot + Info + Category Badge */}
                  <div className="flex flex-wrap items-start justify-between gap-4">
                    <div className="flex items-center gap-3.5">
                      <div className="relative h-14 w-14 sm:h-16 sm:w-16 shrink-0 overflow-hidden rounded-full border-2 border-white shadow-md ring-2 ring-[#3978E8]/20 bg-[#182B40]/10">
                        <img
                          src={item.image}
                          alt={item.name}
                          width={64}
                          height={64}
                          loading="eager"
                          decoding="async"
                          className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                        />
                        <span
                          className="absolute bottom-0 right-0 h-4 w-4 rounded-full border-2 border-white bg-[#55C9B5]"
                          title="Verified CareBridge Clinical User"
                        />
                      </div>
                      <div>
                        <div className="flex items-center gap-1.5">
                          <h3 className="font-display text-base sm:text-lg font-bold text-[#10243A] leading-snug">
                            {item.name}
                          </h3>
                          <CheckCircle2 className="h-4 w-4 text-[#3978E8] shrink-0" aria-label="Verified Profile" />
                        </div>
                        <p className="text-xs sm:text-sm font-medium text-[#182B40]/80">
                          {item.role}
                        </p>
                        <p className="text-xs text-[#718096]">
                          {item.organization} · <span className="font-medium text-[#182B40]">{item.location}</span>
                        </p>
                      </div>
                    </div>

                    <span
                      className={`inline-flex items-center rounded-full border px-2.5 py-1 text-[11px] font-bold tracking-wide uppercase ${item.badgeColor}`}
                    >
                      {item.category}
                    </span>
                  </div>

                  {/* Rating Stars */}
                  <div className="mt-5 flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-4 w-4 fill-amber-400 text-amber-400"
                        aria-hidden="true"
                      />
                    ))}
                    <span className="ml-2 text-xs font-semibold text-[#718096]">5.0 Verified Review</span>
                  </div>

                  {/* Testimonial Quote */}
                  <blockquote className="mt-3.5 text-sm sm:text-[0.95rem] leading-relaxed text-[#182B40]/90 italic">
                    “{item.quote}”
                  </blockquote>
                </div>

                {/* Bottom Card Metric Pill */}
                <div className="mt-6 pt-4 border-t border-[#182B40]/8 flex items-center justify-between">
                  <div className="flex items-center gap-2 rounded-xl bg-[#F5F8FB] border border-[#182B40]/8 px-3.5 py-1.5 text-xs font-bold text-[#10243A]">
                    <MetricIcon className="h-4 w-4 text-[#3978E8]" />
                    <span>{item.metric}</span>
                  </div>
                  <span className="text-[11px] font-semibold text-[#718096]">
                    Nigeria Care Continuity
                  </span>
                </div>
              </article>
            )
          })}
        </div>

        {/* National Clinical Impact Strip */}
        <div className="mt-14 overflow-hidden rounded-2xl border border-[#182B40]/10 bg-white p-6 sm:p-8 shadow-xs">
          <div className="grid grid-cols-2 gap-6 sm:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-[#182B40]/8">
            <div className="text-center sm:px-4">
              <p className="font-display text-2xl sm:text-3xl font-extrabold text-[#10243A]">89%</p>
              <p className="mt-1 text-xs text-[#718096] font-medium">Avg. Post-Op Protocol Adherence</p>
            </div>
            <div className="text-center pt-4 sm:pt-0 sm:px-4">
              <p className="font-display text-2xl sm:text-3xl font-extrabold text-[#3978E8]">15k+</p>
              <p className="mt-1 text-xs text-[#718096] font-medium">Completed Patient Follow-ups</p>
            </div>
            <div className="text-center pt-4 sm:pt-0 sm:px-4">
              <p className="font-display text-2xl sm:text-3xl font-extrabold text-[#55C9B5]">65%</p>
              <p className="mt-1 text-xs text-[#718096] font-medium">Reduced Coordinator Admin Burden</p>
            </div>
            <div className="text-center pt-4 sm:pt-0 sm:px-4">
              <p className="font-display text-2xl sm:text-3xl font-extrabold text-[#10243A]">100%</p>
              <p className="mt-1 text-xs text-[#718096] font-medium">Clinician-Verified Medical Handoffs</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

