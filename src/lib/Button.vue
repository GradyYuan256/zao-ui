<script lang="ts">
export default {
  inheritAttrs: false
}
</script>

<script setup lang="ts">
import { useAttrs } from 'vue'

const attrs = useAttrs()
const {size, ...rest} = attrs

</script>

<template>
    <div :size="size">
        <button v-bind="rest">
            <slot />
        </button>
    </div>
</template>