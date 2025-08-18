import React from 'react';
import { AboutMeData } from '../data/portfolio';

interface AboutSelfProps {
  aboutMe: AboutMeData;
  currentLanguage: 'ru' | 'en' | 'it' | 'zh';
}

const AboutSelf: React.FC<AboutSelfProps> = ({ aboutMe, currentLanguage }) => {
  const getTitle = () => {
    switch (currentLanguage) {
      case 'en':
        return 'About Myself';
      case 'it':
        return 'Su di Me';
      case 'zh':
        return '关于自己';
      default:
        return 'О себе';
    }
  };

  return (
    <section id="about-self" className="about-self-section">
      <div className="container">
        <h2 className="section-title">{getTitle()}</h2>
        
        <div className="timeline">
          {aboutMe && aboutMe.intro && aboutMe.intro.length > 0 ? (
            <div className="timeline-item">
              <div className="timeline-content">
                {aboutMe.intro.map((paragraph, index) => (
                  <p key={index} style={{marginBottom: '12px'}}>{paragraph}</p>
                ))}
              </div>
            </div>
          ) : (
            <div className="timeline-item">
              <div className="timeline-content">
                <p style={{color: 'var(--gray)', margin: 0}}>Данные не загружены</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default AboutSelf;
