import { useInView } from '../hooks/useInView'

const stats = [
  { number: '1+',    label: 'Year Professional Experience' },
  { number: '5+',    label: 'Technical Skill Domains' },
  { number: '1',    label: 'Real-World Projects' },
  { number: '3',     label: 'Countries & Institutions' },
]

const highlights = [
  'Passionate about clean, purposeful design that puts users first',
  'Experienced in healthcare tech, CRM systems & enterprise platforms',
  'Proficient from design wireframes all the way to cloud deployment',
  'Currently studying IT Innovation & Design at Conestoga College',
]

export default function About() {
  const [ref, visible] = useInView()

  return (
    <section className="about" id="about">
      <div className="container" ref={ref}>
        <div className="about-grid">

          {/* Left — text */}
          <div>
            <span className={`section-label reveal${visible ? ' visible' : ''}`}>About Me</span>
            <h2 className={`section-title reveal reveal-delay-1${visible ? ' visible' : ''}`}>
              Bridging Design<br />& Engineering
            </h2>
            <div className={`section-divider reveal reveal-delay-2${visible ? ' visible' : ''}`} />

            <div className={`about-text reveal reveal-delay-2${visible ? ' visible' : ''}`}>
              <p>
                I'm Deval Mistry, a UI/UX Designer and Full-Stack Developer based in Ontario, Canada.
                Currently pursuing my Post Graduate diploma in IT Innovation &amp; Design at Conestoga College,
                I blend design thinking with engineering precision to build digital products that are
                both beautiful and functional.
              </p>
              <p>
                With hands-on experience at Transpire IT Services, where I built CRM features, debugged
                production systems, and authored technical documentation, I've learned how great software
                is built end-to-end — from a user's first impression right through to deployment and monitoring.
              </p>
              <p>
                I'm drawn to healthcare technology and believe that thoughtful interfaces can meaningfully
                improve people's lives. I create user-centered solutions that solve real problems —
                from concept and wireframe to deployed application.
              </p>
            </div>
          </div>

          {/* Right — stats + highlights */}
          <div>
            <div className={`about-stats reveal reveal-delay-3${visible ? ' visible' : ''}`}>
              {stats.map(s => (
                <div className="stat-card" key={s.label}>
                  <span className="stat-number">{s.number}</span>
                  <span className="stat-label">{s.label}</span>
                </div>
              ))}
            </div>

            <div className={`about-highlights reveal reveal-delay-4${visible ? ' visible' : ''}`}>
              {highlights.map(h => (
                <div className="highlight-item" key={h}>
                  <div className="highlight-dot" />
                  <span>{h}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
