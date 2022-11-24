import { Modal } from '../../../../components/modal'
import { useTranslation } from 'react-i18next'
import { UserForm } from '../../forms/user'

export const UserModal = ({ user, method = 'POST', id = '', icon, title, text }) => {
  const { t } = useTranslation()
  return (
    <div>
      <Modal
        icon={icon}
        title={t(title)}
        className='button primary'
        text={t(text)}
      >
        <UserForm method={method} id={id} user={user} />
      </Modal>

    </div>
  )
}
