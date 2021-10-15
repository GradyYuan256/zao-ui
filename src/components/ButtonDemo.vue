<script setup lang="ts">
import Button from '../lib/Button.vue'

const onClick = () => {
    console.log(111);
    
}
</script>

<template>
    <div>Button 示例</div>
    <h1>示例1</h1>
    <div>
        <Button>你好</Button>
        <Button theme="button">你好</Button>
        <Button theme="link">你好</Button>
        <Button theme="text">你好</Button>
    </div>
</template>

<style lang="scss" scoped>
</style>
