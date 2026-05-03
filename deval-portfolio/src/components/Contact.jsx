import { useRef, useState } from 'react'
import { useInView } from '../hooks/useInView'
import emailjs from '@emailjs/browser'

// ─────────────────────────────────────────────────────
// SETUP: Copy .env.example → .env and fill in your keys
// from https://www.emailjs.com
// ─────────────────────────────────────────────────────
const SERVICE_ID  = import.meta.env.VITE_EMAILJS_SERVICE_ID
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
const PUBLIC_KEY  = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

const contactLinks = [
  {
    icon: <EmailIcon />,
    label: 'devalgajjar204@gmail.com',
    href: 'mailto:devalgajjar204@gmail.com',
  },
  {
    icon: <LinkedInIcon />,
    label: 'linkedin.com/in/deval-mistry-862799341',
    href: 'www.linkedin.com/in/deval-mistry-862799341',
  },
  {
    icon: <GithubIcon />,
    label: 'github.com/deval2212',
    href: 'https://github.com/deval2212',
  },
  {
    icon: <PhoneIcon />,
    label: '+1 (548) 333-9164',
    href: 'tel:+15483339164',
  },
]

export default function Contact() {
  const formRef = useRef(null)
  const [status, setStatus] = useState(null) // 'sending' | 'success' | 'error'
  const [ref, visible] = useInView()

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')
    try {
      await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, { publicKey: PUBLIC_KEY })
      setStatus('success')
      formRef.current.reset()
    } catch {
      setStatus('error')
    }
  }

  return (
    <section className="contact" id="contact">
      <div className="container" ref={ref}>
        <span className={`section-label reveal${visible ? ' visible' : ''}`}>Contact</span>
        <h2 className={`section-title reveal reveal-delay-1${visible ? ' visible' : ''}`}>
          Let's Work Together
        </h2>
        <div className={`section-divider reveal reveal-delay-2${visible ? ' visible' : ''}`} />

        <div className="contact-inner">
          {/* Left */}
          <div className={`reveal reveal-delay-2${visible ? ' visible' : ''}`}>
            <div className="contact-intro">
              <p>
                I'm currently open to new opportunities — whether it's a full-time role,
                freelance project, or just a conversation. My inbox is always open.
              </p>
              <p>
                Based in Ontario, Canada and available for remote or hybrid positions worldwide.
              </p>
            </div>

            <div className="contact-links">
              {contactLinks.map(cl => (
                <a key={cl.label} href={cl.href} target="_blank" rel="noreferrer" className="contact-link">
                  <span className="contact-link-icon">{cl.icon}</span>
                  {cl.label}
                </a>
              ))}
            </div>
          </div>

          {/* Right — form */}
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className={`contact-form reveal reveal-delay-3${visible ? ' visible' : ''}`}
          >
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="user_name">Name</label>
                <input id="user_name" name="user_name" type="text" placeholder="Jane Smith" required />
              </div>
              <div className="form-group">
                <label htmlFor="user_email">Email</label>
                <input id="user_email" name="user_email" type="email" placeholder="jane@example.com" required />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input id="subject" name="subject" type="text" placeholder="Project inquiry / Job opportunity..." required />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" rows={6} placeholder="Tell me about your project or opportunity..." required />
            </div>

            {status === 'success' && (
              <p className="form-status success">✓ Message sent! I'll be in touch shortly.</p>
            )}
            {status === 'error' && (
              <p className="form-status error">Something went wrong. Please email me directly.</p>
            )}

            <button type="submit" className="btn-primary" disabled={status === 'sending'}>
              {status === 'sending' ? 'Sending…' : 'Send Message'}
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M1 7h12M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

function EmailIcon() {
  return <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><rect x="1" y="3" width="14" height="10" rx="1.5" stroke="currentColor" strokeWidth="1.2"/><path d="M1 5l7 4.5L15 5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/></svg>
}
function LinkedInIcon() {
  return <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2" fill="currentColor"/></svg>
}
function GithubIcon() {
  return <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/></svg>
}
function PhoneIcon() {
  return <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 2h3l1.5 3.5-1.75 1.25a8 8 0 004.5 4.5L11.5 9.5 15 11v3a1 1 0 01-1 1A13 13 0 012 3a1 1 0 011-1z" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/></svg>
}
