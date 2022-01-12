import { TableContainer } from './table'

export default {
  title: 'Table',
  component: TableContainer
}

const Template = args => <TableContainer {...args} />

export const Table = Template.bind({})

Table.args = {
}
