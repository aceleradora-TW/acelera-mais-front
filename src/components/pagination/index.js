import { List } from './styled'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'

export const Pagination = (totalUser) => {
  const calculatePages = Math.ceil(totalUser / 20)
  const indices = Array.from({ length: calculatePages })
  console.log(indices)
  return (
    <>
      <List>
        <li><FontAwesomeIcon className='icon' icon={faChevronLeft} />prev</li>
        <li><a href=''>1</a></li>
        <li>2</li>
        <li>....</li>
        <li className='active'>4</li>
        <li>next<FontAwesomeIcon className='icon' icon={faChevronRight} /></li>
      </List>
    </>
  )
}
