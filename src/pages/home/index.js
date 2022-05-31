import { Link } from 'react-router-dom'

import { HomePageContainer, HomeContainer } from './styled'

export const HomePage = () => {
  return (
    <HomePageContainer>
      <h1>Página inicial</h1>
      <HomeContainer>
        <Link to="/hiring-process">Processo Seletivo</Link>
        <Link to="/manage-Mentors">Gerenciamento Mentores</Link>
        <Link to="/reset password">Resetar Senha</Link>
      </HomeContainer>

    </HomePageContainer>
  )
}
