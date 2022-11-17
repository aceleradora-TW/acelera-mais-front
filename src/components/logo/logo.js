import { useLocation } from 'react-router'
import { Link } from 'react-router-dom'
import { LogoContainer } from './styled'

export const LogoComponent = () => {
  const isVisibleForPath = () => {
    const { pathname } = useLocation()
    const notVisiblePaths = ['home', 'user/change-password']
    return notVisiblePaths.some(notVisiblePath => pathname.includes(notVisiblePath))
  }
  return (
    !isVisibleForPath() &&
    <LogoContainer>
      <Link to={'/home'}>
        <img className='image' src='/acelera-logo.png' />
      </Link>
    </LogoContainer>

  )
}
