import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

function SaasDiagram() {
  return (
    <svg viewBox="0 0 280 160" className="w-full h-full" fill="none">
      <rect x="0" y="0" width="280" height="160" rx="3" stroke="#3a3a3a" strokeWidth="0.8" />
      <line x1="0" y1="30" x2="280" y2="30" stroke="#22c55e" strokeWidth="0.3" opacity="0.4" />
      <line x1="0" y1="60" x2="280" y2="60" stroke="#22c55e" strokeWidth="0.3" opacity="0.4" />
      <line x1="0" y1="90" x2="280" y2="90" stroke="#22c55e" strokeWidth="0.3" opacity="0.4" />
      <line x1="0" y1="120" x2="280" y2="120" stroke="#22c55e" strokeWidth="0.3" opacity="0.4" />
      <rect x="10" y="6" width="80" height="18" rx="2" stroke="#22c55e" strokeWidth="0.8" fill="#22c55e08" />
      <text x="50" y="18" textAnchor="middle" fill="#22c55e" fontSize="6" fontFamily="monospace">TENANT A</text>
      <rect x="100" y="6" width="80" height="18" rx="2" stroke="#22c55e" strokeWidth="0.8" fill="#22c55e08" />
      <text x="140" y="18" textAnchor="middle" fill="#22c55e" fontSize="6" fontFamily="monospace">TENANT B</text>
      <rect x="190" y="6" width="80" height="18" rx="2" stroke="#22c55e" strokeWidth="0.8" fill="#22c55e08" />
      <text x="230" y="18" textAnchor="middle" fill="#22c55e" fontSize="6" fontFamily="monospace">TENANT C</text>
      <rect x="40" y="40" width="200" height="22" rx="2" stroke="#84cc16" strokeWidth="0.8" fill="#84cc1608" />
      <text x="140" y="54" textAnchor="middle" fill="#84cc16" fontSize="7" fontFamily="monospace">SHARED SERVICES LAYER</text>
      <rect x="10" y="75" width="80" height="18" rx="2" stroke="#f59e0b" strokeWidth="0.5" fill="#f59e0b05" />
      <text x="50" y="87" textAnchor="middle" fill="#f59e0b" fontSize="5" fontFamily="monospace">Auth</text>
      <rect x="100" y="75" width="80" height="18" rx="2" stroke="#f59e0b" strokeWidth="0.5" fill="#f59e0b05" />
      <text x="140" y="87" textAnchor="middle" fill="#f59e0b" fontSize="5" fontFamily="monospace">Property Mgt</text>
      <rect x="190" y="75" width="80" height="18" rx="2" stroke="#f59e0b" strokeWidth="0.5" fill="#f59e0b05" />
      <text x="230" y="87" textAnchor="middle" fill="#f59e0b" fontSize="5" fontFamily="monospace">Billing</text>
      <rect x="60" y="108" width="160" height="20" rx="2" stroke="#22c55e" strokeWidth="0.8" fill="#22c55e08" />
      <text x="140" y="121" textAnchor="middle" fill="#22c55e" fontSize="6" fontFamily="monospace">PostgreSQL · Multi-Tenant</text>
      <rect x="10" y="140" width="260" height="14" rx="2" stroke="#5a5a5a" strokeWidth="0.5" fill="none" />
      <text x="140" y="150" textAnchor="middle" fill="#5a5a5a" fontSize="5" fontFamily="monospace">Docker · CI/CD · Monitoring</text>
    </svg>
  )
}

function PitchDiagram() {
  return (
    <svg viewBox="0 0 280 160" className="w-full h-full" fill="none">
      <rect x="0" y="0" width="280" height="160" rx="3" stroke="#3a3a3a" strokeWidth="0.8" />
      <line x1="0" y1="35" x2="280" y2="35" stroke="#84cc16" strokeWidth="0.3" opacity="0.4" />
      <line x1="0" y1="70" x2="280" y2="70" stroke="#84cc16" strokeWidth="0.3" opacity="0.4" />
      <line x1="0" y1="105" x2="280" y2="105" stroke="#84cc16" strokeWidth="0.3" opacity="0.4" />
      <line x1="0" y1="140" x2="280" y2="140" stroke="#84cc16" strokeWidth="0.3" opacity="0.4" />
      {/* Client layer */}
      <rect x="15" y="6" width="110" height="22" rx="2" stroke="#84cc16" strokeWidth="0.8" fill="#84cc1608" />
      <text x="70" y="20" textAnchor="middle" fill="#84cc16" fontSize="6" fontFamily="monospace">React + TypeScript</text>
      <rect x="155" y="6" width="110" height="22" rx="2" stroke="#84cc16" strokeWidth="0.8" fill="#84cc1608" />
      <text x="210" y="20" textAnchor="middle" fill="#84cc16" fontSize="6" fontFamily="monospace">Spring Boot API</text>
      {/* Booking flow */}
      <rect x="15" y="42" width="250" height="22" rx="2" stroke="#22c55e" strokeWidth="0.8" fill="#22c55e08" />
      <text x="140" y="56" textAnchor="middle" fill="#22c55e" fontSize="7" fontFamily="monospace">BOOKING ENGINE · DOMAIN LOGIC</text>
      {/* Database layer */}
      <rect x="15" y="78" width="80" height="18" rx="2" stroke="#f59e0b" strokeWidth="0.5" fill="#f59e0b05" />
      <text x="55" y="90" textAnchor="middle" fill="#f59e0b" fontSize="5" fontFamily="monospace">Venues</text>
      <rect x="100" y="78" width="80" height="18" rx="2" stroke="#f59e0b" strokeWidth="0.5" fill="#f59e0b05" />
      <text x="140" y="90" textAnchor="middle" fill="#f59e0b" fontSize="5" fontFamily="monospace">Bookings</text>
      <rect x="185" y="78" width="80" height="18" rx="2" stroke="#f59e0b" strokeWidth="0.5" fill="#f59e0b05" />
      <text x="225" y="90" textAnchor="middle" fill="#f59e0b" fontSize="5" fontFamily="monospace">Users</text>
      {/* Payments */}
      <rect x="15" y="110" width="250" height="20" rx="2" stroke="#22c55e" strokeWidth="0.5" fill="#22c55e05" />
      <text x="140" y="123" textAnchor="middle" fill="#22c55e" fontSize="5" fontFamily="monospace">Payment Gateway · Notification · Calendar Sync</text>
      {/* Football icon */}
      <circle cx="255" cy="148" r="4" stroke="#5a5a5a" strokeWidth="0.5" fill="none" />
      <polygon points="255,146 257,149 253,149" fill="#5a5a5a" opacity="0.3" />
      <polygon points="255,150 257,147 253,147" fill="#5a5a5a" opacity="0.3" />
      <text x="140" y="153" textAnchor="middle" fill="#5a5a5a" fontSize="5" fontFamily="monospace">REST · PostgreSQL · Docker Compose</text>
    </svg>
  )
}

function WorkflowDiagram() {
  return (
    <svg viewBox="0 0 280 160" className="w-full h-full" fill="none">
      <rect x="0" y="0" width="280" height="160" rx="3" stroke="#3a3a3a" strokeWidth="0.8" />
      <line x1="0" y1="30" x2="280" y2="30" stroke="#f59e0b" strokeWidth="0.3" opacity="0.4" />
      <line x1="0" y1="60" x2="280" y2="60" stroke="#f59e0b" strokeWidth="0.3" opacity="0.4" />
      <line x1="0" y1="90" x2="280" y2="90" stroke="#f59e0b" strokeWidth="0.3" opacity="0.4" />
      <line x1="0" y1="120" x2="280" y2="120" stroke="#f59e0b" strokeWidth="0.3" opacity="0.4" />
      {/* Prompt flow */}
      <rect x="10" y="6" width="120" height="18" rx="2" stroke="#f59e0b" strokeWidth="0.8" fill="#f59e0b08" />
      <text x="70" y="18" textAnchor="middle" fill="#f59e0b" fontSize="6" fontFamily="monospace">PROMPT → SPEC</text>
      {/* Arrow */}
      <text x="140" y="17" fill="#5a5a5a" fontSize="8" fontFamily="monospace">→</text>
      <rect x="155" y="6" width="115" height="18" rx="2" stroke="#f59e0b" strokeWidth="0.8" fill="#f59e0b08" />
      <text x="212" y="18" textAnchor="middle" fill="#f59e0b" fontSize="6" fontFamily="monospace">CODE GENERATION</text>
      {/* Processing stages */}
      <rect x="10" y="37" width="260" height="18" rx="2" stroke="#84cc16" strokeWidth="0.5" fill="#84cc1605" />
      <text x="140" y="49" textAnchor="middle" fill="#84cc16" fontSize="6" fontFamily="monospace">Local LLM · Context Assembly · Template Matching</text>
      <rect x="10" y="65" width="260" height="18" rx="2" stroke="#22c55e" strokeWidth="0.5" fill="#22c55e05" />
      <text x="140" y="77" textAnchor="middle" fill="#22c55e" fontSize="6" fontFamily="monospace">Output Validation · Lint · Type Check</text>
      {/* Pipeline visualization */}
      <rect x="10" y="96" width="60" height="18" rx="2" stroke="#3a3a3a" strokeWidth="0.5" fill="#3a3a3a" />
      <circle cx="24" cy="105" r="3" fill="#22c55e" />
      <circle cx="42" cy="105" r="3" fill="#84cc16" />
      <circle cx="60" cy="105" r="3" fill="#f59e0b" />
      <rect x="85" y="96" width="80" height="18" rx="2" stroke="#22c55e" strokeWidth="0.5" fill="#22c55e05" />
      <text x="125" y="108" textAnchor="middle" fill="#22c55e" fontSize="5" fontFamily="monospace">Docker Build</text>
      <rect x="180" y="96" width="90" height="18" rx="2" stroke="#22c55e" strokeWidth="0.5" fill="#22c55e05" />
      <text x="225" y="108" textAnchor="middle" fill="#22c55e" fontSize="5" fontFamily="monospace">Auto-Deploy</text>
      {/* Status bar */}
      <rect x="10" y="130" width="120" height="20" rx="2" stroke="#5a5a5a" strokeWidth="0.5" fill="none" />
      <text x="70" y="143" textAnchor="middle" fill="#5a5a5a" fontSize="5" fontFamily="monospace">Iteration Speed: 3.2x</text>
      <rect x="150" y="130" width="120" height="20" rx="2" stroke="#22c55e" strokeWidth="0.5" fill="#22c55e05" />
      <text x="210" y="143" textAnchor="middle" fill="#22c55e" fontSize="6" fontFamily="monospace">PIPELINE OK</text>
    </svg>
  )
}

const projects = [
  {
    title: 'Multi-Tenant Property Management SaaS',
    subtitle: 'Enterprise SaaS Platform',
    description:
      'An enterprise-grade SaaS platform showcasing robust system architecture, complex business logic, and scalable multi-tenancy patterns.',
    tags: ['Spring Boot', 'Java', 'PostgreSQL', 'Docker', 'REST APIs', 'SaaS'],
    accent: '#22c55e',
    href: 'https://github.com/BefikerG?tab=repositories',
    diagram: <SaasDiagram />,
  },
  {
    title: 'PitchPerfect',
    subtitle: 'Sports Venue & Turf Booking',
    description:
      'A Spring Boot-based sports venue and turf booking platform — highlighting backend architecture, full-stack integrations, and domain-driven design.',
    tags: ['Spring Boot', 'React', 'TypeScript', 'PostgreSQL', 'Docker'],
    accent: '#84cc16',
    href: 'https://github.com/BefikerG?tab=repositories',
    diagram: <PitchDiagram />,
  },
  {
    title: 'Workflow Automation',
    subtitle: 'AI-Assisted Development Pipeline',
    description:
      'Configuring local AI-driven development environments to streamline solo engineering pipelines — from IDE assistants to automated code generation.',
    tags: ['AI', 'DevOps', 'Automation', 'Docker', 'Local LLM'],
    accent: '#f59e0b',
    href: 'https://github.com/BefikerG?tab=repositories',
    diagram: <WorkflowDiagram />,
  },
]

export function Projects() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section id="projects" className="relative min-h-screen px-6 flex flex-col justify-center">
      <div className="max-w-7xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <p className="text-industrial-green text-xs tracking-[0.3em] uppercase mb-4 font-mono">
            // featured_projects
          </p>
          <h2 className="text-4xl md:text-6xl font-light text-concrete-100">
            Blueprint
            <span className="block text-concrete-400 mt-2">Archive</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.a
              key={project.title}
              href={project.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="group relative border border-concrete-800 bg-concrete-900/50 overflow-hidden flex flex-col"
              data-hoverable
            >
              {/* Animated top accent bar */}
              <div
                className="h-1 w-full transition-all duration-700 ease-out"
                style={{
                  backgroundColor: project.accent,
                  opacity: hoveredIndex === index ? 1 : 0.6,
                }}
              />

              {/* Diagram panel */}
              <div
                className="p-5 border-b border-concrete-800/50 bg-concrete-950/30 transition-all duration-500"
                style={{
                  backgroundColor: hoveredIndex === index ? `${project.accent}05` : 'transparent',
                }}
              >
                <AnimatePresence mode="wait">
                  <motion.div
                    key={project.title}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="aspect-[7/4] w-full"
                  >
                    {project.diagram}
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Content panel */}
              <div className="p-7 flex-1 flex flex-col">
                <p className="text-concrete-500 text-xs uppercase tracking-widest mb-2 font-mono">
                  {project.subtitle}
                </p>
                <h3
                  className="text-xl text-concrete-100 mb-4 transition-colors duration-300"
                  style={{
                    color: hoveredIndex === index ? project.accent : undefined,
                  }}
                >
                  {project.title}
                </h3>
                <p className="text-concrete-400 text-sm leading-relaxed mb-6 flex-1">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 text-[10px] uppercase tracking-wider border font-mono transition-all duration-300"
                      style={{
                        borderColor: hoveredIndex === index ? `${project.accent}40` : '#4a4a4a',
                        color: hoveredIndex === index ? project.accent : '#6d6d6d',
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* CTA */}
                <div className="flex items-center gap-2 text-xs font-mono transition-all duration-300"
                  style={{
                    color: hoveredIndex === index ? project.accent : '#5a5a5a',
                  }}
                >
                  <span>View Repository</span>
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    className="transition-transform duration-300"
                    style={{
                      transform: hoveredIndex === index ? 'translateX(4px)' : 'translateX(0)',
                    }}
                  >
                    <path d="M1 6h8M6 2l4 4-4 4" />
                  </svg>
                </div>
              </div>

              {/* Hover glow effect */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{
                  background: `radial-gradient(600px circle at 50% 50%, ${project.accent}08, transparent 60%)`,
                }}
              />
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
