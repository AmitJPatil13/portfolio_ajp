import './index.css'
import { useEffect, useState } from 'react'

const NavLink = ({ href, children, onClick }) => (
  <a href={href} onClick={onClick} className="focus-ring text-sm text-neutral-300 hover:text-white transition-colors">
    {children}
  </a>
)

function App() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [theme, setTheme] = useState('dark')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 4)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {}, [theme])

  const handleContactSubmit = (e) => {
    e.preventDefault()
    const form = e.currentTarget
    const data = new FormData(form)
    const name = data.get('name') || ''
    const email = data.get('email') || ''
    const message = data.get('message') || ''
    const subject = encodeURIComponent(`Portfolio contact from ${name}`)
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`)
    window.location.href = `mailto:amitjpatil13@gmail.com?subject=${subject}&body=${body}`
    form.reset()
  }
  const projects = [
    {
      name: 'AI-Powered Faculty Monitoring Dashboard (2024)',
      tech: 'Next.js, React, TypeScript, Tailwind CSS, Drizzle ORM, PostgreSQL, Neon, Radix UI, Tremor, Recharts, RHF, Zod, PDFMake, jsPDF, pnpm',
      desc: 'Full-stack platform for monitoring faculty performance with automated reports and frontend integration.',
    },
    {
      name: 'Energy Consumption Forecasting Portal (2024)',
      tech: 'Python, Flask, scikit-learn, TensorFlow, Streamlit, Plotly',
      desc: 'Web app to forecast energy consumption with interactive dashboard and backend APIs.',
    },
    {
      name: 'Product Recommendation System Using AI (2025)',
      tech: 'React, JavaScript, CSS3, Node.js, Flask, OpenAI API, scikit-learn, TensorFlow, Pandas, NumPy',
      desc: 'AI-based product recommendation system with collaborative & content-based filtering, React frontend, Flask APIs, deployed on Vercel, unit-tested with Jest.',
    },
  ]
  return (
      <div>
      {/* Header / Navbar */}
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

      <main>
        {/* Hero */}
        <section className="container pt-16 sm:pt-24 pb-12">
          <div className="flex flex-col-reverse md:flex-row items-center gap-10">
            <div className="flex-1">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
                AI-FULL STACK DEVELOPER
              </h1>
              <p className="mt-3 text-neutral-300 max-w-2xl">
                Full-Stack Developer | AI & DS Enthusiast | Building Scalable Applications & AI Solutions
              </p>
              <div className="mt-6 flex gap-3">
                <a href="#contact" className="focus-ring inline-flex items-center rounded-md bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-500 transition-colors">Contact</a>
                <a href="/Updated_Resume_AP.pdf" download className="focus-ring inline-flex items-center rounded-md border border-neutral-700 px-4 py-2 text-sm font-medium text-white hover:bg-neutral-800 transition-colors">Download Resume</a>
              </div>
              <div className="mt-6 flex gap-4 text-sm">
                <NavLink href="https://linkedin.com/in/amitpatil13">LinkedIn</NavLink>
                <NavLink href="https://github.com/AmitJPatil13">GitHub</NavLink>
                <NavLink href="https://leetcode.com/u/amitpatil07">LeetCode</NavLink>
                <NavLink href="mailto:amitjpatil13@gmail.com">Email</NavLink>
              </div>
            </div>
            <div className="w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 rounded-full bg-gradient-to-tr from-indigo-500 to-fuchsia-500 p-[3px]">
              <div className="w-full h-full rounded-full bg-neutral-900/70 flex items-center justify-center text-white text-3xl font-bold">
                AP
              </div>
            </div>
      </div>
        </section>

        {/* About */}
        <section id="about" className="container py-16 scroll-mt-24">
          <h2 className="text-2xl font-semibold text-white">About</h2>
          <p className="mt-4 text-neutral-300 max-w-3xl">
            B.Tech graduate in Artificial Intelligence and Data Science with hands-on full-stack development experience. Proficient in C, C++, Java, Python, JavaScript, React.js, Node.js, Flask, REST APIs, SQL & NoSQL databases. Experienced with Tailwind CSS, CI/CD pipelines, Git version control, and agile team collaboration. Skilled in developing scalable applications, integrating APIs, building AI-driven solutions, and debugging complex problems.
          </p>
        </section>

        {/* Skills */}
        <section id="skills" className="container py-16 scroll-mt-24">
          <h2 className="text-2xl font-semibold text-white">Technical Skills</h2>
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { title: 'Programming Languages', skills: ['C', 'C++', 'Java', 'Python', 'JavaScript'] },
              { title: 'Web & Frameworks', skills: ['React.js', 'Node.js', 'Flask', 'Tailwind CSS'] },
              { title: 'Databases', skills: ['PostgreSQL', 'MySQL', 'MongoDB'] },
              { title: 'ML & DS', skills: ['scikit-learn', 'TensorFlow', 'Pandas', 'NumPy'] },
              { title: 'Tools & Platforms', skills: ['Git', 'CI/CD', 'Vercel'] },
              { title: 'Core Concepts', skills: ['REST APIs', 'Design Patterns', 'Data Structures'] },
            ].map((group) => (
              <div key={group.title} className="rounded-lg border border-neutral-200 dark:border-neutral-800 bg-white/80 dark:bg-neutral-900/60 p-5 hover:border-neutral-300 dark:hover:border-neutral-700 transition-colors">
                <div className="text-neutral-900 dark:text-white font-medium">{group.title}</div>
                <div className="mt-3 flex flex-wrap gap-2">
                  {group.skills.map((s) => (
                    <span key={s} className="rounded-md bg-neutral-100 dark:bg-neutral-800 px-2.5 py-1 text-xs text-neutral-800 dark:text-neutral-200">{s}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Experience */}
        <section id="experience" className="container py-16 scroll-mt-24">
          <h2 className="text-2xl font-semibold text-white">Experience</h2>
          <div className="mt-6 rounded-lg border border-neutral-200 dark:border-neutral-800 bg-white/80 dark:bg-neutral-900/60 p-5">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
              <div className="text-neutral-900 dark:text-white font-medium">Full Stack Developer Intern – Kali-Byte Solutions</div>
              <div className="text-neutral-500 dark:text-neutral-400 text-sm">Jan 2024 – Jun 2024</div>
            </div>
            <ul className="mt-4 list-disc pl-6 text-neutral-700 dark:text-neutral-300 space-y-2">
              <li>Built and deployed full-stack web apps with React.js, Node.js, SQL & NoSQL</li>
              <li>Developed RESTful APIs</li>
              <li>Worked in agile team using Git & CI/CD</li>
              <li>Created responsive UI with Tailwind CSS</li>
            </ul>
          </div>
        </section>

        {/* Projects */}
        <section id="projects" className="container py-16 scroll-mt-24">
          <h2 className="text-2xl font-semibold text-white">Projects</h2>
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((p) => (
              <article key={p.name} className="group overflow-hidden rounded-xl border border-neutral-800 bg-neutral-900/60 hover:border-neutral-700 transition-colors">
                <div className="relative aspect-video w-full overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/30 via-fuchsia-500/20 to-cyan-500/20" />
                  <div className="absolute inset-0 grid place-items-center text-neutral-200 text-sm">Project Preview</div>
                </div>
                <div className="p-5">
                  <h3 className="text-white font-medium leading-snug">{p.name}</h3>
                  <p className="mt-2 text-xs text-neutral-400">{p.tech}</p>
                  <p className="mt-3 text-neutral-300">{p.desc}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Education */}
        <section id="education" className="container py-16 scroll-mt-24">
          <h2 className="text-2xl font-semibold text-white">Education</h2>
          <div className="mt-6 space-y-4">
            <div className="rounded-lg border border-neutral-800 bg-neutral-900/60 p-5">
              <div className="flex items-center justify-between">
                <div className="text-white font-medium">B.Tech – AI & DS, DKTE Society’s TEI, Ichalkaranji</div>
                <div className="text-neutral-400 text-sm">Aug 2022 – Jun 2025 · CGPA: 8.20</div>
              </div>
            </div>
            <div className="rounded-lg border border-neutral-800 bg-neutral-900/60 p-5">
              <div className="flex items-center justify-between">
                <div className="text-white font-medium">Diploma – CSE, Government Polytechnic Miraj</div>
                <div className="text-neutral-400 text-sm">Jun 2019 – Jun 2022 · 88.60%</div>
              </div>
            </div>
          </div>
        </section>

        {/* Certifications & Achievements */}
        <section className="container py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h2 className="text-2xl font-semibold text-white">Certifications</h2>
              <ul className="mt-4 list-disc pl-6 text-neutral-300 space-y-2">
                <li>Java – IIT Bombay (Spoken Tutorial)</li>
                <li>Cyber Security – NPTEL (May 2024)</li>
              </ul>
            </div>
            <div>
              <h2 className="text-2xl font-semibold text-white">Achievements</h2>
              <ul className="mt-4 list-disc pl-6 text-neutral-300 space-y-2">
                <li>3rd Rank – National Level Quiz @ RIT (2022)</li>
                <li>Solved 400+ DSA problems on LeetCode, HackerRank, CodeStudio</li>
              </ul>
            </div>
          </div>
        </section>
      </main>

      {/* Contact */}
      <section id="contact" className="container py-16 scroll-mt-24">
        <h2 className="text-2xl font-semibold text-white">Contact</h2>
        <p className="mt-2 text-neutral-300">Feel free to reach out using the form below or email me directly.</p>
        <form onSubmit={handleContactSubmit} className="mt-6 grid grid-cols-1 gap-4 max-w-xl">
          <div>
            <label htmlFor="name" className="block text-sm text-neutral-300">Name</label>
            <input id="name" name="name" type="text" required className="focus-ring mt-1 w-full rounded-md border border-neutral-800 bg-neutral-900/60 px-3 py-2 text-sm text-white placeholder-neutral-500" placeholder="Your name" />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm text-neutral-300">Email</label>
            <input id="email" name="email" type="email" required className="focus-ring mt-1 w-full rounded-md border border-neutral-800 bg-neutral-900/60 px-3 py-2 text-sm text-white placeholder-neutral-500" placeholder="you@example.com" />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm text-neutral-300">Message</label>
            <textarea id="message" name="message" rows="5" required className="focus-ring mt-1 w-full rounded-md border border-neutral-800 bg-neutral-900/60 px-3 py-2 text-sm text-white placeholder-neutral-500" placeholder="How can I help?" />
          </div>
          <div>
            <button type="submit" className="focus-ring inline-flex items-center rounded-md bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-500 transition-colors">Send Message</button>
          </div>
        </form>
      </section>

      {/* Footer */}
      <footer className="border-t border-neutral-800/60">
        <div className="container py-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div>
            <div className="text-white font-semibold">Get in touch</div>
            <a href="mailto:amitjpatil13@gmail.com" className="focus-ring mt-2 inline-block text-neutral-300 hover:text-white">amitjpatil13@gmail.com</a>
          </div>
          <div className="flex gap-5 text-sm">
            <NavLink href="https://linkedin.com/in/amitpatil13">LinkedIn</NavLink>
            <NavLink href="https://github.com/AmitJPatil13">GitHub</NavLink>
            <NavLink href="https://leetcode.com/u/amitpatil07">LeetCode</NavLink>
          </div>
        </div>
        <div className="py-6 text-center text-xs text-neutral-500">© {new Date().getFullYear()} Amit Patil</div>
      </footer>
    </div>
  )
}

export default App
