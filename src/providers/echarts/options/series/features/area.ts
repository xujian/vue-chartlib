import Color, { Gradient } from '../../../../../core/shared/styles/Color'
import gradient from '../../../helpers/gradient'

export default function (props: any,index: number) {
  let normalStyle
  if (props.area === true) {
    return {
      areaStyle: {}
    }
  } else if (props.area) {
    // 解决多个面积图的情况
    const area = props.area[index] || props.area[0]
    normalStyle={
      normal: {
        ...area.color && {
          color: gradient.make(Gradient.from(area.color))
        }
      }
    }
    // 冰山图的渐变是itemStyle
    if(props.type==='pictorialBar'){
      return {
        itemStyle: normalStyle
      }
    }else{
      return {
        areaStyle: normalStyle
      }
    }
  }
}