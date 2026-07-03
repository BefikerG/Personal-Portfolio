import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

export function CustomCursor() {
  const [pos, setPos] = useState({ x: 0, y: 0 })
  const [hovering, setHovering] = useState(false)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY })
      if (!visible) setVisible(true)
    }
    const onEnter = () => setHovering(true)
    const onLeave = () => setHovering(false)

    document.querySelectorAll('a, button, input, textarea, [data-hoverable]').forEach((el) => {
      el.addEventListener('mouseenter', onEnter)
      el.addEventListener('mouseleave', onLeave)
    })

    window.addEventListener('mousemove', onMove)
    return () => {
      window.removeEventListener('mousemove', onMove)
      document.querySelectorAll('a, button, input, textarea, [data-hoverable]').forEach((el) => {
        el.removeEventListener('mouseenter', onEnter)
        el.removeEventListener('mouseleave', onLeave)
      })
    }
  }, [visible])

  if (!visible) return null

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9998]"
        animate={{ x: pos.x - 16, y: pos.y - 16 }}
        transition={{ type: 'spring', stiffness: 500, damping: 28, mass: 0.5 }}
      >
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
          <circle cx="16" cy="16" r="6" stroke="#84cc16" strokeWidth="1.5" fill="rgba(132, 204, 22, 0.1)" />
          <circle cx="16" cy="16" r="1.5" fill="#22c55e" />
        </svg>
      </motion.div>
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9997]"
        animate={{
          x: pos.x - 1,
          y: pos.y - 1,
          scale: hovering ? 3 : 1,
          opacity: hovering ? 0.15 : 0.08,
        }}
        transition={{ type: 'spring', stiffness: 150, damping: 15, mass: 0.1 }}
      >
        <div className="w-2 h-2 rounded-full bg-industrial-green" />
      </motion.div>
    </>
  )
}
