import { motion } from 'framer-motion'
import { BreakroomGame } from '../components/game/BreakroomGame'
import { Footer } from '../components/Footer'

export function Breakroom() {
  return (
    <main className="min-h-screen pt-28 pb-20 px-6 relative">
      <div className="absolute inset-0 grid-bg opacity-40" />

      {/* Decorative terminal border lines */}
      <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-concrete-800 to-transparent opacity-30" />
      <div className="absolute right-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-concrete-800 to-transparent opacity-30" />

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Header section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <div className="flex items-center gap-4 mb-4">
            <span className="h-px flex-1 bg-gradient-to-r from-concrete-800 to-transparent" />
            <p className="text-industrial-green text-xs tracking-[0.3em] uppercase font-mono flex-shrink-0">
              // breakroom
            </p>
            <span className="h-px flex-1 bg-gradient-to-l from-concrete-800 to-transparent" />
          </div>
          <h1 className="text-4xl md:text-5xl font-light text-concrete-100 text-center">
            Take a
            <span className="block text-concrete-400 mt-1">Break</span>
          </h1>
          <p className="text-concrete-500 text-sm font-mono text-center max-w-xl mx-auto mt-4 leading-relaxed">
            Step away from the code. Dodge some bugs. Catch a green build.
          </p>
          <p className="text-concrete-600 text-xs font-mono text-center mt-1">
            (Recruiters — this is where you prove your reflexes.)
          </p>
        </motion.div>

        {/* Game section — centered with terminal frame */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="flex justify-center"
        >
          <div className="relative">
            {/* Outer decorative frame */}
            <div className="absolute -inset-4 border border-concrete-800/40 rounded-sm pointer-events-none" />
            <div className="absolute -inset-6 border border-concrete-800/20 rounded-sm pointer-events-none hidden md:block" />

            {/* Corner accents */}
            <div className="absolute -top-3 -left-3 w-6 h-6 border-t border-l border-industrial-green/30 pointer-events-none" />
            <div className="absolute -top-3 -right-3 w-6 h-6 border-t border-r border-industrial-green/30 pointer-events-none" />
            <div className="absolute -bottom-3 -left-3 w-6 h-6 border-b border-l border-industrial-green/30 pointer-events-none" />
            <div className="absolute -bottom-3 -right-3 w-6 h-6 border-b border-r border-industrial-green/30 pointer-events-none" />

            {/* Top label */}
            <div className="absolute -top-8 left-1/2 -translate-x-1/2 text-concrete-700 text-[10px] tracking-[0.3em] uppercase font-mono pointer-events-none whitespace-nowrap">
              Terminal v1.0 — Merge Conflict Dodger
            </div>

            <BreakroomGame />
          </div>
        </motion.div>

        {/* Bottom metadata */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-10 text-center"
        >
          <div className="inline-flex items-center gap-3 text-concrete-700 text-[10px] font-mono">
            <span className="w-4 h-px bg-concrete-800" />
            <span>High scores persist locally // No data collected</span>
            <span className="w-4 h-px bg-concrete-800" />
          </div>
        </motion.div>
      </div>
      <Footer />
    </main>
  )
}
