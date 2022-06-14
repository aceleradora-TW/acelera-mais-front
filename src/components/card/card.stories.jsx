import { Card } from '.'
import { InputText } from '../inputs/text'

// configuração da aba do componente na pagina do storybook
export default {
  title: 'Card',
  component: Card
}

const Template = args => <Card {...args}> <InputText label="Um input qualquer" /> </Card>

export const CardComponent = Template.bind({})
CardComponent.args = {
  title: 'Este é um card!'
}
