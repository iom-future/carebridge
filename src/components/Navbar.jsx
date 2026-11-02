import { useState, useEffect } from 'react'
import { Menu, X, ArrowRight } from 'lucide-react'
import { Logo } from './Logo'

const NAV_LINKS = [
  { label: 'Platform', href: '#platform' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Capabilities', href: '#capabilities' },
  { label: "Who It's For", href: '#who-its-for' },
  { label: 'FAQ', href: '#faq' },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('')

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 16)

      // Determine active section for subtle indicator
      const sections = ['platform', 'how-it-works', 'capabilities', 'who-its-for', 'trust', 'pilot', 'faq']
      const scrollPosition = window.scrollY + 140

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId)
        if (el) {
          const top = el.offsetTop
          const height = el.offsetHeight
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(`#${sectionId}`)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile menu on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false)
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [mobileMenuOpen])

  const handleNavClick = () => {
    setMobileMenuOpen(false)
  }

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? 'bg-white/90 backdrop-blur-md border-b border-[#182B40]/8 shadow-[0_4px_24px_-6px_rgba(16,36,58,0.06)]'
          : 'bg-[#F5F8FB]/80 backdrop-blur-sm border-b border-transparent'
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3.5 sm:px-6 lg:px-8">
        {/* Brand Logo */}
        <a
          href="#top"
          className="group rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-[#3978E8] focus-visible:ring-offset-2"
          aria-label="CareBridge — Better Care. Beyond the Hospital."
        >
          <Logo variant="dark" />
        </a>

        {/* Desktop Navigation Links */}
        <nav aria-label="Main Navigation" className="hidden md:flex items-center gap-1 lg:gap-2">
          {NAV_LINKS.map((item) => {
            const isActive = activeSection === item.href
            return (
              <a
                key={item.label}
                href={item.href}
                className={`relative rounded-lg px-3.5 py-2 text-sm font-medium transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#3978E8] ${
                  isActive
                    ? 'text-[#3978E8] bg-[#3978E8]/8'
                    : 'text-[#182B40] hover:text-[#3978E8] hover:bg-[#182B40]/4'
                }`}
              >
                {item.label}
              </a>
            )
          })}
        </nav>

        {/* Primary CTA */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="#pilot"
            className="group inline-flex items-center gap-2 rounded-xl bg-[#3978E8] px-5 py-2.5 text-sm font-semibold text-white shadow-sm shadow-[#3978E8]/20 transition-all duration-200 hover:bg-[#2C66D0] hover:shadow-md hover:shadow-[#3978E8]/25 active:scale-[0.99] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#3978E8] focus-visible:ring-offset-2"
          >
            <span>Partner With Us</span>
            <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="inline-flex items-center justify-center rounded-xl p-2.5 text-[#182B40] transition-colors hover:bg-[#182B40]/5 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#3978E8] md:hidden"
          aria-expanded={mobileMenuOpen}
          aria-controls="mobile-navigation-menu"
          aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
        >
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Collapsible Mobile Navigation Menu */}
      {mobileMenuOpen && (
        <div
          id="mobile-navigation-menu"
          className="border-t border-[#182B40]/10 bg-white px-4 pt-3 pb-6 shadow-xl md:hidden"
        >
          <nav aria-label="Mobile Navigation" className="flex flex-col space-y-1.5">
            {NAV_LINKS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={handleNavClick}
                className="flex items-center justify-between rounded-xl px-4 py-3 text-base font-medium text-[#182B40] transition-colors hover:bg-[#F5F8FB] hover:text-[#3978E8]"
              >
                <span>{item.label}</span>
                <ArrowRight className="h-4 w-4 text-[#718096]" />
              </a>
            ))}
            <div className="pt-3 mt-2 border-t border-[#182B40]/10">
              <a
                href="#pilot"
                onClick={handleNavClick}
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#3978E8] px-5 py-3.5 text-base font-semibold text-white shadow-sm shadow-[#3978E8]/20 transition-colors hover:bg-[#2C66D0]"
              >
                <span>Partner With Us</span>
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}

