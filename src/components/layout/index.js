import DefaultButton from '../buttons/default'
import { faDoorOpen } from '@fortawesome/free-solid-svg-icons'

const layout = () => {
  return (
  <>
      <DefaultButton icon={faDoorOpen} onClick={() => confirm('Deseja fazer o logout?')}> </DefaultButton>
  </>
  )
}

export default layout
