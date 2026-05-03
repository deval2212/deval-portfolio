import { useInView } from '../hooks/useInView'

const education = [
  {
    period: 'Sep 2024 – Apr 2026',
    degree: 'Advanced Diploma in IT Innovation & Design',
    school: 'Conestoga College',
    location: 'ON, Canada',
    current: false,
  },
  {
    period: 'Jun 2019 – Aug 2022',
    degree: 'Diploma in Information & Technology',
    school: 'RC Technical Institute',
    location: 'India',
    current: false,
  },
]

export default function Education() {
  const [ref, visible] = useInView()

  return (
    <section className="education" id="education">
      <div className="container" ref={ref}>
        <span className={`section-label reveal${visible ? ' visible' : ''}`}>Education</span>
        <h2 className={`section-title reveal reveal-delay-1${visible ? ' visible' : ''}`}>
          Academic Background
        </h2>
        <div className={`section-divider reveal reveal-delay-2${visible ? ' visible' : ''}`} />

        <div className="education-grid">
          {education.map((e, i) => (
            <div
              className={`edu-card reveal${visible ? ' visible' : ''}`}
              key={e.degree}
              style={{ transitionDelay: `${0.15 * i + 0.2}s` }}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '12px' }}>
                <p className="edu-period">{e.period}</p>
                {e.current && (
                  <span style={{
                    fontSize: '11px',
                    fontWeight: 600,
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    color: '#fff',
                    background: 'var(--accent)',
                    padding: '3px 10px',
                    borderRadius: '100px',
                  }}>Current</span>
                )}
              </div>
              <h3 className="edu-degree">{e.degree}</h3>
              <p className="edu-school">
                <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
                  <path d="M6.5 1L1 3.9l5.5 2.6L12 3.9 6.5 1zM1 3.9v4.3M6.5 6.5v4.5M3.25 5.3v3.7a3.25 3.25 0 006.5 0V5.3" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                {e.school} · {e.location}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
