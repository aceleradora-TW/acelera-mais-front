import { List } from './styled'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { useTranslation } from 'react-i18next'

export const Pagination = (totalUser = 20) => {
  const { t } = useTranslation
  const calculatePages = Math.ceil(totalUser / 20)
  const indices = Array.from({ length: calculatePages })
  console.log(indices)
  return (
    <>
      <List>
        <li><FontAwesomeIcon className='icon' icon={faChevronLeft} />{t('pagination.prev')}</li>
        <li><a href=''>1</a></li>
        <li>2</li>
        <li>....</li>
        <li className='active'>4</li>
        <li>{t('pagination.next')}<FontAwesomeIcon className='icon' icon={faChevronRight} /></li>
      </List>
    </>
  )
}
