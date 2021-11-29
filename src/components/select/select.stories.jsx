import Select from '.'

export default {
  title: 'Select',
  component: Select
}

const Template = args => <Select {...args} />

export const select = Template.bind({})

select.args = {
}
