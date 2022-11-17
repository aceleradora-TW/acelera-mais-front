import { List } from './styled'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faChevronLeft,
  faChevronRight
} from '@fortawesome/free-solid-svg-icons'
import { useTranslation } from 'react-i18next'
import { useState, useEffect } from 'react'

export const Pagination = ({
  total = 0,
  limit = 20,
  page = 1,
  onClick = (x) => x
}) => {
  const { t } = useTranslation()
  const [actualPage, setActualPage] = useState(Number(page))
  const [items, setItems] = useState([])

  const hasPages = () => total > 1

  const getTotalPages = () => Math.ceil(total / limit)

  const getNumberPage = (indexPage) => indexPage + 1

  const isActive = (indexPage) => getNumberPage(indexPage) === actualPage

  const createItems = () => {
    return Array.from({ length: getTotalPages() })
      .map((_, indexPage) => (
        {
          active: isActive(indexPage),
          numberPage: getNumberPage(indexPage)
        }
      ))
  }

  const hasLimitOfPages = (page) => page > 0 && page <= getTotalPages()

  const changeActualPage = (page) => {
    if (hasLimitOfPages(page)) {
      setActualPage(page)
      onClick(page)
      updateItems()
    }
  }

  useEffect(() => {
    updateItems()
  }, [actualPage, total])

  const handlerClick = (page) => {
    onClick(page)
  }

  const updateItems = () => {
    setItems([...createItems()])
  }

  return (
    <>
      {hasPages() && (
        <List>
          <li onClick={() => changeActualPage(actualPage - 1)}>
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
          <li onClick={() => changeActualPage(actualPage + 1)}>
            {t('pagination.next')}
            <FontAwesomeIcon className="icon" icon={faChevronRight} />
          </li>
        </List>
      )}
    </>
  )
}
