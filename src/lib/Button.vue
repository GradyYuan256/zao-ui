<script lang="ts">
export default {
  inheritAttrs: false
}
</script>

<script setup lang="ts">
const props = defineProps({
    theme: {
        type: String,
        default: 'button'
    }
})

</script>

<template>
    <button class="zao-button" :class="{[`theme-${theme}`]: theme}">
        <slot />
    </button>
</template>