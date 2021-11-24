import Button from '.'

export default {
  title: 'ActionButton',
  component: Button
}

const Template = args => <Button {...args} />

export const ActionButton = Template.bind({})

ActionButton.args = {
  icon: null,
  onClick: () => { },
  text: 'ActionButton'
}
