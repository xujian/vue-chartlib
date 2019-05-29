import { storiesOf } from '@storybook/vue'

let stories = storiesOf('业务图表|政府投资', module)

stories.add('投资主体情况', () => ({
  template: `<pa-pictorialBar-chart
    :data="[[456,236,452,365]]"
    :x="['国有投资','外商投资','港澳台投资','民间投资']"
    >
    <pa-axis :unit="'%'" :yName="['亿元']"></pa-axis>
    <pa-legend :data="['投资额', '同比增速']"></pa-legend>
    <pa-line-chart
    :axis="'right'"
    :y="{unit: '%'}"
    :data="[
      [45,82,84,54]
    ]"
    ></pa-line-chart>
    <pa-tooltip
    :formatter="[
      '{b}<br>',
      '{a0}: {c0} (亿元)<br>',
      '{a1}: {c1} %'
    ].join('')"></pa-tooltip>
    </pa-pictorialBar-chart>`
}))
stories.add('项目阶段', () => ({
  template: `<pa-funnel-chart
  :title="'漏斗图'"
  :preset="'no-legend'"
  :data="[[
    {name:'项目概算',value:10},
    {name:'可行性研究报告',value:20},
    {name:'项目建议书',value:30}
  ]]"
  :sort="'ascending'"
  :canPosition="{'left':'5%','right':'35%','top':'10%','bottom':'10%'}"
  :nameOrValue="'name-value'"
  >
  </pa-funnel-chart>`
}))
stories.add('核准项目分析', () => ({
  template: `<pa-bar-chart
  :title="'琴键图'"
  :x="Array(12 - 1 + 1).fill(0).map((x, i) => 1 + i)"
  :data="[[5,15,12,5,-3,-10,-13,-10,-5,5,10,15]]"
  :bar-width="30"
  :round="true"
  >
  <pa-visualMap :show="false" 
  :color=" ['#4a657a', '#308e92', '#b1cfa5', '#f5d69f', '#f5898b', '#ef5055']">
  </pa-visualMap>
  <pa-legend :data="['核准项目']"></pa-legend>
  </pa-bar-chart>`
}))
stories.add('各区投资情况对比', () => ({
  template: `<pa-polar-chart
  :title="'极坐标图'"
  :data="[[100, 200, 300, 400, 500,600,700,800,900,1000,1112]]"
  :labelName="['福田','罗湖','南山','盐田','宝安','龙岗','龙华','坪山','光明','大鹏','深汕合作']">
  </pa-polar-chart>`
}))
export default stories