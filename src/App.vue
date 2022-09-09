<script lang="ts" setup>
import AppBanner from "./views/AppBanner.vue";
</script>

<template>
    <div class="app-container">
        <div class="app-banner-container">
            <AppBanner/>
        </div>
        <div class="app-viewport-container">
            <router-view/>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.app-container {
    position: relative;
    width: 100%;
    height: 100%;
    border: solid 2px $color-light;
    border-radius: 8px;
    background: rgba($color-lighter, 0.1);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    .app-banner-container {
        position: relative;
        width: 100%;
        height: $banner-height;
        flex-shrink: 0;
    }

    .app-viewport-container {
        position: relative;
        width: 100%;
        height: calc(100% - #{$banner-height});
    }
}
</style>