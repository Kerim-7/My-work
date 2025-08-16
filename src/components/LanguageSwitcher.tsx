import React from 'react'

interface LanguageSwitcherProps {
  currentLanguage: 'ru' | 'en' | 'it' | 'zh'
  onLanguageChange: (language: 'ru' | 'en' | 'it' | 'zh') => void
}

const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({ 
  currentLanguage, 
  onLanguageChange 
}) => {
  return (
    <div className="language-switcher">
      <button
        className={`lang-btn ${currentLanguage === 'ru' ? 'active' : ''}`}
        onClick={() => onLanguageChange('ru')}
        aria-label="Switch to Russian"
      >
        RU
      </button>
      <span className="lang-separator">|</span>
      <button
        className={`lang-btn ${currentLanguage === 'en' ? 'active' : ''}`}
        onClick={() => onLanguageChange('en')}
        aria-label="Switch to English"
      >
        EN
      </button>
      <span className="lang-separator">|</span>
      <button
        className={`lang-btn ${currentLanguage === 'it' ? 'active' : ''}`}
        onClick={() => onLanguageChange('it')}
        aria-label="Switch to Italian"
      >
        IT
      </button>
      <span className="lang-separator">|</span>
      <button
        className={`lang-btn ${currentLanguage === 'zh' ? 'active' : ''}`}
        onClick={() => onLanguageChange('zh')}
        aria-label="Switch to Chinese"
      >
        中文
      </button>
    </div>
  )
}

export default LanguageSwitcher
