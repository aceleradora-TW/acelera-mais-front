import { Pagination } from '.'
//  import { faAngleDown } from '@fortawesome/free-solid-svg-icons'
//  configuração da aba do componente na pagina do storybook
export default {
  title: 'General Components/Pagination',
  component: Pagination
}

const Template = args => <Pagination {...args} />

export const FormIcon = Template.bind({})
FormIcon.args = {
  //  icon: faAngleDown
}
