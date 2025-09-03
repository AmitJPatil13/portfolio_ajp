import { projects } from '../data/content'

export default function Projects() {
  return (
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
  )
}


