import { useState } from 'react'
import { motion } from 'framer-motion'

const socialLinks = [
  { name: 'Telegram', href: 'https://t.me/imbefiker', icon: 'T' },
  { name: 'X (Twitter)', href: 'https://x.com/BefikerG_', icon: 'X' },
  { name: 'Instagram', href: 'https://instagram.com/imbefiker', icon: 'IG' },
  { name: 'Facebook', href: 'https://facebook.com/imbefiker', icon: 'FB' },
  { name: 'GitHub', href: 'https://github.com/BefikerG?tab=repositories', icon: 'GH' },
]

export function Contact() {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')
  const [sending, setSending] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setSending(true)
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formState),
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.error || 'Failed to send')
      setSubmitted(true)
      setFormState({ name: '', email: '', message: '' })
      setTimeout(() => setSubmitted(false), 5000)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Connection error. Please try again.')
    } finally {
      setSending(false)
    }
  }

  return (
    <section id="contact" className="relative min-h-[50vh] pt-28 pb-32 px-6 bg-concrete-900/50 flex flex-col justify-center">
      <div className="absolute inset-0 grid-bg opacity-30" />
      <div className="max-w-5xl mx-auto relative z-10 w-full">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="mb-10 text-center"
        >
          <p className="text-industrial-green text-xs tracking-[0.3em] uppercase mb-4 font-mono">
            // connect
          </p>
          <h2 className="text-4xl md:text-6xl font-light text-concrete-100">
            Get In
            <span className="block text-concrete-400 mt-2">Touch</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Form side — 3/5 width */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-concrete-500 text-xs uppercase tracking-widest mb-2.5 font-mono">
                    Name <span className="text-concrete-700">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formState.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-transparent border border-concrete-800 px-5 py-3.5 text-concrete-200 text-sm outline-none focus:border-industrial-green transition-all duration-300 font-mono placeholder:text-concrete-700"
                    placeholder="Your name..."
                  />
                </div>
                <div>
                  <label className="block text-concrete-500 text-xs uppercase tracking-widest mb-2.5 font-mono">
                    Email <span className="text-concrete-700">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formState.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-transparent border border-concrete-800 px-5 py-3.5 text-concrete-200 text-sm outline-none focus:border-industrial-green transition-all duration-300 font-mono placeholder:text-concrete-700"
                    placeholder="your@email.com"
                  />
                </div>
              </div>
              <div>
                <label className="block text-concrete-500 text-xs uppercase tracking-widest mb-2.5 font-mono">
                  Message <span className="text-concrete-700">*</span>
                </label>
                <textarea
                  name="message"
                  value={formState.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full bg-transparent border border-concrete-800 px-5 py-3.5 text-concrete-200 text-sm outline-none focus:border-industrial-green transition-all duration-300 font-mono resize-none placeholder:text-concrete-700"
                  placeholder="Tell me about your project, opportunity, or collaboration..."
                />
              </div>

              {error && (
                <p className="text-red-400 text-xs font-mono flex items-center gap-2">
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <circle cx="6" cy="6" r="5" />
                    <path d="M6 4v2M6 8v.01" />
                  </svg>
                  {error}
                </p>
              )}

              <button
                type="submit"
                disabled={sending}
                className="w-full border border-concrete-700 py-3.5 text-sm uppercase tracking-widest font-mono transition-all duration-300 disabled:opacity-50"
                style={{
                  color: submitted ? '#22c55e' : sending ? '#6d6d6d' : '#b0b0b0',
                  borderColor: submitted ? '#22c55e' : sending ? '#4a4a4a' : '#4a4a4a',
                  backgroundColor: submitted ? '#22c55e08' : 'transparent',
                }}
                data-hoverable
              >
                {sending ? (
                  <span className="flex items-center justify-center gap-2">
                    <svg className="animate-spin" width="14" height="14" viewBox="0 0 14 14" fill="none">
                      <circle cx="7" cy="7" r="6" stroke="#5a5a5a" strokeWidth="1.5" />
                      <path d="M7 1a6 6 0 016 6" stroke="#22c55e" strokeWidth="1.5" />
                    </svg>
                    Sending...
                  </span>
                ) : submitted ? (
                  '✓ Message Sent Successfully'
                ) : (
                  'Send Message'
                )}
              </button>
            </form>
          </motion.div>

          {/* Info side — 2/5 width */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2 flex flex-col justify-between"
          >
            <div className="space-y-10">
              {/* Contact details */}
              <div>
                <p className="text-concrete-500 text-xs uppercase tracking-widest mb-4 font-mono">
                  Direct Contact
                </p>
                <div className="space-y-3">
                  <div className="flex items-center gap-4 group">
                    <div className="w-9 h-9 border border-concrete-800 flex items-center justify-center group-hover:border-industrial-green transition-colors">
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="#5a5a5a" strokeWidth="1.2" className="group-hover:stroke-industrial-green transition-colors">
                        <path d="M2 3h10a1 1 0 011 1v6a1 1 0 01-1 1H2a1 1 0 01-1-1V4a1 1 0 011-1z" />
                        <path d="M13 4L7 8 1 4" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-concrete-300 text-sm font-mono">befikergezahegn196@gmail.com</p>
                      <p className="text-concrete-700 text-[10px] font-mono">Email</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 group">
                    <div className="w-9 h-9 border border-concrete-800 flex items-center justify-center group-hover:border-industrial-green transition-colors">
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="#5a5a5a" strokeWidth="1.2" className="group-hover:stroke-industrial-green transition-colors">
                        <path d="M3 1h2l1 3-2 2a8 8 0 004 4l2-2 3 1v2a1 1 0 01-1 1A10 10 0 012 3a1 1 0 011-1z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-concrete-300 text-sm font-mono">+251 946 685 829</p>
                      <p className="text-concrete-700 text-[10px] font-mono">Phone</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social channels */}
              <div>
                <p className="text-concrete-500 text-xs uppercase tracking-widest mb-4 font-mono">
                  Social Channels
                </p>
                <div className="grid grid-cols-3 gap-2">
                  {socialLinks.map((link) => (
                    <a
                      key={link.name}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center py-3 border border-concrete-800 text-concrete-500 text-xs uppercase tracking-widest hover:border-industrial-green hover:text-industrial-green hover:bg-industrial-green/5 transition-all duration-300 font-mono"
                      data-hoverable
                    >
                      {link.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Status */}
            <div className="mt-12 pt-8 border-t border-concrete-800/50">
              <div className="flex items-center gap-3">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-industrial-green opacity-75" />
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-industrial-green" />
                </span>
                <div>
                  <p className="text-concrete-300 text-xs font-mono">Available for opportunities</p>
                  <p className="text-concrete-600 text-[10px] font-mono">Open to freelance & full-time roles</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
