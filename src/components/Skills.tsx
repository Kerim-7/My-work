import { useEffect, useRef, useState } from 'react'
import { SkillCategory } from '../data/portfolio'

interface SkillsProps {
  data: SkillCategory[]
  currentLanguage?: 'ru' | 'en' | 'it' | 'zh'
}

const Skills: React.FC<SkillsProps> = ({ data, currentLanguage = 'ru' }) => {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const getTitle = () => {
    switch (currentLanguage) {
      case 'en':
        return 'Skills';
      case 'it':
        return 'Competenze';
      case 'zh':
        return '技能';
      default:
        return 'Навыки';
    }
  };

  return (
    <section ref={sectionRef} id="skills" className="section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">{getTitle()}</h2>
        </div>
        
        <div className="skills-grid">
          {data.map((category, index) => (
            <div 
              key={category.id}
              className={`skill-category ${isVisible ? 'animate-in' : ''}`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <h3>{category.title}</h3>
              <ul className="skill-list">
                {category.skills.map((skill, skillIdx) => (
                  <li 
                    key={skillIdx}
                    style={{ animationDelay: `${(index * 0.2) + (skillIdx * 0.1)}s` }}
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
