import { List } from './styled'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'

export const Pagination = () => {
  return (
    <>
      <List>
        <li><FontAwesomeIcon icon={faChevronLeft} />prev</li>
        <li>1</li>
        <li>2</li>
        <li className='active'>3</li>
        <li>4</li>
        <li>next<FontAwesomeIcon icon={faChevronRight} /></li>
      </List>
    </>
  )
}
