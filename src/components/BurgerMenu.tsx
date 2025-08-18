import { useState } from 'react'

interface BurgerMenuProps {
  currentLanguage: 'ru' | 'en' | 'it' | 'zh'
  onLanguageChange: (language: 'ru' | 'en' | 'it' | 'zh') => void
}

const BurgerMenu: React.FC<BurgerMenuProps> = ({ currentLanguage, onLanguageChange }) => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const handleLanguageSelect = (language: 'ru' | 'en' | 'it' | 'zh') => {
    onLanguageChange(language)
    setIsOpen(false)
  }

  const languages = [
    { code: 'ru', label: 'Русский' },
    { code: 'en', label: 'English' },
    { code: 'it', label: 'Italiano' },
    { code: 'zh', label: '中文' }
  ] as const

  return (
    <div className="burger-menu">
      <button 
        className={`burger-button ${isOpen ? 'open' : ''}`}
        onClick={toggleMenu}
        aria-label="Открыть меню"
      >
        <span className="burger-line"></span>
        <span className="burger-line"></span>
        <span className="burger-line"></span>
      </button>

      <div className={`burger-overlay ${isOpen ? 'open' : ''}`} onClick={toggleMenu}></div>
      
      <nav className={`burger-nav ${isOpen ? 'open' : ''}`}>
        <div className="burger-nav-content">
          <h3 className="burger-nav-title">
            {currentLanguage === 'ru' ? 'Меню' :
             currentLanguage === 'en' ? 'Menu' :
             currentLanguage === 'it' ? 'Menu' : '菜单'}
          </h3>
          
          <div className="burger-nav-section">
            <h4 className="burger-nav-subtitle">
              {currentLanguage === 'ru' ? 'Язык' :
               currentLanguage === 'en' ? 'Language' :
               currentLanguage === 'it' ? 'Lingua' : '语言'}
            </h4>
            <ul className="burger-nav-list">
              {languages.map((lang) => (
                <li key={lang.code}>
                  <button
                    className={`burger-nav-item ${currentLanguage === lang.code ? 'active' : ''}`}
                    onClick={() => handleLanguageSelect(lang.code)}
                  >
                    {lang.label}
                    {currentLanguage === lang.code && (
                      <span className="burger-nav-check">✓</span>
                    )}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className="burger-nav-section">
            <h4 className="burger-nav-subtitle">
              {currentLanguage === 'ru' ? 'Навигация' :
               currentLanguage === 'en' ? 'Navigation' :
               currentLanguage === 'it' ? 'Navigazione' : '导航'}
            </h4>
            <ul className="burger-nav-list">
              <li>
                <a href="#header" className="burger-nav-item" onClick={toggleMenu}>
                  {currentLanguage === 'ru' ? 'Главная' :
                   currentLanguage === 'en' ? 'Home' :
                   currentLanguage === 'it' ? 'Home' : '首页'}
                </a>
              </li>
              <li>
                <a href="#experience" className="burger-nav-item" onClick={toggleMenu}>
                  {currentLanguage === 'ru' ? 'Опыт' :
                   currentLanguage === 'en' ? 'Experience' :
                   currentLanguage === 'it' ? 'Esperienza' : '经验'}
                </a>
              </li>
              <li>
                <a href="#education" className="burger-nav-item" onClick={toggleMenu}>
                  {currentLanguage === 'ru' ? 'Образование' :
                   currentLanguage === 'en' ? 'Education' :
                   currentLanguage === 'it' ? 'Istruzione' : '教育'}
                </a>
              </li>
              <li>
                <a href="#about-me" className="burger-nav-item" onClick={toggleMenu}>
                  {currentLanguage === 'ru' ? 'Обо мне' :
                   currentLanguage === 'en' ? 'About Me' :
                   currentLanguage === 'it' ? 'Su di Me' : '关于我'}
                </a>
              </li>
              <li>
                <a href="#skills" className="burger-nav-item" onClick={toggleMenu}>
                  {currentLanguage === 'ru' ? 'Навыки' :
                   currentLanguage === 'en' ? 'Skills' :
                   currentLanguage === 'it' ? 'Competenze' : '技能'}
                </a>
              </li>
              <li>
                <a href="#footer" className="burger-nav-item" onClick={toggleMenu}>
                  {currentLanguage === 'ru' ? 'Контакты' :
                   currentLanguage === 'en' ? 'Contact' :
                   currentLanguage === 'it' ? 'Contatti' : '联系'}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default BurgerMenu
