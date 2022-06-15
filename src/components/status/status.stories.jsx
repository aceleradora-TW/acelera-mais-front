import { Status } from '.'

export default {
  title: 'General Components/Status/Status',
  component: Status
}

const Template = args => <Status{...args} />

export const inputStatus = Template.bind({})

inputStatus.args = {
  label: 'Status',
  onChange: () => { },
  name: 'Status -Input'
}
