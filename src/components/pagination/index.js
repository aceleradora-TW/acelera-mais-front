import { List } from './styled'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { useTranslation } from 'react-i18next'
// import { useNavigate } from 'react-router'
export const Pagination = (totalUser = 20) => {
  const { t } = useTranslation()
  const calculatePages = Math.ceil(totalUser / 20)
  const indices = Array.from({ length: calculatePages })

  return (
    <>
      <List>
        <a href=''><FontAwesomeIcon className='icon' icon={faChevronLeft} />{t('pagination.prev')}</a>
        <a href='' className='active'>1</a>
        {indices.map((_, index) => {
          return (<a href='' key={index}>{index + 1}</a>)
        }
        )}
        <a href=''>{indices}</a>
        <a href=''>{t('pagination.next')}<FontAwesomeIcon className='icon' icon={faChevronRight} /></a>
      </List>
    </>
  )
}
