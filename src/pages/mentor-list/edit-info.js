import { useTranslation } from 'react-i18next'
export const EditInfoMentor = () => {  
  return (
<form id="formulario">
<label htmlFor="nome">{useTranslation('user.descriptionTable.name')}</label>
<input type="text" name="nome" id="nome"/>

<label htmlFor="telephone">{useTranslation('user.descriptionTable.name')}</label>
<input type="submit" name="enviar" value="enviar"/>

<label htmlFor="email">{useTranslation('user.descriptionTable.name')}</label>
<input type="submit" name="enviar"/>
</form> 
  ) 
}
export default EditInfoMentor
