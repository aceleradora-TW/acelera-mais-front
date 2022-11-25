import { Paginator } from '.'
export default {
  title: 'General Components/Pagination',
  component: Paginator
}

const Template = args => <Paginator {...args} />

export const Pagination = Template.bind({})
Pagination.args = {
  total: 50,
  page: 1,
  onChange: (_, page) => console.log(page)
}
