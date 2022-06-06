import { ToggleRow } from '.'
import { Router, BrowserRouter } from 'react-router-dom'

export default {
  title: 'ToggleRow',
  component: ToggleRow
}

const Template = args => {
  return (
    <BrowserRouter>
      <Router>
        <table>
          <ToggleRow {...args} />
        </table>
      </Router>
    </BrowserRouter>
  )
}

export const toggleRow = Template.bind({})

toggleRow.args = {
  item: {
    id: 1,
    name: 'biblioteca',
    status: 'status-opened',
    type: 'backend',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam mauris neque, pharetra, dolor sit amet, consectetur adipiscing elit. Nam mauris neque, pharetra, dolor sit amet, consectetur adipiscing elit. Nam mauris neque, pharetra, dolor sit amet, consectetur adipiscing elit. Nam mauris neque, pharetra',
    candidate: {},
    links: {
      pdf: '',
      zip: '',
      github: ''
    },
    evaluation: {
      mentorName: 'Mentora',
      score: 5,
      feedback: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam mauris neque, pharetra, dolor sit amet, consectetur adipiscing elit. Nam mauris neque, pharetra, dolor sit amet, consectetur adipiscing elit. Nam mauris neque, pharetra, dolor sit amet, consectetur adipiscing elit. Nam mauris neque, pharetra'
    }
  }
}
