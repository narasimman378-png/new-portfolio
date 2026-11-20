import { PROFILE } from '../../data/portfolio.js'
import resume from '../../assets/narasimman-updated-resume.pdf'

function Roll({ text }) {
  return (
    <span className="inline-flex overflow-hidden leading-[1.15]" aria-label={text}>
      {[...text].map((character, index) => (
        <span key={index} aria-hidden className="relative inline-block">
          <span className="block transition-transform duration-500 group-hover:-translate-y-full" style={{ transitionDelay: `${index * 20}ms` }}>{character}</span>
          <span className="absolute left-0 top-full block text-accent transition-transform duration-500 group-hover:-translate-y-full" style={{ transitionDelay: `${index * 20}ms` }}>{character}</span>
        </span>
      ))}
    </span>
  )
}

export default function Contact() {
  return (
    <section id="contact" className="px-6 pb-16 pt-32 md:px-12">
  <p className="mb-6 text-sm uppercase tracking-[.25em] text-mist">
    Open to new opportunities & collaborations
  </p>

  <a
    href={`mailto:${PROFILE.email}`}
    data-cursor="Email"
    className="group block break-all font-display text-[7.5vw] font-extrabold leading-none md:break-normal md:text-[6.2vw]"
  >
    <Roll text="SAY HELLO!" />
  </a>

  <div className="mt-10 flex flex-wrap items-center gap-6 md:gap-10">
    <a
      href={resume}
      download="Narasimman_Balasubramani_Resume.pdf"
      data-cursor="Download"
      className="group inline-flex items-center gap-3 rounded-full border border-ink/25 px-6 py-3.5 text-sm font-medium uppercase tracking-[.2em] transition-colors duration-300 hover:border-ink hover:bg-ink hover:text-paper"
    >
      <Roll text="Download My Resume" />
      <svg
        className="h-4 w-4 transition-transform duration-300 group-hover:translate-y-0.5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5m0 0l5-5m-5 5V3"
        />
      </svg>
    </a>

    <a
      href="tel:+916374262388"
      data-cursor="Call"
      className="text-sm uppercase tracking-[.2em] text-mist transition-colors hover:text-ink"
    >
      <Roll text="+91 63742 62388" />
    </a>
  </div>

  {/* <footer className="mt-24 flex justify-between border-t border-ink/20 pt-6 text-sm text-mist">
    <span>© {new Date().getFullYear()} {PROFILE.name}</span>
    <span>React · Vite · Tailwind · Three.js</span>
  </footer> */}
</section>
  )
}
