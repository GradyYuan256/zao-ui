<script setup lang="ts">

</script>

<template>
    <button>
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
    background: blue;
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
}
button:hover span {
    left: calc(100% - #{$h2} - 2px);
}
</style>
