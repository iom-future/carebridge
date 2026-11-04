import { useState } from 'react'
import {
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Building2,
  ClipboardList,
  Users,
  AlertCircle,
} from 'lucide-react'

const ORGANIZATION_TYPES = [
  'Primary healthcare centre',
  'Hospital',
  'Private clinic',
  'Community health organization',
  'Other',
]

const INITIAL_FORM = {
  fullName: '',
  workEmail: '',
  organizationName: '',
  organizationType: '',
  role: '',
  challenge: '',
}

function PilotHowItWorksCard({ className = '' }) {
  return (
    <div
      className={`space-y-4 rounded-2xl border border-[#182B40]/10 bg-white p-6 shadow-xs ${className}`}
    >
      <h3 className="font-display text-base font-bold text-[#10243A]">
        How the CareBridge Pilot Partnership Works
      </h3>
      <p className="text-sm leading-relaxed text-[#718096]">
        We work closely with participating clinics, hospitals, and community health teams
        to evaluate follow-up workflows in a structured, low-friction environment.
      </p>

      <ul className="space-y-3 pt-2 text-sm text-[#182B40]">
        <li className="flex items-start gap-3">
          <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-lg bg-[#3978E8]/10 text-[#3978E8]">
            <ClipboardList className="h-3.5 w-3.5" />
          </div>
          <div>
            <span className="font-semibold text-[#10243A]">Workflow Discovery:</span>{' '}
            <span className="text-[#718096]">
              Map your current post-consultation follow-up process and identify key gaps.
            </span>
          </div>
        </li>
        <li className="flex items-start gap-3">
          <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-lg bg-[#55C9B5]/20 text-[#10243A]">
            <Building2 className="h-3.5 w-3.5" />
          </div>
          <div>
            <span className="font-semibold text-[#10243A]">Complement Existing Systems:</span>{' '}
            <span className="text-[#718096]">
              Configured around your care team&apos;s existing clinical responsibilities.
            </span>
          </div>
        </li>
        <li className="flex items-start gap-3">
          <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-lg bg-[#3978E8]/10 text-[#3978E8]">
            <Users className="h-3.5 w-3.5" />
          </div>
          <div>
            <span className="font-semibold text-[#10243A]">Guided Evaluation:</span>{' '}
            <span className="text-[#718096]">
              Shape platform capabilities alongside your clinicians and care coordinators.
            </span>
          </div>
        </li>
      </ul>
    </div>
  )
}

export function PilotSection() {
  const [formData, setFormData] = useState(INITIAL_FORM)
  const [errors, setErrors] = useState({})
  const [submittedData, setSubmittedData] = useState(null)

  const validate = () => {
    const nextErrors = {}

    if (!formData.fullName.trim()) {
      nextErrors.fullName = 'Please enter your full name.'
    }

    if (!formData.workEmail.trim()) {
      nextErrors.workEmail = 'Please enter your work email address.'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.workEmail.trim())) {
      nextErrors.workEmail = 'Please enter a valid email address.'
    }

    if (!formData.organizationName.trim()) {
      nextErrors.organizationName = 'Please enter your organization name.'
    }

    if (!formData.organizationType) {
      nextErrors.organizationType = 'Please select your organization type.'
    }

    if (!formData.role.trim()) {
      nextErrors.role = 'Please enter your role.'
    }

    if (!formData.challenge.trim() || formData.challenge.trim().length < 10) {
      nextErrors.challenge =
        'Please briefly describe the healthcare coordination challenge you are exploring.'
    }

    return nextErrors
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }))
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const validationErrors = validate()
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      return
    }

    setErrors({})
    setSubmittedData({ ...formData })
  }

  return (
    <section
      id="pilot"
      className="reveal-section relative bg-[#F5F8FB] py-20 sm:py-28 scroll-mt-20 border-b border-[#182B40]/8"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12 lg:gap-12">
          {/* Left Column: Headline, Description, and Pilot Partnership Explanation */}
          <div className="lg:col-span-5">
            <span className="inline-flex items-center gap-2 rounded-full bg-white border border-[#182B40]/10 px-3.5 py-1 text-xs font-bold tracking-wider text-[#3978E8] uppercase shadow-2xs">
              BUILD THE FUTURE OF CONTINUOUS CARE
            </span>

            <h2 className="mt-4 font-display text-3xl font-extrabold tracking-tight text-[#10243A] sm:text-4xl lg:text-[2.5rem] lg:leading-[1.15]">
              Let&apos;s Make Patient Follow-up Work Better.
            </h2>

            <p className="mt-4 text-lg leading-relaxed text-[#718096]">
              CareBridge is looking to collaborate with healthcare organizations interested in
              testing better ways to coordinate patient follow-ups and improve continuity of care.
            </p>

            {/* CTA Callout Badge */}
            <div className="mt-6 inline-flex items-center gap-2 rounded-xl bg-[#3978E8]/10 px-4 py-2 text-sm font-bold text-[#3978E8]">
              <span>Become a Pilot Partner</span>
              <ArrowRight className="h-4 w-4" />
            </div>

            {/* Desktop-only: Pilot Partnership Explanation (keeps desktop layout intact) */}
            <PilotHowItWorksCard className="mt-8 hidden lg:block" />
          </div>

          {/* Right Column: White Form Card */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl border border-[#182B40]/10 bg-white p-6 shadow-xl shadow-[#10243A]/6 sm:p-10">
              {submittedData ? (
                <div
                  role="status"
                  aria-live="polite"
                  className="py-6 text-center sm:py-10"
                >
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-[#55C9B5]/20 text-[#10243A]">
                    <CheckCircle2 className="h-9 w-9 text-[#3AA996]" />
                  </div>

                  <h3 className="mt-6 font-display text-2xl font-bold text-[#10243A]">
                    Thank you for your interest in CareBridge. Our team will be in touch about
                    potential pilot opportunities.
                  </h3>

                  <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-[#718096]">
                    Your pilot partnership inquiry for{' '}
                    <span className="font-semibold text-[#10243A]">
                      {submittedData.organizationName}
                    </span>{' '}
                    ({submittedData.organizationType}) has been validated in this interactive
                    preview.
                  </p>

                  {/* Transparent Frontend Preview Notice per Section 4 Instructions */}
                  <div className="mx-auto mt-6 max-w-lg rounded-xl border border-[#182B40]/10 bg-[#F5F8FB] p-4 text-left text-xs text-[#718096]">
                    <p className="font-semibold text-[#10243A]">
                      Interactive Preview Confirmation
                    </p>
                    <p className="mt-1">
                      This website is running in frontend preview mode without a live backend
                      database connection, so your details were validated locally in your browser
                      and not transmitted externally.
                    </p>
                  </div>

                  <div className="mt-8">
                    <button
                      type="button"
                      onClick={() => {
                        setSubmittedData(null)
                        setFormData(INITIAL_FORM)
                      }}
                      className="inline-flex items-center gap-2 rounded-xl border border-[#182B40]/15 bg-white px-5 py-2.5 text-sm font-semibold text-[#10243A] transition-colors hover:border-[#3978E8] hover:text-[#3978E8] cursor-pointer"
                    >
                      Submit Another Inquiry
                    </button>
                  </div>
                </div>
              ) : (
                <>
                  <div className="border-b border-[#182B40]/8 pb-5">
                    <span className="text-xs font-bold tracking-wider uppercase text-[#3978E8]">
                      Pilot Programme Registration
                    </span>
                    <h3 className="mt-1 font-display text-2xl font-bold text-[#10243A]">
                      Become a Pilot Partner
                    </h3>
                    <p className="mt-1 text-sm text-[#718096]">
                      Tell us about your organization and the follow-up workflows you want to
                      improve.
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} noValidate className="mt-6 space-y-5">
                    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                      {/* Full name */}
                      <div>
                        <label
                          htmlFor="pilot-fullName"
                          className="block text-sm font-semibold text-[#10243A]"
                        >
                          Full name <span className="text-[#3978E8]">*</span>
                        </label>
                        <input
                          id="pilot-fullName"
                          name="fullName"
                          type="text"
                          autoComplete="name"
                          value={formData.fullName}
                          onChange={handleChange}
                          placeholder="Dr. Amina Okafor"
                          aria-invalid={Boolean(errors.fullName)}
                          aria-describedby={errors.fullName ? 'error-fullName' : undefined}
                          className={`mt-1.5 w-full rounded-xl border px-4 py-3 text-sm text-[#182B40] placeholder-[#718096]/60 transition-colors focus:outline-none focus:ring-2 focus:ring-[#3978E8] ${
                            errors.fullName
                              ? 'border-red-500 bg-red-50/40'
                              : 'border-[#182B40]/15 bg-[#F5F8FB]/50 focus:bg-white'
                          }`}
                        />
                        {errors.fullName && (
                          <p
                            id="error-fullName"
                            className="mt-1.5 flex items-center gap-1 text-xs font-medium text-red-600"
                          >
                            <AlertCircle className="h-3.5 w-3.5 shrink-0" />
                            <span>{errors.fullName}</span>
                          </p>
                        )}
                      </div>

                      {/* Work email */}
                      <div>
                        <label
                          htmlFor="pilot-workEmail"
                          className="block text-sm font-semibold text-[#10243A]"
                        >
                          Work email <span className="text-[#3978E8]">*</span>
                        </label>
                        <input
                          id="pilot-workEmail"
                          name="workEmail"
                          type="email"
                          autoComplete="email"
                          value={formData.workEmail}
                          onChange={handleChange}
                          placeholder="name@healthcare-org.org"
                          aria-invalid={Boolean(errors.workEmail)}
                          aria-describedby={errors.workEmail ? 'error-workEmail' : undefined}
                          className={`mt-1.5 w-full rounded-xl border px-4 py-3 text-sm text-[#182B40] placeholder-[#718096]/60 transition-colors focus:outline-none focus:ring-2 focus:ring-[#3978E8] ${
                            errors.workEmail
                              ? 'border-red-500 bg-red-50/40'
                              : 'border-[#182B40]/15 bg-[#F5F8FB]/50 focus:bg-white'
                          }`}
                        />
                        {errors.workEmail && (
                          <p
                            id="error-workEmail"
                            className="mt-1.5 flex items-center gap-1 text-xs font-medium text-red-600"
                          >
                            <AlertCircle className="h-3.5 w-3.5 shrink-0" />
                            <span>{errors.workEmail}</span>
                          </p>
                        )}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                      {/* Organization name */}
                      <div>
                        <label
                          htmlFor="pilot-organizationName"
                          className="block text-sm font-semibold text-[#10243A]"
                        >
                          Organization name <span className="text-[#3978E8]">*</span>
                        </label>
                        <input
                          id="pilot-organizationName"
                          name="organizationName"
                          type="text"
                          autoComplete="organization"
                          value={formData.organizationName}
                          onChange={handleChange}
                          placeholder="Valley Primary Care Centre"
                          aria-invalid={Boolean(errors.organizationName)}
                          aria-describedby={
                            errors.organizationName ? 'error-organizationName' : undefined
                          }
                          className={`mt-1.5 w-full rounded-xl border px-4 py-3 text-sm text-[#182B40] placeholder-[#718096]/60 transition-colors focus:outline-none focus:ring-2 focus:ring-[#3978E8] ${
                            errors.organizationName
                              ? 'border-red-500 bg-red-50/40'
                              : 'border-[#182B40]/15 bg-[#F5F8FB]/50 focus:bg-white'
                          }`}
                        />
                        {errors.organizationName && (
                          <p
                            id="error-organizationName"
                            className="mt-1.5 flex items-center gap-1 text-xs font-medium text-red-600"
                          >
                            <AlertCircle className="h-3.5 w-3.5 shrink-0" />
                            <span>{errors.organizationName}</span>
                          </p>
                        )}
                      </div>

                      {/* Organization type */}
                      <div>
                        <label
                          htmlFor="pilot-organizationType"
                          className="block text-sm font-semibold text-[#10243A]"
                        >
                          Organization type <span className="text-[#3978E8]">*</span>
                        </label>
                        <select
                          id="pilot-organizationType"
                          name="organizationType"
                          value={formData.organizationType}
                          onChange={handleChange}
                          aria-invalid={Boolean(errors.organizationType)}
                          aria-describedby={
                            errors.organizationType ? 'error-organizationType' : undefined
                          }
                          className={`mt-1.5 w-full rounded-xl border px-4 py-3 text-sm text-[#182B40] transition-colors focus:outline-none focus:ring-2 focus:ring-[#3978E8] ${
                            errors.organizationType
                              ? 'border-red-500 bg-red-50/40'
                              : 'border-[#182B40]/15 bg-[#F5F8FB]/50 focus:bg-white'
                          }`}
                        >
                          <option value="">Select organization type...</option>
                          {ORGANIZATION_TYPES.map((type) => (
                            <option key={type} value={type}>
                              {type}
                            </option>
                          ))}
                        </select>
                        {errors.organizationType && (
                          <p
                            id="error-organizationType"
                            className="mt-1.5 flex items-center gap-1 text-xs font-medium text-red-600"
                          >
                            <AlertCircle className="h-3.5 w-3.5 shrink-0" />
                            <span>{errors.organizationType}</span>
                          </p>
                        )}
                      </div>
                    </div>

                    {/* Your role */}
                    <div>
                      <label
                        htmlFor="pilot-role"
                        className="block text-sm font-semibold text-[#10243A]"
                      >
                        Your role <span className="text-[#3978E8]">*</span>
                      </label>
                      <input
                        id="pilot-role"
                        name="role"
                        type="text"
                        autoComplete="organization-title"
                        value={formData.role}
                        onChange={handleChange}
                        placeholder="e.g., Medical Director, Clinical Operations Lead, Nursing Coordinator"
                        aria-invalid={Boolean(errors.role)}
                        aria-describedby={errors.role ? 'error-role' : undefined}
                        className={`mt-1.5 w-full rounded-xl border px-4 py-3 text-sm text-[#182B40] placeholder-[#718096]/60 transition-colors focus:outline-none focus:ring-2 focus:ring-[#3978E8] ${
                          errors.role
                            ? 'border-red-500 bg-red-50/40'
                            : 'border-[#182B40]/15 bg-[#F5F8FB]/50 focus:bg-white'
                        }`}
                      />
                      {errors.role && (
                        <p
                          id="error-role"
                          className="mt-1.5 flex items-center gap-1 text-xs font-medium text-red-600"
                        >
                          <AlertCircle className="h-3.5 w-3.5 shrink-0" />
                          <span>{errors.role}</span>
                        </p>
                      )}
                    </div>

                    {/* What healthcare coordination challenge are you trying to solve? */}
                    <div>
                      <label
                        htmlFor="pilot-challenge"
                        className="block text-sm font-semibold text-[#10243A]"
                      >
                        What healthcare coordination challenge are you trying to solve?{' '}
                        <span className="text-[#3978E8]">*</span>
                      </label>
                      <textarea
                        id="pilot-challenge"
                        name="challenge"
                        rows={4}
                        value={formData.challenge}
                        onChange={handleChange}
                        placeholder="Describe your organization's follow-up workflows, care continuity goals, or coordination challenges..."
                        aria-invalid={Boolean(errors.challenge)}
                        aria-describedby={errors.challenge ? 'error-challenge' : undefined}
                        className={`mt-1.5 w-full rounded-xl border px-4 py-3 text-sm text-[#182B40] placeholder-[#718096]/60 transition-colors focus:outline-none focus:ring-2 focus:ring-[#3978E8] ${
                          errors.challenge
                            ? 'border-red-500 bg-red-50/40'
                            : 'border-[#182B40]/15 bg-[#F5F8FB]/50 focus:bg-white'
                        }`}
                      />
                      {errors.challenge && (
                        <p
                          id="error-challenge"
                          className="mt-1.5 flex items-center gap-1 text-xs font-medium text-red-600"
                        >
                          <AlertCircle className="h-3.5 w-3.5 shrink-0" />
                          <span>{errors.challenge}</span>
                        </p>
                      )}
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      className="group flex w-full items-center justify-center gap-2 rounded-xl bg-[#3978E8] px-6 py-4 text-base font-semibold text-white shadow-md shadow-[#3978E8]/20 transition-all duration-200 hover:bg-[#2C66D0] hover:shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-[#3978E8] focus-visible:ring-offset-2 cursor-pointer"
                    >
                      <span>Register Interest</span>
                      <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
                    </button>

                    {/* Short Privacy Notice Beneath Form */}
                    <div className="flex items-start gap-2.5 rounded-xl bg-[#F5F8FB] p-3.5 text-xs leading-relaxed text-[#718096]">
                      <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-[#3978E8]" />
                      <p>
                        <strong className="font-semibold text-[#182B40]">Privacy Notice:</strong>{' '}
                        Information provided in this form is used solely to evaluate organizational
                        pilot partnership opportunities. Please do not include any identifiable
                        patient health information or confidential medical records in this form.
                      </p>
                    </div>
                  </form>
                </>
              )}
            </div>

            {/* Mobile-only: Pilot Partnership Explanation (placed under the form on mobile) */}
            <PilotHowItWorksCard className="mt-8 block lg:hidden" />
          </div>
        </div>
      </div>
    </section>
  )
}

