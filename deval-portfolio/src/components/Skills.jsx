import { useInView } from '../hooks/useInView'

const categories = [
  {
    icon: '⌨️',
    title: 'Languages & Scripting',
    tags: ['JavaScript', 'TypeScript', 'Python', 'HTML', 'CSS', 'SQL', 'JSON', 'XML'],
  },
  {
    icon: '🎨',
    title: 'Frontend Development',
    tags: ['React', 'Angular', 'Redux', 'RxJS', 'Ionic', 'Material-UI', 'Tailwind CSS', 'Responsive Design'],
  },
  {
    icon: '⚙️',
    title: 'Backend & APIs',
    tags: ['Node.js', 'Express.js', 'NestJS', 'REST APIs', 'GraphQL', 'JWT', 'OAuth', 'Microservices'],
  },
  {
    icon: '🗄️',
    title: 'Databases',
    tags: ['PostgreSQL', 'MongoDB', 'MySQL'],
  },
  {
    icon: '☁️',
    title: 'DevOps & Deployment',
    tags: ['Docker', 'GitHub Actions', 'Jenkins', 'CI/CD', 'AWS Lambda', 'Cloud Deployments'],
  },
  {
    icon: '🤖',
    title: 'AI & Data Skills',
    tags: ['scikit-learn', 'TensorFlow', 'NLP', 'Predictive Modeling', 'Data Visualization'],
  },
  {
    icon: '🎭',
    title: 'Design & UX',
    tags: ['Wireframing', 'Prototyping', 'User Research', 'High-Fidelity Mockups', 'Accessibility'],
  },
  {
    icon: '🧪',
    title: 'Testing & QA',
    tags: ['Jest', 'Unit Testing', 'Debugging', 'Performance Optimization'],
  },
  {
    icon: '🔐',
    title: 'Security & Compliance',
    tags: ['Authentication', 'Authorization', 'GDPR Compliance', 'Enterprise Security'],
  },
]

export default function Skills() {
  const [ref, visible] = useInView()

  return (
    <section className="skills" id="skills">
      <div className="container" ref={ref}>
        <span className={`section-label reveal${visible ? ' visible' : ''}`}>Skills</span>
        <h2 className={`section-title reveal reveal-delay-1${visible ? ' visible' : ''}`}>
          What I Work With
        </h2>
        <div className={`section-divider reveal reveal-delay-2${visible ? ' visible' : ''}`} />

        <div className="skills-grid">
          {categories.map((cat, i) => (
            <div
              className={`skill-category reveal${visible ? ' visible' : ''}`}
              key={cat.title}
              style={{ transitionDelay: `${0.05 * i + 0.2}s` }}
            >
              <div className="skill-cat-icon">{cat.icon}</div>
              <h3 className="skill-cat-title">{cat.title}</h3>
              <div className="skill-tags">
                {cat.tags.map(t => (
                  <span className="skill-tag" key={t}>{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
