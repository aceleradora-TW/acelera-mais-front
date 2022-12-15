import { useTranslation } from 'react-i18next'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import Icon from '../../icon'
import { Input } from '..'
import './styled.css'

export const InputSearch = ({
  onChange = (x) => x
}) => {
  const { t } = useTranslation()
  return (
    <div className='search'>
      <Input type="text" placeholder={t('search.placeholder')} onChange={onChange} />
      <Icon icon={faSearch} />
    </div>
  )
}
