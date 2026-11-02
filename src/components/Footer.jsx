import { useState } from 'react'
import { X, ShieldCheck } from 'lucide-react'
import { Logo } from './Logo'

const LEGAL_CONTENT = {
  privacy: {
    title: 'Privacy Policy Overview',
    body: [
      'CareBridge is designed around responsible data stewardship, role-based access control, and patient privacy.',
      'Information submitted through the Pilot Programme interest form on this website is used exclusively to communicate with prospective healthcare partner organizations. Do not submit identifiable patient health information through this website.',
      'Before any clinical or operational deployment with a participating healthcare organization, specific data protection agreements, security controls, retention policies, and applicable regulatory requirements must be established and verified.',
    ],
  },
  terms: {
    title: 'Terms of Use Overview',
    body: [
      'CareBridge is an AI-assisted healthcare coordination platform designed to support healthcare professionals in organizing patient follow-ups and care coordination.',
      'CareBridge does not provide medical diagnosis, autonomous clinical decisions, or treatment recommendations. All clinical decisions remain the responsibility of qualified healthcare professionals.',
      'All dashboard previews, patient timelines, and metrics displayed on this website represent non-identifiable illustrative sample data for demonstration purposes only.',
    ],
  },
}

export function Footer() {
  const [activeLegalModal, setActiveLegalModal] = useState(null)

  return (
    <footer className="bg-[#10243A] text-white border-t border-white/10">
      <div className="mx-auto max-w-7xl px-4 pt-16 pb-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-12">
          {/* Brand Column (5 cols) */}
          <div className="lg:col-span-5">
            <a
              href="#top"
              className="inline-block rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-[#55C9B5]"
            >
              <Logo variant="light" />
            </a>
            <p className="mt-3 font-display text-base font-semibold text-[#55C9B5]">
              Better Care. Beyond the Hospital.
            </p>
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-white/70">
              AI-assisted healthcare coordination platform helping healthcare teams stay connected
              to patients through intelligent follow-ups and coordinated care.
            </p>
          </div>

          {/* Platform Links (2 cols) */}
          <div className="lg:col-span-2">
            <h3 className="font-display text-xs font-bold tracking-wider uppercase text-white/90">
              Platform
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm text-white/70">
              <li>
                <a
                  href="#how-it-works"
                  className="transition-colors hover:text-[#55C9B5] focus:outline-none focus-visible:underline"
                >
                  How It Works
                </a>
              </li>
              <li>
                <a
                  href="#capabilities"
                  className="transition-colors hover:text-[#55C9B5] focus:outline-none focus-visible:underline"
                >
                  Capabilities
                </a>
              </li>
              <li>
                <a
                  href="#who-its-for"
                  className="transition-colors hover:text-[#55C9B5] focus:outline-none focus-visible:underline"
                >
                  Who It&apos;s For
                </a>
              </li>
              <li>
                <a
                  href="#trust"
                  className="transition-colors hover:text-[#55C9B5] focus:outline-none focus-visible:underline"
                >
                  Trust &amp; Safety
                </a>
              </li>
            </ul>
          </div>

          {/* Company Links (3 cols) */}
          <div className="lg:col-span-3">
            <h3 className="font-display text-xs font-bold tracking-wider uppercase text-white/90">
              Company
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm text-white/70">
              <li>
                <a
                  href="#the-care-gap"
                  className="transition-colors hover:text-[#55C9B5] focus:outline-none focus-visible:underline"
                >
                  About CareBridge
                </a>
              </li>
              <li>
                <a
                  href="#pilot"
                  className="transition-colors hover:text-[#55C9B5] focus:outline-none focus-visible:underline"
                >
                  Pilot Programme
                </a>
              </li>
              <li>
                <a
                  href="#pilot"
                  className="transition-colors hover:text-[#55C9B5] focus:outline-none focus-visible:underline"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Legal Links (2 cols) */}
          <div className="lg:col-span-2">
            <h3 className="font-display text-xs font-bold tracking-wider uppercase text-white/90">
              Legal
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm text-white/70">
              <li>
                <button
                  type="button"
                  onClick={() => setActiveLegalModal('privacy')}
                  className="text-left transition-colors hover:text-[#55C9B5] focus:outline-none focus-visible:underline cursor-pointer"
                >
                  Privacy Policy
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => setActiveLegalModal('terms')}
                  className="text-left transition-colors hover:text-[#55C9B5] focus:outline-none focus-visible:underline cursor-pointer"
                >
                  Terms of Use
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Clinical Disclaimer Statement & Copyright */}
        <div className="mt-12 border-t border-white/10 pt-8">
          <div className="flex flex-col justify-between gap-4 lg:flex-row lg:items-center">
            <p className="max-w-2xl text-xs leading-relaxed text-white/65">
              CareBridge is designed to support healthcare coordination and professional review. It
              does not replace qualified medical advice, diagnosis, or treatment.
            </p>
            <p className="text-xs text-white/60 shrink-0">
              Copyright © CareBridge. All rights reserved.
            </p>
          </div>
        </div>
      </div>

      {/* Accessible Modal for Privacy Policy & Terms of Use */}
      {activeLegalModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#10243A]/75 p-4 backdrop-blur-xs"
          role="dialog"
          aria-modal="true"
          aria-labelledby="legal-modal-title"
        >
          <div className="relative w-full max-w-lg rounded-2xl border border-[#182B40]/10 bg-white p-6 text-[#182B40] shadow-2xl sm:p-8">
            <div className="flex items-center justify-between border-b border-[#182B40]/10 pb-4">
              <div className="flex items-center gap-2.5">
                <ShieldCheck className="h-5 w-5 text-[#3978E8]" />
                <h4
                  id="legal-modal-title"
                  className="font-display text-lg font-bold text-[#10243A]"
                >
                  {LEGAL_CONTENT[activeLegalModal].title}
                </h4>
              </div>
              <button
                type="button"
                onClick={() => setActiveLegalModal(null)}
                className="rounded-lg p-1.5 text-[#718096] hover:bg-[#F5F8FB] hover:text-[#10243A] cursor-pointer"
                aria-label="Close dialog"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="mt-4 space-y-3 text-sm leading-relaxed text-[#718096]">
              {LEGAL_CONTENT[activeLegalModal].body.map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </div>

            <div className="mt-6 flex justify-end">
              <button
                type="button"
                onClick={() => setActiveLegalModal(null)}
                className="rounded-xl bg-[#3978E8] px-5 py-2.5 text-sm font-semibold text-white hover:bg-[#2C66D0] cursor-pointer"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </footer>
  )
}

