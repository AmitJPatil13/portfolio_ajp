export function About() {
  return (
    <section id="about" className="container py-16 scroll-mt-24">
      <h2 className="text-2xl font-semibold text-white">About</h2>
      <p className="mt-4 text-neutral-300 max-w-3xl">
        B.Tech graduate in Artificial Intelligence and Data Science with hands-on full-stack development experience. Proficient in C, C++, Java, Python, JavaScript, React.js, Node.js, Flask, REST APIs, SQL & NoSQL databases. Experienced with Tailwind CSS, CI/CD pipelines, Git version control, and agile team collaboration. Skilled in developing scalable applications, integrating APIs, building AI-driven solutions, and debugging complex problems.
      </p>
    </section>
  )
}

export function Experience() {
  return (
    <section id="experience" className="container py-16 scroll-mt-24">
      <h2 className="text-2xl font-semibold text-white">Experience</h2>
      <div className="mt-6 rounded-lg border border-neutral-800 bg-neutral-900/60 p-5">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
          <div className="text-white font-medium">Full Stack Developer Intern – Kali-Byte Solutions</div>
          <div className="text-neutral-400 text-sm">Jan 2024 – Jun 2024</div>
        </div>
        <ul className="mt-4 list-disc pl-6 text-neutral-300 space-y-2">
          <li>Built and deployed full-stack web apps with React.js, Node.js, SQL & NoSQL</li>
          <li>Developed RESTful APIs</li>
          <li>Worked in agile team using Git & CI/CD</li>
          <li>Created responsive UI with Tailwind CSS</li>
        </ul>
      </div>
    </section>
  )
}

export function Education() {
  return (
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
  )
}

export function CertsAchievements() {
  return (
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
  )
}

export function Contact({ onSubmit }) {
  return (
    <section id="contact" className="container py-16 scroll-mt-24">
      <h2 className="text-2xl font-semibold text-white">Contact</h2>
      <p className="mt-2 text-neutral-300">Feel free to reach out using the form below or email me directly.</p>
      <form onSubmit={onSubmit} className="mt-6 grid grid-cols-1 gap-4 max-w-xl">
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
  )
}


