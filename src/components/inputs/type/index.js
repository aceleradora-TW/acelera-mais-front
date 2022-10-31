export const InputType = ({ label, name }) => {
  return (
    <select name={label}>
     <option value="admin">Administradora</option>
     <option value="mentor" selected>Mentora</option>
    </select>)
}
