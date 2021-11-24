import Button from '.'

export default {
  title: 'selectButton',
  component: Button
}

const Template = args => <Button {...args} />

export const selectButton = Template.bind({})

selectButton.args = {
  icon: null,
  onClick: () => { },
  text: 'selectButton'
}
