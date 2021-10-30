<script setup lang="ts">
import { ref } from 'vue';
import Button from '../lib/Button.vue'
import Dialog from '../lib/Dialog.vue'

const x = ref(false)
const toggle = () => {
    x.value = !x.value
}
const f1 = () => {
    return false
}
const f2 = () => {

}
</script>

<template>
    <div>Dialog 示例</div>
    <h1>示例1</h1>
    <Button @click="toggle">toggle</Button>
    <Dialog v-model:visible="x" :closeOnClickOverlay="true" :ok="f1" :cancel="f2">
        <template v-slot:content>
            <strong>hi</strong>
            <div>hi2</div>
        </template>
        <template v-slot:title>
            <strong>
                加粗的标题
            </strong>
        </template>
    </Dialog>
</template>

<style lang="scss" scoped>
</style>
