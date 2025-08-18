import React from 'react';
import { AboutMeData } from '../data/portfolio';

interface AboutMeProps {
  aboutMe: AboutMeData;
  currentLanguage: 'ru' | 'en' | 'it' | 'zh';
}

const AboutMe: React.FC<AboutMeProps> = ({ aboutMe, currentLanguage }) => {
  console.log('AboutMe component received:', { aboutMe, currentLanguage });
  
  const getTitle = () => {
    switch (currentLanguage) {
      case 'en':
        return 'About Me';
      case 'it':
        return 'Su di Me';
      case 'zh':
        return '关于我';
      default:
        return 'Обо мне';
    }
  };

  const getSectionTitles = () => {
    switch (currentLanguage) {
      case 'en':
        return {
          keyCompetencies: 'Key Competencies',
          hardSkills: 'Hard Skills',
          mainTechnologies: 'Main Technologies',
          additional: 'Additional',
          softSkills: 'Soft Skills',
          principles: 'Principles',
          additionalSkills: 'Additional Skills'
        };
      case 'it':
        return {
          keyCompetencies: 'Competenze Chiave',
          hardSkills: 'Competenze Tecniche',
          mainTechnologies: 'Tecnologie Principali',
          additional: 'Aggiuntive',
          softSkills: 'Competenze Soft',
          principles: 'Principi',
          additionalSkills: 'Competenze Aggiuntive'
        };
      case 'zh':
        return {
          keyCompetencies: '核心能力',
          hardSkills: '硬技能',
          mainTechnologies: '主要技术',
          additional: '附加',
          softSkills: '软技能',
          principles: '原则',
          additionalSkills: '附加技能'
        };
      default:
        return {
          keyCompetencies: 'Ключевые компетенции',
          hardSkills: 'Hard Skills',
          mainTechnologies: 'Основные технологии',
          additional: 'Дополнительно',
          softSkills: 'Soft Skills',
          principles: 'Принципы',
          additionalSkills: 'Дополнительные навыки'
        };
    }
  };



  const titles = getSectionTitles();

  return (
    <section id="about-me" className="about-me-section">
      <div className="container">
        <h2 className="section-title">{getTitle()}</h2>
        
        <div className="timeline">
          {aboutMe ? (
            <>
              {/* Ключевые компетенции */}
              <div className="timeline-item">
                <div className="timeline-content">
                  <div className="company">{titles.keyCompetencies}</div>
                  <ul className="achievements">
                    {aboutMe.keyCompetencies.map((competency, index) => (
                      <li key={index}>{competency}</li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Hard Skills */}
              <div className="timeline-item">
                <div className="timeline-content">
                  <div className="company">{titles.hardSkills}</div>
                  
                  <div style={{marginBottom: '25px'}}>
                    <h4 className="position">{titles.mainTechnologies}:</h4>
                    <ul className="achievements">
                      {aboutMe.hardSkills.main.map((skill, index) => (
                        <li key={index}>{skill}</li>
                      ))}
                    </ul>
                  </div>

                  <div style={{marginBottom: '25px'}}>
                    <h4 className="position">{titles.additional}:</h4>
                    <ul className="achievements">
                      {aboutMe.hardSkills.additional.map((skill, index) => (
                        <li key={index}>{skill}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Soft Skills */}
              <div className="timeline-item">
                <div className="timeline-content">
                  <div className="company">{titles.softSkills}</div>
                  <ul className="achievements">
                    {aboutMe.softSkills.map((skill, index) => (
                      <li key={index}>{skill}</li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Принципы */}
              <div className="timeline-item">
                <div className="timeline-content">
                  <div className="company">{titles.principles}</div>
                  <ol className="achievements" style={{counterReset: 'principle-counter'}}>
                    {aboutMe.principles.map((principle, index) => (
                      <li key={index} style={{counterIncrement: 'principle-counter'}}>
                        <span style={{color: '#ffffff', background: '#10b981', borderRadius: '50%', width: '20px', height: '20px', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontSize: '12px', fontWeight: 'bold', marginRight: '10px'}}>{index + 1}</span>
                        {principle}
                      </li>
                    ))}
                  </ol>
                </div>
              </div>

              {/* Дополнительные навыки */}
              <div className="timeline-item">
                <div className="timeline-content">
                  <div className="company">{titles.additionalSkills}</div>
                  <ul className="achievements">
                    {aboutMe.additionalSkills.map((skill, index) => (
                      <li key={index}>{skill}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </>
          ) : (
            <div className="timeline-item">
              <div className="timeline-content">
                <div className="company">{getTitle()}</div>
                <p style={{color: 'var(--gray)', margin: 0}}>Данные не загружены</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
