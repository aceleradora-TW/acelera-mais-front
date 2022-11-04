import { Greeting } from './styled'

export const GreetingText = () => {
  const nome = localStorage.getItem('mentorName')
  return <Greeting>Seja bem vinde, {nome}</Greeting>
}
