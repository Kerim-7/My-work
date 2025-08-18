import { useState, useEffect } from 'react'
import Header from './components/Header'
import Experience from './components/Experience'
import Education from './components/Education'
import AboutMe from './components/AboutMe'
// import AboutSelf from './components/AboutSelf'
import Skills from './components/Skills'
import Footer from './components/Footer'
import BurgerMenu from './components/BurgerMenu'
import { portfolioDataRu } from './data/portfolio.ru'
import { portfolioDataEn } from './data/portfolio.en'
import { portfolioDataIt } from './data/portfolio.it'
import { portfolioDataZh } from './data/portfolio.zh'

function App() {
  const [isVisible, setIsVisible] = useState<boolean>(false)
  const [currentLanguage, setCurrentLanguage] = useState<'ru' | 'en' | 'it' | 'zh'>('ru')

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const getPortfolioData = () => {
    switch (currentLanguage) {
      case 'ru':
        return portfolioDataRu
      case 'en':
        return portfolioDataEn
      case 'it':
        return portfolioDataIt
      case 'zh':
        return portfolioDataZh
      default:
        return portfolioDataRu
    }
  }

  const portfolioData = getPortfolioData()

  const handleLanguageChange = (language: 'ru' | 'en' | 'it' | 'zh') => {
    setCurrentLanguage(language)
  }

  return (
    <div className={`app ${isVisible ? 'visible' : ''}`}>
      <BurgerMenu 
        currentLanguage={currentLanguage} 
        onLanguageChange={handleLanguageChange} 
      />
      <Header data={portfolioData.header} aboutIntro={portfolioData.aboutMe.intro} />
      <Experience data={portfolioData.experience} currentLanguage={currentLanguage} />
      <Education education={portfolioData.education} currentLanguage={currentLanguage} />
      <AboutMe aboutMe={portfolioData.aboutMe} currentLanguage={currentLanguage} />
      <Skills data={portfolioData.skills} currentLanguage={currentLanguage} />
      <Footer data={portfolioData.footer} />
    </div>
  )
}

export default App
