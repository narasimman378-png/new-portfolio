const Line = ({ children }) => (
  <span className="block overflow-hidden pb-[.08em]">
    <span className="line">{children}</span>
  </span>
)

function Skills() {
  const SKILLS = [
    ['Languages', [['WordPress', 95], ['HTML & CSS', 88], ['Bootstrap', 80], ['Shopify', 60], ['Tailwind CSS', 92], ['JavaScript', 75], ['React', 80], ['TypeScript', 60], ['Node.js', 50] ]],
    ['Tools & more', [['ACF', 85], ['WP Bakery', 85], ['Git & GitHub', 80], ['Responsive design', 90], ['WooCommerce', 85], ['Elementor', 80], ['SEO', 65], ['Performance marketing', 50], ['MongoDB', 40] ]],
  ]

  return (
    <section id="skills" className="px-6 pt-20 pb-20 md:px-12 py-28">
      <h2 className="rv mb-16 font-display text-3xl font-extrabold md:text-7xl"><Line>Skills <span className="text-accent">&amp;</span> tools</Line></h2>
      <div className="grid gap-16 md:grid-cols-2">
        {SKILLS.map(([group, items]) => (
          <div key={group} className="rv">
            <h3 className="fade mb-8 font-display text-2xl font-extrabold md:text-3xl">{group}</h3>
            {items.map(([n, v], i) => (
              <div key={n} className="mb-6">
                <div className="mb-2 flex justify-between text-sm"><span>{n}</span><span className="text-mist">{v}%</span></div>
                <div className="h-1.5 overflow-hidden rounded-full bg-ink/10">
                  <div className="bar h-full origin-left rounded-full bg-gradient-to-r from-ink to-accent" style={{ '--v': v / 100, transitionDelay: `${i * 0.12}s` }} />
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  )
}

export default Skills