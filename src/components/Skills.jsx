import { skills } from '../data/content'

export default function Skills() {
  const icons = {
    'React.js': '⚛️', 'React': '⚛️', 'Node.js': '🟢', 'Flask': '🧪', 'Python': '🐍', 'JavaScript': '🟨', 'TypeScript': '🔷', 'PostgreSQL': '🐘', 'MySQL': '🐬', 'MongoDB': '🍃', 'TensorFlow': '🧠', 'scikit-learn': '📈', 'Pandas': '🐼', 'NumPy': '🔢', 'Tailwind CSS': '🌀', 'Git': '🔧', 'CI/CD': '🚀', 'Vercel': '▲', 'REST APIs': '🌐', 'Design Patterns': '🧩', 'Data Structures': '🧱', 'Java': '☕', 'C': '💻', 'C++': '➕',
  }
  const subtitles = {
    'Programming Languages': 'Core languages I work with',
    'Web & Frameworks': 'Frontend and backend frameworks',
    'Databases': 'Relational and NoSQL stores',
    'ML & DS': 'Machine learning and data tools',
    'Tools & Platforms': 'Tooling and deployment',
    'Core Concepts': 'Foundational engineering concepts',
  }
  const withIcon = (name) => (
    <span className="inline-flex items-center gap-1">
      <span aria-hidden>{icons[name] || '•'}</span>
      <span>{name}</span>
    </span>
  )
  return (
    <section id="skills" className="container py-16 scroll-mt-24 reveal-on-scroll">
      <h2 className="text-2xl font-semibold text-white">Technical Skills</h2>
      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {skills.map((group) => (
          <div key={group.title} className="rounded-lg border border-neutral-800 bg-neutral-900/60 p-5 hover:border-neutral-700 transition-colors hover:shadow-[0_8px_24px_rgba(0,0,0,0.25)] transition-shadow">
            <div className="text-white font-medium">{group.title}</div>
            {subtitles[group.title] && (
              <p className="text-xs text-neutral-400 mt-1">{subtitles[group.title]}</p>
            )}
            <div className="mt-3 flex flex-wrap gap-2">
              {group.skills.map((s) => (
                <span key={s} className="rounded-md bg-neutral-800 px-2.5 py-1 text-xs text-neutral-200 hover:bg-neutral-700/80 transition-colors">{withIcon(s)}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}


