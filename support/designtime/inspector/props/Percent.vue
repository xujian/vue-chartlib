<template>
  <div class="prop-percent row">
    <div class="col col-label">
      <div class="prop-label">{{ prop.label }}</div>
    </div>
    <div class="col col-input">
      <q-input
        square dense dark
        standout="bg-secondary"
        type="number"
        suffix="%"
        placeholder="(not set)"
        :value="prop.value && prop.value.number"
        @input="onInput" />
    </div>
  </div>
</template>

<script lang="ts">
import PropInput from './PropInput'
import { Component } from 'vue-property-decorator'

@Component({
  name: 'PaPercentProp'
})
export default class PaPercent extends PropInput {
  onInput (value: number) {
    this.commit(value)
  }
  beforeMounted () {
    if (!this.prop.value) {
      this.prop.value.number = 10
    }
  }
}
</script>
