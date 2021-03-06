import { Vue, Component, Prop as VueProp } from 'vue-property-decorator'
import Prop from '../../inspectable/Prop'

@Component({
  template: ''
})
export default class PropInput extends Vue {

  @VueProp({
    type: Object
  })
  value?: Prop<any>

  get prop () {
    return this.value || new Prop<any>({
      name: '',
      value: undefined
    })
  }

  set prop (v) {
    this.commit(v)
  }

  commit (value: any) {
    if (this.prop) {
      this.prop.value = value
      this.emitChange({
        name: this.prop.name,
        value: this.prop.primitive
      })
    }
  }

  emitChange (data: any) {
    this.$emit('change', data)
  }
}
