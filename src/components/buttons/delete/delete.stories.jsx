import Button from '.'

export default {
  title: 'DeleteButton',
  component: Button
}

const Template = args => <Button {...args} />

export const DeleteButton = Template.bind({})

DeleteButton.args = {
  icon: null,
  onClick: () => { },
  text: 'deletar'
}
