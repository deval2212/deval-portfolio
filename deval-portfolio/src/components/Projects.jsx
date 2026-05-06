import { useInView } from '../hooks/useInView'

const projects = [
  {
    type: 'UI/UX Design · Healthcare Technology',
    title: 'MedTech — Smart Digital Healthcare Platform',
    description:
      'A modern, professional healthcare web application focused on patient convenience and consultant accessibility. Designed end-to-end user flows for appointment booking, consultant search, digital payments, and real-time notifications — reducing booking friction and improving accessibility across all devices.',
    stack: ['React', 'Node.js', 'JavaScript', 'Figma', 'Responsive Design'],
    liveUrl: 'https://med-tech-rho.vercel.app',
    githubUrl: 'https://github.com/sujal0830/MedTech',
    highlights: [
      'Patient, doctor & admin dashboards',
      'Wireframes → high-fidelity mockups → clickable prototypes',
      'Medical blue, white & teal brand identity',
      'WCAG-compliant & fully mobile responsive',
    ],
  },
]

export default function Projects() {
  const [ref, visible] = useInView()

  return (
    <section className="projects" id="projects">
      <div className="container" ref={ref}>
        <span className={`section-label reveal${visible ? ' visible' : ''}`}>Projects</span>
        <h2 className={`section-title reveal reveal-delay-1${visible ? ' visible' : ''}`}>
          Selected Work
        </h2>
        <div className={`section-divider reveal reveal-delay-2${visible ? ' visible' : ''}`} />

        <div className="projects-grid">
          {projects.map((p, i) => (
            <div
              className={`project-card reveal${visible ? ' visible' : ''}`}
              key={p.title}
              style={{ transitionDelay: `${0.15 * i + 0.2}s` }}
            >
              <div className="project-thumb">
                <span className="project-thumb-text">{p.title.split('—')[0].trim()}</span>
              </div>
              <div className="project-body">
                <p className="project-type">{p.type}</p>
                <h3 className="project-title">{p.title}</h3>
                <p className="project-desc">{p.description}</p>

                {/* Highlights */}
                <ul style={{ marginBottom: '20px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  {p.highlights.map(h => (
                    <li key={h} style={{ fontSize: '13px', color: 'var(--text-secondary)', paddingLeft: '14px', position: 'relative' }}>
                      <span style={{ position: 'absolute', left: 0, top: '8px', width: '5px', height: '1px', background: 'var(--accent)', display: 'block' }} />
                      {h}
                    </li>
                  ))}
                </ul>

                <div className="project-stack">
                  {p.stack.map(t => <span key={t}>{t}</span>)}
                </div>

                <div className="project-links">
                  {p.githubUrl
                    ? <a href={p.githubUrl} target="_blank" rel="noreferrer" className="project-link">
                        <GithubIcon /> GitHub
                      </a>
                    : <span className="project-link" style={{ opacity: 0.4, cursor: 'default' }}>
                        <GithubIcon /> Private Repo
                      </span>
                  }
                  {p.liveUrl &&
                    <a href={p.liveUrl} target="_blank" rel="noreferrer" className="project-link">
                      <LinkIcon /> Live Demo
                    </a>
                  }
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function GithubIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
    </svg>
  )
}

function LinkIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
      <path d="M5.5 3H3a2 2 0 000 4h2M8.5 11H11a2 2 0 000-4H9M4.5 7h5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
    </svg>
  )
}
