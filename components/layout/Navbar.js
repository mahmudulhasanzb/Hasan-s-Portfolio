'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { FiGithub, FiDownload, FiMenu, FiX } from 'react-icons/fi'

const links = [
  { href: '/#about', label: 'About' },
  { href: '/#projects', label: 'Projects' },
  { href: '/#skills', label: 'Skills' },
  { href: '/blog', label: 'Blog' },
  { href: '/#contact', label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [visible, setVisible] = useState(true)
  const [lastY, setLastY] = useState(0)
  const [mobileOpen, setMobileOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY
      setScrolled(y > 40)
      setVisible(y < lastY || y < 80)
      setLastY(y)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [lastY])

  return (
    <>
      <header style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
        transform: visible ? 'translateY(0)' : 'translateY(-100%)',
        transition: 'transform 0.3s cubic-bezier(0.4,0,0.2,1), background 0.3s, border-color 0.3s',
        background: scrolled ? 'rgba(9,9,11,0.8)' : 'transparent',
        backdropFilter: scrolled ? 'blur(20px) saturate(150%)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(20px) saturate(150%)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(124,58,237,0.2)' : '1px solid transparent',
      }}>
        <nav style={{ maxWidth: 1100, margin: '0 auto', padding: '0 2rem', height: 64, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <Link href="/" style={{ textDecoration: 'none' }}>
            <span style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 22, background: 'linear-gradient(135deg, #fff, #A78BFA)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', letterSpacing: '-0.02em' }}>MH.</span>
          </Link>

          {/* Desktop links */}
          <div className="desk-nav" style={{ display: 'flex', alignItems: 'center', gap: 2, background: scrolled ? 'rgba(255,255,255,0.03)' : 'transparent', border: scrolled ? '1px solid rgba(255,255,255,0.06)' : '1px solid transparent', borderRadius: 40, padding: '4px 8px', transition: 'all 0.3s' }}>
            {links.map(({ href, label }) => (
              <Link key={href} href={href} style={{
                fontFamily: 'var(--font-body)', fontSize: 13, fontWeight: 500, textDecoration: 'none',
                padding: '6px 14px', borderRadius: 40,
                color: pathname === href ? '#fff' : 'var(--text-2)',
                background: pathname === href ? 'rgba(124,58,237,0.2)' : 'transparent',
                transition: 'all 0.2s',
              }}
              onMouseEnter={e => { if (pathname !== href) e.currentTarget.style.color = '#fff' }}
              onMouseLeave={e => { if (pathname !== href) e.currentTarget.style.color = 'var(--text-2)' }}
              >{label}</Link>
            ))}
          </div>

          {/* Desktop right */}
          <div className="desk-nav" style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <a href="https://github.com/mahmudulhasanzb" target="_blank" rel="noopener noreferrer"
              style={{ color: 'var(--text-3)', transition: 'color 0.2s', display: 'flex' }}
              onMouseEnter={e => e.currentTarget.style.color = '#fff'}
              onMouseLeave={e => e.currentTarget.style.color = 'var(--text-3)'}
            ><FiGithub size={18} /></a>
            <a href="/resume.pdf" download style={{
              display: 'inline-flex', alignItems: 'center', gap: 6,
              fontFamily: 'var(--font-body)', fontSize: 12, fontWeight: 500,
              color: 'var(--purple-light)', textDecoration: 'none',
              border: '1px solid rgba(124,58,237,0.4)', borderRadius: 8,
              padding: '7px 14px', transition: 'all 0.2s',
              background: 'rgba(124,58,237,0.05)',
            }}
            onMouseEnter={e => { e.currentTarget.style.background = 'rgba(124,58,237,0.15)'; e.currentTarget.style.borderColor = 'rgba(124,58,237,0.7)' }}
            onMouseLeave={e => { e.currentTarget.style.background = 'rgba(124,58,237,0.05)'; e.currentTarget.style.borderColor = 'rgba(124,58,237,0.4)' }}
            ><FiDownload size={13} /> Resume</a>
          </div>

          {/* Mobile hamburger */}
          <button className="mob-nav" onClick={() => setMobileOpen(!mobileOpen)}
            style={{ background: 'none', border: 'none', color: 'var(--text)', cursor: 'pointer', padding: 4 }}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <FiX size={22} /> : <FiMenu size={22} />}
          </button>
        </nav>

        {/* Mobile drawer */}
        {mobileOpen && (
          <div className="mob-nav" style={{ background: 'rgba(9,9,11,0.97)', backdropFilter: 'blur(20px)', borderTop: '1px solid rgba(124,58,237,0.2)', padding: '1rem 2rem 1.5rem' }}>
            {links.map(({ href, label }) => (
              <Link key={href} href={href} onClick={() => setMobileOpen(false)} style={{
                display: 'block', padding: '0.75rem 0', fontSize: 15, fontWeight: 500,
                textDecoration: 'none', borderBottom: '1px solid rgba(255,255,255,0.05)',
                color: pathname === href ? 'var(--purple-light)' : 'var(--text-2)',
              }}>{label}</Link>
            ))}
            <a href="/resume.pdf" download style={{ display: 'inline-flex', alignItems: 'center', gap: 6, marginTop: '1rem', color: 'var(--purple-light)', fontSize: 13, textDecoration: 'none', border: '1px solid rgba(124,58,237,0.4)', borderRadius: 8, padding: '8px 16px', background: 'rgba(124,58,237,0.05)' }}>
              <FiDownload size={13} /> Download Resume
            </a>
          </div>
        )}
      </header>

      <style>{`
        @media (min-width: 640px) { .mob-nav { display: none !important; } }
        @media (max-width: 639px) { .desk-nav { display: none !important; } }
      `}</style>
    </>
  )
}
