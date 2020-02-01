<template>
    <div class="GreyBackground">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "GreyBackground"
    }
</script>

<style scoped>
.GreyBackground {
    background-color: #F5F7FA;
    height: 20em;
    width: 100%;
    left: 0;
    z-index: -1;
}
</style>