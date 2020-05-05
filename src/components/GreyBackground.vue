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
    padding: 2em 0;
    background-color: #F5F7FA;
    width: 100%;
    left: 0;
    z-index: -1;
}
</style>