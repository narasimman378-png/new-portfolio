export default function Marquee() {
  const text = 'WORDPRESS DEVELOPER ✦ FRONTEND DEVELOPER ✦ '.repeat(5)
  const className = 'whitespace-nowrap font-display text-[5vw] font-extrabold leading-none'
  return (
    <div aria-hidden className="select-none overflow-hidden py-20">
      <div className={className} style={{ transform: 'translateX(calc(var(--sy) * -0.3px))', paddingBottom: '1rem' }}>{text}</div>
      <div className={`${className} text-transparent`} style={{ WebkitTextStroke: '2px #111', transform: 'translateX(calc(var(--sy) * 0.3px - 3000px))' }}>{text}</div>
    </div>
  )
}
