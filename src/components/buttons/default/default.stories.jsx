import Button from '.'

export default {
  title: 'General Components/Buttons/DefaultButton',
  component: Button
}

const Template = args => <Button {...args} />

export const DefaultButton = Template.bind({})

DefaultButton.args = {
  icon: null,
  onClick: () => { },
  text: 'Default Button'
}
