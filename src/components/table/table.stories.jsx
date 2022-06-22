import { Table } from './table'
import PrimaryButton from '../buttons/primary'

export default {
  title: 'General Components/Table',
  component: Table
}

const Template = args => (<Table {...args}>
  <thead>
    <tr>
      <th>Nome</th>
      <th>Idade</th>
      <th>Ações</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Fulana</td>
      <td>16</td>
      <td><PrimaryButton text="Enviar" /></td>
    </tr>
    <tr>
      <td>Fulana</td>
      <td>16</td>
      <td><PrimaryButton text="Enviar" /></td>
    </tr>
    <tr>
      <td>Fulana</td>
      <td>16</td>
      <td><PrimaryButton text="Enviar" /></td>
    </tr>
  </tbody>
</Table>)

export const TableComponent = Template.bind({})

TableComponent.args = {
}
