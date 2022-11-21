import { List } from './styled'
import {
  faChevronLeft,
  faChevronRight
} from '@fortawesome/free-solid-svg-icons'
import { useTranslation } from 'react-i18next'
import { useState, useEffect } from 'react'
import { ItemsPage } from './items-page'
import { PrevNext } from './prev-next'

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
  const verifica = () => {
    if (items.length > 60) {
      // return `... ${setItems(items.pop())}`
      console.log('aqui esta o item')
    }
  }
  useEffect(() => {
    updateItems()
  }, [actualPage, total])

  const updateItems = () => {
    setItems([...createItems()])
  }

  return (
    <>
      {hasPages() && (
        <List>
          <PrevNext
            icon={faChevronLeft}
            label={t('pagination.prev')}
            onClick={() => changeActualPage(actualPage - 1)}
            order={true}
          />
          <ItemsPage
            items={items}
            page={page}
            verifica = {verifica()}
            onClick={(x) => { changeActualPage(x) }}
          />
          <PrevNext
            icon={faChevronRight}
            label={t('pagination.next')}
            onClick={() => changeActualPage(actualPage + 1)}
          />
        </List>
      )}
    </>
  )
}
