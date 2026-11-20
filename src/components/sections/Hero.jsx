import { PROFILE } from '../../data/portfolio.js'
import Banner from '../../assets/profile.png'

const Line = ({ children, delay = 0 }) => (
  <span className="block overflow-hidden pb-[.08em]">
    <span className="line" style={{ transitionDelay: `${delay}s` }}>{children}</span>
  </span>
)

export default function Hero({ go }) {
  return (
    <section id="top" className={`relative min-h-screen px-6 pb-16 pt-28 md:px-12 ${go ? 'go' : ''}`}>
      <p className="fade mb-4 text-sm uppercase tracking-[.25em] text-mist" style={{ transitionDelay: '1.4s' }}>{PROFILE.role} · Front End Developer</p>
      <h1 className="font-display text-[14.5vw] font-extrabold leading-[.9] tracking-tight" aria-label={PROFILE.name}>
        <Line delay={0.9}>{PROFILE.name}</Line>
      </h1>
      <div className="mt-10 grid items-end gap-10 md:grid-cols-2">
        <div className="fade" style={{ transitionDelay: '1.5s' }}>
          <p className="max-w-md text-lg text-mist"> Elevating brands through immersive WordPress experiences. I build engaging, growth-focused websites that turn visitors into loyal customers </p>
          <a href="#work" data-cursor="Go" className="mt-8 inline-block rounded-full bg-ink px-8 py-4 text-sm font-medium text-bone transition hover:bg-accent hover:text-ink">See my work</a>
        </div>
        <div className="relative h-[42vh] overflow-hidden rounded-3xl bg-sand">
          <div className="clip absolute inset-0">
            <div className="absolute inset-[-10%]" style={{ transform: 'translateY(calc(var(--sy) * 0.12px)) scale(1.1)' }}>
              <img
                src={Banner}
                alt={`${PROFILE.name} profile portrait`}
                className="h-full w-full object-cover object-top"
                loading="eager"
                decoding="async"
              />
            </div>
          </div>
          <svg viewBox="0 0 100 100" className="absolute right-4 top-4 h-28 w-28 animate-spin-slow" aria-hidden="true">
            <defs><path id="ring" d="M50,50 m-38,0 a38,38 0 1,1 76,0 a38,38 0 1,1 -76,0" /></defs>
            <text className="font-bold" fontSize="10.5" fill="#111" letterSpacing="2"><textPath href="#ring">4 YEARS EXPERIENCE • 4 YEARS EXPERIENCE •</textPath></text>
          </svg>
        </div>
      </div>
    </section>
  )
}
