import { useEffect, useRef, useState } from 'react'
import { ExperienceItem } from '../data/portfolio'
import Modal from './Modal'

interface ExperienceProps {
  data: ExperienceItem[]
  currentLanguage?: 'ru' | 'en' | 'it' | 'zh'
}

const Experience: React.FC<ExperienceProps> = ({ data, currentLanguage = 'ru' }) => {
  const [selectedProject, setSelectedProject] = useState<ExperienceItem | null>(null)
  const [isVisible, setIsVisible] = useState(false)

  const sectionRef = useRef<HTMLElement>(null)

  const getTranslations = () => {
    switch (currentLanguage) {
      case 'en':
        return {
          title: 'Work Experience',
          details: 'Details',
          projectDescription: 'Project Description:',
          responsibilities: 'Responsibilities:',
          keyAchievements: 'Key Achievements:',
          technologies: 'Technologies:'
        };
      case 'it':
        return {
          title: 'Esperienza Lavorativa',
          details: 'Dettagli',
          projectDescription: 'Descrizione del Progetto:',
          responsibilities: 'Responsabilità:',
          keyAchievements: 'Risultati Chiave:',
          technologies: 'Tecnologie:'
        };
      case 'zh':
        return {
          title: '工作经验',
          details: '详情',
          projectDescription: '项目描述:',
          responsibilities: '职责:',
          keyAchievements: '主要成就:',
          technologies: '技术:'
        };
      default:
        return {
          title: 'Опыт работы',
          details: 'Подробнее',
          projectDescription: 'Описание проекта:',
          responsibilities: 'Обязанности:',
          keyAchievements: 'Ключевые достижения:',
          technologies: 'Технологии:'
        };
    }
  };

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

  const handleProjectClick = (project: ExperienceItem) => {
    setSelectedProject(project)
  }

  const closeModal = () => {
    setSelectedProject(null)
  }

  return (
    <>
      <section ref={sectionRef} id="experience" className="section">
        <div className="container">
                  <div className="section-header">
          <h2 className="section-title">{getTranslations().title}</h2>
        </div>
          
          <div className="timeline">
            {data.map((item, index) => (
              <div 
                key={item.id} 
                className={`timeline-item ${isVisible ? 'animate-in' : ''}`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="timeline-content">
                  <h3 
                    className="company clickable"
                    onClick={() => handleProjectClick(item)}
                  >
                    {item.company}
                  </h3>
                  <p className="period">{item.period}</p>
                  <p className="position">{item.position}</p>
                  <p>{item.description}</p>
                  <ul className="achievements">
                    {Array.isArray(item.achievements) 
                      ? item.achievements.slice(0, 3).map((achievement, idx) => (
                          <li key={idx} style={{ animationDelay: `${(index * 0.2) + (idx * 0.1)}s` }}>
                            {achievement}
                          </li>
                        ))
                      : Object.values(item.achievements).flat().slice(0, 3).map((achievement, idx) => (
                          <li key={idx} style={{ animationDelay: `${(index * 0.2) + (idx * 0.1)}s` }}>
                            {achievement}
                          </li>
                        ))
                    }
                  </ul>
                  <button 
                    className="details-btn"
                    onClick={() => handleProjectClick(item)}
                  >
                    {getTranslations().details}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Modal 
        isOpen={!!selectedProject} 
        onClose={closeModal}
        title={selectedProject?.company || ''}
      >
        {selectedProject && (
          <div className="project-details">
            <div className="project-header">
              <h4 className="project-position">{selectedProject.position}</h4>
              <p className="project-period">{selectedProject.period}</p>
            </div>
            
            <div className="project-description">
              <h5>{getTranslations().projectDescription}</h5>
              <p>{selectedProject.description}</p>
            </div>
            
            {selectedProject.responsibilities && (
              <div className="project-responsibilities">
                <h5>{getTranslations().responsibilities}</h5>
                {Object.entries(selectedProject.responsibilities).map(([category, tasks], categoryIdx) => (
                  <div key={category} className="responsibility-category">
                    <h6 style={{ animationDelay: `${categoryIdx * 0.2}s` }}>{category}:</h6>
                    <ul>
                      {tasks.map((task, taskIdx) => (
                        <li key={taskIdx} style={{ animationDelay: `${(categoryIdx * 0.2) + (taskIdx * 0.1)}s` }}>
                          {task}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            )}
            
            <div className="project-achievements">
              <h5>{getTranslations().keyAchievements}</h5>
              {Array.isArray(selectedProject.achievements) ? (
                <ul>
                  {selectedProject.achievements.map((achievement, index) => (
                    <li key={index}>{achievement}</li>
                  ))}
                </ul>
              ) : (
                Object.entries(selectedProject.achievements).map(([category, achievements], categoryIdx) => (
                  <div key={category} className="achievement-category">
                    <h5 style={{ animationDelay: `${categoryIdx * 0.2}s` }}>{category}:</h5>
                    <ul>
                      {achievements.map((achievement, index) => (
                        <li key={index} style={{ animationDelay: `${(categoryIdx * 0.2) + (index * 0.1)}s` }}>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))
              )}
            </div>
            
            {selectedProject.technologies && (
              <div className="project-tech">
                <h5>{getTranslations().technologies}</h5>
                <div className="tech-tags">
                  {selectedProject.technologies.map((tech, index) => (
                    <span key={index} className="tech-tag" style={{ animationDelay: `${index * 0.1}s` }}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}
      </Modal>
    </>
  )
}

export default Experience
