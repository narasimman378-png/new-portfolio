import { useEffect, useRef } from 'react'
import clamp from '../../utils/clamp.js'

const Line = ({ children }) => (
    <span className="block overflow-hidden pb-[.08em]">
        <span className="line">{children}</span>
    </span>
)

function Experience() {

    const EXPERIENCE = [
        { when: '05-02-2024 to 10-04-2026', role: 'WordPress Developer', org: '[Bright Bridge Infotech Pvt Ltd]', pts: ['[Website Development and Maintenance]', 'In this role, I specialized in building modern, high-performance web applications by combining the flexibility of WordPress with the power of React.js. I focused on creating seamless, dynamic user interfaces and robust backend integrations.'] },

        { when: '15-10-2021 to 31-01-2024', role: 'WordPress Developer', org: '[Technox Technologies]', pts: ['[Website Development and Maintenance]', 'As a WordPress Developer, I specialized in building, customizing, and maintaining high-performance websites. I focused on delivering scalable solutions that combined clean code with excellent user experiences.'] },

        { when: '01-06-2020 to 31-04-2021', role: 'Web Designer', org: '[Gravity Inno Solutions]', pts: ['As a Web Designer at Gravity Inno Solutions, I focused on creating visually engaging and highly functional digital experiences.My role bridged the gap between creative design and technical implementation.'] },
    ]

    const ref = useRef(null), line = useRef(null)
    useEffect(() => {
        const f = () => {
            const s = ref.current, l = line.current
            if (!s || !l) return
            const r = s.getBoundingClientRect()
            l.style.transform = `scaleY(${clamp((innerHeight * 0.65 - r.top) / r.height)})`
            s.querySelectorAll('[data-dot]').forEach((d) => { d.style.background = d.getBoundingClientRect().top < innerHeight * 0.65 ? '#FF4D1F' : '#DDD6C8' })
        }
        window.addEventListener('scroll', f, { passive: true }); f()
        return () => window.removeEventListener('scroll', f)
    }, [])
    return (
        <section id="experience" className="bg-sand px-6 pt-20 pb-20 md:px-12 py-28">
            <div className="grid gap-12 md:grid-cols-[1fr_2fr]">
                <h2 className="rv font-display text-4xl font-extrabold md:sticky md:top-28 md:self-start md:text-7xl"><Line>Work</Line><Line d={0.1}>experience</Line></h2>
                <ol ref={ref} className="relative pl-10">
                    <span aria-hidden className="absolute left-[6px] top-0 h-full w-px bg-ink/20" />
                    <span aria-hidden ref={line} className="absolute left-[6px] top-0 h-full w-px origin-top scale-y-0 bg-accent" />
                    {EXPERIENCE.map((e) => (
                        <li key={e.role + e.when} className="rv relative pb-16 last:pb-0">
                            <span data-dot aria-hidden className="absolute -left-10 top-2 h-3.5 w-3.5 rounded-full border-2 border-ink transition-colors duration-500" />
                            <p className="fade text-sm text-mist">{e.when}</p>
                            <h3 className="fade font-display text-2xl font-extrabold md:text-4xl" style={{ transitionDelay: '.1s' }}>{e.role}</h3>
                            <p className="fade mt-1 text-lg text-[#fe4e36]" style={{ transitionDelay: '.18s' }}>{e.org}</p>
                            <ul className="fade mt-4 list-disc space-y-1 pl-5 text-mist" style={{ transitionDelay: '.26s' }}>{e.pts.map((p) => <li key={p}>{p}</li>)}</ul>
                        </li>
                    ))}
                </ol>
            </div>
        </section>
    )
}

export default Experience