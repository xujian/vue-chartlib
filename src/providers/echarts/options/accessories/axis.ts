export default (props: any, providerOptions: any) => {
  let input: {[key: string]: any} = props.accessories.axis
  let axis: any = {}
  axis.position = input.position || 'right'
  axis.type = input.type || 'value'
  axis.splitLine = {
    show: false
  }
  if (input.unit) {
    axis.axisLabel = {
      formatter: input.unit === '100%'
        ? (value: number) => value * 100 + '%'
        : '{value}' + input.unit
    }
  }
  let yAxis = providerOptions.yAxis || [{
    type: 'value'
  }]
  yAxis.push(axis)
  //添加yAxis name值 
  if(input.yName){
    yAxis.forEach((value: any,i: number) => {
      value.name=input.yName[i]
    });
  }
  //添加xAxis name值 
  let xAxis = providerOptions.xAxis
  if(input.xName){
    xAxis.forEach((value: any,i: number) => {
      value.name=input.xName[i]
      if(input.xSplitLine){
        let splitLineObj={
          splitLine:{
            show:input.xSplitLine[0]||false,
            lineStyle:{
              color:input.xSplitLine[1]||'rgba(255,255,255,0.7)',
              type:input.xSplitLine[2]||'solid'
            }
          }
        }
        Object.assign(value,splitLineObj)
      }
    });
  }
  return {
    yAxis,xAxis
  }
}
