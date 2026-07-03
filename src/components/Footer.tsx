import { motion } from 'framer-motion'

export function Footer() {
  return (
    <footer className="relative border-t border-concrete-900 bg-concrete-950 py-10 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex items-center gap-3"
        >
          <span className="text-concrete-700 text-xs tracking-[0.3em] uppercase font-mono">
            BG<span className="text-industrial-green">_</span>
          </span>
          <span className="text-concrete-800 text-[10px] font-mono">
            © {new Date().getFullYear()} Befiker Gezahegn
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex items-center gap-6 text-concrete-600 text-[10px] font-mono"
        >
          <span>Built with React + Three.js</span>
          <span className="w-px h-3 bg-concrete-800" />
          <span className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-industrial-green animate-pulse" />
            Production Ready
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex gap-4"
        >
          {[
            { label: 'GH', href: 'https://github.com/BefikerG?tab=repositories' },
            { label: 'X', href: 'https://x.com/BefikerG_' },
            { label: 'IG', href: 'https://instagram.com/imbefiker' },
          ].map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-concrete-600 hover:text-industrial-green transition-colors text-[10px] uppercase tracking-widest font-mono"
              data-hoverable
            >
              {link.label}
            </a>
          ))}
        </motion.div>
      </div>
    </footer>
  )
}
