import { BrowserRouter } from 'react-router-dom'
import { ToggleRowExercise } from '.'

export default {
  title: 'Page Components/Challenges/ToggleRowExercise',
  component: ToggleRowExercise
}

const Template = args => {
  return (
    <BrowserRouter>
    <table>
      <ToggleRowExercise {...args} />
    </table>
    </BrowserRouter>
  )
}

export const ToggleRowExerciseTemplate = Template.bind({})

ToggleRowExerciseTemplate.args = {
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
