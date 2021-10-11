<script setup lang="ts">
import { ref } from 'vue';
import Switch from '../lib/Switch.vue'

const y = ref(false)
</script>

<template>
    <div>
        <Switch :value="y" @input="y = $event" />
    </div>
</template>

<style lang="scss" scoped>

</style>
