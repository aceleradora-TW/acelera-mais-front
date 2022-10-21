import DefaultButton from '../buttons/default'
import { faDoorOpen } from '@fortawesome/free-solid-svg-icons'
import { HeaderComponent } from './styled'

const layout = () => {
  return (
    <>
      <HeaderComponent>
        <DefaultButton icon={faDoorOpen} onClick={() => confirm('Deseja fazer o logout?')}></DefaultButton>
      </HeaderComponent>
    </>
  )
}

export default layout
