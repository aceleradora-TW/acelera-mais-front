import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import PTBR from './languages/pt/common.json'
import ENUS from './languages/en/common.json'

const resources = {
  'pt-BR': PTBR,
  'en-US': ENUS
}

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: navigator.language,
    fallbackLng: 'en-US',
    interpolation: {
      escapeValue: false
    }
  })

export default i18n
