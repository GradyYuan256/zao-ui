<script setup lang="ts">
import { ref } from 'vue';
import Button from '../lib/Button.vue'
import Dialog from '../lib/Dialog.vue'

const x = ref(false)
const toggle = () => {
    x.value = !x.value
}
</script>

<template>
    <div>Dialog 示例</div>
    <h1>示例1</h1>
    <Button @click="toggle">toggle</Button>
    <Dialog v-model:visible="x"></Dialog>
</template>

<style lang="scss" scoped>
</style>
