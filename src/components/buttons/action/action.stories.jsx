import Button from '.'

export default {
  title: 'General Components/Buttons/ActionButton',
  component: Button
}

const Template = args => <Button {...args} />

export const ActionButton = Template.bind({})

ActionButton.args = {
  icon: null,
  onClick: () => { },
  text: 'ActionButton'
}
