import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

type Mode = 'developer' | 'editor' | 'producer'

interface ModeConfig {
  accent: string
  title: string
  label: string
  description: string
  details: string[]
  mockup: React.ReactNode
}

function DeveloperMockup() {
  return (
    <svg viewBox="0 0 280 180" className="w-full h-full" fill="none">
      <rect x="0" y="0" width="280" height="180" rx="4" stroke="#3a3a3a" strokeWidth="1" />
      {/* Blueprint grid */}
      <line x1="0" y1="40" x2="280" y2="40" stroke="#22c55e" strokeWidth="0.5" opacity="0.3" />
      <line x1="0" y1="80" x2="280" y2="80" stroke="#22c55e" strokeWidth="0.5" opacity="0.3" />
      <line x1="0" y1="120" x2="280" y2="120" stroke="#22c55e" strokeWidth="0.5" opacity="0.3" />
      <line x1="0" y1="160" x2="280" y2="160" stroke="#22c55e" strokeWidth="0.5" opacity="0.3" />
      <line x1="70" y1="0" x2="70" y2="180" stroke="#22c55e" strokeWidth="0.5" opacity="0.3" />
      <line x1="140" y1="0" x2="140" y2="180" stroke="#22c55e" strokeWidth="0.5" opacity="0.3" />
      <line x1="210" y1="0" x2="210" y2="180" stroke="#22c55e" strokeWidth="0.5" opacity="0.3" />
      {/* API Gateway */}
      <rect x="90" y="8" width="100" height="24" rx="3" stroke="#22c55e" strokeWidth="1" fill="#22c55e10" />
      <text x="140" y="24" textAnchor="middle" fill="#22c55e" fontSize="8" fontFamily="monospace">API GATEWAY</text>
      {/* Microservice boxes */}
      <rect x="10" y="55" width="60" height="20" rx="2" stroke="#84cc16" strokeWidth="0.8" fill="#84cc1608" />
      <text x="40" y="68" textAnchor="middle" fill="#84cc16" fontSize="6" fontFamily="monospace">Auth Service</text>
      <rect x="80" y="55" width="60" height="20" rx="2" stroke="#84cc16" strokeWidth="0.8" fill="#84cc1608" />
      <text x="110" y="68" textAnchor="middle" fill="#84cc16" fontSize="6" fontFamily="monospace">Property API</text>
      <rect x="150" y="55" width="60" height="20" rx="2" stroke="#84cc16" strokeWidth="0.8" fill="#84cc1608" />
      <text x="180" y="68" textAnchor="middle" fill="#84cc16" fontSize="6" fontFamily="monospace">Booking API</text>
      {/* DB layer */}
      <rect x="30" y="95" width="100" height="20" rx="2" stroke="#22c55e" strokeWidth="0.8" fill="#22c55e08" />
      <text x="80" y="108" textAnchor="middle" fill="#22c55e" fontSize="6" fontFamily="monospace">PostgreSQL Cluster</text>
      <rect x="150" y="95" width="60" height="20" rx="2" stroke="#22c55e" strokeWidth="0.8" fill="#22c55e08" />
      <text x="180" y="108" textAnchor="middle" fill="#22c55e" fontSize="6" fontFamily="monospace">Redis Cache</text>
      {/* Docker */}
      <rect x="10" y="135" width="120" height="18" rx="2" stroke="#f59e0b" strokeWidth="0.8" fill="#f59e0b08" />
      <text x="70" y="147" textAnchor="middle" fill="#f59e0b" fontSize="6" fontFamily="monospace">Docker · Docker Compose</text>
      <rect x="150" y="135" width="120" height="18" rx="2" stroke="#f59e0b" strokeWidth="0.8" fill="#f59e0b08" />
      <text x="210" y="147" textAnchor="middle" fill="#f59e0b" fontSize="6" fontFamily="monospace">CI/CD Pipeline</text>
      {/* Connector lines */}
      <path d="M140 32 L110 55" stroke="#84cc16" strokeWidth="0.5" strokeDasharray="2,2" />
      <path d="M140 32 L140 55" stroke="#84cc16" strokeWidth="0.5" strokeDasharray="2,2" />
      <path d="M140 32 L180 55" stroke="#84cc16" strokeWidth="0.5" strokeDasharray="2,2" />
      <path d="M40 75 L40 95" stroke="#22c55e" strokeWidth="0.5" strokeDasharray="2,2" />
      <path d="M110 75 L110 95" stroke="#22c55e" strokeWidth="0.5" strokeDasharray="2,2" />
      <path d="M180 75 L180 95" stroke="#22c55e" strokeWidth="0.5" strokeDasharray="2,2" />
      {/* Annotations */}
      <text x="4" y="175" fill="#5a5a5a" fontSize="5" fontFamily="monospace">FIG 1.0 — SYSTEM ARCHITECTURE</text>
      <text x="215" y="12" fill="#5a5a5a" fontSize="5" fontFamily="monospace">v2.4.1</text>
    </svg>
  )
}

function EditorMockup() {
  return (
    <svg viewBox="0 0 280 180" className="w-full h-full" fill="none">
      <rect x="0" y="0" width="280" height="180" rx="4" stroke="#3a3a3a" strokeWidth="1" />
      {/* Preview window */}
      <rect x="10" y="8" width="180" height="100" rx="2" stroke="#f59e0b" strokeWidth="0.8" fill="#f59e0b05" />
      <text x="100" y="58" textAnchor="middle" fill="#f59e0b" fontSize="7" fontFamily="monospace" opacity="0.5">PREVIEW</text>
      {/* Timeline tracks */}
      <rect x="10" y="118" width="260" height="12" rx="1" stroke="#3a3a3a" strokeWidth="0.5" fill="#3a3a3a" />
      <rect x="10" y="118" width="80" height="12" rx="1" fill="#f59e0b40" />
      <rect x="100" y="118" width="50" height="12" rx="1" fill="#84cc1640" />
      <rect x="160" y="118" width="60" height="12" rx="1" fill="#22c55e40" />
      <rect x="10" y="133" width="260" height="12" rx="1" stroke="#3a3a3a" strokeWidth="0.5" fill="#3a3a3a" />
      <rect x="20" y="133" width="120" height="12" rx="1" fill="#f59e0b30" />
      <rect x="150" y="133" width="90" height="12" rx="1" fill="#22c55e30" />
      <rect x="10" y="148" width="260" height="12" rx="1" stroke="#3a3a3a" strokeWidth="0.5" fill="#3a3a3a" />
      <rect x="30" y="148" width="200" height="12" rx="1" fill="#84cc1630" />
      {/* Playhead */}
      <line x1="60" y1="116" x2="60" y2="162" stroke="#f59e0b" strokeWidth="1" />
      <polygon points="57,116 63,116 60,120" fill="#f59e0b" />
      {/* Toolbar dots */}
      <circle cx="200" cy="16" r="2" fill="#5a5a5a" />
      <circle cx="212" cy="16" r="2" fill="#5a5a5a" />
      <circle cx="224" cy="16" r="2" fill="#5a5a5a" />
      <rect x="200" y="30" width="60" height="18" rx="2" stroke="#f59e0b" strokeWidth="0.5" fill="#f59e0b08" />
      <text x="230" y="42" textAnchor="middle" fill="#f59e0b" fontSize="6" fontFamily="monospace">00:12:34</text>
      <text x="4" y="175" fill="#5a5a5a" fontSize="5" fontFamily="monospace">FIG 2.0 — EDIT TIMELINE</text>
    </svg>
  )
}

function ProducerMockup() {
  return (
    <svg viewBox="0 0 280 180" className="w-full h-full" fill="none">
      <rect x="0" y="0" width="280" height="180" rx="4" stroke="#3a3a3a" strokeWidth="1" />
      {/* Grid lines */}
      {[20, 40, 60, 80, 100, 120, 140, 160].map((y) => (
        <line key={y} x1="0" y1={y} x2="280" y2={y} stroke="#3a3a3a" strokeWidth="0.3" />
      ))}
      {/* Piano roll / MIDI notes */}
      <rect x="10" y="25" width="250" height="8" rx="1" fill="#84cc1630" />
      <rect x="60" y="25" width="30" height="8" rx="1" fill="#84cc1660" />
      <rect x="140" y="25" width="80" height="8" rx="1" fill="#84cc1660" />
      <rect x="10" y="45" width="100" height="8" rx="1" fill="#22c55e30" />
      <rect x="130" y="45" width="60" height="8" rx="1" fill="#22c55e60" />
      <rect x="210" y="45" width="50" height="8" rx="1" fill="#22c55e60" />
      <rect x="10" y="65" width="180" height="8" rx="1" fill="#84cc1630" />
      <rect x="30" y="65" width="40" height="8" rx="1" fill="#84cc1660" />
      <rect x="120" y="65" width="70" height="8" rx="1" fill="#84cc1660" />
      <rect x="10" y="85" width="50" height="8" rx="1" fill="#22c55e30" />
      <rect x="80" y="85" width="100" height="8" rx="1" fill="#22c55e60" />
      {/* Waveform */}
      <path d="M10 115 Q30 100 50 115 T90 115 T130 115 T170 115 T210 115 T250 115 L250 130 Q230 145 210 130 T170 130 T130 130 T90 130 T50 130 T10 130 Z" fill="#84cc1620" stroke="#84cc16" strokeWidth="0.8" />
      {/* Play controls */}
      <circle cx="30" cy="158" r="6" stroke="#84cc16" strokeWidth="1" />
      <polygon points="27,155 27,161 33,158" fill="#84cc16" />
      <rect x="50" y="153" width="20" height="10" rx="2" stroke="#3a3a3a" strokeWidth="0.5" fill="#3a3a3a" />
      <rect x="80" y="153" width="20" height="10" rx="2" stroke="#3a3a3a" strokeWidth="0.5" fill="#3a3a3a" />
      {/* Tempo */}
      <text x="120" y="161" fill="#5a5a5a" fontSize="6" fontFamily="monospace">120 BPM</text>
      <text x="200" y="161" fill="#5a5a5a" fontSize="6" fontFamily="monospace">4/4</text>
      <text x="4" y="175" fill="#5a5a5a" fontSize="5" fontFamily="monospace">FIG 3.0 — DAW ARRANGEMENT</text>
    </svg>
  )
}

const modeData: Record<Mode, ModeConfig> = {
  developer: {
    accent: '#22c55e',
    title: 'Backend Engineer & Architect',
    label: 'DEVELOPER',
    description:
      'Designing enterprise-grade SaaS platforms with robust business logic, REST APIs, and scalable multi-tenant architectures. I turn complex business requirements into clean, maintainable code.',
    details: [
      'Java, Spring Boot, TypeScript, PostgreSQL',
      'Multi-tenant SaaS architecture & REST API design',
      'Docker containerization & AI-assisted development',
      'Scalable backend systems & enterprise patterns',
    ],
    mockup: <DeveloperMockup />,
  },
  editor: {
    accent: '#f59e0b',
    title: 'Video Editor & Visual Storyteller',
    label: 'EDITOR',
    description:
      'Crafting compelling visual narratives through professional video editing — color grading, motion graphics, and end-to-end post-production with precision and creative flair.',
    details: [
      'Professional video editing & post-production',
      'Color grading, transitions, and motion graphics',
      'Narrative-driven content creation',
      'End-to-end production workflow',
    ],
    mockup: <EditorMockup />,
  },
  producer: {
    accent: '#84cc16',
    title: 'Music Producer & Arranger',
    label: 'PRODUCER',
    description:
      'Producing indie, RnB, Pop, and Soul arrangements. Every track is a blend of technical precision and artistic expression — from composition to final mix.',
    details: [
      'Music production & arrangement',
      'Genre specialization: Indie, RnB, Pop, Soul',
      'Digital audio workstations & sound design',
      'Melodic composition & rhythm programming',
    ],
    mockup: <ProducerMockup />,
  },
}

export function About() {
  const [mode, setMode] = useState<Mode>('developer')

  return (
    <section id="about" className="relative min-h-screen px-6 bg-concrete-900/50 flex flex-col justify-center">
      <div className="absolute inset-0 grid-bg opacity-50" />
      <div className="max-w-12xl mx-auto relative z-10 w-full">
        <div className="p-4 md:px-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="mb-10 text-center"
          >
            <p className="text-industrial-green text-xs tracking-[0.3em] mb-6 uppercase -mt-2 font-mono">
              // about_me
            </p>
            <h2 className="text-[32px] md:text-[56px] leading-tight font-light text-concrete-100 -mt-2">
              More Than
              <span className="block text-concrete-400 mt-0">Just Code</span>
            </h2>
          </motion.div>

          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 justify-center w-full">
            <div className="w-full lg:max-w-sm">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="space-y-8"
              >
                <p className="text-concrete-200 leading-relaxed text-lg">
                  I'm a Software Engineering student at Addis Ababa University with a deep
                  passion for backend systems, enterprise architecture, and building scalable
                  applications. I thrive on turning complex business logic into clean, robust
                  code.
                </p>
                <p className="text-concrete-400 leading-relaxed text-base border-l-2 border-concrete-700 pl-5">
                  Beyond engineering, I express creativity through professional video editing
                  and music production — blending technical precision with artistic vision.
                </p>
                <div className="pt-6">
                  <div className="flex items-center gap-3 text-concrete-600 text-sm font-mono">
                    <span className="w-8 h-px bg-concrete-700" />
                    <span>AAU · Software Engineering</span>
                  </div>
                </div>
              </motion.div>
            </div>

            <div className="w-full lg:max-w-2xl xl:max-w-3xl">
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="rounded-3xl border border-concrete-800 bg-concrete-950/70 p-8 space-y-6"
              >
                {/* Skills description */}
                <div className="flex gap-1 p-1 border border-concrete-800 rounded-sm mb-8 bg-concrete-900/80">
                  {(Object.keys(modeData) as Mode[]).map((m) => {
                    const active = mode === m
                    return (
                      <button
                        key={m}
                        onClick={() => setMode(m)}
                        className={`flex-1 py-3 px-4 text-xs uppercase tracking-[0.2em] transition-all duration-300 rounded-sm ${
                          active
                            ? 'text-concrete-100 font-medium'
                            : 'text-concrete-600 hover:text-concrete-400'
                        }`}
                        style={{
                          backgroundColor: active ? `${modeData[m].accent}15` : 'transparent',
                          boxShadow: active ? `inset 0 -1px 0 ${modeData[m].accent}` : 'none',
                        }}
                        data-hoverable
                      >
                        <span className="hidden sm:inline">{modeData[m].label}</span>
                        <span className="sm:hidden text-[10px]">
                          {m === 'developer' ? 'DEV' : m === 'editor' ? 'EDT' : 'PRO'}
                        </span>
                      </button>
                    )
                  })}
                </div>

                {/* Content panel */}
                <div className="grid md:grid-cols-2 gap-8">
                  {/* Mockup panel */}
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={`mockup-${mode}`}
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.4 }}
                      className="aspect-14/9 w-full"
                    >
                      {modeData[mode].mockup}
                    </motion.div>
                  </AnimatePresence>

                  {/* Details panel */}
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={`details-${mode}`}
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -12 }}
                      transition={{ duration: 0.35 }}
                      className="flex flex-col justify-center"
                    >
                      <h3
                        className="text-xl font-mono mb-3 tracking-tight"
                        style={{ color: modeData[mode].accent }}
                      >
                        {modeData[mode].title}
                      </h3>
                      <p className="text-concrete-400 text-sm leading-relaxed mb-6">
                        {modeData[mode].description}
                      </p>
                      <div className="space-y-3">
                        {modeData[mode].details.map((detail, i) => (
                          <motion.div
                            key={i}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: i * 0.08, duration: 0.3 }}
                            className="flex items-center gap-3 text-xs text-concrete-400 font-mono group"
                          >
                            <span
                              className="block w-2 h-2 shrink-0 transition-transform duration-300 group-hover:scale-125"
                              style={{
                                backgroundColor: modeData[mode].accent,
                                clipPath: 'polygon(0 0, 100% 50%, 0 100%)',
                              }}
                            />
                            <span>{detail}</span>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  </AnimatePresence>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
