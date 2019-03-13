import common from './common'
import { makeSeries } from '../series';

let OptionsManager = {
  make(props: any): any {
    let __options: any = {}
    if (props.data) {
      __options.series = makeSeries(props)
    }
    if (props.x) {
      __options.xAxis = {
        type: 'category',
        data: props.x
      }
    }
    if (props.y) {
      __options.yAxis = {
        type: 'value',
        data: props.y
      }
    }
    if (props.type === 'pie') {
      __options.xAxis = false
      __options.yAxis = false
    }
    return Object.assign({}, common, __options)
  }
}

export default OptionsManager