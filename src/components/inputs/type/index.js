import { StyledSelectContainer } from '../../select/select'

export const InputType = ({ label, name }) => {
  return (
    <StyledSelectContainer>
      <scan>{label}</scan>
      <br/>
    <select>
     <option value="admin">Administradora</option>
     <option value="mentor" selected>Mentora</option>
    </select>
    </StyledSelectContainer>
  )
}
