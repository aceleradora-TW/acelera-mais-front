import { InputDate } from '../inputs/date'
import { InputText } from '../inputs/text'

export const HiringProcessForm = () => {
  return (
    <form>
      <InputText label="Nome" />
      <InputDate label="Data de Início" />
      <InputDate label="Data de Término" />
      <InputText label="Descrição" />
    </form>
  )
}
