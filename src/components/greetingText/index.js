import { Greeting } from './styled'
import { useTranslation } from 'react-i18next'

const { t } = useTranslation()

export const GreetingText = () => {
  const nome = `${localStorage.getItem('mentorName').split(' ')[0][0].toUpperCase()}` +
    `${localStorage.getItem('mentorName').split(' ')[0].slice(1)}`
  return <Greeting>{t('greetingText.Greeting', { nome: nome })}</Greeting>
}
