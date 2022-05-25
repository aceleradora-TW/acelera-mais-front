import Icon from '../../icon'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { Input } from '..'

export const InputSearch = (type, placeholder, onChange) => {
  return (
    <>
    <Input type="text" placeholder='Pesquisar' onChange='' />
    <Icon icon={faSearch}/>
    </>
  )
}
