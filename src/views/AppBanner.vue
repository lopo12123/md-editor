<script lang="ts" setup>

</script>

<template>
    <div class="app-banner">
        <div class="left-part">
            ... ...
        </div>
        <div class="right-part">
            _ 口 x
        </div>
    </div>
</template>

<style lang="scss" scoped>
.app-banner {
    position: relative;
    width: 100%;
    height: 100%;
    padding: 0 $font-normal;
    border-bottom: solid 1px $color-normal;
    display: flex;
    align-items: center;
    justify-content: space-between;
    -webkit-app-region: drag;

    .left-part {
        position: relative;
    }

    .right-part {
        position: relative;
    }
}
</style>