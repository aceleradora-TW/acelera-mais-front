import { Greeting } from './styled'
import { useTranslation } from 'react-i18next'

export const GreetingText = () => {
  const { t } = useTranslation()
  const nome = localStorage.getItem('mentorName').split(' ').shift()
  return <Greeting>{t('layout.greetingText.Greeting', { nome: nome })}</Greeting>
}
