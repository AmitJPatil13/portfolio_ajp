import { services } from '../data/content'

export default function Services() {
  return (
    <section id="services" className="container py-16 scroll-mt-24 reveal-on-scroll">
      <h2 className="text-2xl font-semibold text-white">Services</h2>
      <p className="mt-2 text-neutral-400">How I can help your team ship faster and smarter.</p>
      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {services.map((s) => (
          <div key={s.title} className="rounded-lg border border-neutral-800 bg-neutral-900/60 p-5 hover:border-neutral-700 transition-colors">
            <div className="text-white font-medium">{s.title}</div>
            <p className="mt-2 text-sm text-neutral-300">{s.desc}</p>
            <a href="#contact" className="focus-ring btn-primary mt-4 inline-flex">Let’s talk</a>
          </div>
        ))}
      </div>
    </section>
  )
}


