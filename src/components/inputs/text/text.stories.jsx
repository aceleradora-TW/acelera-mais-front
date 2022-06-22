import { InputText } from '.'

export default {
  title: 'General Components/Inputs/InputText',
  component: InputText
}

const Template = args => <InputText {...args} />

export const Text = Template.bind({})

Text.args = {
  label: 'Texto',
  onChange: () => { },
  name: 'Texto'
}
