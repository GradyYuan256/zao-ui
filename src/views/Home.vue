<template>
    <div>
        <Topnav />
        <div class="banner">
            <h1>Zao UI</h1>
            <h2>一个基础的 UI 框架</h2>
            <p class="actions">
                <a href="https://github.com/jackyuan256/zao-ui" target="_blank">Github</a>
                <router-link to="/doc">开始</router-link>
            </p>
        </div>
    </div>
</template>

<script setup lang="ts">
import Topnav from '../components/Topnav.vue'
</script>

<style lang="scss" scoped>
@use "sass:math";
.banner {
  padding: 100px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: lightgreen;
  > .actions{
    padding: 8px 0;
    a {
      margin:0 8px;
      background: #fff;
      display: inline-block;
      $h: 28px;
      height: $h;
      line-height: $h;
      border-radius: math.div($h, 2);
      padding: 0 8px;
    }
  }
}
</style>