import { Modal } from '../../../../components/modal'
import { useTranslation } from 'react-i18next'
import { UserLink } from '../user-link'

export const LinkModal = ({ method = 'GET', id = '', icon, title, text }) => {
  const { t } = useTranslation()
  return (
    <div>
      <Modal
        icon={icon}
        title={t(title)}
        className='button primary'
        text={t(text)}
      >
        <UserLink method={method}/>
      </Modal>

    </div>
  )
}
