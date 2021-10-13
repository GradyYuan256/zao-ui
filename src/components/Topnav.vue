<script setup lang="ts">
import { inject, Ref } from 'vue'

const menuVisible = inject<Ref<boolean>>('menuVisible')

const toggleMenu = () => {
    if(menuVisible) {
        menuVisible.value = !menuVisible.value
    }
}

</script>

<template>
    <div class="topnav">
        <div class="logo">LOGO</div>
        <ul class="menu">
            <li>菜单1</li>
            <li>菜单2</li>
        </ul>
        <span class="toggleAside" @click="toggleMenu"></span>
    </div>
</template>

<style lang="scss" scoped>
    .topnav {
        background: pink;
        display: flex;
        padding: 16px;
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        z-index: 10;
        justify-content: center;
        > .logo {
            max-width: 6em;
            margin-right: auto;
        }
        > .menu {
            display: flex;
            white-space: nowrap;
            flex-wrap: nowrap;
            > li {
                margin: 0 1em;
            }
        }
        > .toggleAside {
            display: inline-block;
            width: 24px;
            height: 24px;
            background: red;
            position: absolute;
            left: 16px;
            top: 50%;
            transform: translateY(-50%);
            display: none;
        }
        @media (max-width:500px) {
            > .menu {
                display: none;
            }
            > .logo {
                margin: 0 auto;
            }
            > .toggleAside {
                display: inline-block;
            }
        }
    }
</style>