<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup

import { ref, provide } from 'vue'
const width = document.documentElement.clientWidth
const menuVisible = ref(width <= 500 ? false : true)
provide('menuVisible', menuVisible)
</script>

<template>
  <router-view></router-view>
</template>

<style>

</style>
