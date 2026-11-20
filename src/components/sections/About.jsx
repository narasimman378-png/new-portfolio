import { useEffect, useRef } from 'react'
import { ABOUT as aboutText } from '../../data/portfolio.js'
import clamp from '../../utils/clamp.js'

export default function About() {
  const ref = useRef(null)
  const words = aboutText.split(' ')

  useEffect(() => {
    const updateWordOpacity = () => {
      const element = ref.current
      if (!element) return
      const rect = element.getBoundingClientRect()
      const progress = clamp((window.innerHeight * 0.85 - rect.top) / (rect.height + window.innerHeight * 0.2))
      element.querySelectorAll('span').forEach((span, index) => {
        span.style.opacity = index / words.length < progress ? 1 : 0.18
      })
    }
    window.addEventListener('scroll', updateWordOpacity, { passive: true })
    updateWordOpacity()
    return () => window.removeEventListener('scroll', updateWordOpacity)
  }, [words.length])

  return (
    <section id="about" className="px-6 py-20 md:px-12">
      <p className="mb-8 text-sm uppercase tracking-[.25em] text-mist">About</p>
      <p ref={ref} className="max-w-6xl font-display text-2xl md:text-3xl font-extrabold leading-tight md:text-2xl">
        {words.map((word, index) => <span key={index} className="mr-[.25em] inline-block opacity-20 transition-opacity duration-300">{word}</span>)}
      </p>
    </section>
  )
}
