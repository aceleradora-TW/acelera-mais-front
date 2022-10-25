import { Modal } from '../../../../components/modal'
import { UserLink } from '../user-link'

export const LinkModal = ({ method = 'GET', icon }) => {
  return (
    <div>
      <Modal
        icon={icon}
        className='button primary'
      >
        <UserLink method={method} />
      </Modal>
    </div>
  )
}
