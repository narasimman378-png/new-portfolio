import { useEffect } from 'react'
import Lenis from 'lenis'

export default function usePageEffects() {
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const lenis = new Lenis({ lerp: 0.08 })
    let frameId
    const raf = (time) => {
      lenis.raf(time)
      frameId = requestAnimationFrame(raf)
    }
    frameId = requestAnimationFrame(raf)
    return () => {
      cancelAnimationFrame(frameId)
      lenis.destroy()
    }
  }, [])

  useEffect(() => {
    let busy = false
    const updateScrollVars = () => {
      if (busy) return
      busy = true
      requestAnimationFrame(() => {
        busy = false
        const root = document.documentElement
        const maxScroll = root.scrollHeight - window.innerHeight
        root.style.setProperty('--sy', window.scrollY)
        const bar = document.getElementById('bar')
        if (bar) bar.style.transform = `scaleX(${maxScroll > 0 ? window.scrollY / maxScroll : 0})`
      })
    }
    window.addEventListener('scroll', updateScrollVars, { passive: true })
    updateScrollVars()
    return () => window.removeEventListener('scroll', updateScrollVars)
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return
        entry.target.classList.add('go')
        observer.unobserve(entry.target)
      })
    }, { threshold: 0.1 })
    document.querySelectorAll('.rv').forEach((element) => observer.observe(element))
    return () => observer.disconnect()
  }, [])
}
