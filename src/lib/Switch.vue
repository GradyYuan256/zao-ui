<script setup lang="ts">
import { ref } from 'vue';

const props = defineProps({
  value: Boolean
})
const emit = defineEmits(['input'])
const toggle = () => {
    emit('input', !props.value)
}
</script>

<template>
    <button :class="{checked: value}" @click="toggle">
        <span></span>
    </button>
</template>

<style lang="scss" scoped>
@use "sass:math";

$h: 22px;
$h2: $h - 4px;
button {
    height: $h;
    width: $h*2;
    border: none;
    background: gray;
    border-radius: math.div($h, 2);
    position: relative;
}
span {
    position: absolute;
    top: 2px;
    left: 2px;
    height: $h2;
    width: $h2;
    background: white;
    border-radius: math.div($h2, 2);
    transition: left .25s;
}
button.checked {
    background: blue;
}
button.checked span {
    left: calc(100% - #{$h2} - 2px);
}
button:focus {
    outline: none;
}
</style>
