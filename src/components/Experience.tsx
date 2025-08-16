import { useEffect, useRef, useState } from 'react'
import { ExperienceItem } from '../data/portfolio'
import Modal from './Modal'

interface ExperienceProps {
  data: ExperienceItem[]
}

const Experience: React.FC<ExperienceProps> = ({ data }) => {
  const [selectedProject, setSelectedProject] = useState<ExperienceItem | null>(null)
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
            <h2 className="section-title">Опыт работы</h2>
          </div>
          
          <div className="timeline">
            {data.map((item, index) => (
              <div 
                key={item.id} 
                className={`timeline-item ${isVisible ? 'animate-in' : ''}`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="timeline-date">{item.period}</div>
                <div className="timeline-content">
                  <h3 
                    className="company clickable"
                    onClick={() => handleProjectClick(item)}
                  >
                    {item.company}
                  </h3>
                  <p className="position">{item.position}</p>
                  <p>{item.description}</p>
                  <ul className="achievements">
                    {item.achievements.slice(0, 3).map((achievement, idx) => (
                      <li key={idx} style={{ animationDelay: `${(index * 0.2) + (idx * 0.1)}s` }}>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                  <button 
                    className="details-btn"
                    onClick={() => handleProjectClick(item)}
                  >
                    Подробнее
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
              <h5>Описание проекта:</h5>
              <p>{selectedProject.description}</p>
            </div>
            
            {selectedProject.responsibilities && (
              <div className="project-responsibilities">
                <h5>Обязанности:</h5>
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
              <h5>Ключевые достижения:</h5>
              <ul>
                {selectedProject.achievements.map((achievement, index) => (
                  <li key={index}>{achievement}</li>
                ))}
              </ul>
            </div>
            
            {selectedProject.technologies && (
              <div className="project-tech">
                <h5>Технологии:</h5>
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
