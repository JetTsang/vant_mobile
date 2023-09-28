<template>
    <div class="app-layout">
        <HeaderNav class="app-layout__heder"/>
        <van-row class="app-layout__body">
            <van-col span="24">
                <slot></slot>
            </van-col>
        </van-row>
    </div>
</template>

<script>
import HeaderNav from './HeaderNav.vue';
export default {
    name: "Layout",
    components: {
        HeaderNav
    }
}
</script>

<style></style>