import common from './common'
import { makeSeries } from './series'
import handler from './handler'

let defaults: any = {}
let requires = require.context(
  './defaults/', true, /.ts$/)
requires.keys().forEach((p: string) => {
  let name = (p.match(/\.\/([\w\-]+)\.ts$/) || ['', 'null'])[1]
  defaults[name] = requires(p)['default']
})

function buildProps (props: any) {
  let options: any = {}
  // 转换规则按字段集中在 rules 目录
  // 文件名为字段名
  Object.keys(props).forEach((k: string) => {
    let output = handler.translate(k, props)
    Object.assign(options, output)
  })
  return options
}

function buildAccessories (props: any, options: any) {
  Object.keys(props.accessories).forEach((k: string) => {
    handler.take(k, props, options)
  })
  return options
}

function buildSeries (props: any) {
  let series = props.data
    ? makeSeries(props)
    : []
  return series
}

function buildLayers (props: any) {
  let series: any[] =
    props.layers.map((l: any) =>
      makeSeries(l.props)
    )
  return series
}

function integrate (options: any) {
  // 将 legend 内的文本写入到 series 的 name
  let legend = options.legend
  if (legend && legend.data) {
    options.series.forEach((s: any, i: number) => {
      s.name = options.legend.data[i]
    })
  }
}

/**
 *  从 chart props 计算最终的 echarts 配置项
 */
let OptionsManager = {
  make (props: any): any {
    /**
     * 步骤：
     * 1. defaults
     * 2. props
     * 3. accessories
     * 4. series
     */
    let options = buildProps(props)
    options = buildAccessories(props, options)
    options.series = buildSeries(props)
    let layerAccessories = [] // buildLayers(props)
    options.series = options.series.concat(...layerAccessories)
    integrate(options)
    let final = Object.assign({},
      common,
      defaults[props.type],
      options)
    return final
  }
}

export default OptionsManager
