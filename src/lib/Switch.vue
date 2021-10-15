<script setup lang="ts">
import { ref } from 'vue';

const props = defineProps({
    value: Boolean
})
const emit = defineEmits(['update:value'])
const toggle = () => {
    emit('update:value', !props.value)
}
</script>

<template>
    <button class="zao-switch" :class="{ 'zao-checked': value }" @click="toggle">
        <span></span>
    </button>
</template>

<style lang="scss">
@use "sass:math";

$h: 22px;
$h2: $h - 4px;
.zao-switch {
    height: $h;
    width: $h * 2;
    border: none;
    background: #bfbfbf;
    border-radius: math.div($h, 2);
    position: relative;
    > span {
        position: absolute;
        top: 2px;
        left: 2px;
        height: $h2;
        width: $h2;
        background: white;
        border-radius: math.div($h2, 2);
        transition: all 0.25s;
    }

    &.zao-checked {
        background: #1890ff;
        > span {
            left: calc(100% - #{$h2} - 2px);
        }
    }
    &:focus {
        outline: none;
    }
    &:active {
        > span {
            width: $h2 + 4px;
        }
    }
    &.zao-checked:active {
        > span {
            width: $h2 + 4px;
            margin-left: -4px;
        }
    }
}
</style>
