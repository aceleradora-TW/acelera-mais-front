import Button from '.'

export default {
  title: 'ButtonExpend',
  component: Button
}

const Template = args => <Button {...args} />

export const ButtonExpen = Template.bind({})

ButtonExpen.args = {
  icon: null,
  onClick: () => { },
  text: 'Ver mais'
}
