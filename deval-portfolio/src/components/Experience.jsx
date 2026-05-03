import { useInView } from '../hooks/useInView'

const experiences = [
  {
    company: 'Transpire IT Services Pvt Ltd',
    role: 'Software Developer',
    period: 'Oct 2023 – Aug 2024',
    location: 'India',
    bullets: [
      'Built CRM features using Node.js, Express, and MySQL — improving multi-tenant user workflow efficiency by 25% across active accounts.',
      'Debugged high-priority production issues and resolved system errors, increasing platform uptime by 20% and ensuring uninterrupted service for clients.',
      'Authored technical documentation and UML system diagrams, reducing onboarding time for new developers by 15% and improving project maintainability.',
      'Collaborated with QA and support teams to identify performance bottlenecks, implementing targeted fixes that raised operational efficiency metrics by 20% across modules.',
    ],
  },
]

export default function Experience() {
  const [ref, visible] = useInView()

  return (
    <section className="experience" id="experience">
      <div className="container" ref={ref}>
        <span className={`section-label reveal${visible ? ' visible' : ''}`}>Experience</span>
        <h2 className={`section-title reveal reveal-delay-1${visible ? ' visible' : ''}`}>
          Where I've Worked
        </h2>
        <div className={`section-divider reveal reveal-delay-2${visible ? ' visible' : ''}`} />

        <div className={`timeline reveal reveal-delay-2${visible ? ' visible' : ''}`}>
          {experiences.map(exp => (
            <div className="timeline-item" key={exp.company}>
              <div className="timeline-dot" />
              <div className="timeline-meta">
                <span className="timeline-period">{exp.period}</span>
                <span className="timeline-location">
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path d="M6 1C4.343 1 3 2.343 3 4c0 2.5 3 7 3 7s3-4.5 3-7c0-1.657-1.343-3-3-3zm0 4a1 1 0 110-2 1 1 0 010 2z" fill="currentColor"/>
                  </svg>
                  {exp.location}
                </span>
              </div>
              <h3 className="timeline-company">{exp.company}</h3>
              <p className="timeline-role">{exp.role}</p>
              <ul className="timeline-bullets">
                {exp.bullets.map(b => <li key={b}>{b}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
