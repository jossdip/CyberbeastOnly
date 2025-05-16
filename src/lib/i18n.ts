'use client'

import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from '../../public/locales/en.json';
import fr from '../../public/locales/fr.json';
import de from '../../public/locales/de.json';
import es from '../../public/locales/es.json';
import it from '../../public/locales/it.json';

// Only initialize i18next if it hasn't been initialized yet
if (!i18n.isInitialized) {
  i18n
    .use(initReactI18next)
    .init({
      resources: {
        en: { translation: en },
        fr: { translation: fr },
        de: { translation: de },
        es: { translation: es },
        it: { translation: it },
      },
      lng: 'en',
      fallbackLng: 'en',
      interpolation: {
        escapeValue: false,
      },
      react: {
        useSuspense: false,
      },
    });
}

export default i18n; 