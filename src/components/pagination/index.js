import { List } from './styled'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faChevronLeft,
  faChevronRight
} from '@fortawesome/free-solid-svg-icons'
import { useTranslation } from 'react-i18next'
import { useState, useEffect } from 'react'

export const Pagination = ({
  totalPages = 5,
  page = 0,
  limit = 20,
  offset = 0,
  onClick = (x) => x
}) => {
  const { t } = useTranslation()
  const [actualPage, setActualPage] = useState(Number(page))
  const [items, setItems] = useState([])

  console.log({
    totalPages,
    page,
    items
  })
  useEffect(() => {
    updateItems()
    console.log({
      totalPages,
      page,
      items
    })
  }, [actualPage, totalPages])

  const handlerClick = (page) => {
    onClick(page)
  }

  const updateItems = () => {
    const newItems = Array.from({ length: totalPages }).map((_, index) => ({
      active: index + 1 === actualPage,
      numberPage: index + 1
    })).reduce((acc, _, index => 
 { const page = index + 1 }))
    // < prev 1 2 3 ... 999 next >  // < prev 1 ...498 499 500...999 next >
    setItems([...newItems])
  }

  const paginate = (page) => {
    return page <= totalPages && page > 0 && setActualPage(page)
  }

  const hasPages = () => totalPages > 1

  return (
    <>
      {hasPages() && (
        <List>
          <li
            onClick={() => {
              paginate(actualPage - 1)
              updateItems()
            }}
          >
            <FontAwesomeIcon className="icon" icon={faChevronLeft} />
            {t('pagination.prev')}
          </li>
          {items.map((item, index) => (
            <li
              key={index}
              className={item.active ? 'active' : null}
              onClick={() => {
                handlerClick(item.numberPage)
                setActualPage(item.numberPage)
              }}
            >
              {item.numberPage}
            </li>
          ))}
          <li
            onClick={() => {
              paginate(actualPage + 1)
              updateItems()
            }}
          >
            {t('pagination.next')}
            <FontAwesomeIcon className="icon" icon={faChevronRight} />
          </li>
        </List>
      )}
    </>
  )
}
