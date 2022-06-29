import { ToggleButton } from '.'
import { BrowserRouter } from 'react-router-dom'

export default {
  title: 'General Components/ToggleButton',
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
  status: true,
  click: (isChecked, setChecked) => setChecked(prevState => !prevState)
}
