import { Component, Prop } from 'vue-property-decorator'
import PaChart from '../../core/chart'
import { LineChartData } from '../../core/data/ChartDataTypes'
import Inspectable from '../../../support/designtime/inspectable'

@Component({})
export default class PaLineChart extends PaChart {
  @Prop({})
  data: LineChartData | undefined

  @Inspectable({
    type: Number,
    label: '线型宽度'
  })
  @Prop({})
  lineWidth: number | undefined

  @Inspectable({
    type: Boolean,
    label: '坐标轴间隙'
  })
  @Prop({
    type: Boolean,
    default: false
  })
  gap: boolean | undefined

  @Inspectable({
    type: Boolean,
    label: '堆叠'
  })
  @Prop({
    type: Boolean,
    default: false
  })
  stacked: boolean | string | undefined

  @Inspectable({
    type: Boolean,
    label: '平滑曲线'
  })
  @Prop({})
  smooth: boolean | undefined

  @Inspectable({
    type: Boolean,
    label: '面积'
  })
  @Prop()
  area: boolean | [] | undefined

  constructor () {
    super()
    this.type = 'line'
  }
}
