import { storiesOf } from '@storybook/vue'
import withLiveCode from '../../../.storybook/decorators/withLiveCode'
import { withKnobs, boolean, number, text, array } from '@storybook/addon-knobs'
import PaPieChart from './Pie.ts'

let stories = storiesOf('Charts|Pie', module)
stories.addDecorator(withKnobs)
stories.addDecorator(withLiveCode)

let states = [
  {
    name: 'Simple',
    template: `<pa-pie-chart
      :data="[[
        { name: 'A', value: 100 },
        { name: 'B', value: 150 },
        { name: 'C', value: 500 },
        { name: 'D', value: 250 },
        { name: 'E', value: 400 }
      ]]"
      ></pa-pie-chart>`
  },
  {
    name: 'Ring',
    template: `<pa-pie-chart
      :title="'生源组成'"
      :preset="'ring,rich-label'"
      :data="[[
        { name: 'A', value: 100 },
        { name: 'B', value: 150 },
        { name: 'C', value: 500 },
        { name: 'D', value: 250 },
        { name: 'E', value: 400 }
      ]]"
      ></pa-pie-chart>`
  }
]

states.forEach(s => {
  stories.add(s.name, () => ({
    components: { PaPieChart },
    template: s.template,
    props: {
    }
  }))
})

export default stories
