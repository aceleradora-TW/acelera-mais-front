import { Link } from 'react-router-dom'
import { LogoContainer } from './styled'

export const LogoComponent = () => {
  return (
    <LogoContainer>
      <Link to={'/home'}>
        <img className='image' src='/acelera-logo.png' />
      </Link>
    </LogoContainer>

  )
}
