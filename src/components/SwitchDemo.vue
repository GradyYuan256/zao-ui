<script setup lang="ts">
import { ref } from 'vue';
import Switch from '../lib/Switch.vue'

const bool = ref(false)
</script>

<template>
    <div>
        <Switch v-model:value="bool" />
    </div>
</template>

<style lang="scss" scoped>
</style>
