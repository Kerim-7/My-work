import React from 'react';
import { EducationItem } from '../data/portfolio';

interface EducationProps {
  education: EducationItem[];
  currentLanguage: 'ru' | 'en' | 'it' | 'zh';
}

const Education: React.FC<EducationProps> = ({ education, currentLanguage }) => {
  console.log('Education component received:', { education, currentLanguage });
  
  const getTitle = () => {
    switch (currentLanguage) {
      case 'en':
        return 'Education';
      case 'it':
        return 'Istruzione';
      case 'zh':
        return '教育';
      default:
        return 'Образование';
    }
  };



  return (
    <section id="education" className="education-section">
      <div className="container">
        <h2 className="section-title">{getTitle()}</h2>
        <div className="timeline">
          {education && education.length > 0 ? (
            education.map((item, index) => (
              <div key={index} className="timeline-item">
                <div className="timeline-content">
                  <div className="company">{item.degree}</div>
                  <div className="position">{item.institution}</div>
                  {item.department && (
                    <div className="department" style={{color: 'var(--primary)', fontSize: '0.9rem', marginBottom: '8px', fontWeight: '500'}}>
                      {item.department}
                    </div>
                  )}
                  {item.specialization && (
                    <div className="specialization" style={{color: 'var(--gray)', fontSize: '0.85rem', marginBottom: '8px'}}>
                      {item.specialization}
                    </div>
                  )}
                  <p style={{color: 'var(--gray)', margin: 0}}>{item.location}</p>
                </div>
              </div>
            ))
          ) : (
            <div className="timeline-item">
              <div className="timeline-content">
                <div className="company">Высшее</div>
                <div className="position">`Южный федеральный университет</div>
                <div className="department" style={{color: 'var(--primary)', fontSize: '0.9rem', marginBottom: '8px', fontWeight: '500'}}>
                  Институт радиотехнических систем и управления
                </div>
                <div className="specialization" style={{color: 'var(--gray)', fontSize: '0.85rem', marginBottom: '8px'}}>
                  Компьютерные технологии управления в робототехнике и мехатронике
                </div>
                <p style={{color: 'var(--gray)', margin: 0}}>Таганрог</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Education;
