'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { label: 'Método',     href: '/#metodo' },
  { label: 'Resultados', href: '/#resultados' },
  { label: 'FAQ',        href: '/#faq' },
]

export default function Navbar() {
  const pathname = usePathname()
  const [open, setOpen]         = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => { setOpen(false) }, [pathname])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const resolvedLinks = navLinks.map((l) => ({
    ...l,
    href: pathname === '/' ? l.href.replace('/', '') : l.href,
  }))

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-200"
      style={{
        background: open ? '#FAFAF8' : 'rgba(250,250,248,0.95)',
        backdropFilter: open ? 'none' : 'blur(12px)',
        WebkitBackdropFilter: open ? 'none' : 'blur(12px)',
        borderBottom: scrolled || open ? '1px solid #E5E5E5' : '1px solid transparent',
      }}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between gap-8">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 shrink-0" aria-label="RobotEdge — inicio">
          <div
            className="w-8 h-8 flex items-center justify-center font-bold text-sm"
            style={{ background: '#111111', color: '#FAFAF8', fontFamily: 'var(--font-display)' }}
          >
            RE
          </div>
          <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '15px', letterSpacing: '-0.02em' }}>
            Robot<span style={{ color: '#F97316' }}>Edge</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1 flex-1" aria-label="Navegación principal">
          {resolvedLinks.map((l) => (
            <Link
              key={l.label}
              href={l.href}
              className="px-4 py-2 text-sm font-medium transition-colors rounded-md hover:bg-black/[0.04]"
              style={{ fontFamily: 'var(--font-display)', color: '#555555' }}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        {/* Desktop CTAs */}
        <div className="hidden md:flex items-center gap-3 shrink-0">
          <Link
            href="/blog"
            className="px-4 py-2 text-sm font-medium rounded-md transition-colors"
            style={{ fontFamily: 'var(--font-display)', color: '#111111', border: '1px solid #E5E5E5' }}
            onMouseEnter={(e) => (e.currentTarget.style.background = '#F5F5F3')}
            onMouseLeave={(e) => (e.currentTarget.style.background = 'transparent')}
          >
            Blog
          </Link>
          <Link
            href="#guia-gratuita"
            className="px-4 py-2 text-sm font-semibold rounded-md text-white transition-opacity hover:opacity-90"
            style={{ fontFamily: 'var(--font-display)', background: '#F97316' }}
          >
            Empezar →
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex items-center justify-center w-10 h-10 rounded-md transition-colors hover:bg-black/[0.05]"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={open}
          style={{ color: '#111111' }}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <nav
          className="md:hidden px-6 pb-8 pt-2 flex flex-col"
          style={{ borderTop: '1px solid #E5E5E5' }}
          aria-label="Menú móvil"
        >
          {resolvedLinks.map((l) => (
            <Link
              key={l.label}
              href={l.href}
              className="py-3.5 text-sm font-medium transition-colors"
              style={{ borderBottom: '1px solid #F0F0EE', color: '#111111', fontFamily: 'var(--font-display)' }}
            >
              {l.label}
            </Link>
          ))}
          <div className="flex flex-col gap-3 pt-5">
            <Link
              href="/blog"
              className="block text-center text-sm font-medium py-3 px-6 rounded-md"
              style={{ border: '1px solid #E5E5E5', fontFamily: 'var(--font-display)', color: '#111111' }}
            >
              Blog
            </Link>
            <Link
              href="#guia-gratuita"
              className="block text-center text-sm font-semibold py-3 px-6 rounded-md text-white"
              style={{ background: '#F97316', fontFamily: 'var(--font-display)' }}
            >
              Empezar →
            </Link>
          </div>
        </nav>
      )}
    </header>
  )
}
