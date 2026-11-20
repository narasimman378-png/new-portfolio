const Line = ({ children }) => (
    <span className="block overflow-hidden pb-[.08em]">
        <span className="line">{children}</span>
    </span>
)

function Education() {
    const EDUCATION = [
        { year: '[ 2020 – 2024 ]', deg: '[ BCA - Computer Applications ]', school: '[ Kongunadu College of Arts and Science ]', note: '[ City : Coimbatore ]' },

        { year: '[ 2014 - 2016 ]', deg: '[ Accountancy and Computer Science ]', school: '[ Kamalanathan Memorial Higher Secondary School ]', note: '[ City : Coimbatore ]' },
        
        { year: '[ 2022 ]', deg: '[ Fundamentals of Digital Marketing ]', school: '[ Google Certification ]', note: '[ Digital Marketing ]' },
    ]
    return (
        <section id="education" className="px-6 pt-20 pb-20 md:px-12 py-28">
            <h2 className="rv mb-16 font-display text-5xl font-extrabold md:text-7xl"><Line>Education</Line></h2>
            <div className="border-b border-ink/20">
                {EDUCATION.map((e, i) => (
                    <div key={e.deg} className="rv" style={{ transitionDelay: `${i * 0.1}s` }}>
                        <div data-cursor="" className="group relative overflow-hidden border-t border-ink/20">
                            <span aria-hidden className="absolute inset-0 origin-bottom scale-y-0 bg-ink transition-transform duration-500 ease-[cubic-bezier(.7,0,.2,1)] group-hover:scale-y-100" />
                            <div className="relative grid gap-3 px-2 py-8 transition-colors duration-500 group-hover:text-bone md:grid-cols-[220px_1.5fr_1fr] md:px-6">

                                <span className="font-display text-1xl font-extrabold text-accent md:text-2xl">{e.year}

                                </span>

                                <div>
                                    <h3 className="font-display text-2xl font-extrabold md:text-3xl">{e.deg}</h3>
                                    <p className="mt-1 opacity-70">{e.school}</p>
                                </div>

                                <p className="opacity-70 md:text-right">{e.note}</p>

                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Education