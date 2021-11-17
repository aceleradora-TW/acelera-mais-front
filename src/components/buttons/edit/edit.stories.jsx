import Button from '.'

export default {
  title: 'EditButton',
  component: Button
}

const Template = args => <Button {...args} />

export const EditButton = Template.bind({})

EditButton.args = {
  icon: null,
  onClick: () => { },
  text: 'Botão de editar'
}
