import { useEffect, useRef } from 'react'
import { PROJECTS } from '../../data/portfolio.js'
import clamp from '../../utils/clamp.js'

export default function Work() {
  const sectionRef = useRef(null)
  const trackRef = useRef(null)

  useEffect(() => {
    const updateTrack = () => {
      const section = sectionRef.current
      const track = trackRef.current
      if (!section || !track) return
      const rect = section.getBoundingClientRect()
      const progress = clamp(-rect.top / (rect.height - window.innerHeight))
      track.style.transform = `translateX(${-progress * Math.max(0, track.scrollWidth - window.innerWidth)}px)`
    }
    window.addEventListener('scroll', updateTrack, { passive: true })
    window.addEventListener('resize', updateTrack)
    updateTrack()
    return () => {
      window.removeEventListener('scroll', updateTrack)
      window.removeEventListener('resize', updateTrack)
    }
  }, [])

  return (
    <section id="work" ref={sectionRef} className="bg-[#F70D1A] relative h-[420vh] bg-ink text-bone">
      <div className="sticky top-0 flex h-screen flex-col justify-center overflow-hidden">
        <h2 className="mb-10 px-6 font-display text-5xl font-extrabold md:px-12 md:text-7xl">Selected work <span className="text-accent">→</span></h2>
        <div ref={trackRef} className="rv flex gap-8 px-6 will-change-transform md:px-12">
          {PROJECTS.map((project, index) => (
            <article key={project.t} className="group w-[78vw] shrink-0 md:w-[44vw]">
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                data-cursor="View"
                aria-label={`Visit ${project.t} website (opens in a new tab)`}
                className="block rounded-3xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
              >
                <div className="clip h-[45vh] overflow-hidden rounded-3xl" style={{ transitionDelay: `${index * 0.12}s` }}>
                  <img
                    src={project.img}
                    alt={`${project.t} preview`}
                    className="w-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <div className="fade mt-4 block md:flex items-baseline justify-between" style={{ transitionDelay: `${0.4 + index * 0.12}s` }}>
                  <h3 className="font-display text-sm font-extrabold md:text-2xl">{project.t} <span className="text-accent" aria-hidden>↗</span></h3>
                  <span className="text-sm text-bone/70">{project.tag}</span>
                </div>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
