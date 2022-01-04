import i18next from 'i18next';
import { initReactI18next } from 'react-i18next'
import PTBR from './languages/pt/common.json'
import ENUS from './languages/en/common.json'
export default i18next

const resources = {
  'pt-BR': PTBR,
  'en-us': ENUS
}

i18next
  .use(initReactI18next)
  .init({
    resources,
    language: navigator.language,
    interpolation: {
      escapeValue: false
    }
  })
