// Drop your photo as /public/profile.jpg and it will show here automatically.
// Set PHOTO_SRC to null if you don't have a photo yet.

const PHOTO_SRC = '/profile.jpg'   // ← set to null to show placeholder

export default function Hero() {
  return (
    <section className="hero" id="hero" style={{ position: 'relative' }}>
      <div className="container">
        <div className="hero-inner">
          {/* Text */}
          <div>
            <p className="hero-eyebrow reveal visible">
              UI/UX Designer &amp; Full-Stack Developer
            </p>
            <h1 className="hero-name reveal visible" style={{ transitionDelay: '0.1s' }}>
              Hello, I'm<br /><em>Deval Mistry</em>
            </h1>
            <p className="hero-tagline reveal visible" style={{ transitionDelay: '0.2s' }}>
              Designing interfaces that feel effortless -
              engineering systems that perform.
              Based in Ontario, Canada.
            </p>
            <div className="hero-actions reveal visible" style={{ transitionDelay: '0.3s' }}>
              <a href="#projects" className="btn-primary">
                View My Work
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M1 7h12M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </a>
              <a href="/resume.pdf" download className="btn-outline">
                Download Resume
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M7 1v8M3.5 6l3.5 4 3.5-4M2 12h10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </a>
            </div>
          </div>

          {/* Photo */}
          <div className="hero-photo-wrap reveal visible" style={{ transitionDelay: '0.25s' }}>
            <PhotoOrPlaceholder src={PHOTO_SRC} />
            <div className="hero-photo-frame" />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="hero-scroll">
        <div className="hero-scroll-line" />
        <span>Scroll</span>
      </div>
    </section>
  )
}

function PhotoOrPlaceholder({ src }) {
  if (src) {
    return <img src={src} alt="Deval Mistry" className="hero-photo" />
  }
  return (
    <div className="hero-photo-placeholder">
      <svg width="64" height="64" viewBox="0 0 64 64" fill="none">
        <circle cx="32" cy="26" r="12" stroke="#3D5A47" strokeWidth="2"/>
        <path d="M10 56c0-12.15 9.85-22 22-22s22 9.85 22 22" stroke="#3D5A47" strokeWidth="2" strokeLinecap="round"/>
      </svg>
      <p>Add photo as<br/>/public/profile.jpg</p>
    </div>
  )
}