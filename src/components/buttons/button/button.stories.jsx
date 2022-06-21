import Button from '.'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

// configuração da aba do componente na pagina do storybook
export default {
  title: 'General Components/Buttons/Button',
  component: Button
}

const Template = args => <Button {...args} />

export const ButtonNormal = Template.bind({})
export const ButtonNormalIcon = Template.bind({})

ButtonNormal.args = {
  icon: null,
  onClick: () => { },
  text: 'Button',
  disabled: false
}

ButtonNormalIcon.args = {
  icon: faPlus,
  onClick: () => { },
  text: 'Button with Icon',
  disabled: false
}
