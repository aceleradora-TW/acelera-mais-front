import { Modal } from '../../../../components/modal'
import { useTranslation } from 'react-i18next'
import { UserLink } from '../user-link'

export const CreateLink = ({ method = 'GET', icon }) => {
  const { t } = useTranslation()
  return (
    <div>
      <Modal
        icon={icon}
        title={t('Gerar Link')}
        className='button primary'
        text={t('Gerar Convite')}
      >
        <UserLink method={method} />
      </Modal>

    </div>
  )
}
