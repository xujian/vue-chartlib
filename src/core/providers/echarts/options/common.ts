/**
 * 负责组装echarts原生配置项
 */

 /**
  * 全体图表类型共用的基本配置
  */
const common = {
  grid: {
    top: '10%',
    left: '10%',
    right: '10%',
    bottom: '10%'
  },
  xAxis: {
    type: 'category',
    data: []
  },
  yAxis: [
    {
      type: 'value'
    }
  ]
}

declare type ProviderOptions = {
  series: any[],
  data: any[]
}

export default common