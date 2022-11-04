import { Greeting } from './styled'

export const GreetingText = () => {
  const nome = localStorage.getItem('name')
  return <Greeting>Seja bem vinde, {nome}</Greeting>
}
