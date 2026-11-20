export default function LoadingScreen({ progress, done, name }) {
  return (
    <div
      className={`bg-[#ff4d1f] fixed inset-0 z-[100] flex items-end justify-between bg-ink p-6 text-bone transition-transform duration-[1100ms] ease-[cubic-bezier(.7,0,.2,1)] md:p-12 ${done ? '-translate-y-full' : ''}`}
      style={{ transitionDelay: done ? '.35s' : '0s' }}
      aria-hidden={done}
    >
      <span className="font-display text-lg">{name} — Portfolio</span>
      <span className="font-display text-[15vw] md:text-[22vw] font-extrabold leading-none">{String(progress).padStart(2, '0')}</span>
    </div>
  )
}
