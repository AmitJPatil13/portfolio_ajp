import './index.css'
import { useEffect, useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Services from './components/Services'
import Skills from './components/Skills'
import Projects from './components/Projects'
import { About, Experience, Education, CertsAchievements, Contact } from './components/Sections'

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

  const handleContactSubmit = async (e) => {
    e.preventDefault()
    const form = e.currentTarget
    const data = new FormData(form)
    const name = data.get('name') || ''
    const email = data.get('email') || ''
    const message = data.get('message') || ''

    // If you set a Formspree endpoint, we post to it; else fallback to mailto
    const formspreeEndpoint = '' // e.g., 'https://formspree.io/f/xxxxxxx'
    if (formspreeEndpoint) {
      try {
        const res = await fetch(formspreeEndpoint, {
          method: 'POST',
          headers: { 'Accept': 'application/json' },
          body: data,
        })
        if (res.ok) {
          alert('Message sent! I will get back to you soon.')
          form.reset()
          return
        }
      } catch (_) {}
    }

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
      <Header />

      <main>
        <Hero />

        <About />
        <Services />

        <Skills />

        <Experience />

        <Projects />

        <Education />

        <CertsAchievements />
      </main>

      <Contact onSubmit={handleContactSubmit} />

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
