import { ToggleButton } from '.'
import { BrowserRouter } from 'react-router-dom'

export default {
  title: 'ToggleButton',
  component: ToggleButton
}

const Template = args => {
  return (
      <BrowserRouter>
          <ToggleButton {...args} />
      </BrowserRouter>
  )
}

export const Toggle = Template.bind({})
Toggle.args = {
  label: 'On'
}
