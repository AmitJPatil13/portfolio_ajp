import { socials } from '../data/content'

export default function Hero() {
  return (
    <section className="container pt-16 sm:pt-24 pb-12">
      <div className="flex flex-col-reverse md:flex-row items-center gap-10">
        <div className="flex-1">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">AI-FULL STACK DEVELOPER</h1>
          <p className="mt-3 text-neutral-300 max-w-2xl">Full-Stack Developer | AI & DS Enthusiast | Building Scalable Applications & AI Solutions</p>
          <div className="mt-6 flex gap-3">
            <a href="#contact" className="focus-ring inline-flex items-center rounded-md bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-500 transition-colors">Contact</a>
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


