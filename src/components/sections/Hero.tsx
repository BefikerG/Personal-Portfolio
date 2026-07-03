import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Scene } from '../three/Scene'
import { useMousePosition } from '../../hooks/useMousePosition'

export function Hero() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], [0, 200])
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])
  const mouse = useMousePosition()

  return (
    <section ref={ref} className="relative h-screen w-full overflow-hidden grid-bg">
      <div className="absolute inset-0 bg-gradient-to-b from-concrete-950/0 via-concrete-950/50 to-concrete-950 z-10" />

      <motion.div style={{ y, opacity }} className="absolute inset-0 z-0">
        <Scene mouseX={mouse.normalX} mouseY={mouse.normalY} />
      </motion.div>

      <div className="absolute inset-0 z-20 flex items-center justify-center">
        <div className="text-center px-6">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-industrial-green text-xs tracking-[0.3em] uppercase mb-4 font-mono"
          >
            Full-Stack Software Engineer & Creative Developer
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-5xl md:text-7xl lg:text-8xl font-light tracking-tight text-concrete-100 mb-6"
          >
            Befiker
            <span className="block text-concrete-400">Gezahegn</span>
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="flex items-center justify-center gap-3 text-concrete-500 text-sm font-mono"
          >
            <span className="w-8 h-px bg-concrete-700" />
            <span>Java • Spring Boot • React • TypeScript</span>
            <span className="w-8 h-px bg-concrete-700" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="mt-12"
          >
            <div className="inline-flex items-center gap-2 text-concrete-600 text-xs font-mono animate-pulse">
              <span className="w-2 h-2 rounded-full bg-industrial-green" />
              <span>// system ready — scroll to explore</span>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2">
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="text-concrete-600"
        >
          <svg width="16" height="24" viewBox="0 0 16 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <rect x="1" y="1" width="14" height="22" rx="7" />
            <circle cx="8" cy="8" r="2" fill="currentColor" />
          </svg>
        </motion.div>
      </div>
    </section>
  )
}
