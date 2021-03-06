export default function (props: any) {
  let x = props.x
  x = x || []
  let xAxis: any = {
  }
  'name,show,data,min'.split(',').forEach(p => {
    if (Reflect.has(x, p)) {
      xAxis[p] = x[p]
    }
  })
  if (x.type && x.type !== 'value') {
    xAxis = {
      type: 'category'
    }
    if (x.data) {
      xAxis.data = x.data
    }
  }
  if (x.label) {
    xAxis.axisLabel = {
      formatter: x.label
    }
  }
  if (Reflect.has(x, 'line')) {
    let line = x.line
    if (line === false) {
      xAxis.axisLine = {
        show: false
      }
    } else {

    }
  }
  if (Reflect.has(x, 'ticks')) {
    let ticks = x.ticks
    if (ticks === false) {
      xAxis.axisTick = {
        show: false
      }
    }
  }
  return {
    xAxis : [xAxis]
  }
}
