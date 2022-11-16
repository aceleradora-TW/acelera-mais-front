import { useLocation, useNavigate } from 'react-router'
import { LogoButton, LogoDiv, Logo } from './styled'

export const LogoComponent = () => {
  const navigate = useNavigate()
  const handleClick = () => {
    navigate('/home')
  }
  const isVisibleForPath = () => {
    const { pathname } = useLocation()
    const notVisiblePaths = ['home', 'user/change-password']
    return notVisiblePaths.some(notVisiblePath => pathname.includes(notVisiblePath))
  }
  return (
    !isVisibleForPath() &&
    < LogoDiv >
      <LogoButton onClick={handleClick}>
        <Logo src='/acelera-logo.png' />
      </LogoButton>
    </LogoDiv >

  )
}
