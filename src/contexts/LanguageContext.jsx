// contexts/LanguageContext.jsx
import React, { createContext, useState, useContext, useEffect } from 'react';
import { en } from '../translations/en';
import { es } from '../translations/es';

// Create the context
const LanguageContext = createContext();

// Create a provider component that will wrap our app
export function LanguageProvider({ children }) {
  // Initialize language from localStorage or default to 'en'
  const [language, setLanguage] = useState(() => {
    const savedLanguage = localStorage.getItem('language');
    return savedLanguage || 'en';
  });

  // Get translations based on current language
  const translations = language === 'en' ? en : es;

  // Toggle between languages
  const toggleLanguage = () => {
    setLanguage(prev => prev === 'en' ? 'es' : 'en');
  };

  // Save language preference to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('language', language);
  }, [language]);

  return (
    <LanguageContext.Provider value={{ 
      language, 
      toggleLanguage, 
      translations,
      // Add a translate function for dynamic text
      t: (key) => {
        // Split the key path (e.g., "about.music" becomes ["about", "music"])
        const keys = key.split('.');
        // Reduce through the translations object following the key path
        return keys.reduce((obj, key) => obj?.[key], translations) || key;
      }
    }}>
      {children}
    </LanguageContext.Provider>
  );
}

// Create a custom hook for using the language context
export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}