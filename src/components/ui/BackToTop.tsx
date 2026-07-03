import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export function BackToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 flex items-center gap-2 px-4 py-2 border border-concrete-700 bg-concrete-950/80 backdrop-blur-sm text-concrete-300 hover:text-industrial-green hover:border-industrial-green transition-colors text-xs uppercase tracking-widest"
          data-hoverable
        >
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M6 10V2M2 6l4-4 4 4" />
          </svg>
          Top
        </motion.button>
      )}
    </AnimatePresence>
  )
}
