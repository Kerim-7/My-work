import { useEffect, useRef, useState } from 'react'
import { FooterData } from '../data/portfolio'

interface FooterProps {
  data: FooterData;
}

const Footer: React.FC<FooterProps> = ({ data }) => {
  const [isVisible, setIsVisible] = useState(false)
  const footerRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (footerRef.current) {
      observer.observe(footerRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const getSocialIcon = (type: string) => {
    switch (type) {
      case 'github':
        return 'fab fa-github'
      case 'linkedin':
        return 'fab fa-linkedin-in'
      case 'telegram':
        return 'fab fa-telegram'
      case 'email':
        return 'fas fa-envelope'
      default:
        return 'fas fa-link'
    }
  }

  const getSocialLink = (type: string, value: string) => {
    switch (type) {
      case 'email':
        return `mailto:${value}`
      case 'telegram':
        return value.startsWith('https://') ? value : `https://t.me/${value.replace('@', '')}`
      default:
        return value
    }
  }

  return (
    <footer ref={footerRef} id="footer" className={`footer ${isVisible ? 'animate-in' : ''}`}>
      <div className="container">
        <div className="footer-content">
          <h2 className="footer-title" style={{ animationDelay: '0.2s' }}>
            {data.title}
          </h2>
          <p className="footer-text" style={{ animationDelay: '0.4s' }}>
            {data.text}
          </p>
          
          <div className="social-links">
            {Object.entries(data.socials).map(([type, link], index) => {
              if (!link || link === '#') return null
              return (
                <a 
                  key={type}
                  href={getSocialLink(type, link)}
                  className="social-link"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ animationDelay: `${0.6 + (index * 0.1)}s` }}
                >
                  <i className={getSocialIcon(type)}></i>
                </a>
              )
            })}
          </div>
          
          <p className="copyright" style={{ animationDelay: '0.8s' }}>
            {data.copyright}
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
