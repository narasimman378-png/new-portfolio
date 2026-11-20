import { PROFILE } from '../../data/portfolio.js'

function Footer() {
  return (
    <footer className="bg-ink px-6 pb-8 pt-24 text-bone md:px-12">
      <h2 className="rv font-display text-5xl font-extrabold md:text-7xl">Stay in <span className="text-accent">touch</span></h2>
      <div className="mt-16 grid gap-14 md:grid-cols-[1fr_1fr_auto]">
        <div className="rv">
          <p className="mb-4 text-sm uppercase tracking-[.25em] text-bone/60">Email & phone</p>
          <a href={`mailto:${PROFILE.email}`} className="group flex items-center justify-between gap-4 border-t border-bone/20 py-5">
            <span className="flex min-w-0 items-center gap-4">
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-bone/30" aria-hidden>@</span>
              <span className="break-all">{PROFILE.email}</span>
            </span>
            <span className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" aria-hidden>↗</span>
          </a>


          <a href={`tel:+91 6374262388`} className="group flex items-center justify-between gap-4 border-t border-bone/20 py-5">
            <span className="flex min-w-0 items-center gap-4">
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-bone/30" aria-hidden>Ph.</span>
              <span className="break-all">+91 6374262388</span>
            </span>
            <span className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" aria-hidden>↗</span>
          </a>

        </div>
        <div className="rv" style={{ transitionDelay: '.1s' }}>
          <p className="mb-4 text-sm uppercase tracking-[.25em] text-bone/60">Social Media</p>
          {[
            { label: 'Github', link: "https://github.com/narasimman378-png" },
            { label: 'Linkedin', link: "https://www.linkedin.com/in/narasimman-balasubramani-614bb6185/" },
            { label: 'Instagram', link: "#" },
            { label: 'Facebook', link: "#" },
            { label: 'WhatsApp', link: "https://wa.me/916374262388" }
          ].map((social) => (
            <a
              key={social.label}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex justify-between border-t border-bone/20 py-3"
            >
              <span>{social.label}</span>
              <span className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" aria-hidden>↗</span>
            </a>
          ))}
        </div>
        <div className="rv flex md:items-end" style={{ transitionDelay: '.2s' }}>
          <a href="#top" className="group grid h-28 w-28 place-items-center rounded-full border border-bone/30 text-sm transition hover:border-accent hover:bg-accent hover:text-ink" aria-label="Back to top">
            <span className="text-center leading-tight"><span className="block text-2xl transition-transform duration-300 group-hover:-translate-y-1" aria-hidden>↑</span>Top</span>
          </a>
        </div>
      </div>
      <div className="mt-20 flex flex-col justify-between gap-2 border-t border-bone/20 pt-6 text-sm text-bone/60 md:flex-row">
        <span>© {new Date().getFullYear()} {PROFILE.name}. All rights reserved.</span>
        <span>Developed By Narasimman</span>
      </div>
    </footer>
  )
}

export default Footer