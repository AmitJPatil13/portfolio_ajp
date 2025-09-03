import { skills } from '../data/content'

export default function Skills() {
  return (
    <section id="skills" className="container py-16 scroll-mt-24">
      <h2 className="text-2xl font-semibold text-white">Technical Skills</h2>
      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {skills.map((group) => (
          <div key={group.title} className="rounded-lg border border-neutral-800 bg-neutral-900/60 p-5 hover:border-neutral-700 transition-colors">
            <div className="text-white font-medium">{group.title}</div>
            <div className="mt-3 flex flex-wrap gap-2">
              {group.skills.map((s) => (
                <span key={s} className="rounded-md bg-neutral-800 px-2.5 py-1 text-xs text-neutral-200">{s}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}


