import { projects } from '../data/content'

export default function Projects() {
  const ordered = [...projects].sort((a, b) => Number(b.featured) - Number(a.featured))
  return (
    <section id="projects" className="container py-16 scroll-mt-24">
      <h2 className="text-2xl font-semibold text-white">Projects</h2>
      <p className="mt-2 text-neutral-400">Selected work showcasing full‑stack and AI projects.</p>
      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
        {ordered.map((p) => (
          <article key={p.name} className="group overflow-hidden rounded-xl border border-neutral-800 bg-neutral-900/60 hover:border-neutral-700 transition-colors">
            <div className="relative aspect-video w-full overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/30 via-fuchsia-500/20 to-cyan-500/20 group-hover:scale-105 transition-transform" />
              <div className="absolute inset-0 grid place-items-center text-neutral-200 text-sm">Project Preview</div>
            </div>
            <div className="p-5">
              <h3 className="text-white font-medium leading-snug">{p.name}</h3>
              <p className="mt-2 text-xs text-neutral-400">{p.tech}</p>
              {p.tags && (
                <div className="mt-3 flex flex-wrap gap-2">
                  {p.tags.slice(0,5).map((t) => (
                    <span key={t} className="chip bg-neutral-800 text-neutral-200">{t}</span>
                  ))}
                </div>
              )}
              <p className="mt-3 text-neutral-300">{p.desc}</p>
              <div className="mt-4 flex gap-3">
                {p.live && (
                  <a href={p.live} className="focus-ring btn-primary px-3 py-1.5 text-xs">View Live</a>
                )}
                {p.repo && (
                  <a href={p.repo} className="focus-ring inline-flex items-center rounded-md border border-neutral-700 px-3 py-1.5 text-xs font-medium text-white hover:bg-neutral-800 transition-colors">GitHub</a>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}


