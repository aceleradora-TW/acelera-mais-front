import { List } from './styled'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { useTranslation } from 'react-i18next'
// import { useNavigate } from 'react-router'

export const Pagination = ({total}) => {
  const total = 50
  const { t } = useTranslation()
  const calculatePages = Math.ceil(total / limit)
  const atual = offset ? (offset / limit) + 1 : 1
  console.log(total)
  console.log(calculatePages)

  if (calculatePages <= 5) {
    return (
      <List>
        <a href=''><FontAwesomeIcon className='icon' icon={faChevronLeft} />{t('pagination.prev')}</a>
        {Array.from({ length: calculatePages })
          .map((_, index) => index + 1)
          .map((page) => (
            <a key={page} className={page === atual ? 'active' : null}>{page}</a>
          ))
        }
        <a href=''>{t('pagination.next')}<FontAwesomeIcon className='icon' icon={faChevronRight} /></a>
      </List>
    )
  } else {
    return (
      <List>
        <a href=''><FontAwesomeIcon className='icon' icon={faChevronLeft} />{t('pagination.prev')}</a>
        <a href=''>{t('pagination.next')}<FontAwesomeIcon className='icon' icon={faChevronRight} /></a>
      </List>
    )
  }
}
