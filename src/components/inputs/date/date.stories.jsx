import { InputDate } from '.'

export default {
  title: 'InputDate',
  component: InputDate
}

const Template = args => <InputDate {...args} />

export const Date = Template.bind({})

Date.args = {
  label: 'Data de Inicio',
  onChange: () => { },
  name: 'data-inicio'
}
