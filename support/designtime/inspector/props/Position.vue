<template>
  <div class="prop-display prop-position">
    <p>X: {{prop.value.x}} Y: {{prop.value.y}} Z: {{prop.value.z}}</p>
  </div>
</template>

<script lang="ts">
import PropInput from './PropInput'
import { Component } from 'vue-property-decorator'

@Component({
  name: 'PaPositionProp'
})
export default class PaPositionProp extends PropInput {

}
</script>