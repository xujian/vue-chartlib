/**
 *  全部图表类型的字段定义
 *  意义: 此一图表类型需要处理如下字段
 */
const specs = [{
  type: 'line',
  features: [
    'axis',
    'area',
    'marks'
  ]
}, {
  type: 'bar',
  features: [
  ]
}, {
  type: 'scatter',
  features: [
    'symbol'
  ]
}, {
  type: 'pictorialBar',
  features: [
    'area'
  ]
},
{
  type: 'network',
  features: [
    'symbol'
  ]
},]

export default specs
