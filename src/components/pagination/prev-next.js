/* coisas que mudam:
- label
- icon
- page(operação)
- ordem dos elementos dentro do li
*/
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
export const PrevNext = ({ icon, label, onClick = (x) => x, order }) => {
  return (
    <li onClick={onClick}>
      {order && <FontAwesomeIcon className="icon" icon={icon} />}
      {label}
      {!order && <FontAwesomeIcon className="icon" icon={icon} />}
    </li>
  )
}
