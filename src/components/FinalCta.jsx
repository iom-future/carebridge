import { ArrowRight, CheckCircle2, Calendar, Activity } from 'lucide-react'

export function FinalCta() {
  return (
    <section className="reveal-section relative overflow-hidden bg-white pb-20 pt-6 sm:pb-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#10243A] via-[#142E4A] to-[#1A3B5C] px-6 py-14 text-white shadow-2xl sm:px-12 sm:py-16 lg:px-16">
          {/* Subtle grid & radial glow */}
          <div className="pointer-events-none absolute inset-0 bg-navy-grid opacity-70" />
          <div
            className="pointer-events-none absolute -top-24 right-10 h-80 w-80 rounded-full bg-[#3978E8]/25 blur-3xl"
            aria-hidden="true"
          />
          <div
            className="pointer-events-none absolute -bottom-24 left-1/3 h-72 w-72 rounded-full bg-[#55C9B5]/15 blur-3xl"
            aria-hidden="true"
          />

          <div className="relative grid grid-cols-1 items-center gap-10 lg:grid-cols-12">
            {/* Left Copy & CTA */}
            <div className="lg:col-span-7">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3.5 py-1 text-xs font-bold tracking-wider text-[#55C9B5] uppercase">
                CONTINUOUS PATIENT CARE
              </span>

              <h2 className="mt-5 font-display text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-[2.65rem] lg:leading-[1.12]">
                Better Healthcare Is Built on Better Continuity.
              </h2>

              <p className="mt-4 max-w-xl text-lg leading-relaxed text-white/80">
                Help create a healthcare experience where patients remain connected to the care
                they need, even after leaving the consultation room.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <a
                  href="#pilot"
                  className="group inline-flex items-center gap-2.5 rounded-xl bg-[#3978E8] px-7 py-4 text-base font-semibold text-white shadow-lg shadow-[#3978E8]/25 transition-all duration-200 hover:bg-[#2C66D0] hover:shadow-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-[#55C9B5] focus-visible:ring-offset-2 focus-visible:ring-offset-[#10243A]"
                >
                  <span>Partner With CareBridge</span>
                  <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
                </a>
              </div>
            </div>

            {/* Right: Subtle Patient-Care Visual Card */}
            <div className="lg:col-span-5">
              <div className="rounded-2xl border border-white/15 bg-white/8 p-5 backdrop-blur-md">
                <div className="flex items-center gap-4">
                  <picture>
                    <source
                      type="image/webp"
                      srcSet={`${import.meta.env.BASE_URL}images/doctor-consultation.webp`}
                    />
                    <img
                      src={`${import.meta.env.BASE_URL}images/doctor-consultation.jpg`}
                      alt="Doctor and patient during a calm consultation"
                      width={64}
                      height={64}
                      loading="lazy"
                      decoding="async"
                      className="h-16 w-16 shrink-0 rounded-xl object-cover ring-2 ring-white/20"
                    />
                  </picture>
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#55C9B5]">
                      Continuity Summary (Sample)
                    </span>
                    <p className="mt-0.5 font-display text-base font-bold text-white">
                      Post-Consultation Care Path
                    </p>
                    <p className="text-xs text-white/70">
                      Every stage organized for clinical teams &amp; patients
                    </p>
                  </div>
                </div>

                <div className="mt-4 space-y-2 border-t border-white/10 pt-4 text-xs">
                  <div className="flex items-center justify-between rounded-lg bg-white/8 px-3 py-2">
                    <span className="inline-flex items-center gap-2 text-white/90">
                      <CheckCircle2 className="h-4 w-4 text-[#55C9B5]" />
                      Follow-up appointment confirmed
                    </span>
                    <span className="text-[11px] text-[#55C9B5] font-semibold">Connected</span>
                  </div>
                  <div className="flex items-center justify-between rounded-lg bg-white/8 px-3 py-2">
                    <span className="inline-flex items-center gap-2 text-white/90">
                      <Calendar className="h-4 w-4 text-[#3978E8]" />
                      Care team task queue updated
                    </span>
                    <span className="text-[11px] text-white/75">Synchronized</span>
                  </div>
                  <div className="flex items-center justify-between rounded-lg bg-white/8 px-3 py-2">
                    <span className="inline-flex items-center gap-2 text-white/90">
                      <Activity className="h-4 w-4 text-[#55C9B5]" />
                      Clinician review oversight active
                    </span>
                    <span className="text-[11px] text-[#55C9B5] font-semibold">Human-Led</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

