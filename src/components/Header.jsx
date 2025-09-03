import { useEffect, useState } from 'react'

const NavLink = ({ href, children, onClick, active }) => {
  const base = "focus-ring text-sm transition-colors underline-offset-4"
  const idle = "text-neutral-300 hover:text-white hover:underline"
  const activeCls = "text-white underline"
  return (
    <a href={href} onClick={onClick} className={`${base} ${active ? activeCls : idle}`}>
      {children}
    </a>
  )
}

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeId, setActiveId] = useState('')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 4)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const sectionIds = ['about','skills','experience','projects','education','contact']
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveId(entry.target.id)
        }
      })
    }, { rootMargin: '0px 0px -60% 0px', threshold: 0.1 })
    sectionIds.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
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
          <NavLink href="#about" active={activeId==='about'}>About</NavLink>
          <NavLink href="#skills" active={activeId==='skills'}>Skills</NavLink>
          <NavLink href="#experience" active={activeId==='experience'}>Experience</NavLink>
          <NavLink href="#projects" active={activeId==='projects'}>Projects</NavLink>
          <NavLink href="#education" active={activeId==='education'}>Education</NavLink>
          <NavLink href="#contact" active={activeId==='contact'}>Contact</NavLink>
        </nav>
      </div>
      {mobileOpen && (
        <div className="md:hidden border-t border-neutral-800/60">
          <div className="container py-3 grid gap-3">
            {[
              { href: '#about', label: 'About', id:'about' },
              { href: '#skills', label: 'Skills', id:'skills' },
              { href: '#experience', label: 'Experience', id:'experience' },
              { href: '#projects', label: 'Projects', id:'projects' },
              { href: '#education', label: 'Education', id:'education' },
              { href: '#contact', label: 'Contact', id:'contact' },
            ].map((l) => (
              <NavLink key={l.href} href={l.href} active={activeId===l.id} onClick={() => setMobileOpen(false)}>{l.label}</NavLink>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}


