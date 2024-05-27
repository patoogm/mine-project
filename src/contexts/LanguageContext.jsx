import { createContext, useState } from 'react';
import es from '../locales/es';
import en from '../locales/en';

export const LanguageContext = createContext();

const translations = { es, en };

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('es');

  const changeLanguage = (lang) => {
    setLanguage(lang);
  };

  const t = translations[language];

  return (
    <LanguageContext.Provider value={{ language, changeLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};
