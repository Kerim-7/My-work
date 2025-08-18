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
                <div className="timeline-date">{item.period}</div>
                <div className="timeline-content">
                  <div className="company">{item.degree}</div>
                  <div className="position">{item.institution}</div>
                  <p style={{color: 'var(--gray)', margin: 0}}>{item.location}</p>
                </div>
              </div>
            ))
          ) : (
            <div className="timeline-item">
              <div className="timeline-date">2025</div>
              <div className="timeline-content">
                <div className="company">Высшее</div>
                <div className="position">Таганрогский технологический институт Южного федерального университета</div>
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
