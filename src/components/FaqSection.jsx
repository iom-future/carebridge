import { useState } from 'react'
import { ChevronDown, HelpCircle } from 'lucide-react'

const FAQ_ITEMS = [
  {
    question: 'What is CareBridge?',
    answer:
      'CareBridge is an AI-assisted healthcare coordination platform designed to help providers organize patient follow-ups, coordinate care activities, and maintain better visibility into the patient journey.',
  },
  {
    question: 'Does CareBridge diagnose patients?',
    answer:
      'No. CareBridge is designed to support coordination and professional review. It is not a replacement for medical diagnosis or clinical judgment.',
  },
  {
    question: 'Who can use CareBridge?',
    answer:
      'The initial platform is intended for healthcare organizations, including clinics, hospitals, primary healthcare centres, and community health programmes.',
  },
  {
    question: 'Does CareBridge replace existing hospital systems?',
    answer:
      "The initial goal is to complement existing workflows and systems where possible. Integration options would depend on the participating organization's infrastructure.",
  },
  {
    question: 'How does AI fit into the platform?',
    answer:
      'AI can assist with organizing information, identifying missing follow-ups, and highlighting patterns or potential concerns for human review.',
  },
  {
    question: 'How is patient information protected?',
    answer:
      'The platform should use appropriate security controls, access permissions, and responsible data handling practices. Specific privacy and regulatory commitments must be established and verified before deployment.',
  },
  {
    question: 'Can our healthcare organization participate in a pilot?',
    answer:
      'Yes. Healthcare organizations interested in evaluating the platform can register their interest through the pilot programme form.',
  },
]

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0)

  const toggleItem = (index) => {
    setOpenIndex((prev) => (prev === index ? -1 : index))
  }

  return (
    <section
      id="faq"
      className="reveal-section relative bg-white py-20 sm:py-28 scroll-mt-20"
    >
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-[#F5F8FB] border border-[#182B40]/10 px-3.5 py-1 text-xs font-bold tracking-wider text-[#3978E8] uppercase">
            FREQUENTLY ASKED QUESTIONS
          </span>
          <h2 className="mt-4 font-display text-3xl font-extrabold tracking-tight text-[#10243A] sm:text-4xl lg:text-[2.6rem] lg:leading-[1.15]">
            Questions About CareBridge?
          </h2>
        </div>

        {/* Clean Accordion FAQ */}
        <div className="mt-12 space-y-3.5">
          {FAQ_ITEMS.map((item, index) => {
            const isOpen = openIndex === index
            const contentId = `faq-answer-${index}`
            const buttonId = `faq-question-${index}`

            return (
              <div
                key={item.question}
                className={`reveal-card overflow-hidden rounded-2xl border transition-all duration-200 ${
                  isOpen
                    ? 'border-[#3978E8]/40 bg-[#F5F8FB]/70 shadow-sm'
                    : 'border-[#182B40]/10 bg-white hover:border-[#182B40]/20'
                }`}
              >
                <h3>
                  <button
                    id={buttonId}
                    type="button"
                    onClick={() => toggleItem(index)}
                    aria-expanded={isOpen}
                    aria-controls={contentId}
                    className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#3978E8] cursor-pointer"
                  >
                    <span className="flex items-center gap-3 font-display text-base font-bold text-[#10243A] sm:text-lg">
                      <HelpCircle
                        className={`h-5 w-5 shrink-0 transition-colors ${
                          isOpen ? 'text-[#3978E8]' : 'text-[#718096]'
                        }`}
                      />
                      <span>{item.question}</span>
                    </span>
                    <span
                      className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg transition-all duration-200 ${
                        isOpen
                          ? 'bg-[#3978E8] text-white rotate-180'
                          : 'bg-[#F5F8FB] text-[#10243A]'
                      }`}
                    >
                      <ChevronDown className="h-4 w-4" />
                    </span>
                  </button>
                </h3>

                <div
                  id={contentId}
                  role="region"
                  aria-labelledby={buttonId}
                  hidden={!isOpen}
                  className={isOpen ? 'block' : 'hidden'}
                >
                  <div className="px-6 pb-6 pt-1 pl-14 text-base leading-relaxed text-[#718096]">
                    {item.answer}
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

