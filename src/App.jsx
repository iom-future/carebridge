import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { ProblemSection } from './components/ProblemSection'
import { HowItWorks } from './components/HowItWorks'
import { Capabilities } from './components/Capabilities'
import { IntelligenceLoop } from './components/IntelligenceLoop'
import { Testimonials } from './components/Testimonials'
import { TrustSection } from './components/TrustSection'
import { PilotSection } from './components/PilotSection'
import { FaqSection } from './components/FaqSection'
import { FinalCta } from './components/FinalCta'
import { Footer } from './components/Footer'

gsap.registerPlugin(ScrollTrigger)

export function App() {
  const rootRef = useRef(null)

  useEffect(() => {
    // Respect user reduced-motion preferences
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion) return

    const handleLoad = () => ScrollTrigger.refresh()
    window.addEventListener('load', handleLoad)

    const ctx = gsap.context(() => {
      // 1. Subtle Hero entrance animation
      gsap.fromTo(
        '.hero-animate',
        { y: 18, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          stagger: 0.1,
          ease: 'power2.out',
        }
      )

      // 2. Scroll-triggered section reveals
      const sections = gsap.utils.toArray('.reveal-section')
      sections.forEach((section) => {
        const cards = section.querySelectorAll('.reveal-card')
        if (cards.length > 0) {
          gsap.fromTo(
            cards,
            { y: 22, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 0.65,
              stagger: 0.08,
              ease: 'power2.out',
              scrollTrigger: {
                trigger: section,
                start: 'top 82%',
                once: true,
              },
            }
          )
        }
      })

      // 3. Continuous CareBridge Intelligence Loop rotation
      gsap.to('.loop-orbit-ring', {
        rotation: 360,
        transformOrigin: '50% 50%',
        duration: 36,
        repeat: -1,
        ease: 'none',
      })
    }, rootRef)

    return () => {
      window.removeEventListener('load', handleLoad)
      ctx.revert()
    }
  }, [])

  return (
    <div ref={rootRef} className="min-h-screen flex flex-col bg-white text-[#182B40]">
      {/* Skip to main content link for keyboard accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[60] focus:rounded-xl focus:bg-[#10243A] focus:px-4 focus:py-2.5 focus:text-sm focus:font-semibold focus:text-white focus:shadow-lg"
      >
        Skip to main content
      </a>

      <Navbar />

      <main id="main-content" className="flex-1">
        <Hero />
        <ProblemSection />
        <HowItWorks />
        <Capabilities />
        <IntelligenceLoop />
        <Testimonials />
        <TrustSection />
        <PilotSection />
        <FaqSection />
        <FinalCta />
      </main>

      <Footer />
    </div>
  )
}

export default App
