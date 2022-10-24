import DefaultButton from '../buttons/default'
import { faDoorOpen } from '@fortawesome/free-solid-svg-icons'
import { HeaderComponent } from './styled'
// import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router'

const Layout = () => {
  // const { t } = useTranslation()

  const handleClick = () => {
    localStorage.removeItem('token')
    useNavigate('/')
  }

  return (
    <>
      <HeaderComponent>
        <DefaultButton icon={faDoorOpen} onClick={handleClick()}></DefaultButton>
      </HeaderComponent>
    </>

  )
}

export default Layout
