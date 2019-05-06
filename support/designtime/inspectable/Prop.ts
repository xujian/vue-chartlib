import PropTypes from './PropTypes'
/**
 * Base for Prop of Control other Classes
 */
export default class Prop<T extends PropTypes.PropValueType> {
  name: string = ''
  label: string | undefined
  description: string = ''
  category: string = 'props' // 显示在特定的tab内
  readonly: boolean = false
  type: any = String
  default!: T 
  private __value: T | null = null

  get value (): T | null {
    return this.type
      ? new this.type(this.__value)
      : this.__value
  }

  set value (v: T | null) {
    this.__value = v || this.default
  }

  constructor (input: {
    name: string,
    value: T,
    default?: T
    category?: string, 
    label?: string,
    readonly?: boolean,
    type?: string
  }) {
    Object.assign(this, input)
    this.category =  input.category || 'props'
  }
}
