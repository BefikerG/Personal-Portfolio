import { useEffect } from 'react'

export function useSmoothScroll() {
  useEffect(() => {
    let destroyed = false
    let lenis: any

    async function init() {
      const Lenis = (await import('lenis')).default
      if (destroyed) return
      lenis = new Lenis({
        duration: 1.2,
        easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        orientation: 'vertical',
        gestureOrientation: 'vertical',
        smoothWheel: true,
        wheelMultiplier: 1,
      })

      function raf(time: number) {
        if (destroyed) return
        lenis.raf(time)
        requestAnimationFrame(raf)
      }

      requestAnimationFrame(raf)
    }

    init()

    return () => {
      destroyed = true
      if (lenis) lenis.destroy()
    }
  }, [])
}
