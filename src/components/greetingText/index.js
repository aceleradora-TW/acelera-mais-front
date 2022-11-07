import { Greeting } from './styled'
import { useTranslation } from 'react-i18next'

const { t } = useTranslation()

export const GreetingText = () => {
  const nome = localStorage.getItem('mentorName').split(' ').shift()
  return <Greeting>Seja bem vinde, <span>{nome}</span></Greeting>
}

// t('layout.greetingText.Greeting', { nome: nome })
