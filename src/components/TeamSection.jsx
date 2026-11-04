import { Stethoscope, ShieldCheck, Cpu, HeartPulse, Activity, Network } from 'lucide-react'

const TEAM_MEMBERS = [
  {
    id: 'oluwaseun-adeleke',
    name: 'Dr. Oluwaseun Adeleke',
    credentials: 'MBBS, MPH',
    role: 'Co-Founder & Chief Executive Officer',
    badge: 'Ex-LUTH · Digital Health',
    badgeIcon: HeartPulse,
    image: `${import.meta.env.BASE_URL}images/team-oluwaseun-adeleke.jpg`,
    bio: 'Former clinical consultant at Lagos University Teaching Hospital with 12+ years pioneering continuous care delivery models and healthcare technology across West Africa.',
    focus: ['Care Continuity Models', 'Health Policy', 'Clinical Strategy'],
  },
  {
    id: 'chioma-nwachukwu',
    name: 'Dr. Chioma Nwachukwu',
    credentials: 'MBBS, FWACS',
    role: 'Co-Founder & Chief Medical Officer',
    badge: 'Surgeon · Clinical Governance',
    badgeIcon: Stethoscope,
    image: `${import.meta.env.BASE_URL}images/team-chioma-nwachukwu.jpg`,
    bio: 'Fellow of the West African College of Surgeons with extensive leadership in surgical protocol adherence, patient safety governance, and clinical handoff standardization.',
    focus: ['Surgical Protocols', 'Patient Safety', 'Handoff Standards'],
  },
  {
    id: 'ibrahim-danjuma',
    name: 'Ibrahim Danjuma',
    credentials: 'BEng, MSc',
    role: 'Chief Technology Officer',
    badge: 'Distributed Systems · WhatsApp API',
    badgeIcon: Cpu,
    image: `${import.meta.env.BASE_URL}images/team-ibrahim-danjuma.jpg`,
    bio: 'Experienced infrastructure architect in fintech and digital health, leading CareBridge’s resilient, low-bandwidth WhatsApp & SMS clinical orchestration pipelines.',
    focus: ['Low-Bandwidth Infra', 'WhatsApp Pipelines', 'Data Security'],
  },
  {
    id: 'folashade-balogun',
    name: 'Folashade Balogun',
    credentials: 'RN, RM, MSc',
    role: 'VP of Clinical Operations',
    badge: 'Ex-UCH Ibadan · Care Paths',
    badgeIcon: Activity,
    image: `${import.meta.env.BASE_URL}images/team-folashade-balogun.jpg`,
    bio: 'Senior nurse coordinator and former public health specialist at University College Hospital Ibadan, directing outpatient care pathways and coordinator workflows.',
    focus: ['Outpatient Pathways', 'Care Coordination', 'Nurse Triage'],
  },
  {
    id: 'emeka-okonkwo',
    name: 'Dr. Emeka Okonkwo',
    credentials: 'MBBS, FMCP',
    role: 'Head of Chronic Care & Clinical Informatics',
    badge: 'Consultant Physician · Chronic Care',
    badgeIcon: ShieldCheck,
    image: `${import.meta.env.BASE_URL}images/team-emeka-okonkwo.jpg`,
    bio: 'Consultant physician specializing in chronic disease continuity for hypertension and diabetes, designing algorithmic alert thresholds for clinical teams.',
    focus: ['Chronic Disease Care', 'Clinical Informatics', 'Alert Thresholds'],
  },
  {
    id: 'zainab-alhassan',
    name: 'Zainab Al-Hassan',
    credentials: 'BSc, PMP',
    role: 'Head of Health Systems & Partner Success',
    badge: 'Primary Health · Partner Success',
    badgeIcon: Network,
    image: `${import.meta.env.BASE_URL}images/team-zainab-alhassan.jpg`,
    bio: 'Healthcare administrator with deep experience scaling institutional partnerships across primary healthcare development agencies and hospital networks in Nigeria.',
    focus: ['Health Systems', 'Hospital Integration', 'Clinical Adoption'],
  },
]

export function TeamSection() {
  return (
    <section
      id="team"
      className="reveal-section relative bg-[#F5F8FB]/70 py-20 sm:py-28 scroll-mt-20 border-t border-[#182B40]/8"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-white border border-[#182B40]/10 px-3.5 py-1 text-xs font-bold tracking-wider text-[#3978E8] uppercase shadow-2xs">
            LEADERSHIP & CLINICAL GOVERNANCE
          </span>
          <h2 className="mt-4 font-display text-3xl font-extrabold tracking-tight text-[#10243A] sm:text-4xl lg:text-[2.6rem] lg:leading-[1.15]">
            Built by Nigerian Clinicians, Engineers & Health Systems Leaders.
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-[#718096]">
            Our multidisciplinary leadership team combines frontline hospital experience,
            specialist surgical governance, and resilient health tech engineering to keep
            patient follow-ups moving across Nigerian healthcare.
          </p>
        </div>

        {/* 6 Team Cards Grid */}
        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {TEAM_MEMBERS.map((member) => {
            const BadgeIcon = member.badgeIcon
            return (
              <article
                key={member.id}
                className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-[#182B40]/10 bg-white p-6 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-[#3978E8]/35 hover:shadow-xl hover:shadow-[#10243A]/6"
              >
                <div>
                  {/* Portrait Image Container */}
                  <div className="relative aspect-square w-full overflow-hidden rounded-xl bg-[#182B40]/5">
                    <picture>
                      <source
                        type="image/webp"
                        srcSet={member.image.replace(/\.jpg$/, '.webp')}
                      />
                      <img
                        src={member.image}
                        alt={`${member.name}, ${member.role} at CareBridge`}
                        width={512}
                        height={512}
                        loading="lazy"
                        decoding="async"
                        className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                      />
                    </picture>

                    {/* Tag Pill on Image */}
                    <div className="absolute top-3 right-3 flex items-center gap-1.5 rounded-full bg-[#10243A]/85 backdrop-blur-md px-3 py-1 text-[11px] font-semibold text-white shadow-sm">
                      <BadgeIcon className="h-3 w-3 text-[#55C9B5]" />
                      <span>{member.badge}</span>
                    </div>
                  </div>

                  {/* Header: Name, Credentials, Role */}
                  <div className="mt-5">
                    <div className="flex items-baseline gap-2">
                      <h3 className="font-display text-lg font-bold text-[#10243A]">
                        {member.name}
                      </h3>
                      <span className="text-xs font-semibold text-[#718096]">
                        {member.credentials}
                      </span>
                    </div>
                    <p className="mt-0.5 text-xs font-semibold text-[#3978E8]">
                      {member.role}
                    </p>
                  </div>

                  {/* Bio */}
                  <p className="mt-3 text-xs leading-relaxed text-[#718096]">
                    {member.bio}
                  </p>
                </div>

                {/* Focus Badges at Bottom */}
                <div className="mt-5 pt-4 border-t border-[#182B40]/6">
                  <div className="flex flex-wrap gap-1.5">
                    {member.focus.map((tag) => (
                      <span
                        key={tag}
                        className="inline-flex items-center rounded-md bg-[#F5F8FB] border border-[#182B40]/6 px-2 py-0.5 text-[10.5px] font-medium text-[#182B40]/80"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

