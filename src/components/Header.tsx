import { useEffect, useRef, useState } from 'react'
import { HeaderData } from '../data/portfolio'

interface HeaderProps {
  data: HeaderData
}

const Header: React.FC<HeaderProps> = ({ data }) => {
  const [isVisible, setIsVisible] = useState(false)
  const [isTyping, setIsTyping] = useState(false)
  const [isTypingCompleted, setIsTypingCompleted] = useState(false)
  const heroRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          // Запускаем анимацию печатания через небольшую задержку
          setTimeout(() => setIsTyping(true), 500)
          // Завершаем анимацию через 1.5 секунды
          setTimeout(() => {
            setIsTypingCompleted(true)
          }, 1500)
        }
      },
      { threshold: 0.1 }
    )

    if (heroRef.current) {
      observer.observe(heroRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <header className="header" id="header">
      <div className="container">
        <div className={`hero ${isVisible ? 'animate-in' : ''}`} ref={heroRef}>
          <div className="hero-content">
            <h1 className={`${isTyping ? 'typing-animation' : ''} ${isTypingCompleted ? 'completed' : ''}`}>
              {data.name === 'Керим' ? 'Привет, я' : 
               data.name === 'Kerim' ? 'Hello, I am' :
               data.name === '凯里姆' ? '你好，我是' : 'Ciao, sono'} <span className="highlight">{data.name}</span>
            </h1>
            <p className={`tagline ${isTyping ? 'typing-animation' : ''} ${isTypingCompleted ? 'completed' : ''}`}>
              {data.tagline}
            </p>
            
            <div className="contacts">
              <a 
                href={`tel:${data.phone}`} 
                className="contact-btn animate-btn"
                style={{ animationDelay: '0.1s' }}
              >
                <i className="fas fa-phone"></i>
                {data.name === 'Керим' ? 'Позвонить' : 
                 data.name === 'Kerim' ? 'Call' :
                 data.name === '凯里姆' ? '打电话' : 'Chiama'}
              </a>
              <a 
                href={`mailto:${data.email}`} 
                className="contact-btn secondary animate-btn"
                style={{ animationDelay: '0.2s' }}
              >
                <i className="fas fa-envelope"></i>
                {data.name === 'Керим' ? 'Написать' : 
                 data.name === 'Kerim' ? 'Write' :
                 data.name === '凯里姆' ? '写信' : 'Scrivi'}
              </a>
            </div>
          </div>
          
          <img 
            src={data.avatar} 
            alt={`${data.name} Абдулкеримов`} 
            className="hero-image"
            style={{ animationDelay: '0.4s' }}
          />
        </div>
      </div>
    </header>
  )
}

export default Header
