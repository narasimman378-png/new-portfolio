import { useEffect, useRef, useState } from 'react'

export default function Cursor() {
  const ref = useRef(null)
  const [label, setLabel] = useState('')

  useEffect(() => {
    let x = 0, y = 0, cursorX = 0, cursorY = 0, frameId
    const move = (event) => { x = event.clientX; y = event.clientY }
    const over = (event) => {
      const element = event.target.closest?.('[data-cursor]')
      setLabel(element ? element.dataset.cursor : '')
    }
    const loop = () => {
      cursorX += (x - cursorX) * 0.18
      cursorY += (y - cursorY) * 0.18
      if (ref.current) ref.current.style.transform = `translate(${cursorX}px,${cursorY}px)`
      frameId = requestAnimationFrame(loop)
    }
    window.addEventListener('mousemove', move)
    window.addEventListener('mouseover', over)
    loop()
    return () => {
      window.removeEventListener('mousemove', move)
      window.removeEventListener('mouseover', over)
      cancelAnimationFrame(frameId)
    }
  }, [])

  return (
    <div ref={ref} aria-hidden className="pointer-events-none fixed left-0 top-0 z-[90] hidden md:block">
      <div className={`grid -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-accent text-xs font-medium text-ink transition-all duration-300 ${label ? 'h-24 w-24' : 'h-3 w-3'}`}>{label}</div>
    </div>
  )
}
