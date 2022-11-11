import { Pagination } from '.'
export default {
  title: 'General Components/Pagination',
  component: Pagination
}

const Template = args => <Pagination {...args} />

export const FormIcon = Template.bind({})
FormIcon.args = {
  limitePorPagina: 10,
  dados: 45
}
