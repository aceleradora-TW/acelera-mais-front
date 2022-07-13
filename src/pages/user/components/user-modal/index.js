import { Modal } from '../../../../components/modal'
import { useTranslation } from 'react-i18next'
import { UserForm } from '../../forms/user'

export const UserModal = ({ method = 'POST', id = '', icon, title, text }) => {
  const { t } = useTranslation()
  return (
    <div>
      <Modal
        icon={icon}
        title={t(title)}
        classe='button primary'
        text={t(text)}
      >
        <UserForm method={method} id={id} />
      </Modal>

    </div>
  )
}
