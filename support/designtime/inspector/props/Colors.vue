<template>
  <div class="prop-colors row">
    <div class="col">
      <div class="prop-label">{{ prop.label }}</div>
    </div>
    <div class="col">
      <div v-if="sequence.length > 0" class="chips">
        <q-btn-group class="pipe">
          <q-btn
            v-for="(c, i) in sequence"
            :key="i"
            size="xs"
            :style="{backgroundColor:c}"
            :label="i + 1"
            @click.stop="onChipsClick(i)" />
          </q-btn-group>
          <q-btn class="append-btn"
            size="xs"
            label="+"
            @click.stop="onAppendClick" />
          <q-btn class="clear-btn"
            size="xs"
            label="X"
            @click.stop="onDeleteClick" />
      </div>
      <div v-else class="empty">
        <span>(not set)</span>
        <q-btn flat @click="onCreateClick">➡️</q-btn>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { QBtnGroup, QBtn, QInput, QColor } from 'quasar'
import PropInput from './PropInput'
import Component from 'vue-class-component'

@Component({
  name: 'PaColorsProp',
  components: {
    QBtnGroup, QBtn, QInput, QColor
  }
})
export default class PaColorsProp extends PropInput {
  activeIndex: number = -1
  get sequence () {
    return this.prop && this.prop.value && this.prop.value.value || []
  }
  onCreateClick () {
    let seq = ['#000']
    this.commit(seq)
  }
  onChipsClick (selected: number) {
    this.activeIndex = selected
    this.callColorPicker(this.sequence[selected])
  }
  callColorPicker (data?: any) {
    this.$emit('drawerRequired', {
      command: 'color', payload: {
        data, callback: this.colorUpdated
      }
    })
  }
  onAppendClick () {
    let seq = [...this.sequence]
    seq.push('#000000')
    this.commit(seq)
  }
  onDeleteClick () {
    let seq = [...this.sequence]
    seq.pop()
    this.commit(seq)
  }
  colorUpdated (color: string) {
    console.log('Colors.vue____________colorUpdated', color, this.activeIndex)
    let seq = [...this.sequence]
    seq[this.activeIndex] = color
    this.commit(seq)
  }
}
</script>
