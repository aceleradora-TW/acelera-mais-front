import { useNavigate } from 'react-router'
import { LogoButton, LogoDiv, Logo } from './styled'

export const FunctionLogo = () => {
  const navigate = useNavigate()
  const handleClick = () => {
    navigate('/home')
  }
  return (
    <LogoDiv>
      <LogoButton onClick={handleClick}>
        <Logo />
      </LogoButton>
    </LogoDiv>

  )
}
