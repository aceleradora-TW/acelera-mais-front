import { List } from './styled'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const Pagination = () => {
  return (
    <>
      <List>
        <li><FontAwesomeIcon icon="fa-sharp fa-solid fa-chevron-right" />prev</li>
        <li>1</li>
        <li>2</li>
        <li className='active'>3</li>
        <li>4</li>
        <li>next</li>
      </List>
    </>
  )
}
