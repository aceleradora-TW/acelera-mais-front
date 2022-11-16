import { List } from './styled'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { useTranslation } from 'react-i18next'
import { useState, useEffect } from 'react'

export const Pagination = ({ total = 50, limit = 20, page = 1 }) => {
  const { t } = useTranslation()
  const calculatePages = Math.ceil(total / limit)
  console.log({
    total,
    limit,
    page
  })

  const [actualPage, setActualPage] = useState(page)
  const [items, setItems] = useState([])

  useEffect(() => {
    updateItems()
  }, [actualPage])

  const updateItems = () => {
    const newItems = Array.from({ length: calculatePages }).map((_, index) => ({
      active: (index + 1) === actualPage,
      numberPage: index + 1
    }))
    setItems([...newItems])
  }
  const paginate = (logic) => {
    return logic <= length && logic > 0 && setActualPage(logic)
  }

  if (calculatePages) {
    return (
      <List>
        <a href=''><FontAwesomeIcon className='icon' icon={faChevronLeft} />{t('pagination.prev')}</a>
        {
          items.map((item, index) => (
            <a key={index} className={item.active && 'active'} onClick={
              () => {
                setActualPage(item.numberPage)
                updateItems()
              }}>{item.numberPage}</a>
          ))
        }
        <a href=''>{t('pagination.next')}<FontAwesomeIcon className='icon' onClick={() => paginate(actualPage + 1)} icon={faChevronRight} /></a>
      </List>
    )
  } else {
    return (
      <List>
        <a href=''><FontAwesomeIcon className='icon' icon={faChevronLeft} />{t('pagination.prev')}</a>
        <a href=''>{t('pagination.next')}<FontAwesomeIcon className='icon' onClick={() => paginate(actualPage - 1)} icon={faChevronRight} /></a>
      </List>
    )
  }
}
