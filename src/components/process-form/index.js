import { InputDate } from '../inputs/date'
import { InputText } from '../inputs/text'
import './style.css'

export const ProcessForm = () => {
  return (
    <form>
      <InputText label="Nome" />
      <InputDate label="Data de Início" />
      <InputDate label="Data de Término" />
      <InputText label="Descrição" />
    </form>
  )
}
