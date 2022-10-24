import DefaultButton from '../buttons/default'
import { faDoorOpen } from '@fortawesome/free-solid-svg-icons'
import { HeaderComponent } from './styled'
// import { useTranslation } from 'react-i18next'
// import { useNavigate } from 'react-router'

const Layout = () => {
  // const { t } = useTranslation()
  // const navigate = useNavigate()
  const handleClick = (e) => {
    e.preventDefault()
    const handleToken = localStorage.token
    if (handleToken) {
      localStorage.setItem('token', null)
      window.location.reload()
    }
  }

  return (
    <>
      <HeaderComponent>
        <DefaultButton icon={faDoorOpen} onClick={handleClick()} />
      </HeaderComponent>
    </>

  )
}

export default Layout
