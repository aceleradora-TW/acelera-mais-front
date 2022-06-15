import Icon from '.'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'
// configuração da aba do componente na pagina do storybook
export default {
  title: 'General Components/Icons/Icon',
  component: Icon
}

const Template = args => <Icon {...args} />

export const FormIcon = Template.bind({})
FormIcon.args = {
  icon: faAngleDown
}
