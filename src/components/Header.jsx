import { useEffect, useState } from 'react'

const NavLink = ({ href, children, onClick }) => (
  <a href={href} onClick={onClick} className="focus-ring text-sm text-neutral-300 hover:text-white transition-colors">
    {children}
  </a>
)

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 4)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`sticky top-0 z-40 border-b border-neutral-800/60 backdrop-blur bg-neutral-950/70 transition-shadow ${scrolled ? 'shadow-[0_1px_0_0_rgba(255,255,255,0.04)]' : ''}`}>
      <div className="container flex items-center justify-between py-4">
        <div className="text-white font-semibold">Amit Patil</div>
        <div className="flex items-center gap-3">
          <button aria-label="Toggle navigation" className="focus-ring md:hidden inline-flex items-center rounded-md border border-neutral-800 px-3 py-2 text-sm text-neutral-200 hover:bg-neutral-900/70" onClick={() => setMobileOpen((v) => !v)}>
            {mobileOpen ? 'Close' : 'Menu'}
          </button>
        </div>
        <nav className="hidden md:flex items-center gap-5">
          <NavLink href="#about">About</NavLink>
          <NavLink href="#skills">Skills</NavLink>
          <NavLink href="#experience">Experience</NavLink>
          <NavLink href="#projects">Projects</NavLink>
          <NavLink href="#education">Education</NavLink>
          <NavLink href="#contact">Contact</NavLink>
        </nav>
      </div>
      {mobileOpen && (
        <div className="md:hidden border-t border-neutral-800/60">
          <div className="container py-3 grid gap-3">
            {[
              { href: '#about', label: 'About' },
              { href: '#skills', label: 'Skills' },
              { href: '#experience', label: 'Experience' },
              { href: '#projects', label: 'Projects' },
              { href: '#education', label: 'Education' },
              { href: '#contact', label: 'Contact' },
            ].map((l) => (
              <NavLink key={l.href} href={l.href} onClick={() => setMobileOpen(false)}>{l.label}</NavLink>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}


