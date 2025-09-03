import { socials } from '../data/content'

export default function Hero() {
  return (
    <section className="relative reveal-on-scroll">
      <div className="pointer-events-none absolute inset-0 -z-10 opacity-30 [mask-image:radial-gradient(60%_60%_at_50%_30%,black,transparent)]">
        <div className="absolute -top-20 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-gradient-to-tr from-indigo-600/40 to-fuchsia-500/40 blur-3xl" />
      </div>
      <div className="container pt-16 sm:pt-24 pb-12 flex flex-col-reverse md:flex-row items-center gap-10">
        <div className="flex-1">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight">AI‑FULL STACK DEVELOPER</h1>
          <p className="mt-3 text-neutral-300 max-w-2xl">Full-Stack Developer | AI & DS Enthusiast | Building Scalable Applications & AI Solutions</p>
          <div className="mt-6 flex gap-3">
            <a href="#contact" className="focus-ring btn-primary">Contact</a>
            <a href="/Updated_Resume_AP.pdf" download className="focus-ring inline-flex items-center rounded-md border border-neutral-700 px-4 py-2 text-sm font-medium text-white hover:bg-neutral-800 transition-colors">Download Resume</a>
          </div>
          <div className="mt-6 flex gap-4 text-sm">
            {socials.map((s) => (
              <a key={s.href} href={s.href} className="focus-ring text-neutral-300 hover:text-white transition-colors">{s.label}</a>
            ))}
          </div>
        </div>
        <div className="w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 rounded-full bg-gradient-to-tr from-indigo-500 to-fuchsia-500 p-[3px]">
          <div className="w-full h-full rounded-full bg-neutral-900/70 flex items-center justify-center text-white text-3xl font-bold">AP</div>
        </div>
      </div>
    </section>
  )
}


